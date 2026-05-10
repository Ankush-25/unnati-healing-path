import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Phone, MessageCircle, MapPin, ChevronDown, ShieldCheck, Leaf,
  Stethoscope, Mountain, Pill, Brain, HeartHandshake, Cigarette,
  Users, Sparkles, Check, Star, Quote, Clock, Lock, Car,
  Facebook, Instagram, Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Unnati Nasha Mukti Kendra — Rehab & De-Addiction, Jolly Grant Dehradun" },
      { name: "description", content: "Govt. registered, ISO 9001:2015 certified de-addiction & rehabilitation center above Max Lab, Jolly Grant, Dehradun. Alcohol, drug & tobacco recovery — 24/7 confidential admission." },
    ],
  }),
});

const PHONE = "+919999000111";
const WA = "https://wa.me/919999000111";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Home() {
  useReveal();
  return (
    <div className="min-h-screen bg-cream text-text-dark">
      <EmergencyBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Programs />
        <Process />
        <WhyUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}

/* ---------------- Emergency Bar ---------------- */
function EmergencyBar() {
  return (
    <div className="bg-forest-mid text-cream text-xs sm:text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
        <span className="hidden sm:inline text-cream/85">
          24/7 Emergency Admission — Confidential & Judgment-Free
        </span>
        <div className="flex items-center gap-4 sm:gap-6 text-gold-light">
          <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 hover:text-gold">
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <a href={WA} className="flex items-center gap-1.5 hover:text-gold">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
          <span className="hidden sm:flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Jolly Grant, Dehradun
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById("main-nav");
      if (!nav) return;
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className="sticky top-0 z-40 transition-all duration-300 [&.scrolled]:bg-forest-dark/95 [&.scrolled]:backdrop-blur-md [&.scrolled]:shadow-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-gold to-gold-light font-display text-xl font-bold text-forest-dark">
            U
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-cream">Unnati Rehab</span>
            <span className="block text-[11px] tracking-wider text-gold-light/80 uppercase">
              Nasha Mukti Kendra
            </span>
          </span>
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-cream/85 md:flex">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Programs", "#programs"],
            ["Why Us", "#why"],
            ["Stories", "#stories"],
          ].map(([l, h]) => (
            <li key={l}>
              <a href={h} className="transition-colors hover:text-gold">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href={`tel:${PHONE}`} className="btn-gold !py-2.5 !px-5 text-sm">
          <Phone className="h-4 w-4" /> Get Help Now
        </a>
      </div>
    </nav>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative -mt-[72px] overflow-hidden bg-forest-dark pt-[72px] text-cream">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 radial-glow" />
      {/* concentric circles */}
      <div className="pointer-events-none absolute -right-40 top-1/2 hidden -translate-y-1/2 lg:block">
        {[520, 400, 280, 160].map((s, i) => (
          <div
            key={s}
            className="pulse-ring absolute rounded-full border border-gold/25"
            style={{
              width: s, height: s,
              left: -s / 2, top: -s / 2,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
        <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-gold shadow-[0_0_30px_8px_oklch(0.74_0.10_78/0.5)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 pb-32 pt-24 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:pt-36">
        <div>
          <div className="reveal in inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold-light">
            <span className="live-dot inline-block h-2 w-2 rounded-full bg-gold" />
            Jolly Grant, Dehradun · Est. Since 2015
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
            <a href="#about" className="btn-ghost-light">
              Learn More <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          <div className="reveal mt-12 flex flex-wrap items-center gap-6 text-xs text-cream/60"
               style={{ transitionDelay: "480ms" }}>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gold" /> Govt. Registered</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gold" /> ISO 9001:2015</span>
            <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-gold" /> 100% Confidential</span>
          </div>
        </div>

        {/* Stats */}
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

      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-forest-dark" />
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const features = [
    { i: <ShieldCheck />, t: "Govt. Registered", d: "Society Act 1860 + ISO 9001:2015 certified care." },
    { i: <Leaf />, t: "Holistic Healing", d: "Yoga, meditation & 12-step program integrated daily." },
    { i: <Stethoscope />, t: "Expert Team", d: "Doctors, psychologists & trained counselors on-site." },
    { i: <Mountain />, t: "Serene Location", d: "Quiet Himalayan foothills — minutes from Max Hospital." },
  ];
  return (
    <section id="about" className="relative bg-cream py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative">
          <div className="rounded-3xl bg-forest-dark p-10 text-cream shadow-2xl">
            <Quote className="h-10 w-10 text-gold/70" />
            <p className="mt-6 font-display text-2xl italic leading-relaxed text-cream/90">
              “Recovery is not the absence of struggle — it is the return of dignity.
              Every person who walks through our door deserves both.”
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold/10 px-4 py-2 text-sm text-gold-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Director, Unnati Rehab
            </div>
          </div>
          <div className="absolute -bottom-8 -right-4 hidden rounded-2xl border border-gold/30 bg-cream p-5 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-forest" />
              <div className="text-xs leading-tight">
                <div className="font-semibold text-forest-dark">ISO 9001:2015</div>
                <div className="text-text-mid">Certified Facility</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <span className="text-xs uppercase tracking-[0.22em] text-forest-mid">About Unnati</span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-forest-dark sm:text-5xl">
            A sanctuary built on{" "}
            <span className="italic text-forest">trust, dignity & science.</span>
          </h2>
          <p className="mt-6 text-text-mid">
            Unnati Nasha Mukti Kendra is located above Max Lab by Max Hospitals,
            Jolly Grant, Dehradun — a calm, medically accessible location surrounded
            by the natural beauty of Uttarakhand's foothills.
          </p>
          <p className="mt-4 text-text-mid">
            Founded in 2015, registered under the Government of India, our approach
            integrates the AA/NA 12-step program with modern psychology, gurukul-style
            living, and spiritual healing.
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
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const items = [
    { i: <Pill />, t: "Alcohol De-Addiction", d: "Structured detox and relapse-prevention for alcohol dependency.", tag: "Detox" },
    { i: <Sparkles />, t: "Drug De-Addiction", d: "Medically supervised withdrawal management for substance abuse.", tag: "Recovery" },
    { i: <Stethoscope />, t: "Medical Detoxification", d: "24/7 medical monitoring during withdrawal phase.", tag: "Medical" },
    { i: <Brain />, t: "Psychological Counseling", d: "One-on-one and group therapy with licensed psychologists.", tag: "Therapy" },
    { i: <Cigarette />, t: "Tobacco Cessation", d: "Nicotine recovery programs combining medication and counseling.", tag: "Cessation" },
    { i: <HeartHandshake />, t: "Family Therapy", d: "Healing for the whole family — because addiction affects everyone.", tag: "Family" },
  ];
  return (
    <section id="services" className="relative bg-forest-dark py-28 text-cream">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-gold">Our Services</span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Comprehensive care, <span className="italic text-gold-light">end to end.</span>
          </h2>
          <p className="mt-5 text-cream/70">
            From medical detox to long-term aftercare — every step of your recovery
            handled by experts who treat you like family.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, idx) => (
            <article
              key={s.t}
              className="reveal group relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.03] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-cream/[0.06]"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-500 group-hover:via-gold/60" />
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
  );
}

/* ---------------- Programs ---------------- */
function Programs() {
  const progs = [
    {
      n: "01", dur: "30 Days", t: "Foundation",
      d: "Stabilization, detox, intro to 12-step program & coping basics.",
      tags: ["Detox", "Counseling", "Yoga"],
    },
    {
      n: "02", dur: "90 Days", t: "Full Recovery",
      d: "Deep behavioral therapy, life-skill rebuilding & relapse prevention.",
      tags: ["Therapy", "Family", "Meditation"], popular: true,
    },
    {
      n: "03", dur: "6 Months", t: "Long-Term Transformation",
      d: "Immersive Gurukul-style living for sustained, lifetime sobriety.",
      tags: ["Gurukul", "Aftercare", "Vocation"],
    },
  ];
  return (
    <section id="programs" className="bg-cream-mid py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-forest-mid">Programs</span>
          <h2 className="mt-3 font-display text-4xl text-forest-dark sm:text-5xl">
            Built for every stage of <span className="italic text-forest">your journey.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
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
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { t: "Reach Out", d: "Call our 24/7 helpline. We listen — confidentially, without judgment." },
    { t: "Assessment", d: "Personalized evaluation by our medical and counseling team." },
    { t: "Detox & Treatment", d: "Medically supervised detox with therapy and holistic care." },
    { t: "Aftercare & Freedom", d: "Family integration, follow-ups and lifelong relapse support." },
  ];
  return (
    <section className="relative overflow-hidden bg-forest py-28 text-cream">
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
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const reasons = [
    { i: <ShieldCheck />, t: "Govt. Registered & ISO Certified", d: "Society Act 1860 registration + ISO 9001:2015 quality." },
    { i: <Stethoscope />, t: "Medically-Led Care", d: "On-site doctors and nurses ensuring safe, monitored detox." },
    { i: <Brain />, t: "Trained Psychologists", d: "Evidence-based CBT, REBT and motivational therapy." },
    { i: <Mountain />, t: "Healing Environment", d: "Calm Himalayan foothills, gurukul living and clean air." },
    { i: <Lock />, t: "100% Confidential", d: "Your privacy and dignity are protected at every step." },
  ];
  return (
    <section id="why" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-forest-mid">Why Choose Unnati</span>
          <h2 className="mt-3 font-display text-4xl text-forest-dark sm:text-5xl">
            More than treatment — a place to{" "}
            <span className="italic text-forest">truly heal.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
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
                {[
                  "AC Rooms", "Veg Meals", "Yoga Hall", "Library",
                  "Indoor Games", "Garden", "Doctor On-Call", "Pickup",
                ].map((f) => (
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
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    {
      q: "Unnati gave my son back to us. The team treated him with such respect — today he is two years sober and rebuilding his career.",
      n: "Sushma Devi", l: "Mother · Haridwar",
    },
    {
      q: "I walked in broken. The counselors and doctors here held me through the hardest weeks of my life. The 12-step program changed everything.",
      n: "Rohit Khanna", l: "Recovered · Delhi",
    },
    {
      q: "What sets Unnati apart is the dignity. No locked rooms, no shame — just real medicine, real therapy, and real human kindness.",
      n: "Dr. A. Mehta", l: "Referring Physician · Dehradun",
    },
  ];
  return (
    <section id="stories" className="bg-cream-mid py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-forest-mid">Stories of Hope</span>
          <h2 className="mt-3 font-display text-4xl text-forest-dark sm:text-5xl">
            Real lives. <span className="italic text-forest">Real recovery.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
                “{t.q}”
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
  );
}

/* ---------------- CTA ---------------- */
function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-dark via-forest to-forest-mid py-28 text-cream">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="reveal font-display text-4xl leading-tight sm:text-6xl">
          Recovery starts with a single{" "}
          <span className="italic text-gold-light">call.</span>
        </h2>
        <p className="reveal mx-auto mt-6 max-w-2xl text-lg text-cream/75" style={{ transitionDelay: "120ms" }}>
          Don't wait for tomorrow. Your loved one deserves help today. Our team is
          available around the clock — confidentially, without judgment.
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

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-gold to-gold-light font-display text-xl font-bold text-forest-dark">
              U
            </span>
            <div>
              <div className="font-display text-lg font-semibold text-cream">Unnati Rehab</div>
              <div className="text-[11px] uppercase tracking-wider text-gold-light/80">Nasha Mukti Kendra</div>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm text-cream/60">
            A Govt. registered, ISO certified de-addiction & rehabilitation center
            in the heart of the Himalayas.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((I, k) => (
              <a key={k} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-cream/15 transition-colors hover:border-gold hover:text-gold">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream">Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {["Alcohol De-Addiction","Drug De-Addiction","Medical Detox","Counseling","Family Therapy","Aftercare"].map((s) => (
              <li key={s}><a href="#services" className="hover:text-gold">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream">Center</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[["About","#about"],["Programs","#programs"],["Why Us","#why"],["Stories","#stories"]].map(([l,h]) => (
              <li key={l}><a href={h} className="hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />Above Max Lab by Max Hospitals, Jolly Grant, Dehradun, Uttarakhand</li>
            <li><a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" /> {PHONE}</a></li>
            <li><a href={WA} className="flex items-center gap-2 hover:text-gold"><MessageCircle className="h-4 w-4 text-gold" /> WhatsApp 24/7</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-cream/50 sm:px-6 md:flex-row">
          <span>© {new Date().getFullYear()} Unnati Nasha Mukti Kendra. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cream/15 px-3 py-1">Govt. Registered</span>
            <span className="rounded-full border border-cream/15 px-3 py-1">ISO 9001:2015</span>
            <span className="rounded-full border border-cream/15 px-3 py-1">Society Act 1860</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WA ---------------- */
function FloatingWA() {
  return (
    <a
      href={WA}
      aria-label="Chat on WhatsApp"
      className="wa-bounce fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.65_0.18_148)] text-white shadow-2xl ring-4 ring-[oklch(0.65_0.18_148/0.25)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
