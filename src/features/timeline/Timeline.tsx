import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui";
import { useReveal } from "@/hooks/useReveal";
import { Briefcase, Code, GraduationCap, Terminal } from "./icons";
import { careerTimeline } from "./timeline.data";
import { TimelineCard } from "./TimelineCard";
import type { TimelineType } from "./types";

const TYPES: Record<TimelineType, { label: string; icon: ReactNode }> = {
  education: { label: "Education", icon: <GraduationCap /> },
  career: { label: "Career", icon: <Briefcase /> },
  project: { label: "Project", icon: <Code /> },
  current: { label: "Now", icon: <Terminal /> },
};

export function Timeline() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="timeline"
      aria-labelledby="timeline-title"
      className="py-16 sm:py-20 lg:py-28"
    >
      <SectionHeading
        id="timeline-title"
        label="Timeline"
        title="The path so far."
        intro="A journey from computer science to full-stack engineering and data science."
      />

      <div className="relative">
        <span
          aria-hidden="true"
          data-reveal="line"
          className="absolute top-0 bottom-0 left-4 w-px bg-border/60 md:left-1/2"
        />

        {/* Single column on mobile; alternating sides of a centre line from md up */}
        <ol className="relative grid gap-8 md:gap-0">
          {careerTimeline.map((entry, index) => {
            const { label, icon } = TYPES[entry.type];
            const isCurrent = entry.type === "current";

            return (
              <li
                key={entry.id}
                className="relative pl-12 md:grid md:grid-cols-2 md:gap-x-16 md:pl-0 md:not-first:-mt-16 lg:gap-x-24"
              >
                <span
                  aria-hidden="true"
                  data-reveal="node"
                  className={`absolute top-5 left-4 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border bg-bg md:left-1/2 ${
                    isCurrent
                      ? "border-accent text-accent ring-4 ring-accent/20"
                      : "border-border text-muted"
                  }`}
                >
                  {icon}
                </span>

                <div
                  data-reveal="card"
                  className={index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}
                >
                  <TimelineCard entry={entry} typeLabel={label} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
