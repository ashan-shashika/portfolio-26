import { useEffect, useRef } from "react";
import { ImageGallery } from "@/components/gallery";
import { ArrowUpRight, Close } from "@/components/icons";
import type { Project } from "./types";

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

const linkClass =
  "inline-flex min-h-11 items-center gap-1.5 rounded-md font-medium text-accent underline underline-offset-4 hover:decoration-2";

const titleId = "project-details-title";

/**
 * Project details in a modal built on the native <dialog>: focus is trapped
 * inside, Escape closes it and focus returns to the card that opened it.
 */
export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const isOpen = project !== null;

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (isOpen && !d.open) d.showModal();
    else if (!isOpen && d.open) d.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialog}
      aria-labelledby={titleId}
      // React propagates `close` from the nested image viewer, so only react to our own.
      // A click on the dialog element itself is a click on the backdrop.
      onClose={(e) => e.target === dialog.current && onClose()}
      onClick={(e) => e.target === dialog.current && onClose()}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto overscroll-contain rounded-2xl border border-border bg-bg text-fg backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      {project && <Content project={project} onClose={onClose} />}
    </dialog>
  );
}

function Content({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const details: [string, string][] = [
    ["Problem", project.problem],
    ["Solution", project.solution],
    ["Key contribution", project.contribution],
  ];

  return (
    <div className="animate-[panel-in_0.3s_ease-out] p-5 sm:p-8">
      <div className="sticky top-0 z-10 -mx-5 -mt-5 mb-6 flex items-start justify-between gap-4 border-b border-border/50 bg-bg px-5 py-4 sm:-mx-8 sm:-mt-8 sm:px-8">
        <h2
          id={titleId}
          className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
        >
          {project.name}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={`Close ${project.name} details`}
          className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-bg text-fg hover:border-fg"
        >
          <Close />
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <ImageGallery
            key={project.name}
            images={project.images}
            title={project.name}
          />
        </div>

        <div className="lg:col-span-5">
          <p className="text-base text-pretty text-fg sm:text-lg">
            {project.summary}
          </p>

          <dl className="mt-6 grid gap-5">
            {details.map(([label, text]) => (
              <div
                key={label}
                className="grid gap-1.5 border-t border-border pt-4"
              >
                <dt className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
                  {label}
                </dt>
                <dd className="text-muted">{text}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border/60 bg-bg px-2 py-0.5 font-mono text-xs text-fg"
              >
                {tech}
              </li>
            ))}
          </ul>

          {(project.live || project.repo) && (
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                  aria-label={`Live demo of ${project.name} (opens in new tab)`}
                >
                  Live demo <ArrowUpRight />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                  aria-label={`Source code for ${project.name} (opens in new tab)`}
                >
                  Source code <ArrowUpRight />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
