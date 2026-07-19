import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeroButtonsProps {
  primary: {
    text: string;
    href: string;
  };

  secondary: {
    text: string;
    href: string;
  };
}

export function HeroButtons({
  primary,
  secondary,
}: HeroButtonsProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link href={primary.href}>
      <Button  size="lg">
          {primary.text}
          <ArrowRight className="size-4" />
      </Button>
        </Link>

        <Link href={secondary.href}>
      <Button variant="outline" size="lg">
          <Download className="size-4" />
          {secondary.text}
      </Button>
        </Link>
    </div>
  );
}