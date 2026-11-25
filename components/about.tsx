export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-1">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl bg-muted">
            {/* Placeholder for a portrait */}
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Portrait
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            A little about me
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I’m a full-stack developer and designer based in San Francisco. I
            enjoy building products that feel good to use — from the visual
            design down to the code. When I’m not coding, I’m exploring new
            design trends, learning a new framework, or enjoying a good cup of
            coffee.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            I work with clients across industries — from startups to
            established enterprises — and I’m always open to new opportunities.
            If you have a project in mind, let’s chat.
          </p>
        </div>
      </div>
    </section>
  );
}
