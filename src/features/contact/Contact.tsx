import { ArrowUpRight } from "@/components/icons";
import { links, site } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";
import { CopyEmailButton } from "./CopyEmailButton";

const secondaryButton =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-bg px-5 font-medium text-fg transition hover:-translate-y-0.5 hover:border-fg";

export function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="contact"
      aria-labelledby="contact-title"
      className="py-16 sm:py-20 lg:py-28"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-surface/50 px-6 py-14 text-center sm:px-12 sm:py-20 lg:py-24">
        {/* Soft accent glow behind the content */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_65%)]"
        />

        <div className="relative mx-auto max-w-2xl">
          <p
            data-reveal
            className="mb-6 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.3em] text-muted uppercase"
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Contact
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
          </p>

          <h2
            id="contact-title"
            data-reveal
            className="text-3xl font-bold tracking-tight text-balance text-fg sm:text-5xl lg:text-6xl"
          >
            {site.contact.headline}
          </h2>
          <p data-reveal className="mt-6 text-lg text-muted sm:text-xl">
            {site.contact.text}
          </p>

          <p
            data-reveal
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-sm font-medium text-fg"
          >
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Open to frontend & full-stack roles · {site.location}
          </p>

          <div
            data-reveal
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={`mailto:${links.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 font-medium text-accent-fg transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Email me
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`${secondaryButton} justify-center`}
            >
              LinkedIn <ArrowUpRight />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className={`${secondaryButton} justify-center`}
            >
              GitHub <ArrowUpRight />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <div
            data-reveal
            className="mt-10 flex flex-col items-center justify-center gap-1 border-t border-border/50 pt-8 sm:flex-row sm:gap-3"
          >
            <p className="font-mono text-base break-all text-fg sm:text-lg">
              {links.email}
            </p>
            <CopyEmailButton email={links.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
