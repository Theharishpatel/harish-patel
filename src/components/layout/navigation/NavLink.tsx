import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

export function NavLink({
  href,
  label,
  className,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "transition-colors duration-200 hover:text-primary",
        className
      )}
    >
      {label}
    </Link>
  );
}