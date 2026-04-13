"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ScheduleModal from "@/components/ScheduleModal";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

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

      <ScheduleModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Content — split layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: text */}
          <div className="flex-1 min-w-0">
            {/* Headline */}
            <h1 className="font-serif text-white leading-[1.05] mb-4">
              <span className="block text-5xl sm:text-6xl lg:text-6xl xl:text-7xl">
                From Anxious
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-6xl xl:text-7xl text-brand-green">
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

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-navy font-bold text-base px-8 py-4 rounded-md hover:bg-brand-green-hi transition-all duration-300 shadow-lg shadow-brand-green/20 hover:shadow-brand-green/30 hover:scale-[1.02]"
              >
                Schedule an Inspection
              </button>
            </div>
          </div>

          {/* Right: house image */}
          <div className="flex-1 w-full lg:max-w-[520px]">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
              style={{ height: "480px" }}
            >
              {/*
                Rotation fix: the photo is stored rotated 90° CW.
                After rotate(-90deg):
                  displayed width  = element height → set to 700px (covers container width)
                  displayed height = element width  → set to 480px (matches container height)
              */}
              <img
                src="/house.jpeg"
                alt="Georgia home inspected by Servant Property Inspections"
                style={{
                  position: "absolute",
                  width: "480px",
                  height: "700px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(0deg)",
                  objectFit: "cover",
                }}
              />
            </div>
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
    </section>
  );
}
