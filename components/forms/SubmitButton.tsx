"use client";

export type SubmitStatus = "idle" | "sending" | "sent" | "unconfigured";

export function SubmitButton({ status }: { status: SubmitStatus }) {
  return (
    <button
      disabled={status === "sending"}
      type="submit"
      className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-ink px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-paper transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100"
    >
      {status === "sending" && (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-90" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )}
      {status === "sending" ? "Sending…" : "Send enquiry"}
    </button>
  );
}

export function FormStatusMessage({ status }: { status: SubmitStatus }) {
  if (status === "sent") {
    return (
      <p key="sent" className="animate-rise mt-4 flex items-center gap-2 text-sm font-medium text-emerald-700" role="status">
        <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-emerald-700 text-paper">
          <svg className="h-2.5 w-2.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10.5 8 14l8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        Thank you. We&apos;ll get back to you within 1 hour.
      </p>
    );
  }
  if (status === "unconfigured") {
    return (
      <p key="unconfigured" className="animate-rise mt-4 flex items-center gap-2 text-sm font-medium text-red-700" role="alert">
        <svg className="h-4 w-4 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M8.28 3.35a1.94 1.94 0 0 1 3.44 0l6.4 11.98c.72 1.34-.25 2.97-1.72 2.97H3.6c-1.47 0-2.44-1.63-1.72-2.97L8.28 3.35ZM10 7a1 1 0 0 1 1 1v3.25a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm0 8.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Z" clipRule="evenodd" />
        </svg>
        The enquiry service is not configured yet. Please try again later.
      </p>
    );
  }
  return null;
}
