import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-border/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Blac.
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Button size="sm" asChild>
          <Link href="#contact">Hire me</Link>
        </Button>
      </nav>
    </header>
  );
}

export function MobileNavTrigger() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden"
      aria-label="Menu"
    >
      <Menu />
    </Button>
  );
}
