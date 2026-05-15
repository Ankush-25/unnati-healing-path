import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Clock, Lock, Car } from "lucide-react";
import { useReveal, PageHero, PHONE, WA } from "@/components/site/chrome";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Unnati Foundation, Jolly Grant Dehradun" },
      { name: "description", content: "Reach Unnati Foundation 24/7 for confidential admission. Above Max Lab, Jolly Grant, Dehradun, Uttarakhand." },
      { property: "og:title", content: "Contact Unnati Foundation" },
      { property: "og:description", content: "Recovery starts with a single call. Available 24/7." },
    ],
  }),
});

function ContactPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Recovery starts with a single"
        italic="call."
        subtitle="Available around the clock — confidentially, without judgment."
      />
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-forest/10 bg-cream p-10 shadow-md">
            <h2 className="font-display text-3xl text-forest-dark">Talk to us</h2>
            <p className="mt-3 text-text-mid">
              Pick up the phone or send a message. A trained counselor will respond
              right away — your call is fully confidential.
            </p>
            <div className="mt-8 space-y-4">
              <a href={`tel:${PHONE}`} className="btn-gold w-full !justify-center">
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <a
                href={WA}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-forest/20 px-6 py-3.5 text-sm font-medium text-forest-dark transition-colors hover:border-gold hover:text-forest"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-10 grid gap-4 text-sm text-text-mid">
              {[
                { i: <MapPin />, t: "Above Max Lab by Max Hospitals, Jolly Grant, Dehradun, Uttarakhand" },
                { i: <Clock />, t: "Available 24 / 7 — including holidays" },
                { i: <Lock />, t: "100% Confidential, judgment-free intake" },
                { i: <Car />, t: "Free pickup service across Dehradun region" },
              ].map((x) => (
                <div key={x.t} className="flex items-start gap-3 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:mt-0.5 [&>svg]:flex-shrink-0 [&>svg]:text-gold">
                  {x.i}<span>{x.t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-3xl border border-forest/10 shadow-md" style={{ transitionDelay: "120ms" }}>
            <iframe
              title="Unnati Foundation location"
              src="https://www.google.com/maps?q=Max+Hospital+Jolly+Grant+Dehradun&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}