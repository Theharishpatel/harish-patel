"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigation } from "@/data/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </Button>
          }
        />

        <SheetContent side="right" className="w-80">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-2 px-4 pb-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <Button className="mt-6">
              Let's Talk
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}