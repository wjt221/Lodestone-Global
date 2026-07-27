"use client";

import { useId, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const interests = [
  "Governance advisory",
  "Operating support (E3)",
  "Capital and investing",
  "Family advisory",
  "Not sure yet",
] as const;

/**
 * Accessible contact form with inline validation, a honeypot for spam
 * protection (least intrusive method, no dependency), and clear success and
 * error states. Until a form destination is configured (see CONTENT_NEEDED.md),
 * submission falls back to composing an email to inquire@lodestoneglobal.com so
 * the control is never a dead end.
 */
export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const orgId = useId();
  const interestId = useId();
  const messageId = useId();

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement) {
    const next: Record<string, string> = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!message) next.message = "Please add a short note about what you are working on.";

    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Honeypot: real users leave this hidden field empty.
    const trap = (form.elements.namedItem("company_website") as HTMLInputElement)?.value;
    if (trap) {
      setStatus("success");
      return;
    }

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    setStatus("submitting");

    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const org = String(data.get("organization") ?? "");
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "");

    // No live form endpoint is configured yet (see CONTENT_NEEDED.md).
    // Degrade gracefully to a pre-filled email rather than failing silently.
    try {
      const subject = encodeURIComponent(`Website inquiry from ${name || "a visitor"}`);
      const body = encodeURIComponent(
        [
          `Name: ${name}`,
          `Email: ${email}`,
          org ? `Organization: ${org}` : "",
          interest ? `Area of interest: ${interest}` : "",
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      );
      window.location.href = `mailto:inquire@lodestoneglobal.com?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-charcoal/15 bg-parchment/50 p-8"
      >
        <h3 className="font-serif text-xl font-normal text-navy">Thank you.</h3>
        <p className="mt-3 max-w-md font-sans text-[0.95rem] leading-relaxed text-charcoal/70">
          Your email client should now be open with your message ready to send. If it did not open,
          you can reach us directly at{" "}
          <a href="mailto:inquire@lodestoneglobal.com" className="border-b border-navy/40 text-navy">
            inquire@lodestoneglobal.com
          </a>
          . A member of the team will respond personally.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot field, visually hidden and off the tab order. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          id={nameId}
          name="name"
          label="Name"
          error={errors.name}
          autoComplete="name"
          required
        />
        <Field
          id={emailId}
          name="email"
          type="email"
          label="Email"
          error={errors.email}
          autoComplete="email"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          id={orgId}
          name="organization"
          label="Company or family office"
          autoComplete="organization"
        />
        <div className="flex flex-col gap-2">
          <label htmlFor={interestId} className="font-sans text-[0.8rem] uppercase tracking-[0.08em] text-charcoal/60">
            Area of interest
          </label>
          <select
            id={interestId}
            name="interest"
            defaultValue=""
            className="border border-charcoal/20 bg-ivory px-4 py-3 font-sans text-[0.95rem] text-charcoal focus:border-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
          >
            <option value="" disabled>
              Select one
            </option>
            {interests.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={messageId} className="font-sans text-[0.8rem] uppercase tracking-[0.08em] text-charcoal/60">
          What are you working on? <span className="text-brass">*</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          required
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
          className="border border-charcoal/20 bg-ivory px-4 py-3 font-sans text-[0.95rem] leading-relaxed text-charcoal focus:border-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
        />
        {errors.message && (
          <p id={`${messageId}-error`} className="font-sans text-[0.8rem] text-red-800">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="font-sans text-[0.85rem] text-red-800">
          Something went wrong. Please email{" "}
          <a href="mailto:inquire@lodestoneglobal.com" className="border-b border-current">
            inquire@lodestoneglobal.com
          </a>{" "}
          directly.
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-60">
          {status === "submitting" ? "Sending" : "Schedule a Conversation"}
        </button>
        <p className="font-sans text-[0.8rem] leading-relaxed text-charcoal/50">
          Every inquiry is treated as confidential.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  error,
  required,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-sans text-[0.8rem] uppercase tracking-[0.08em] text-charcoal/60">
        {label} {required && <span className="text-brass">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="border border-charcoal/20 bg-ivory px-4 py-3 font-sans text-[0.95rem] text-charcoal focus:border-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
      />
      {error && (
        <p id={`${id}-error`} className="font-sans text-[0.8rem] text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}
