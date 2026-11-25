import Link from "next/link";

const projects = [
  {
    title: "Fintech dashboard",
    description:
      "A clean analytics interface with real-time charts and actionable insights.",
    tags: ["React", "TypeScript", "Chart.js"],
    link: "#",
  },
  {
    title: "E-commerce storefront",
    description:
      "Fast, accessible shop with filtered catalog and checkout flow.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    link: "#",
  },
  {
    title: "Design system",
    description:
      "A consistent component library with documented tokens and usage.",
    tags: ["Shadcn", "Storybook", "Tokens"],
    link: "#",
  },
  {
    title: "Project management tool",
    description:
      "Kanban boards, team chat, and integrations in one place.",
    tags: ["Next.js", "Socket.io", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Developer portfolio",
    description:
      "A minimal portfolio template with animated project cards.",
    tags: ["React", "Framer Motion", "Tailwind"],
    link: "#",
  },
  {
    title: "Blog engine",
    description:
      "MDX-based blog with full-text search and social sharing.",
    tags: ["Next.js", "MDX", "PostHog"],
    link: "#",
  },
];

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Selected work
        </h2>
        <p className="mt-2 text-muted-foreground">
          A few products I’ve built or designed.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <Link
                href={p.link}
                className="text-xs font-medium text-primary hover:underline"
              >
                Case study
              </Link>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
