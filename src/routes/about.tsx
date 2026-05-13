import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Leaf, Stethoscope, Mountain, Quote } from "lucide-react";
import { useReveal, PageHero } from "@/components/site/chrome";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Unnati Nasha Mukti Kendra, Dehradun" },
      { name: "description", content: "Founded in 2015, Unnati is a Govt. registered, ISO 9001:2015 certified rehab in Jolly Grant, Dehradun. Trust, dignity & science." },
      { property: "og:title", content: "About Unnati Nasha Mukti Kendra" },
      { property: "og:description", content: "A sanctuary built on trust, dignity & science." },
    ],
  }),
});

function AboutPage() {
  useReveal();
  const features = [
    { i: <ShieldCheck />, t: "Govt. Registered", d: "Society Act 1860 + ISO 9001:2015 certified care." },
    { i: <Leaf />, t: "Holistic Healing", d: "Yoga, meditation & 12-step program integrated daily." },
    { i: <Stethoscope />, t: "Expert Team", d: "Doctors, psychologists & trained counselors on-site." },
    { i: <Mountain />, t: "Serene Location", d: "Quiet Himalayan foothills — minutes from Max Hospital." },
  ];
  return (
    <>
      <PageHero
        eyebrow="About Unnati"
        title="A sanctuary built on"
        italic="trust, dignity & science."
        subtitle="Located above Max Lab by Max Hospitals, Jolly Grant, Dehradun — a calm, medically accessible refuge in the Himalayan foothills."
      />
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="reveal relative">
            <div className="rounded-3xl bg-forest-dark p-10 text-cream shadow-2xl">
              <Quote className="h-10 w-10 text-gold/70" />
              <p className="mt-6 font-display text-2xl italic leading-relaxed text-cream/90">
                "Recovery is not the absence of struggle — it is the return of dignity.
                Every person who walks through our door deserves both."
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold/10 px-4 py-2 text-sm text-gold-light">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Director, Unnati Rehab
              </div>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <p className="text-text-mid">
              Founded in 2015 and registered under the Government of India, Unnati
              integrates the AA/NA 12-step program with modern psychology, gurukul-style
              living, and spiritual healing — treating the whole person, not just the addiction.
            </p>
            <p className="mt-4 text-text-mid">
              Our team believes recovery is possible for everyone — when met with
              expertise, patience, and a complete absence of judgment.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.t} className="border-l-2 border-gold pl-4">
                  <div className="flex items-center gap-2 text-forest [&>svg]:h-5 [&>svg]:w-5">
                    {f.i}
                    <h3 className="font-display text-lg font-semibold text-forest-dark">{f.t}</h3>
                  </div>
                  <p className="mt-1 text-sm text-text-mid">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}