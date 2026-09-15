"use client";

import { useState } from "react";
import { submitToSheets } from "@/components/forms/submitToSheets";
import { FormStatusMessage, SubmitButton } from "@/components/forms/SubmitButton";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "unconfigured">("idle");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      await submitToSheets("contact", new FormData(form));
      form.reset();
      setStatus("sent");
    } catch { setStatus("unconfigured"); }
  }
  return <form onSubmit={submit} className="rounded-xl border border-ink/15 bg-white p-5 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" name="name" /><Field label="Email" name="email" type="email" /></div><div className="mt-5"><Field label="Phone" name="phone" type="tel" /></div><label className="mt-5 block text-sm font-bold uppercase tracking-wide">Message<textarea name="message" required rows={8} className="mt-2 w-full rounded-lg border border-ink/20 px-4 py-3 text-base font-normal normal-case tracking-normal outline-none transition-colors focus:border-ink" /></label><SubmitButton status={status} /><FormStatusMessage status={status} /></form>;
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) { return <label className="block text-sm font-bold uppercase tracking-wide">{label}<input name={name} type={type} required className="mt-2 w-full rounded-lg border border-ink/20 px-4 py-3 text-base font-normal normal-case tracking-normal outline-none transition-colors focus:border-ink" /></label>; }
