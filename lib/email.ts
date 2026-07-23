import { Resend } from "resend";
import { SITE_NAME } from "./site";

/**
 * Transactional email via Resend. Server-only. Each function throws if
 * RESEND_API_KEY is unset so callers can fail loudly rather than silently
 * dropping a delivery. The From address must be on a Resend-verified domain
 * (set REPORTS_FROM, defaults to reports@lodestoneglobal.com).
 */

function client(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

const FROM = () => process.env.REPORTS_FROM || `${SITE_NAME} <reports@lodestoneglobal.com>`;
const INBOX = () => process.env.REPORTS_INBOX || "inquire@lodestoneglobal.com";

export async function sendReportDownload(to: string, editionYear: string, url: string) {
  await client().emails.send({
    from: FROM(),
    to,
    subject: `Your ${editionYear} Private Company Board Compensation Survey`,
    html: `<p>Thank you for your purchase.</p>
<p>You can download the ${editionYear} Private Company Board Compensation Survey using the private link below. The link expires in seven days.</p>
<p><a href="${url}">Download the report</a></p>
<p>If you have any questions, reply to this email.</p>
<p>${SITE_NAME}</p>`,
  });
}

export async function sendFreeReport(to: string, name: string, url: string) {
  await client().emails.send({
    from: FROM(),
    to,
    subject: `Your complimentary Private Company Board Compensation summary`,
    html: `<p>Hello ${name || "there"},</p>
<p>Thank you for your interest. You can download the complimentary summary using the private link below.</p>
<p><a href="${url}">Download the summary</a></p>
<p>${SITE_NAME}</p>`,
  });
}

export async function notifyInbox(subject: string, lines: string[]) {
  await client().emails.send({
    from: FROM(),
    to: INBOX(),
    subject,
    html: lines.map((l) => `<p>${l}</p>`).join(""),
  });
}
