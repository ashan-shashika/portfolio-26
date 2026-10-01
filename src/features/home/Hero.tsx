export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="py-24">
      <h1 id="hero-title" className="text-5xl font-bold tracking-tight">
        Portfolio 26
      </h1>
      <p className="mt-4 max-w-prose text-lg text-muted">
        React + TypeScript + Vite + Tailwind CSS, with accessible light and
        dark themes.
      </p>
      <a
        href="#main"
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-accent px-5 font-medium text-accent-fg hover:opacity-90"
      >
        View my work
      </a>
    </section>
  )
}
