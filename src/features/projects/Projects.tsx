import { useState } from "react";
import { SectionHeading } from "@/components/ui";
import { useReveal } from "@/hooks/useReveal";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails";
import { projects } from "./projects.data";

export function Projects() {
  const ref = useReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="work"
      aria-labelledby="projects-title"
      className="py-16 sm:py-20 lg:py-28"
    >
      <SectionHeading
        id="projects-title"
        label="Selected work"
        title="Products built end to end."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div key={project.name} data-reveal>
            <ProjectCard
              project={project}
              index={index}
              onOpen={() => setOpenIndex(index)}
            />
          </div>
        ))}
      </div>

      <ProjectDetails
        project={openIndex === null ? null : projects[openIndex]}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
