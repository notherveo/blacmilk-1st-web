import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 md:py-36 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
          Open for new opportunities
        </p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
          Hi, I’m Blac.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          A full-stack developer and designer who builds clean, fast
          products — and the designs that bring them to life.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="#work">
              See my work
              <ArrowRight className="ml-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
