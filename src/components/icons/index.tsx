const base = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "size-4",
} as const;

export const ChevronLeft = () => (
  <svg {...base}>
    <path d="M10 3 5 8l5 5" />
  </svg>
);
export const ChevronRight = () => (
  <svg {...base}>
    <path d="m6 3 5 5-5 5" />
  </svg>
);
export const Expand = () => (
  <svg {...base}>
    <path d="M9.5 2.5h4v4M6.5 13.5h-4v-4M13.5 2.5 9 7M2.5 13.5 7 9" />
  </svg>
);
export const Close = () => (
  <svg {...base}>
    <path d="m3.5 3.5 9 9M12.5 3.5l-9 9" />
  </svg>
);
export const ArrowUpRight = () => (
  <svg {...base}>
    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
  </svg>
);
