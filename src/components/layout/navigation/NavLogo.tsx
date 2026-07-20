import Link from "next/link";

export function NavLogo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2"
      aria-label="Harish Patel Home"
    >
      <span className="text-xl font-bold tracking-tight">
        Harish Patel
      </span>
    </Link>
  );
}