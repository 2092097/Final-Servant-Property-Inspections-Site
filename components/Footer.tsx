import { Phone, Mail, MapPin, Globe } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep">
      {/* Top green accent */}
      <div className="h-0.5 bg-brand-green w-full" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div>
            <Logo variant="horizontal" iconSize={40} className="mb-5" />
            <p className="font-serif italic text-white/50 text-sm leading-relaxed max-w-xs">
              &ldquo;From anxious to assured — before you sign.&rdquo;
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand-green text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:2026558567"
                  className="flex items-center gap-2.5 text-white/50 hover:text-brand-green text-sm transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-brand-green/60 flex-shrink-0" />
                  202-655-8567
                </a>
              </li>
              <li>
                <a
                  href="mailto:servantpropertyinspections@gmail.com"
                  className="flex items-center gap-2.5 text-white/50 hover:text-brand-green text-sm transition-colors duration-200 break-all"
                >
                  <Mail className="w-4 h-4 text-brand-green/60 flex-shrink-0" />
                  servantpropertyinspections@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 text-brand-green/60 flex-shrink-0" />
                  Kennesaw, GA &amp; Metro Atlanta
                </span>
              </li>
              <li>
                <a
                  href="https://www.servantpropertyinspections.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/50 hover:text-brand-green text-sm transition-colors duration-200"
                >
                  <Globe className="w-4 h-4 text-brand-green/60 flex-shrink-0" />
                  servantpropertyinspections.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} Servant Property Inspections LLC. All rights
            reserved. &nbsp;·&nbsp; Kennesaw, GA &nbsp;·&nbsp; NACHI25012946
          </p>
          <div className="flex items-center gap-2 text-white/20 text-xs">
            <span>Licensed &amp; Insured</span>
            <span>·</span>
            <span>Veteran-Owned &amp; Operated</span>
            <span>·</span>
            <span>InterNACHI Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
