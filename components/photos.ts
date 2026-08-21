/**
 * Site photography. Every entry is used in exactly one place (see the grep
 * check in git history before adding a new consumer) to avoid the same image
 * recurring across unrelated pages. `closing` is the one deliberate
 * exception: a shared "legacy" motif that bookends the three general-purpose
 * pages (home, about, insights) as a recurring editorial device.
 *
 * NOTE ON PROVENANCE: entries under /images/lodestone/ are real, licensed
 * Lodestone photography, pulled from the firm's Wix media export and
 * visually reviewed before use (hero, govern, compound, homeStatementBand,
 * closing). The remaining https://images.unsplash.com/... entries are
 * stock placeholders selected from training knowledge of Unsplash's catalog
 * and NOT visually verified -- this environment cannot fetch them (policy
 * 403s on images.unsplash.com). Treat their alt text as a spec of intended
 * subject matter, and replace them with licensed Lodestone photography as it
 * becomes available (the Wix export also holds industrial/operating and
 * family/continuity candidates for scale, steward and homeWhyLodestone;
 * see CONTENT_NEEDED.md and docs/).
 */
export const photos = {
  hero: {
    src: "/images/lodestone/hero-boardroom.jpg",
    alt: "A private-company boardroom between meetings, table and chairs set for a working session",
  },
  homeQuestions: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=85",
    alt: "Two executives in a focused one-on-one conversation, leaning in rather than facing the camera",
  },
  homeStatementBand: {
    src: "/images/lodestone/statement-architecture.jpg",
    alt: "Commercial towers seen from below, converging lines suggesting scale and permanence",
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
    src: "/images/lodestone/govern-boardroom.jpg",
    alt: "A bright, spare meeting room set for a board session, chairs drawn to a long table",
  },
  scale: {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2400&q=85",
    alt: "A wide view of an industrial manufacturing floor with operating equipment and visible activity",
  },
  compound: {
    src: "/images/lodestone/capital-blulabs.jpg",
    alt: "A Lodestone Capital portfolio company: a founder- and family-led supply chain and manufacturing business",
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
    src: "/images/lodestone/closing-skyline.jpg",
    alt: "A city skyline at dusk, representing permanence and legacy",
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
