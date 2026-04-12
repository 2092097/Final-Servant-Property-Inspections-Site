import { Phone, Mail, ShieldCheck } from "lucide-react";

export default function BookNow() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #203040 0%, #202040 70%, #1a2030 100%)",
        }}
      />

      {/* Diagonal stripe accent */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #b0e070 0px,
            #b0e070 1px,
            transparent 1px,
            transparent 80px
          )`,
        }}
      />

      {/* Green top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-green" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Overline */}
        <p className="text-brand-green text-xs font-semibold tracking-[0.25em] uppercase mb-6">
          Get Started Today
        </p>

        {/* Heading */}
        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
          Ready to Move From
          <br />
          <em className="text-brand-green not-italic">Anxious to Assured?</em>
        </h2>

        {/* Sub */}
        <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Call or email today — inspections available across Kennesaw, Marietta,
          Acworth, and all of Metro Atlanta.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:2026558567"
            className="inline-flex items-center justify-center gap-3 bg-brand-green text-navy font-bold text-lg px-10 py-5 rounded-md hover:bg-brand-green-hi transition-all duration-300 shadow-xl shadow-brand-green/20 hover:shadow-brand-green/30 hover:scale-[1.02]"
          >
            <Phone className="w-5 h-5" />
            Call 202-655-8567
          </a>
          <a
            href="mailto:servantpropertyinspections@gmail.com"
            className="inline-flex items-center justify-center gap-3 border-2 border-brand-green/60 text-brand-green font-semibold text-lg px-10 py-5 rounded-md hover:border-brand-green hover:bg-brand-green/10 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-xs">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-green/60" />
            <span>InterNACHI Certified · NACHI25012946</span>
          </div>
          <div className="h-3 w-px bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-green/60" />
            <span>Licensed &amp; Insured</span>
          </div>
          <div className="h-3 w-px bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-green/60" />
            <span>Veteran-Owned &amp; Operated</span>
          </div>
        </div>
      </div>

      {/* Green bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-green" />
    </section>
  );
}
