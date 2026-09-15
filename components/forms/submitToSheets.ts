"use client";

export type WebsiteFormType = "franchisee" | "contact";

export class FormSubmissionError extends Error {
  constructor() {
    super("Form automation has not been configured.");
    this.name = "FormSubmissionError";
  }
}

// The request itself resolves almost instantly (it's fire-and-forget below),
// so the caller's "sending" state gets held open for at least this long —
// otherwise the submit button's loading spinner flashes and disappears
// before anyone can see it.
const MIN_SENDING_MS = 450;

export function submitToSheets(formType: WebsiteFormType, values: FormData) {
  const endpoint = process.env.NEXT_PUBLIC_FORM_AUTOMATION_URL?.trim();
  if (!endpoint) throw new FormSubmissionError();

  // Apps Script writes the row before it redirects to googleusercontent.com.
  // Browsers may block that final cross-origin redirect even after the row has
  // been recorded, so it cannot be used as the client-side success signal.
  void fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      formType,
      name: values.get("name"),
      email: values.get("email"),
      phone: values.get("phone"),
      message: values.get("message"),
    }),
  }).catch(() => {
    // The direct Apps Script request has already been dispatched. Its final
    // redirect is not readable from this static site, so do not show a false
    // failure after a row has been successfully written.
  });

  return new Promise<void>((resolve) => setTimeout(resolve, MIN_SENDING_MS));
}
