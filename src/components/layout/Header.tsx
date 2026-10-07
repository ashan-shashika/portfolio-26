import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { links } from "@/content/site";
import { ThemeToggle } from "@/features/theme";
import { useActiveSection } from "@/hooks/useActiveSection";

type NavLink = { label: string; href: string; external?: boolean };

// Section links follow the order of the page
const SECTION_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const NAV_LINKS: NavLink[] = [
  ...SECTION_LINKS,
  { label: "GitHub", href: links.github, external: true },
];

const SECTION_IDS = SECTION_LINKS.map((link) => link.href.slice(1));

function NavItems({
  active,
  onNavigate,
}: {
  active: string | null;
  onNavigate?: () => void;
}) {
  return NAV_LINKS.map(({ label, href, external }) => {
    const isActive = !external && href === `#${active}`;
    return (
      <li key={label}>
        <a
          href={href}
          onClick={onNavigate}
          aria-current={isActive ? "location" : undefined}
          className={`relative inline-flex min-h-11 w-full items-center gap-1 rounded-md px-3 font-medium transition-colors lg:w-auto ${
            isActive ? "text-fg" : "text-muted hover:text-fg"
          }`}
        >
          {label}
          {external && (
            <>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-3.5"
              >
                <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
              </svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </>
          )}
          {isActive && (
            <span
              aria-hidden="true"
              className="absolute inset-x-3 bottom-1.5 hidden h-0.5 rounded-full bg-accent lg:block"
            />
          )}
        </a>
      </li>
    );
  });
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(SECTION_IDS);

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  return (
    <header
      className="sticky top-0 z-40 border-b border-border/50 bg-bg/90 backdrop-blur-md"
      onKeyDown={onKeyDown}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a
          href={import.meta.env.BASE_URL}
          className="inline-flex min-h-11 items-center gap-2 rounded-md text-lg font-semibold text-fg"
        >
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-lg bg-accent font-mono text-sm text-accent-fg"
          >
            A
          </span>
          Ashan
        </a>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <NavItems active={active} />
            </ul>
          </nav>

          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-fg hover:border-fg lg:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {isOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-b border-border bg-bg px-3 py-2 shadow-lg lg:hidden"
      >
        <ul className="flex flex-col">
          <NavItems active={active} onNavigate={() => setIsOpen(false)} />
        </ul>
      </nav>
    </header>
  );
}
