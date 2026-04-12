"use client";

import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex-shrink-0"
          aria-label="Servant Property Inspections — Home"
        >
          <Logo variant="horizontal" iconSize={40} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-white/80 hover:text-brand-green text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:2026558567"
          className="hidden md:inline-flex items-center gap-2 bg-brand-green text-navy font-bold text-sm px-5 py-2.5 rounded-md hover:bg-brand-green-hi transition-colors duration-200"
          aria-label="Call us at 202-655-8567"
        >
          <Phone className="w-4 h-4" />
          Book Inspection
        </a>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden text-white p-2 hover:text-brand-green transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-navy border-navy-deep">
            <SheetHeader className="mb-8 mt-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <Logo variant="horizontal" iconSize={36} />
            </SheetHeader>

            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/80 hover:text-brand-green hover:bg-white/5 px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>

            <div className="mt-8 px-4">
              <a
                href="tel:2026558567"
                className="flex items-center justify-center gap-2 bg-brand-green text-navy font-bold text-base w-full py-4 rounded-md hover:bg-brand-green-hi transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Call 202-655-8567
              </a>
              <a
                href="mailto:servantpropertyinspections@gmail.com"
                className="flex items-center justify-center gap-2 border-2 border-brand-green text-brand-green font-semibold text-sm w-full py-3 rounded-md hover:bg-brand-green/10 transition-colors duration-200 mt-3"
              >
                Email Us
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
