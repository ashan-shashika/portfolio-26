import { useEffect, useRef } from "react";
import { galleryButton } from "./gallery-styles";
import { GalleryThumbnails } from "./GalleryThumbnails";
import { ChevronLeft, ChevronRight, Close } from "@/components/icons";
import type { GalleryImage } from "./types";
import { useSwipe } from "@/hooks/useSwipe";

interface ImageViewerProps {
  open: boolean;
  images: GalleryImage[];
  index: number;
  title: string;
  onChange: (index: number) => void;
  onClose: () => void;
}

/**
 * Full-screen viewer built on the native <dialog>, which gives focus trapping
 * and Escape to close for free. Page scroll is locked in styles/index.css.
 */
export function ImageViewer({
  open,
  images,
  index,
  title,
  onChange,
  onClose,
}: ImageViewerProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const count = images.length;
  const prev = () => onChange((index - 1 + count) % count);
  const next = () => onChange((index + 1) % count);
  const swipe = useSwipe(prev, next);
  const image = images[index];

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    else if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={dialog}
      className="h-dvh max-h-none w-screen max-w-none bg-bg text-fg"
      aria-label={`${title} screenshots`}
      onClose={onClose}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      {/* Rendered only while open so the full-size images are not fetched up front */}
      {open && (
        <div className="flex size-full flex-col">
          <header className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <p className="min-w-0 truncate text-sm text-muted">
              <span className="font-medium text-fg">{title}</span>
              {image?.caption && <span> · {image.caption}</span>}
            </p>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-muted tabular-nums">
                {index + 1} / {count}
              </span>
              <button
                type="button"
                onClick={onClose}
                className={galleryButton}
                aria-label="Close viewer"
              >
                <Close />
              </button>
            </div>
          </header>

          <div
            className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center px-4 pb-4 sm:px-20"
            {...swipe.handlers}
          >
            {image && (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                draggable={false}
                className="max-h-full max-w-full rounded-xl border border-border object-contain select-none"
                style={{ transform: `translateX(${swipe.dragX}px)` }}
              />
            )}
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className={`${galleryButton} absolute top-1/2 left-3 -translate-y-1/2 sm:left-6`}
                  aria-label="Previous image"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className={`${galleryButton} absolute top-1/2 right-3 -translate-y-1/2 sm:right-6`}
                  aria-label="Next image"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>

          {count > 1 && (
            <GalleryThumbnails
              images={images}
              index={index}
              onSelect={onChange}
              className="justify-center px-4 pb-6"
            />
          )}
        </div>
      )}
    </dialog>
  );
}
