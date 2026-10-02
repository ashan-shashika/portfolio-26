const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "size-4",
} as const;

export const GraduationCap = () => (
  <svg {...base}>
    <path d="M22 10 12 5 2 10l10 5 10-5zM22 10v6M6 12v4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V12" />
  </svg>
);
export const Briefcase = () => (
  <svg {...base}>
    <rect x="2" y="7" width="20" height="13" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" />
  </svg>
);
export const Code = () => (
  <svg {...base}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
export const Terminal = () => (
  <svg {...base}>
    <path d="m4 17 6-6-6-6M12 19h8" />
  </svg>
);
