import type { GalleryImage } from "./types";

interface GalleryThumbnailsProps {
  images: GalleryImage[];
  index: number;
  onSelect: (index: number) => void;
  className?: string;
}

export function GalleryThumbnails({
  images,
  index,
  onSelect,
  className = "",
}: GalleryThumbnailsProps) {
  const count = images.length;

  return (
    <div
      className={`flex flex-wrap gap-2.5 ${className}`}
      role="group"
      aria-label="Choose screenshot"
    >
      {images.map((img, i) => {
        const isActive = i === index;
        return (
          <button
            key={img.src}
            type="button"
            onClick={() => onSelect(i)}
            className={`aspect-16/10 w-16 cursor-pointer overflow-hidden rounded-md border-2 bg-surface sm:w-24 ${
              isActive
                ? "border-accent"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
            aria-label={`Show image ${i + 1} of ${count}${img.caption ? `: ${img.caption}` : ""}`}
            aria-current={isActive}
          >
            <img
              src={img.src}
              alt=""
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </button>
        );
      })}
    </div>
  );
}
