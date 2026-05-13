import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, MessageCircle, MapPin, ChevronDown, ShieldCheck, Lock, Clock, Car,
  ArrowRight, Leaf, Stethoscope, Brain, HeartHandshake,
} from "lucide-react";
import { PHONE, WA, useReveal } from "@/components/site/chrome";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Unnati Nasha Mukti Kendra — Rehab & De-Addiction, Jolly Grant Dehradun" },
      { name: "description", content: "Govt. registered, ISO 9001:2015 certified de-addiction & rehabilitation center above Max Lab, Jolly Grant, Dehradun. 24/7 confidential admission." },
      { property: "og:title", content: "Unnati Nasha Mukti Kendra — Rehab & De-Addiction, Dehradun" },
      { property: "og:description", content: "A serene healing sanctuary in the Himalayan foothills. Confidential, judgment-free recovery." },
    ],
  }),
});

function Home() {
  useReveal();
  return (
    <>
      <Hero />
      <Highlights />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-dark text-cream">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 radial-glow" />
      <div className="pointer-events-none absolute -right-40 top-1/2 hidden -translate-y-1/2 lg:block">
        {[520, 400, 280, 160].map((s, i) => (
          <div
            key={s}
            className="pulse-ring absolute rounded-full border border-gold/25"
            style={{ width: s, height: s, left: -s / 2, top: -s / 2, animationDelay: `${i * 0.6}s` }}
          />
        ))}
        <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-gold shadow-[0_0_30px_8px_oklch(0.74_0.10_78/0.5)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 pb-32 pt-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:pt-28">
        <div>
          <div className="reveal in inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold-light">
            <span className="live-dot inline-block h-2 w-2 rounded-full bg-gold" />
            Jolly Grant, Dehradun · Est. 2015
          </div>
          <h1 className="reveal mt-6 font-display text-5xl font-light leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-[78px]"
              style={{ transitionDelay: "120ms" }}>
            Begin Your Journey to a{" "}
            <span className="italic font-normal text-gold-light">Free</span> Life
          </h1>
          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-cream/75"
             style={{ transitionDelay: "240ms" }}>
            A serene healing sanctuary in the Himalayan foothills. Compassionate,
            medically-led recovery from alcohol, drugs and tobacco — guided by experts,
            wrapped in dignity.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-4" style={{ transitionDelay: "360ms" }}>
            <a href={`tel:${PHONE}`} className="btn-gold">
              <Phone className="h-4 w-4" /> Call for Admission
            </a>
            <Link to="/about" className="btn-ghost-light">
              Learn More <ChevronDown className="h-4 w-4" />
            </Link>
          </div>
          <div className="reveal mt-12 flex flex-wrap items-center gap-6 text-xs text-cream/60"
               style={{ transitionDelay: "480ms" }}>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gold" /> Govt. Registered</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gold" /> ISO 9001:2015</span>
            <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-gold" /> 100% Confidential</span>
          </div>
        </div>

        <div className="reveal grid grid-cols-1 gap-4 self-end sm:grid-cols-3 lg:grid-cols-1"
             style={{ transitionDelay: "300ms" }}>
          {[
            { n: "500+", l: "Lives Transformed" },
            { n: "10+", l: "Years of Service" },
            { n: "24/7", l: "Care & Support" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-6">
              <div className="font-display text-4xl font-semibold text-gold">{s.n}</div>
              <div className="mt-1 text-sm text-cream/70">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream" />
    </section>
  );
}

function Highlights() {
  const links = [
    { to: "/about" as const, i: <Leaf />, t: "About Unnati", d: "Our story, mission and the sanctuary we've built." },
    { to: "/services" as const, i: <Stethoscope />, t: "Our Services", d: "Detox, counseling, family therapy & more." },
    { to: "/programs" as const, i: <Brain />, t: "Programs", d: "30-day, 90-day and 6-month residential tracks." },
    { to: "/why-us" as const, i: <ShieldCheck />, t: "Why Choose Us", d: "Medically-led, dignified, evidence-based care." },
    { to: "/stories" as const, i: <HeartHandshake />, t: "Stories of Hope", d: "Real lives. Real recovery." },
    { to: "/contact" as const, i: <MapPin />, t: "Visit / Contact", d: "Above Max Lab, Jolly Grant, Dehradun." },
  ];
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-forest-mid">Explore</span>
          <h2 className="mt-3 font-display text-4xl text-forest-dark sm:text-5xl">
            Everything you need, <span className="italic text-forest">in one sanctuary.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="reveal group rounded-2xl border border-forest/10 bg-cream p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-forest/5 text-forest [&>svg]:h-5 [&>svg]:w-5 group-hover:bg-gold/10 group-hover:text-forest-dark">
                {l.i}
              </div>
              <h3 className="mt-5 font-display text-2xl text-forest-dark">{l.t}</h3>
              <p className="mt-2 text-sm text-text-mid">{l.d}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-forest group-hover:text-forest-dark">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-dark via-forest to-forest-mid py-24 text-cream">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="reveal font-display text-4xl leading-tight sm:text-6xl">
          Recovery starts with a single{" "}
          <span className="italic text-gold-light">call.</span>
        </h2>
        <p className="reveal mx-auto mt-6 max-w-2xl text-lg text-cream/75" style={{ transitionDelay: "120ms" }}>
          Don't wait for tomorrow. Our team is available around the clock — confidentially, without judgment.
        </p>
        <div className="reveal mt-10 flex flex-wrap justify-center gap-4" style={{ transitionDelay: "240ms" }}>
          <a href={`tel:${PHONE}`} className="btn-gold !text-base !px-7 !py-4">
            <Phone className="h-5 w-5" /> Call {PHONE}
          </a>
          <a href={WA} className="btn-ghost-light !text-base !px-7 !py-4">
            <MessageCircle className="h-5 w-5" /> WhatsApp Us
          </a>
        </div>
        <div className="reveal mt-14 grid gap-6 text-sm text-cream/80 sm:grid-cols-2 lg:grid-cols-4"
             style={{ transitionDelay: "360ms" }}>
          {[
            { i: <MapPin />, t: "Jolly Grant, Dehradun" },
            { i: <Clock />, t: "Available 24/7" },
            { i: <Lock />, t: "100% Confidential" },
            { i: <Car />, t: "Free Pickup Service" },
          ].map((x) => (
            <div key={x.t} className="flex items-center justify-center gap-2 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gold">
              {x.i} {x.t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}