"use client";

import { navigation } from "@/data/navigation";
import { NavLink } from "./NavLink";

export function DesktopNav() {
  return (
    <nav
      className="hidden items-center gap-8 lg:flex"
      aria-label="Primary Navigation"
    >
      {navigation.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          className="text-sm font-medium text-muted-foreground"
        />
      ))}
    </nav>
  );
}