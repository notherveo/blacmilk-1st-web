import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 Blac. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-foreground">
            Twitter
          </Link>
          <Link href="#" className="hover:text-foreground">
            GitHub
          </Link>
          <Link href="#" className="hover:text-foreground">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
