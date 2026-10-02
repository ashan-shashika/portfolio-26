import { SectionHeading } from "@/components/ui";
import { useReveal } from "@/hooks/useReveal";
import { StackGroupIcon } from "./icons";
import { techStack } from "./stack.data";

const CoreDot = () => (
  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
);

export function TechStack() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="stack"
      aria-labelledby="stack-title"
      className="py-16 sm:py-20 lg:py-28"
    >
      <SectionHeading
        id="stack-title"
        label="Tech stack"
        title="The tools I use to take a product from interface to infrastructure."
      />

      <p
        data-reveal
        className="-mt-6 mb-8 flex items-center gap-2 text-sm text-muted md:-mt-12"
      >
        <CoreDot />
        Core skills
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group) => (
          <div key={group.id} data-reveal>
            <article
              aria-labelledby={`stack-${group.id}-title`}
              className="group flex h-full flex-col rounded-2xl border border-border/50 bg-surface/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-border hover:bg-surface hover:shadow-lg sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-accent">
                  <StackGroupIcon icon={group.icon} />
                </span>
                <h3
                  id={`stack-${group.id}-title`}
                  className="text-lg font-semibold tracking-tight text-fg sm:text-xl"
                >
                  {group.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted">{group.description}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-xs transition-colors ${
                      item.core
                        ? "border-border bg-bg text-fg"
                        : "border-border/60 bg-bg text-muted group-hover:text-fg"
                    }`}
                  >
                    {item.core && <CoreDot />}
                    {item.name}
                    {item.core && <span className="sr-only"> (core skill)</span>}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
