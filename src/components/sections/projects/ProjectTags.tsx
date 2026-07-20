interface ProjectTagsProps {
  technologies: string[];
}

export function ProjectTags({
  technologies,
}: ProjectTagsProps) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="
            rounded-full
            border
            border-border
            bg-muted
            px-3
            py-1
            text-xs
            font-medium
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}