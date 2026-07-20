import Image from "next/image";

import { about } from "@/data/about";

export function AboutImage() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />

      {/* Image Card */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-border/60
          bg-card
          shadow-lg
        "
      >
        <Image
          src={about.image}
          alt="Harish Patel"
          width={500}
          height={600}
          priority
          className="
            h-auto
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>
    </div>
  );
}