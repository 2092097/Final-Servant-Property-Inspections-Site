import {
  Home,
  Zap,
  Wind,
  Search,
  Shield,
  ClipboardList,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "General Home Inspection",
    description:
      "A comprehensive evaluation of the home's structure, systems, and components — foundation to roof — so you know exactly what you're buying.",
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    description:
      "Panel boards, wiring, outlets, and grounding examined for safety hazards and code concerns that protect your family and investment.",
  },
  {
    icon: Search,
    title: "Roof & Attic",
    description:
      "Shingles, flashing, gutters, ventilation, and attic structure assessed for current condition and potential future repair costs.",
  },
  {
    icon: Wind,
    title: "Insulation & Ventilation",
    description:
      "Proper insulation and airflow directly impact energy costs and indoor air quality. We evaluate both to ensure your home breathes right.",
  },
  {
    icon: Shield,
    title: "Crawlspace Hazards",
    description:
      "Moisture intrusion, wood rot, pest damage, and structural concerns in crawlspaces are identified before they become expensive problems.",
  },
  {
    icon: ClipboardList,
    title: "Pre-Listing Inspection",
    description:
      "Selling your home? Discover issues before buyers do. A pre-listing inspection positions you for a smoother, faster transaction.",
  },
  {
    icon: Activity,
    title: "Radon Testing",
    description:
      "Radon is the second leading cause of lung cancer in the U.S. and is odorless and invisible. We test for elevated levels so you can protect your family before moving in.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-overline">What We Inspect</p>
          <h2 className="section-heading text-navy">
            Comprehensive Inspections
          </h2>
          <div className="section-rule-center" />
          <p className="text-accent-light text-lg max-w-2xl mx-auto leading-relaxed">
            Every inspection is performed to InterNACHI&apos;s Standards of
            Practice — because you deserve clarity, not surprises.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white border border-gray-100 rounded-xl p-8 hover:border-brand-green hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-300 cursor-default"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-green rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-brand-green/15 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent group-hover:text-navy transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-sans font-semibold text-navy text-xl mb-3 group-hover:text-navy transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-accent-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-accent text-sm mt-12 font-medium">
          All inspections include a detailed written report delivered the same
          day.
        </p>
      </div>
    </section>
  );
}
