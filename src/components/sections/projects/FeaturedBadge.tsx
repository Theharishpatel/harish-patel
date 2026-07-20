import { Star } from "lucide-react";

export function FeaturedBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
      <Star className="size-3 fill-current" />
      Featured
    </div>
  );
}