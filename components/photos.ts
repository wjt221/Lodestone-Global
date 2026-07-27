/**
 * Site photography. Every entry is used in exactly one place (see the grep
 * check in git history before adding a new consumer) to avoid the same image
 * recurring across unrelated pages. `closing` is the one deliberate
 * exception: a shared "legacy" motif that bookends the three general-purpose
 * pages (home, about, insights) as a recurring editorial device.
 *
 * NOTE ON PROVENANCE: this environment cannot fetch or preview external
 * images (confirmed: both direct HTTP and WebFetch return policy-level 403s
 * for images.unsplash.com), so every URL below was selected from training
 * knowledge of Unsplash's catalog, not visually verified. Treat the alt text
 * as a specification of intended subject matter and check the live site;
 * swap any image that doesn't match what its alt text and page context call
 * for. Replacing all of this with licensed Lodestone photography remains the
 * long-term goal (see CONTENT_NEEDED.md).
 */
export const photos = {
  hero: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2400&q=85",
    alt: "A founder in unguarded conversation with a senior advisor across a table, mid-discussion rather than posed",
  },
  homeQuestions: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=85",
    alt: "Two executives in a focused one-on-one conversation, leaning in rather than facing the camera",
  },
  homeStatementBand: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85",
    alt: "The interior of a well-built commercial structure, columns and light suggesting scale and permanence",
  },
  homeWhyLodestone: {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85",
    alt: "Structural steel framing on an active construction site, an operating business being built in real time",
  },
  aboutMasthead: {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2400&q=85",
    alt: "Leaders of a private company in an unposed working conversation",
  },
  govern: {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=85",
    alt: "A boardroom table between meetings, papers and chairs suggesting recent serious use rather than a staged set",
  },
  scale: {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2400&q=85",
    alt: "A wide view of an industrial manufacturing floor with operating equipment and visible activity",
  },
  compound: {
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=85",
    alt: "Documents and materials laid out during a capital allocation discussion, not a trading screen",
  },
  steward: {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=85",
    alt: "A family walking together outdoors, understated rather than sentimental, suggesting continuity across generations",
  },
  caseStudiesMasthead: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2400&q=85",
    alt: "A small group of colleagues in serious, close discussion around a table",
  },
  leadership1: {
    src: "/images/lodestone/leadership-1.jpg",
    alt: "Portrait of a Lodestone leader",
  },
  leadership2: {
    src: "/images/lodestone/leadership-2.jpg",
    alt: "Portrait of a Lodestone leader",
  },
  closing: {
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2400&q=85",
    alt: "A stone architectural facade, representing permanence and legacy",
  },
} as const;

/**
 * Per-business closing photography for the four BusinessPage instances, so
 * the final CTA doesn't repeat the same image across Governance Advisory,
 * E3, Lodestone Capital, and Family Advisors. Distinct from each business's
 * own masthead photo above.
 */
export const businessClosingPhotos = {
  govern: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=85",
    alt: "Leaders reviewing physical plans and printed materials spread across a table",
  },
  scale: {
    src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=2400&q=85",
    alt: "An operating partner walking the floor of a manufacturing business alongside its team",
  },
  compound: {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=85",
    alt: "An aerial view of infrastructure and built environment, suggesting long-term capital at scale",
    objectPosition: "top",
  },
  steward: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
    alt: "The restrained exterior of an established estate, suggesting permanence rather than display",
    objectPosition: "top",
  },
} as const;
