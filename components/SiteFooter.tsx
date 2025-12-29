// components/SiteFooter.tsx
export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-foreground/60">
        <div className="flex items-center gap-2 text-foreground/80">
          <img
            src="/brand/hemicellan-logo-korean.svg"
            alt="헤미셀란"
            className="h-5 w-auto opacity-80"
          />
          <span className="font-medium text-foreground">Hemicellan</span>
        </div>

        <div className="mt-3">
          © {new Date().getFullYear()} Hemicellan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
