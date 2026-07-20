import Link from "next/link";
import {FaGithub as Github, FaExternalLinkAlt as ExternalLink} from "react-icons/fa";

import { Button } from "@/components/ui/button";

interface ProjectLinksProps {
  github: string;
  live: string;
}

export function ProjectLinks({
  github,
  live,
}: ProjectLinksProps) {
  return (
    <div className="mt-6 flex gap-3">
      {github && (
        <Link href={github} target="_blank">
          <Button variant="outline">
            <Github className="size-4" />
            GitHub
          </Button>
        </Link>
      )}

      {live && (
        <Link href={live} target="_blank">
          <Button>
            Live Demo
            <ExternalLink className="size-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}