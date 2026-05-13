import { createFileRoute } from "@tanstack/react-router";
import { Pill, Sparkles, Stethoscope, Brain, Cigarette, HeartHandshake } from "lucide-react";
import { useReveal, PageHero } from "@/components/site/chrome";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — De-Addiction & Recovery | Unnati Rehab Dehradun" },
      { name: "description", content: "Medical detox, alcohol & drug de-addiction, counseling, family therapy and tobacco cessation at Unnati Nasha Mukti Kendra, Dehradun." },
      { property: "og:title", content: "Our Services — Unnati Rehab" },
      { property: "og:description", content: "Comprehensive de-addiction care, end to end." },
    ],
  }),
});

function ServicesPage() {
  useReveal();
  const items = [
    { i: <Pill />, t: "Alcohol De-Addiction", d: "Structured detox and relapse-prevention for alcohol dependency.", tag: "Detox" },
    { i: <Sparkles />, t: "Drug De-Addiction", d: "Medically supervised withdrawal management for substance abuse.", tag: "Recovery" },
    { i: <Stethoscope />, t: "Medical Detoxification", d: "24/7 medical monitoring during withdrawal phase.", tag: "Medical" },
    { i: <Brain />, t: "Psychological Counseling", d: "One-on-one and group therapy with licensed psychologists.", tag: "Therapy" },
    { i: <Cigarette />, t: "Tobacco Cessation", d: "Nicotine recovery programs combining medication and counseling.", tag: "Cessation" },
    { i: <HeartHandshake />, t: "Family Therapy", d: "Healing for the whole family — because addiction affects everyone.", tag: "Family" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive care,"
        italic="end to end."
        subtitle="From medical detox to long-term aftercare — every step of your recovery handled by experts who treat you like family."
      />
      <section className="bg-forest-dark py-24 text-cream">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s, idx) => (
              <article
                key={s.t}
                className="reveal group relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.03] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-cream/[0.06]"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold [&>svg]:h-5 [&>svg]:w-5">
                  {s.i}
                </div>
                <h3 className="mt-5 font-display text-2xl text-cream">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.d}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold/80">
                  → {s.tag}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}