import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
    description: article.description || article.summary,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url: `/insights/${article.slug}`,
      publishedTime: article.publishedAt || article.date,
      modifiedTime: article.modifiedAt,
      images: article.image ? [article.image.src] : undefined,
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
        <section className="bg-white pt-[4.25rem] text-[#10243a]">
          <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16 lg:px-16">
            <Link href="/insights" className="inline-flex min-h-[44px] items-center text-base font-medium text-[#526478]">← All insights</Link>
            <div className="mt-7 max-w-5xl"><div className="flex flex-wrap items-center gap-4 text-base text-[#526478]"><span>{article.category}</span><time dateTime={article.date}>{formattedDate}</time><span>{article.archiveEntry?"From the archive":article.minutesToRead+" min read"}</span></div>
            <h1 className="mt-6 text-[clamp(2.9rem,6vw,6rem)] font-normal leading-[1.02] tracking-[-.055em]">{article.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#526478]">{article.summary}</p><p className="mt-6 text-base font-medium">Published by Lodestone Global</p></div>
          </div>
          {article.image&&<div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16"><div className="relative aspect-[16/7] overflow-hidden bg-[#e8eff5]"><img src={article.image.src} alt="" className="h-full w-full object-cover" /></div></div>}
        </section>
        <section className="mx-auto grid max-w-[1440px] items-start gap-12 px-6 py-14 md:px-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20 lg:px-16">
          <div>{article.archiveEntry&&<p className="mb-8 border-l-2 border-[#a5b9cb] pl-4 text-base leading-relaxed text-[#526478]">From our original publication archive. Where the post links to an external publication or video, the original link is retained.</p>}
          <article className="article-prose max-w-[760px] [&_img]:h-auto [&_img]:max-w-full [&_a]:break-words" dangerouslySetInnerHTML={{__html:html}}/>
          <p className="mt-12 border-t border-[#d5dde5] pt-6 text-sm text-[#526478]">Originally published {formattedDate}. Historical research and client examples are presented in their original context.</p></div>
          <aside className="border-t border-[#d5dde5] pt-6 lg:sticky lg:top-24"><h2 className="mt-4 text-2xl font-normal tracking-tight">{article.category==="Board compensation"?"Benchmark your board":article.category==="Board performance"?"Strengthen your board":article.category==="Director recruitment"?"Find the right directors":"Build a high-performing board"}</h2><p className="mt-4 text-base leading-relaxed text-[#526478]">Explore Lodestone's services and proprietary research.</p><Link href={article.category==="Board compensation"?"/research":article.category==="Board performance"?"/governance-advisory#board-optimization":article.category==="Director recruitment"?"/governance-advisory#director-and-executive-search":"/governance-advisory#board-formation"} className="mt-6 inline-flex min-h-[44px] items-center border-b border-[#10243a] pb-2 text-base font-medium">Explore our services ↗</Link><div className="mt-9 border-t border-[#d5dde5] pt-6"><p className="text-sm font-medium text-[#526478]">Related reading</p>{articles.filter(a=>a.slug!==article.slug&&a.category===article.category).slice(0,3).map(a=><Link key={a.slug} href={"/insights/"+a.slug} className="block border-b border-[#d5dde5] py-4 text-base leading-snug hover:underline">{a.title} ↗</Link>)}</div></aside>
        </section>

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
