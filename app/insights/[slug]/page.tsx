import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { articles, getArticle, getArticleHtml } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url: `/insights/${article.slug}`,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const html = getArticleHtml(article.slug);
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: article.title, path: `/insights/${article.slug}` },
          ]),
          articleJsonLd(article),
        ]}
      />
      <Header />
      <main id="main">
        <section className="bg-navy pt-[4.25rem] text-ivory">
          <Container className="flex flex-col gap-6 py-16 md:py-20">
            <Link
              href="/insights"
              className="w-fit font-sans text-[0.75rem] uppercase tracking-[0.1em] text-ivory/60 hover:text-brass-light"
            >
              ← Insights
            </Link>
            <div className="flex items-center gap-4">
              <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass-light">
                {article.category}
              </span>
              <span className="font-sans text-[0.8rem] text-ivory/50">
                {formattedDate} · {article.minutesToRead} min read
              </span>
            </div>
            <h1 className="max-w-3xl font-serif text-display-2 font-normal text-ivory">
              {article.title}
            </h1>
          </Container>
        </section>

        <Section tone="light">
          <article
            className="article-prose max-w-prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <p className="mt-12 max-w-prose border-t border-charcoal/15 pt-6 font-sans text-[0.8rem] text-charcoal/45">
            Published by Lodestone Global.
          </p>
        </Section>

        <section className="bg-navy py-20 md:py-24">
          <Container>
            <CTASection
              title="Talk with us about your board."
              description="If a governance question is on your mind, a first conversation is confidential and carries no obligation."
              align="left"
            />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
