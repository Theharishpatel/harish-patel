import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <div className="mt-16 flex justify-center">
      <button
        type="button"
        aria-label="Scroll Down"
        className="animate-bounce text-muted-foreground transition-colors hover:text-primary"
      >
        <ChevronDown className="size-5" />
      </button>
    </div>
  );
}