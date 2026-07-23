"use client";

import { useId, useState } from "react";

type Status = "closed" | "open" | "submitting" | "success" | "error";

/**
 * Gated free-summary request: a quiet link that expands into a name + email
 * form, posts to /api/free-report, and confirms delivery. No payment, no
 * separate page — the free summary is the "sample" for a report edition.
 */
export function FreeSampleForm({ slug, year }: { slug: string; year: string }) {
  const nameId = useId();
  const emailId = useId();
  const [status, setStatus] = useState<Status>("closed");
  const [error, setError] = useState<string | undefined>();

  if (status === "closed") {
    return (
      <button
        type="button"
        onClick={() => setStatus("open")}
        className="font-sans text-[0.78rem] uppercase tracking-[0.08em] text-navy/70 underline decoration-navy/30 underline-offset-4 hover:text-brass"
      >
        Get the free summary
      </button>
    );
  }

  if (status === "success") {
    return (
      <p role="status" className="font-sans text-[0.9rem] text-charcoal/70">
        Thank you. Check your email for the {year} summary.
      </p>
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const trap = (form.elements.namedItem("company_website") as HTMLInputElement)?.value;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim() ?? "";

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setStatus("submitting");
    setError(undefined);

    try {
      const res = await fetch("/api/free-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, name, email, company_website: trap }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("open");
        return;
      }
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("open");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 border border-charcoal/15 bg-parchment/40 p-5">
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={`${nameId}-trap`}>Company website</label>
        <input id={`${nameId}-trap`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="font-sans text-[0.85rem] text-charcoal/70">
        Enter your name and email and we will send the free {year} summary.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor={nameId} className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-charcoal/55">
            Name
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            className="border border-charcoal/20 bg-ivory px-3 py-2 font-sans text-[0.9rem] text-charcoal focus:border-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={emailId} className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-charcoal/55">
            Email <span className="text-brass">*</span>
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={error ? "true" : undefined}
            className="border border-charcoal/20 bg-ivory px-3 py-2 font-sans text-[0.9rem] text-charcoal focus:border-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
          />
        </div>
      </div>
      {error && (
        <p role="alert" className="font-sans text-[0.8rem] text-red-800">
          {error}
        </p>
      )}
      <div className="flex items-center gap-4 pt-1">
        <button type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-60">
          {status === "submitting" ? "Sending" : "Send the summary"}
        </button>
        <button
          type="button"
          onClick={() => setStatus("closed")}
          className="font-sans text-[0.78rem] uppercase tracking-[0.06em] text-charcoal/50 hover:text-charcoal"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
