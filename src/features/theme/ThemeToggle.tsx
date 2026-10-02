import { useTheme } from './useTheme'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  className: 'size-4',
} as const

const Sun = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)

const Moon = () => (
  <svg {...iconProps}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark theme"
      onClick={toggleTheme}
      // 44px tall, comfortably above the WCAG 2.5.8 minimum of 24px
      className="relative inline-flex h-11 w-18 shrink-0 cursor-pointer items-center rounded-full border border-border bg-surface p-1 transition-colors hover:border-fg"
    >
      {/* Track icons: the inactive option stays visible as a hint */}
      <span
        aria-hidden="true"
        className="flex w-full items-center justify-between px-1.5 text-muted"
      >
        <Sun />
        <Moon />
      </span>
      {/* Sliding knob showing the active theme */}
      <span
        aria-hidden="true"
        className={`absolute top-1 left-1 flex size-8.5 items-center justify-center rounded-full bg-bg text-accent shadow-md ring-1 ring-border/50 transition-transform duration-300 ease-out ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? <Moon /> : <Sun />}
      </span>
    </button>
  )
}
