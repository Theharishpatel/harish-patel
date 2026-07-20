import Link from "next/link";
import { Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ContactActionsProps {
  email: string;
  resume: string;
}

export function ContactActions({
  email,
  resume,
}: ContactActionsProps) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <Button  size="lg">
        <Link href={`mailto:${email}`} className="flex items-center gap-2">
          <Mail className="size-4" />
          Let's Talk
        </Link>
      </Button>

      <Button  variant="outline" size="lg">
        <Link
          href={resume}
          target="_blank"
          className="flex items-center gap-2"
        >
          <Download className="size-4" />
          Resume
        </Link>
      </Button>
    </div>
  );
}