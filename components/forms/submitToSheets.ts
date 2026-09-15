"use client";

export type WebsiteFormType = "franchisee" | "contact";

export class FormSubmissionError extends Error {
  constructor(public readonly reason: "unconfigured" | "delivery") {
    super(reason === "unconfigured" ? "Form automation has not been configured." : "The enquiry could not be delivered.");
    this.name = "FormSubmissionError";
  }
}

export async function submitToSheets(formType: WebsiteFormType, values: FormData) {
  const endpoint = process.env.NEXT_PUBLIC_FORM_AUTOMATION_URL?.trim();
  if (!endpoint) throw new FormSubmissionError("unconfigured");

  try {
    await fetch(endpoint, {
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
    });
  } catch {
    throw new FormSubmissionError("delivery");
  }
}
