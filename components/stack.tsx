const stack = [
  "Next.js · React · TypeScript",
  "Tailwind · shadcn/ui · Radix",
  "PostgreSQL · Prisma · Drizzle",
  "Chart.js · Motion · Vercel",
];

export function Stack() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border px-4 py-1.5 text-sm text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
