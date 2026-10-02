import type { ReactNode } from "react";
import type { StackIcon } from "./types";

const Svg = ({ children }: { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="size-5"
  >
    {children}
  </svg>
);

const icons: Record<StackIcon, ReactNode> = {
  frontend: (
    <Svg>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </Svg>
  ),
  backend: (
    <Svg>
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <rect x="2" y="13" width="20" height="8" rx="2" />
      <path d="M6 7h.01M6 17h.01" />
    </Svg>
  ),
  database: (
    <Svg>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
    </Svg>
  ),
  cloud: (
    <Svg>
      <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9z" />
    </Svg>
  ),
  tooling: (
    <Svg>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <path d="M6 8.5v7M18 10.5c0 4-6 3-11 5.5" />
    </Svg>
  ),
  data: (
    <Svg>
      <path d="M3 3v18h18M7 15l4-4 3 3 6-6" />
    </Svg>
  ),
};

export function StackGroupIcon({ icon }: { icon: StackIcon }) {
  return icons[icon];
}
