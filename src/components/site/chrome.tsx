import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Phone, MessageCircle, MapPin, Facebook, Instagram, Youtube, Check,
} from "lucide-react";
import logo from "@/assets/logo.png";

export const PHONE = "+919999000111"; 
export const WA = "https://wa.me/919999000111";

export function useReveal() {
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

export function EmergencyBar() {
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

const NAV_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Programs", to: "/programs" as const },
  { label: "Why Us", to: "/why-us" as const },
  { label: "Stories", to: "/stories" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById("main-nav");
      if (!nav) return;
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className="sticky top-0 z-40 bg-forest-dark/85 backdrop-blur-md transition-all duration-300 [&.scrolled]:bg-forest-dark/95 [&.scrolled]:shadow-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-cream/95 p-1 shadow-md ring-1 ring-gold/30">
            <img src={logo} alt="Unnati Nasha Mukti Kendra logo" className="h-full w-full object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-cream">Unnati Rehab</span>
            <span className="block text-[11px] tracking-wider text-gold-light/80 uppercase">
              Nasha Mukti Kendra
            </span>
          </span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm font-medium text-cream/85 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                className="transition-colors hover:text-gold data-[status=active]:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href={`tel:${PHONE}`} className="btn-gold !py-2.5 !px-5 text-sm">
          <Phone className="h-4 w-4" /> Get Help
        </a>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-cream/95 p-1">
              <img src={logo} alt="Unnati Nasha Mukti Kendra logo" className="h-full w-full object-contain" />
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
          <h4 className="font-display text-lg text-cream">Explore</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream">Facilities</h4>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-cream/70">
            {["AC Rooms","Veg Meals","Yoga Hall","Library","Indoor Games","Garden","Doctor On-Call","Pickup"].map((f) => (
              <li key={f} className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-gold" />{f}</li>
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

export function FloatingWA() {
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

export function PageHero({ eyebrow, title, italic, subtitle }: {
  eyebrow: string; title: string; italic?: string; subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-dark py-20 text-cream sm:py-28">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 radial-glow" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="reveal in inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold-light">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </div>
        <h1 className="reveal in mt-6 font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
          {title}{italic && <> <span className="italic font-normal text-gold-light">{italic}</span></>}
        </h1>
        {subtitle && (
          <p className="reveal in mx-auto mt-6 max-w-2xl text-lg text-cream/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}