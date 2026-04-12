import { ShieldCheck, Award, MapPin, Star } from "lucide-react";
import Logo from "@/components/Logo";

const stats = [
  { value: "CPI", label: "InterNACHI Certified" },
  { value: "ATL", label: "Metro Atlanta Service" },
];

const credentials = [
  {
    icon: ShieldCheck,
    title: "InterNACHI Certified",
    detail: "CPI · NACHI25012946",
  },
  {
    icon: Award,
    title: "Veteran-Owned",
    detail: "& Operated",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left: Navy — mission & story */}
        <div className="relative lg:w-1/2 bg-navy py-24 lg:py-32 px-8 lg:px-16 xl:px-24 flex flex-col justify-center">
          {/* Corner ornament */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-brand-green/40 rounded-tl-sm" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-brand-green/40 rounded-br-sm" />

          {/* Content */}
          <p className="section-overline text-brand-green">Our Mission</p>
          <h2 className="font-serif text-white text-4xl lg:text-5xl leading-tight mb-6">
            Serving Others <br />
            <em className="text-brand-green not-italic">First.</em>
          </h2>
          <div className="h-0.5 w-16 bg-brand-green mb-8" />

          <p className="text-white/70 text-base leading-relaxed mb-6">
            Servant Property Inspections was built on a simple conviction: the
            people trusting us with one of the biggest decisions of their lives
            deserve our very best — not a checkbox inspection, but a genuine
            act of service.
          </p>
          <p className="text-white/70 text-base leading-relaxed mb-10">
            Charles Evans Sr., founder and lead inspector, brings military
            discipline, InterNACHI certification, and a servant&apos;s heart to
            every home he walks through. When the inspection is done, you
            won&apos;t just have a report — you&apos;ll have answers.
          </p>

          {/* Credential badges */}
          <div className="flex flex-wrap gap-3">
            {credentials.map((cred) => {
              const Icon = cred.icon;
              return (
                <div
                  key={cred.title}
                  className="flex items-center gap-2 border border-accent/50 rounded-md px-4 py-2.5"
                >
                  <Icon className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <div>
                    <span className="text-white text-xs font-bold uppercase tracking-wide block leading-none">
                      {cred.title}
                    </span>
                    <span className="text-accent-light text-[10px] tracking-wide block mt-0.5">
                      {cred.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: White — stats & logo mark */}
        <div className="lg:w-1/2 bg-gray-50 py-24 lg:py-32 px-8 lg:px-16 xl:px-24 flex flex-col justify-center items-center">
          {/* Logo mark */}
          <div className="mb-16 opacity-90">
            <Logo variant="default" iconSize={100} />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl font-bold text-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-accent-light text-xs font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Location note */}
          <div className="mt-12 flex items-center gap-2 text-accent text-sm">
            <MapPin className="w-4 h-4 text-brand-green flex-shrink-0" />
            <span>Kennesaw, GA &amp; Metro Atlanta</span>
          </div>

          {/* Licensed & insured note */}
          <div className="mt-4 flex items-center gap-2 text-accent text-sm">
            <Star className="w-4 h-4 text-brand-green flex-shrink-0" />
            <span>Licensed &amp; Insured in Georgia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
