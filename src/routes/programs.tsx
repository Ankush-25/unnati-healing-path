import { createFileRoute } from "@tanstack/react-router";
import { useReveal, PageHero } from "@/components/site/chrome";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "Programs — 30, 90 & 180 Day Recovery | Unnati Foundation" },
      { name: "description", content: "Residential recovery programs of 30 days, 90 days and 6 months at Unnati Foundation, Dehradun." },
      { property: "og:title", content: "Programs — Unnati Foundation" },
      { property: "og:description", content: "Built for every stage of your recovery journey." },
    ],
  }),
});

function ProgramsPage() {
  useReveal();
  const progs = [
    { n: "01", dur: "30 Days", t: "Foundation", d: "Stabilization, detox, intro to 12-step program & coping basics.", tags: ["Detox","Counseling","Yoga"] },
    { n: "02", dur: "90 Days", t: "Full Recovery", d: "Deep behavioral therapy, life-skill rebuilding & relapse prevention.", tags: ["Therapy","Family","Meditation"], popular: true },
    { n: "03", dur: "6 Months", t: "Long-Term Transformation", d: "Immersive Gurukul-style living for sustained, lifetime sobriety.", tags: ["Gurukul","Aftercare","Vocation"] },
  ];
  const steps = [
    { t: "Reach Out", d: "Call our 24/7 helpline. We listen — confidentially, without judgment." },
    { t: "Assessment", d: "Personalized evaluation by our medical and counseling team." },
    { t: "Detox & Treatment", d: "Medically supervised detox with therapy and holistic care." },
    { t: "Aftercare & Freedom", d: "Family integration, follow-ups and lifelong relapse support." },
  ];
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Built for every stage of"
        italic="your journey."
      />
      <section className="bg-cream-mid py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {progs.map((p, idx) => (
              <article
                key={p.t}
                className="reveal group relative overflow-hidden rounded-3xl bg-cream shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative bg-forest-dark px-8 pt-8 pb-12 text-cream overflow-hidden">
                  <span className="absolute right-4 top-2 font-display text-[140px] font-bold leading-none text-cream/[0.04] select-none">
                    {p.n}
                  </span>
                  <div className="relative flex items-center gap-3">
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-forest-dark">
                      {p.dur}
                    </span>
                    {p.popular && (
                      <span className="rounded-full border border-gold/40 px-3 py-1 text-[11px] uppercase tracking-wider text-gold-light">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <h3 className="relative mt-5 font-display text-3xl">{p.t}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-cream/75">{p.d}</p>
                </div>
                <div className="flex flex-wrap gap-2 px-8 py-6">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-cream-mid px-3 py-1 text-xs text-text-mid">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-forest py-24 text-cream">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.22em] text-gold">How It Works</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Four steps to <span className="italic text-gold-light">freedom.</span>
            </h2>
          </div>
          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
            {steps.map((s, i) => (
              <div key={s.t} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-light font-display text-xl font-bold text-forest-dark shadow-lg">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-center font-display text-xl">{s.t}</h3>
                <p className="mt-2 text-center text-sm text-cream/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}