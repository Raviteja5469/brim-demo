"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/site";

type Values = {
  firstName: string; lastName: string; experience: string; territory: string;
  format: string; funds: string; funding: string; email: string; phone: string; consent: boolean;
};

const EMPTY: Values = { firstName: "", lastName: "", experience: "", territory: "", format: "", funds: "", funding: "", email: "", phone: "", consent: false };
const STEPS = ["You", "Investment", "Contact"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d][\d\s().-]{6,}$/;

export function FranchiseForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function set<K extends keyof Values>(field: K, value: Values[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  }

  function validateStep() {
    const next: Record<string, string> = {};
    if (step === 0) {
      if (!values.firstName.trim()) next.firstName = "Enter your first name.";
      if (!values.lastName.trim()) next.lastName = "Enter your last name.";
      if (!values.experience) next.experience = "Select your operating experience.";
      if (!values.territory.trim()) next.territory = "Enter your preferred territory.";
    }
    if (step === 1) {
      if (!values.format) next.format = "Select a store format.";
      if (!values.funds) next.funds = "Select your available funds.";
      if (!values.funding) next.funding = "Tell us about your funding position.";
    }
    if (step === 2) {
      if (!EMAIL_RE.test(values.email.trim())) next.email = "Enter a valid email address.";
      if (!PHONE_RE.test(values.phone.trim())) next.phone = "Enter a valid phone number.";
      if (!values.consent) next.consent = "Consent is required before submitting.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function nextStep() {
    if (validateStep()) setStep((current) => Math.min(current + 1, 2));
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!validateStep()) return;
    const subject = encodeURIComponent(`Franchise enquiry — ${values.territory}`);
    const body = encodeURIComponent([
      `Name: ${values.firstName} ${values.lastName}`, `Email: ${values.email}`, `Phone: ${values.phone}`,
      `Territory: ${values.territory}`, `Experience: ${values.experience}`, `Preferred format: ${values.format}`,
      `Available funds: ${values.funds}`, `Funding position: ${values.funding}`,
    ].join("\n"));
    setSent(true);
    window.location.href = `mailto:${SITE.contact.franchiseEmail}?subject=${subject}&body=${body}`;
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-8 ring-1 ring-ink/10 sm:p-10" role="status">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-ink font-bold text-paper">✓</span>
        <h3 className="mt-6 font-display text-4xl uppercase">Your pack is unlocked</h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/60">Your email app has been opened with the enquiry ready to send. Send that message so the franchise team receives your lead alert.</p>
        <a href={asset("/BRIM-Franchise-Introduction.html")} download className="mt-7 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-transform duration-300 hover:scale-[1.03]">Download franchise pack</a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-8">
      <ol className="grid grid-cols-3 gap-2" aria-label="Enquiry progress">
        {STEPS.map((label, index) => (
          <li key={label} aria-current={step === index ? "step" : undefined}>
            <div className={`h-1.5 rounded-full transition-colors duration-300 ${index <= step ? "bg-ink" : "bg-ink/15"}`} />
            <span className={`mt-2 block text-xs font-bold uppercase tracking-wider ${index === step ? "text-ink" : "text-ink/40"}`}>{index + 1}. {label}</span>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        {step === 0 && (
          <fieldset>
            <legend className="font-display text-3xl uppercase">Tell us about you</legend>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Input id="firstName" label="First name" value={values.firstName} error={errors.firstName} autoComplete="given-name" onChange={(value) => set("firstName", value)} />
              <Input id="lastName" label="Last name" value={values.lastName} error={errors.lastName} autoComplete="family-name" onChange={(value) => set("lastName", value)} />
              <Select id="experience" label="Operating experience" value={values.experience} error={errors.experience} onChange={(value) => set("experience", value)} options={["No restaurant experience", "Owner / operator", "Multi-site operator", "Hospitality leadership", "Other business experience"]} />
              <Input id="territory" label="Preferred city / territory" value={values.territory} error={errors.territory} autoComplete="address-level2" onChange={(value) => set("territory", value)} />
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend className="font-display text-3xl uppercase">Your investment</legend>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Select id="format" label="Preferred format" value={values.format} error={errors.format} onChange={(value) => set("format", value)} options={["Delivery kitchen — from £165K", "Food court — from £229.9K", "High street — from £272.6K", "Flagship — from £348.6K", "Open to recommendation"]} />
              <Select id="funds" label="Available liquid funds" value={values.funds} error={errors.funds} onChange={(value) => set("funds", value)} options={["Under £100K", "£100K–£174K", "£175K–£249K", "£250K–£349K", "£350K+"]} />
              <div className="sm:col-span-2"><Select id="funding" label="Funding position" value={values.funding} error={errors.funding} onChange={(value) => set("funding", value)} options={["Self-funded", "Funding agreed", "Seeking bank financing", "Investment partners", "Still exploring"]} /></div>
            </div>
            <p className="mt-5 text-xs text-ink/45">All cost figures are indicative, confirmed after site inspection.</p>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="font-display text-3xl uppercase">How should we reach you?</legend>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Input id="email" label="Email" type="email" value={values.email} error={errors.email} autoComplete="email" onChange={(value) => set("email", value)} />
              <Input id="phone" label="Phone" type="tel" value={values.phone} error={errors.phone} autoComplete="tel" onChange={(value) => set("phone", value)} />
            </div>
            <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-ink/60">
              <input type="checkbox" checked={values.consent} onChange={(event) => set("consent", event.target.checked)} className="mt-0.5 h-4 w-4 accent-ink" />
              <span>I agree that BRIM Burgers may use these details to assess and contact me about this franchise enquiry.</span>
            </label>
            {errors.consent && <p className="mt-2 text-xs text-red-600">{errors.consent}</p>}
          </fieldset>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-ink/10 pt-6">
        {step > 0 ? <button type="button" onClick={() => setStep((current) => current - 1)} className="rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-ink/5">Back</button> : <span />}
        {step < 2
          ? <button type="button" onClick={nextStep} className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-transform duration-300 hover:scale-[1.03]">Continue</button>
          : <button type="submit" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-transform duration-300 hover:scale-[1.03]">Submit & unlock pack</button>}
      </div>
    </form>
  );
}

function Input({ id, label, value, onChange, error, type = "text", autoComplete }: { id: string; label: string; value: string; onChange: (value: string) => void; error?: string; type?: string; autoComplete: string }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/55">{label}</span>
      <input id={id} name={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} autoComplete={autoComplete} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={`w-full rounded-xl border bg-paper px-4 py-3 text-ink outline-none transition-colors duration-300 ${error ? "border-red-500" : "border-ink/15 focus:border-ink/45"}`} />
      {error && <span id={`${id}-error`} className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

function Select({ id, label, value, onChange, error, options }: { id: string; label: string; value: string; onChange: (value: string) => void; error?: string; options: string[] }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/55">{label}</span>
      <select id={id} name={id} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={`w-full rounded-xl border bg-paper px-4 py-3 text-ink outline-none transition-colors duration-300 ${error ? "border-red-500" : "border-ink/15 focus:border-ink/45"}`}>
        <option value="">Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}
      </select>
      {error && <span id={`${id}-error`} className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
