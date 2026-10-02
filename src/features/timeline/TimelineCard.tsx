import { useState } from "react";
import type { TimelineEntry } from "./types";

const tagClass =
  "rounded-md border border-border/60 bg-bg px-2 py-0.5 font-mono text-xs text-muted transition-colors group-hover:border-border group-hover:text-fg";

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className={tagClass}>
          {item}
        </li>
      ))}
    </ul>
  );
}

interface TimelineCardProps {
  entry: TimelineEntry;
  typeLabel: string;
}

export function TimelineCard({ entry, typeLabel }: TimelineCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsId = `timeline-${entry.id}-details`;
  const hasDetails = Boolean(
    entry.achievements?.length || entry.details?.length,
  );
  const isExternal = entry.link?.startsWith("http");

  return (
    <article
      aria-labelledby={`timeline-${entry.id}-title`}
      className="group rounded-2xl border border-border/50 bg-surface/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-border hover:bg-surface hover:shadow-lg sm:p-6"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className="font-mono text-sm font-semibold text-accent">
          {entry.year}
        </p>
        <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
          {typeLabel}
        </p>
        {entry.status && (
          <p className="ml-auto inline-flex items-center gap-2 rounded-full border border-border bg-bg px-2.5 py-0.5 text-xs font-medium text-fg">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {entry.status}
          </p>
        )}
      </div>

      <h3
        id={`timeline-${entry.id}-title`}
        className="mt-3 text-lg font-semibold tracking-tight text-fg sm:text-xl"
      >
        {entry.title}
      </h3>
      <p className="text-sm text-muted sm:text-base">{entry.organization}</p>

      {entry.highlight && (
        <p className="mt-3 inline-flex rounded-full border border-accent px-2.5 py-0.5 text-xs font-medium text-accent">
          {entry.highlight}
        </p>
      )}

      <p className="mt-3 text-sm text-pretty text-fg">{entry.description}</p>

      {entry.technologies && entry.technologies.length > 0 && (
        <div className="mt-4">
          <Tags items={entry.technologies} />
        </div>
      )}

      {hasDetails && (
        <>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls={detailsId}
            className="mt-2 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-md text-sm font-medium text-accent"
          >
            {isOpen ? "Hide details" : "View details"}
            <span aria-hidden="true" className="font-mono">
              {isOpen ? "−" : "+"}
            </span>
            <span className="sr-only"> for {entry.title}</span>
          </button>

          <div
            id={detailsId}
            inert={!isOpen}
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="grid gap-4 overflow-hidden">
              {entry.achievements && entry.achievements.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-fg marker:text-muted">
                  {entry.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
              {entry.details?.map((group) => (
                <div key={group.label} className="mt-2">
                  <p className="mb-2 text-xs font-medium tracking-[0.2em] text-muted uppercase">
                    {group.label}
                  </p>
                  <Tags items={group.items} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {entry.link && (
        <a
          href={entry.link}
          className="mt-2 inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-medium text-accent underline underline-offset-4 hover:decoration-2"
          {...(isExternal && { target: "_blank", rel: "noreferrer" })}
        >
          {entry.linkLabel ?? "View project"}
          <span aria-hidden="true">→</span>
          <span className="sr-only">
            : {entry.title}
            {isExternal && " (opens in a new tab)"}
          </span>
        </a>
      )}
    </article>
  );
}
