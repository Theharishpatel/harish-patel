import Image from "next/image";

import { Project } from "@/types/project";

import { FeaturedBadge } from "./FeaturedBadge";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectTags } from "./ProjectTags";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="
        overflow-hidden
        rounded-3xl
        border
        border-border/60
        bg-card
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="space-y-5 p-6">
        {project.featured && <FeaturedBadge />}

        <div>
          <h3 className="text-2xl font-bold">
            {project.title}
          </h3>

          <p className="mt-3 leading-7 text-muted-foreground">
            {project.description}
          </p>
        </div>

        <ProjectTags
          technologies={project.technologies}
        />

        <ProjectLinks
          github={project.github}
          live={project.live}
        />
      </div>
    </article>
  );
}