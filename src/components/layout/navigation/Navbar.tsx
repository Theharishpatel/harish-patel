"use client";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { NavLogo } from "./NavLogo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavLogo />

          <DesktopNav />

          <div className="hidden items-center gap-2 lg:flex">
    <ThemeToggle />

    <Button>
        Resume
    </Button>
</div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}