import { useRef, useState, type PointerEvent } from "react";

/**
 * Horizontal swipe / drag. Returns the live drag distance (for a finger-follow
 * effect) and pointer handlers to spread onto the element.
 */
export function useSwipe(
  onPrev: () => void,
  onNext: () => void,
  threshold = 50,
) {
  const [startX, setStartX] = useState<number | null>(null);
  const [dragX, setDragX] = useState(0);
  // True if the last gesture was a drag, so the click that follows can be ignored.
  const didDrag = useRef(false);

  const end = () => {
    if (startX === null) return;
    didDrag.current = Math.abs(dragX) > 5;
    if (dragX > threshold) onPrev();
    else if (dragX < -threshold) onNext();
    setStartX(null);
    setDragX(0);
  };

  return {
    dragX,
    dragging: startX !== null && dragX !== 0,
    didDrag,
    handlers: {
      onPointerDown: (e: PointerEvent) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        setStartX(e.clientX);
        didDrag.current = false;
      },
      onPointerMove: (e: PointerEvent) => {
        if (startX !== null) setDragX(e.clientX - startX);
      },
      onPointerUp: end,
      onPointerCancel: end,
      onPointerLeave: end,
    },
  };
}
