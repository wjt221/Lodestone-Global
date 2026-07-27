import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Kicker } from "@/components/Kicker";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a confidential conversation with Lodestone about governance, operating support, capital, or family advisory.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Lodestone",
    description: "Start a confidential conversation with Lodestone.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="bg-navy pt-[4.25rem] text-ivory">
          <div className="mx-auto w-full max-w-container px-6 md:px-10 lg:px-16">
            <div className="flex flex-col gap-6 py-20 md:py-24">
              <Kicker>Contact</Kicker>
              <h1 className="max-w-3xl font-serif text-display-1 font-semibold text-ivory">
                Begin with the decision in front of you.
              </h1>
              <p className="max-w-2xl font-sans text-lg leading-relaxed text-ivory/75">
                Whether the immediate need is governance, operating support, capital allocation, or
                family coordination, the first step is a confidential conversation.
              </p>
            </div>
          </div>
        </section>

        <Section tone="light">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="flex flex-col gap-8 lg:col-span-4 lg:col-start-9">
              <div className="flex flex-col gap-2 border-t border-charcoal/15 pt-6">
                <h2 className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass">
                  Email
                </h2>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-serif text-lg font-normal text-navy hover:text-brass"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex flex-col gap-2 border-t border-charcoal/15 pt-6">
                <h2 className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass">
                  Office
                </h2>
                <p className="font-serif text-lg font-normal text-navy">{CONTACT.location}</p>
              </div>
              <div className="flex flex-col gap-2 border-t border-charcoal/15 pt-6">
                <h2 className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass">
                  LinkedIn
                </h2>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg font-normal text-navy hover:text-brass"
                >
                  Lodestone Global
                </a>
              </div>
            </aside>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
