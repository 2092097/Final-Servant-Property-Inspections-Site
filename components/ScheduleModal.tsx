"use client";

import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Check } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

type Role = "client" | "agent" | null;

const propertyTypes = [
  "Single Family Home",
  "Townhome / Condo",
  "Multi-Family (2–4 units)",
  "New Construction",
  "Mobile / Manufactured Home",
];

const timePreferences = ["Morning (8am–12pm)", "Afternoon (12pm–5pm)", "Either"];

const services = [
  "General Home Inspection",
  "Radon Testing",
  "Roof & Attic Inspection",
  "Electrical Systems Inspection",
  "Crawlspace Hazard Inspection",
  "Insulation & Ventilation Inspection",
  "Pre-Listing Inspection",
];

export default function ScheduleModal({ open, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>(null);
  const [form, setForm] = useState({
    address: "",
    city: "",
    state: "GA",
    zip: "",
    propertyType: "",
    sqFootage: "",
    yearBuilt: "",
    selectedServices: [] as string[],
    preferredDate: "",
    timePreference: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    notes: "",
  });

  if (!open) return null;

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleService = (s: string) =>
    setForm((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(s)
        ? prev.selectedServices.filter((x) => x !== s)
        : [...prev.selectedServices, s],
    }));

  const handleSubmit = () => {
    const subject = `Inspection Request – ${form.address}, ${form.city}, ${form.state}`;
    const body = `
NEW INSPECTION REQUEST

Role: ${role === "client" ? "Client" : "Real Estate Agent"}

PROPERTY
Address: ${form.address}
City: ${form.city}, ${form.state} ${form.zip}
Type: ${form.propertyType}
Sq Footage: ${form.sqFootage}
Year Built: ${form.yearBuilt}

SERVICES REQUESTED
${form.selectedServices.map((s) => `• ${s}`).join("\n")}

SCHEDULING
Preferred Date: ${form.preferredDate}
Preferred Time: ${form.timePreference}

CONTACT
Name: ${form.firstName} ${form.lastName}
Phone: ${form.phone}
Email: ${form.email}
Notes: ${form.notes}
    `.trim();

    window.location.href = `mailto:servantpropertyinspections@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStep(5);
  };

  const steps = ["Role", "Property", "Services", "Schedule"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-navy px-6 pt-6 pb-5 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <p className="text-brand-green text-xs font-semibold tracking-[0.2em] uppercase mb-1">
            Servant Property Inspections
          </p>
          <h2 className="font-serif text-white text-2xl leading-tight">
            Schedule Your Inspection
          </h2>
          <p className="text-white/50 text-sm mt-1">
            Complete your order in less than 5 minutes — as EZ as 1, 2, 3.
          </p>

          {/* Step indicators */}
          {step < 5 && (
            <div className="flex items-center gap-2 mt-4">
              {steps.map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-colors ${
                      step > i + 1
                        ? "bg-brand-green text-navy"
                        : step === i + 1
                        ? "bg-brand-green text-navy"
                        : "bg-white/10 text-white/40"
                    }`}
                  >
                    {step > i + 1 ? <Check className="w-3 h-3" /> : i + 1}
                  </div>
                  <span
                    className={`text-xs hidden sm:block ${
                      step === i + 1 ? "text-brand-green font-medium" : "text-white/30"
                    }`}
                  >
                    {label}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="h-px w-4 bg-white/20 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="px-6 py-6">

          {/* Step 1: Role */}
          {step === 1 && (
            <div>
              <h3 className="font-sans font-semibold text-navy text-lg mb-1">
                I am a…
              </h3>
              <p className="text-accent-light text-sm mb-6">
                Select your role to get started.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {(["client", "agent"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setRole(r);
                      setStep(2);
                    }}
                    className={`group flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 transition-all duration-200 ${
                      role === r
                        ? "border-brand-green bg-brand-green/5"
                        : "border-gray-200 hover:border-brand-green hover:bg-brand-green/5"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-navy/5 group-hover:bg-navy/10 flex items-center justify-center text-2xl transition-colors">
                      {r === "client" ? "🏠" : "🤝"}
                    </div>
                    <span className="font-semibold text-navy text-sm">
                      {r === "client" ? "Client / Buyer" : "Real Estate Agent"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Property Info */}
          {step === 2 && (
            <div>
              <h3 className="font-sans font-semibold text-navy text-lg mb-1">
                Property Information
              </h3>
              <p className="text-accent-light text-sm mb-6">
                Tell us about the property to be inspected.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      placeholder="Kennesaw"
                      value={form.city}
                      onChange={(e) => update("city", e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      placeholder="30152"
                      value={form.zip}
                      onChange={(e) => update("zip", e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                    Property Type *
                  </label>
                  <select
                    value={form.propertyType}
                    onChange={(e) => update("propertyType", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors bg-white"
                  >
                    <option value="">Select property type…</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                      Sq. Footage
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2,400"
                      value={form.sqFootage}
                      onChange={(e) => update("sqFootage", e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                      Year Built
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2005"
                      value={form.yearBuilt}
                      onChange={(e) => update("yearBuilt", e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Services */}
          {step === 3 && (
            <div>
              <h3 className="font-sans font-semibold text-navy text-lg mb-1">
                Select Your Services
              </h3>
              <p className="text-accent-light text-sm mb-6">
                Choose all inspections you'd like performed.
              </p>
              <div className="space-y-2">
                {services.map((s) => {
                  const checked = form.selectedServices.includes(s);
                  return (
                    <button
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-left transition-all duration-150 ${
                        checked
                          ? "border-brand-green bg-brand-green/5"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-colors ${
                          checked
                            ? "bg-brand-green border-brand-green"
                            : "border-gray-300"
                        }`}
                      >
                        {checked && <Check className="w-3 h-3 text-navy" />}
                      </div>
                      <span className="text-sm font-medium text-navy">{s}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4: Schedule & Contact */}
          {step === 4 && (
            <div>
              <h3 className="font-sans font-semibold text-navy text-lg mb-1">
                Schedule & Contact
              </h3>
              <p className="text-accent-light text-sm mb-6">
                When works best for you? We'll confirm your appointment promptly.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={form.preferredDate}
                      onChange={(e) => update("preferredDate", e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                      Preferred Time
                    </label>
                    <select
                      value={form.timePreference}
                      onChange={(e) => update("timePreference", e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors bg-white"
                    >
                      <option value="">Select…</option>
                      {timePreferences.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="First"
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Last"
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 555-5555"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    placeholder="Anything we should know about the property or inspection…"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-brand-green transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-5">
                <Check className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-serif text-navy text-2xl mb-3">
                Request Submitted!
              </h3>
              <p className="text-accent-light text-sm leading-relaxed max-w-xs mx-auto mb-6">
                Your inspection request has been sent. We'll contact you within one
                business day to confirm your appointment.
              </p>
              <p className="text-accent text-xs">
                Questions? Call us at{" "}
                <a href="tel:2026558567" className="text-brand-green font-semibold hover:underline">
                  202-655-8567
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Footer nav */}
        {step < 5 && (
          <div className="px-6 pb-6 flex items-center justify-between gap-3">
            <button
              onClick={() => (step === 1 ? onClose() : setStep((s) => s - 1))}
              className="flex items-center gap-1 text-sm text-accent hover:text-navy transition-colors font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              {step === 1 ? "Cancel" : "Back"}
            </button>

            {step < 4 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={step === 1 && !role}
                className="flex items-center gap-2 bg-brand-green text-navy font-bold text-sm px-6 py-3 rounded-lg hover:bg-brand-green-hi transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!form.firstName || !form.lastName || !form.phone || !form.email || !form.preferredDate}
                className="flex items-center gap-2 bg-brand-green text-navy font-bold text-sm px-6 py-3 rounded-lg hover:bg-brand-green-hi transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit Request
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {step === 5 && (
          <div className="px-6 pb-6 flex justify-center">
            <button
              onClick={() => { onClose(); setStep(1); setRole(null); }}
              className="bg-navy text-brand-green font-semibold text-sm px-6 py-3 rounded-lg hover:bg-navy-deep transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
