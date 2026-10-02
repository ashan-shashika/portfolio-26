import { useState } from "react";
import { galleryButton } from "./gallery-styles";
import { GalleryThumbnails } from "./GalleryThumbnails";
import { ChevronLeft, ChevronRight, Expand } from "@/components/icons";
import { ImageViewer } from "./ImageViewer";
import type { GalleryImage } from "./types";
import { useSwipe } from "@/hooks/useSwipe";

interface ImageGalleryProps {
  images: GalleryImage[];
  title: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const count = images.length;
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);
  const swipe = useSwipe(prev, next);
  const current = images[index];

  return (
    <div>
      <div
        className="relative aspect-16/10 touch-pan-y overflow-hidden rounded-xl border border-border bg-surface"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
        {...swipe.handlers}
      >
        <div
          className={`flex h-full ${
            swipe.dragging
              ? "transition-none"
              : "transition-transform duration-500 ease-out"
          }`}
          style={{
            transform: `translateX(calc(${-index * 100}% + ${swipe.dragX}px))`,
          }}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className="size-full shrink-0 cursor-zoom-in"
              onClick={() => !swipe.didDrag.current && setViewerOpen(true)}
              inert={i !== index}
              aria-label={`Open ${img.caption ?? `image ${i + 1}`} full screen`}
              aria-roledescription="slide"
            >
              <img
                src={img.src}
                alt={img.alt}
                draggable={false}
                loading="lazy"
                decoding="async"
                className="size-full object-contain select-none"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setViewerOpen(true)}
          className={`${galleryButton} absolute top-3 right-3`}
          aria-label="View full screen"
        >
          <Expand />
        </button>
        {count > 1 && (
          <div className="absolute right-3 bottom-3 flex gap-2">
            <button
              type="button"
              onClick={prev}
              className={galleryButton}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={next}
              className={galleryButton}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </div>
        )}
        <p
          className="absolute bottom-3 left-3 rounded-full border border-border bg-bg px-3 py-1 text-sm text-fg"
          aria-live="polite"
        >
          <span className="font-mono text-muted tabular-nums">
            {pad(index + 1)} / {pad(count)}
          </span>
          {current?.caption && <span className="ml-2">{current.caption}</span>}
        </p>
      </div>

      {count > 1 && (
        <GalleryThumbnails
          images={images}
          index={index}
          onSelect={setIndex}
          className="mt-4"
        />
      )}

      <ImageViewer
        open={viewerOpen}
        images={images}
        index={index}
        title={title}
        onChange={setIndex}
        onClose={() => setViewerOpen(false)}
      />
    </div>
  );
}
