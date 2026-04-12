"use client";

import { Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #203040 0%, #202040 50%, #1a1a35 100%)",
        }}
      />

      {/* Geometric accent — diagonal stripe */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #b0e070 0px,
            #b0e070 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Green accent bar — top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-green" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-brand-green" />
            <span className="text-brand-green text-xs font-semibold tracking-[0.25em] uppercase">
              InterNACHI Certified &nbsp;·&nbsp; Veteran-Owned
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-white leading-[1.05] mb-4">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              From Anxious
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brand-green">
              to Assured.
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-serif italic text-white/70 text-xl sm:text-2xl mb-8 tracking-wide">
            Before you sign.
          </p>

          {/* Body copy */}
          <p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl"
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            A thorough, honest property inspection gives you the clarity to move
            forward with confidence. Serving Kennesaw, GA and Metro Atlanta
            with the same care we&apos;d give our own family.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2026558567"
              className="inline-flex items-center justify-center gap-2 bg-brand-green text-navy font-bold text-base px-8 py-4 rounded-md hover:bg-brand-green-hi transition-all duration-300 shadow-lg shadow-brand-green/20 hover:shadow-brand-green/30 hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5" />
              Schedule an Inspection
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold text-base px-8 py-4 rounded-md hover:border-brand-green hover:text-brand-green transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-brand-green transition-colors duration-300 animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-7 h-7" />
      </button>

      {/* Bottom decorative fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
