const steps = [
  {
    number: "01",
    title: "Schedule",
    description:
      "Call or email to book your inspection. We'll confirm your appointment quickly and answer any questions upfront.",
  },
  {
    number: "02",
    title: "Inspect",
    description:
      "Charles personally walks through every accessible area of the property — foundation, systems, roof, and everything in between.",
  },
  {
    number: "03",
    title: "Report",
    description:
      "A detailed, photo-rich written report is delivered the same day. Clear findings, no jargon, and honest recommendations.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Armed with the truth about the property, you negotiate with confidence or walk away with peace of mind.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="section-overline">Simple & Transparent</p>
          <h2 className="section-heading">How It Works</h2>
          <div className="section-rule-center" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent"
            style={{ top: "3rem" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-navy flex items-center justify-center mb-6 shadow-lg shadow-navy/20 group-hover:shadow-brand-green/20 transition-shadow duration-300">
                  <div className="w-20 h-20 rounded-full border border-brand-green/30 flex items-center justify-center">
                    <span className="font-serif text-brand-green text-2xl font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Arrow between steps — tablet view */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block lg:hidden absolute top-12 -right-4 text-brand-green/30 text-xl font-light">
                    →
                  </div>
                )}

                {/* Title */}
                <h3 className="font-sans font-bold text-navy text-xl mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-accent-light text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA nudge */}
        <div className="text-center mt-16">
          <a
            href="tel:2026558567"
            className="inline-flex items-center gap-2 bg-navy text-brand-green font-semibold text-sm px-6 py-3 rounded-md hover:bg-navy-deep transition-colors duration-200"
          >
            Ready to start? Call 202-655-8567
          </a>
        </div>
      </div>
    </section>
  );
}
