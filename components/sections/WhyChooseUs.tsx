import { ShieldCheck, Award, MapPin } from "lucide-react";

const credentials = [
  {
    icon: ShieldCheck,
    title: "InterNACHI Certified",
    subtitle: "Certified Professional Inspector®",
    detail: "NACHI25012946",
    description:
      "Trained and certified by the world's leading home inspector association — so you get an inspection held to the highest industry standard.",
  },
  {
    icon: Award,
    title: "Veteran-Owned",
    subtitle: "& Operated",
    detail: "U.S. Military",
    description:
      "Military service instills discipline, precision, and integrity. Those same values show up in every single inspection we perform.",
  },
  {
    icon: MapPin,
    title: "Metro Atlanta",
    subtitle: "Service Area",
    detail: "Kennesaw & Beyond",
    description:
      "Serving home buyers, sellers, and real estate professionals across Kennesaw, Marietta, Acworth, and the greater Atlanta metro area.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white">
      {/* Top navy bar */}
      <div className="h-1.5 bg-navy w-full" />
      <div className="h-0.5 bg-brand-green w-full" />

      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-overline">Built on Trust</p>
            <h2 className="section-heading">Why Choose Servant</h2>
            <div className="section-rule-center" />
          </div>

          {/* Credential cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((cred) => {
              const Icon = cred.icon;
              return (
                <div
                  key={cred.title}
                  className="group flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon ring */}
                  <div className="w-16 h-16 rounded-full border-2 border-brand-green/30 flex items-center justify-center mb-5 group-hover:border-brand-green group-hover:bg-brand-green/10 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent group-hover:text-navy transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-navy text-lg leading-tight mb-0.5">
                    {cred.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-1">
                    {cred.subtitle}
                  </p>
                  <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-green bg-navy px-3 py-1 rounded-full mb-4">
                    {cred.detail}
                  </span>

                  {/* Description */}
                  <p className="text-accent-light text-sm leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom navy bar */}
      <div className="h-0.5 bg-brand-green w-full" />
      <div className="h-1.5 bg-navy w-full" />
    </section>
  );
}
