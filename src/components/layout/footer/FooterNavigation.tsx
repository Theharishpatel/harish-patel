import Link from "next/link";

import { footer } from "@/data/footer";

export function FooterNavigation() {
  return (
    <nav>
      <ul className="flex flex-wrap justify-center gap-6">
        {footer.navigation.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}