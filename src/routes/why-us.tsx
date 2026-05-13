import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Stethoscope, Brain, Mountain, Lock, Check } from "lucide-react";
import { useReveal, PageHero } from "@/components/site/chrome";

export const Route = createFileRoute("/why-us")({
  component: WhyUsPage,
  head: () => ({
    meta: [
      { title: "Why Choose Unnati — Medically-Led Rehab in Dehradun" },
      { name: "description", content: "Govt. registered, ISO certified, medically-led de-addiction with trained psychologists in a serene Himalayan setting." },
      { property: "og:title", content: "Why Choose Unnati Rehab" },
      { property: "og:description", content: "More than treatment — a place to truly heal." },
    ],
  }),
});

function WhyUsPage() {
  useReveal();
  const reasons = [
    { i: <ShieldCheck />, t: "Govt. Registered & ISO Certified", d: "Society Act 1860 registration + ISO 9001:2015 quality." },
    { i: <Stethoscope />, t: "Medically-Led Care", d: "On-site doctors and nurses ensuring safe, monitored detox." },
    { i: <Brain />, t: "Trained Psychologists", d: "Evidence-based CBT, REBT and motivational therapy." },
    { i: <Mountain />, t: "Healing Environment", d: "Calm Himalayan foothills, gurukul living and clean air." },
    { i: <Lock />, t: "100% Confidential", d: "Your privacy and dignity are protected at every step." },
  ];
  return (
    <>
      <PageHero
        eyebrow="Why Choose Unnati"
        title="More than treatment — a place to"
        italic="truly heal."
      />
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
            <ol className="space-y-8">
              {reasons.map((r, i) => (
                <li
                  key={r.t}
                  className="reveal group flex gap-6 transition-transform duration-300 hover:translate-x-1.5"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="font-display text-3xl font-light text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-forest [&>svg]:h-5 [&>svg]:w-5">
                      {r.i}
                      <h3 className="font-display text-2xl text-forest-dark">{r.t}</h3>
                    </div>
                    <p className="mt-2 max-w-lg text-text-mid">{r.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="reveal lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-forest-dark p-8 text-cream shadow-2xl">
                <h3 className="font-display text-2xl text-cream">Unnati by Numbers</h3>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    ["500+", "Lives Transformed"],
                    ["70%", "Recovery Rate"],
                    ["10+", "Years"],
                    ["4.8★", "Family Rating"],
                  ].map(([n, l]) => (
                    <div key={l} className="rounded-xl bg-cream/[0.05] p-4">
                      <div className="font-display text-3xl text-gold">{n}</div>
                      <div className="mt-1 text-xs text-cream/70">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="my-6 h-px bg-cream/10" />
                <h4 className="text-xs uppercase tracking-[0.18em] text-gold-light">Facilities</h4>
                <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm text-cream/85 sm:grid-cols-2">
                  {["AC Rooms","Veg Meals","Yoga Hall","Library","Indoor Games","Garden","Doctor On-Call","Pickup"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}