"use client";

import { useState } from "react";

/**
 * Starts on-site Stripe checkout for a report. If checkout is not yet
 * configured (503) or errors, falls back to the existing store URL so the
 * button always works during the migration.
 */
export function BuyReportButton({
  slug,
  fallbackUrl,
  className = "btn-primary",
  label = "Purchase",
}: {
  slug: string;
  fallbackUrl: string;
  className?: string;
  label?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function onClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      if (res.ok) {
        const data = (await res.json()) as { url?: string };
        if (data.url) {
          window.location.href = data.url;
          return;
        }
      }
      window.open(fallbackUrl, "_blank", "noopener,noreferrer");
    } catch {
      window.open(fallbackUrl, "_blank", "noopener,noreferrer");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button type="button" onClick={onClick} disabled={loading} className={`${className} disabled:opacity-60`}>
      {loading ? "Starting" : label}
    </button>
  );
}
