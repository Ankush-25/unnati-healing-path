import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { useReveal, PageHero } from "@/components/site/chrome";

export const Route = createFileRoute("/stories")({
  component: StoriesPage,
  head: () => ({
    meta: [
      { title: "Stories of Hope — Recovery Testimonials | Unnati Foundation" },
      { name: "description", content: "Real recovery stories from families and individuals who found freedom at Unnati Foundation, Dehradun." },
      { property: "og:title", content: "Stories of Hope — Unnati Foundation" },
      { property: "og:description", content: "Real lives. Real recovery." },
    ],
  }),
});

function StoriesPage() {
  useReveal();
  const items = [
    { q: "Unnati gave my son back to us. The team treated him with such respect — today he is two years sober and rebuilding his career.", n: "Sushma Devi", l: "Mother · Haridwar" },
    { q: "I walked in broken. The counselors and doctors here held me through the hardest weeks of my life. The 12-step program changed everything.", n: "Rohit Khanna", l: "Recovered · Delhi" },
    { q: "What sets Unnati apart is the dignity. No locked rooms, no shame — just real medicine, real therapy, and real human kindness.", n: "Dr. A. Mehta", l: "Referring Physician · Dehradun" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Stories of Hope"
        title="Real lives."
        italic="Real recovery."
      />
      <section className="bg-cream-mid py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((t, i) => (
              <article
                key={t.n}
                className="reveal relative overflow-hidden rounded-2xl bg-cream p-8 shadow-md"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Quote className="absolute -right-2 -top-2 h-24 w-24 text-forest/[0.05]" />
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <p className="relative mt-5 font-display text-lg italic leading-relaxed text-text-dark">
                  "{t.q}"
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-forest text-sm font-semibold text-cream">
                    {t.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-forest-dark">{t.n}</div>
                    <div className="text-xs text-text-mid">{t.l}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}