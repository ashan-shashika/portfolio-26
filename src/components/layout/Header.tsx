import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { ThemeToggle } from '@/features/theme'

type NavLink = { label: string; href: string; external?: boolean }

const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'GitHub', href: 'https://github.com/', external: true },
]

const linkClass =
  'inline-flex min-h-11 items-center rounded-md px-3 font-medium text-muted hover:text-fg'

function NavItems({ onNavigate }: { onNavigate?: () => void }) {
  return NAV_LINKS.map(({ label, href, external }) => (
    <li key={label}>
      <a
        href={href}
        onClick={onNavigate}
        className={`${linkClass} w-full md:w-auto`}
        {...(external && { target: '_blank', rel: 'noreferrer' })}
      >
        {label}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    </li>
  ))
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="relative border-b border-border" onKeyDown={onKeyDown}>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="/"
          className="inline-flex min-h-11 items-center rounded-md text-lg font-semibold text-fg"
        >
          ashan
        </a>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              <NavItems />
            </ul>
          </nav>

          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-fg hover:border-fg md:hidden"
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
        className="absolute inset-x-0 top-full z-40 border-b border-border bg-bg px-3 py-2 md:hidden"
      >
        <ul className="flex flex-col">
          <NavItems onNavigate={() => setIsOpen(false)} />
        </ul>
      </nav>
    </header>
  )
}
