import type { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

const MAX_TAGS = 4;
const pad = (n: number) => String(n).padStart(2, "0");

export function ProjectCard({
  project,
  index,
  onOpen,
}: ProjectCardProps) {
  const cover = project.images[0];
  const extraTags = project.tech.length - MAX_TAGS;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-surface/50 transition duration-300 hover:border-border hover:bg-surface hover:shadow-lg"
    >
      {cover && (
        <div className="aspect-16/10 overflow-hidden border-b border-border/50 bg-surface">
          <img
            src={cover.src}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs tracking-[0.2em] text-muted">
          {pad(index + 1)}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-fg sm:text-xl">
          {/* The ::after overlay makes the whole card clickable */}
          <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            className="cursor-pointer rounded-md text-left after:absolute after:inset-0 after:rounded-2xl"
          >
            {project.name}
          </button>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, MAX_TAGS).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border/60 bg-bg px-2 py-0.5 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
          {extraTags > 0 && (
            <li className="px-1 py-0.5 font-mono text-xs text-muted">
              +{extraTags} more
            </li>
          )}
        </ul>

        <p
          aria-hidden="true"
          className="mt-auto flex items-center gap-2 pt-5 text-sm font-medium text-accent"
        >
          View details
          <span>→</span>
        </p>
      </div>
    </article>
  );
}
