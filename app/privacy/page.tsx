import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Kicker } from "@/components/Kicker";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Lodestone Global handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "Information we collect",
    body: "When you contact us through this site, we collect the information you choose to provide, such as your name, email address, organization, and the message you send. We do not sell personal information.",
  },
  {
    heading: "How we use it",
    body: "We use the information you submit only to respond to your inquiry and to communicate with you about a potential or existing engagement.",
  },
  {
    heading: "How we protect it",
    body: "Inquiries are treated as confidential and shared only with the members of the team who need them to respond.",
  },
  {
    heading: "Your choices",
    body: "You may ask us to correct or delete the information you have provided at any time by contacting us.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="bg-navy pt-[4.25rem] text-ivory">
          <div className="mx-auto w-full max-w-container px-6 md:px-10 lg:px-16">
            <div className="flex flex-col gap-4 py-16 md:py-20">
              <Kicker>Privacy</Kicker>
              <h1 className="font-serif text-display-2 font-semibold text-ivory">Privacy statement</h1>
            </div>
          </div>
        </section>

        <Section tone="light">
          <div className="flex max-w-prose flex-col gap-10">
            {sections.map((s) => (
              <div key={s.heading} className="flex flex-col gap-3 border-t border-charcoal/15 pt-6">
                <h2 className="font-serif text-xl font-normal text-navy">{s.heading}</h2>
                <p className="font-sans text-[0.98rem] leading-relaxed text-charcoal/75">{s.body}</p>
              </div>
            ))}
            <p className="font-sans text-[0.9rem] leading-relaxed text-charcoal/80">
              Questions about this statement can be directed to{" "}
              <a href={`mailto:${CONTACT.email}`} className="border-b border-navy/40 text-navy">
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
