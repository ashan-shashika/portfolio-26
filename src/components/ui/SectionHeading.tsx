interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  intro?: string;
}

/** Small uppercase label, large title and an optional intro line. Shared by every section. */
export function SectionHeading({
  id,
  label,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <header className="mb-12 max-w-3xl md:mb-20">
      <p
        data-reveal
        className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-muted uppercase"
      >
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {label}
      </p>
      <h2
        id={id}
        data-reveal
        className="text-3xl font-bold tracking-tight text-balance text-fg sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {intro && (
        <p
          data-reveal
          className="mt-6 max-w-xl text-base text-pretty text-muted sm:text-lg"
        >
          {intro}
        </p>
      )}
    </header>
  );
}
