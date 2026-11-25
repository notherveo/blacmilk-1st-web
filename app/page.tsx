import { SiteNav, MobileNavTrigger } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Stack } from "@/components/stack";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />
      <MobileNavTrigger />
      <Hero />
      <Stack />
      <Work />
      <About />
      <Contact />
      <SiteFooter />
    </div>
  );
}
