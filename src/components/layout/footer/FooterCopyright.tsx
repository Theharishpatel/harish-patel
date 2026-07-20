export function FooterCopyright() {
  return (
    <div className="border-t border-border pt-8 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Harish Patel.
        Built with Next.js, TypeScript & Tailwind CSS.
      </p>
    </div>
  );
}