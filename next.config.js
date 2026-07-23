/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/ecosystem", destination: "/about#ecosystem", permanent: true },
      { source: "/ecosystem/govern", destination: "/governance-advisory", permanent: true },
      { source: "/ecosystem/scale", destination: "/e3-scale-network", permanent: true },
      { source: "/ecosystem/compound", destination: "/lodestone-capital", permanent: true },
      { source: "/ecosystem/steward", destination: "/family-advisors", permanent: true },
      // Migrated blog posts (old Wix /post/<slug> -> new on-site articles)
      {
        source: "/post/lodestone-capital-leads-7-million-investment-in-blulabs-to-expand-global-supply-chain-platform",
        destination: "/insights/lodestone-capital-blulabs-investment",
        permanent: true,
      },
      {
        source: "/post/how-to-improve-your-board-s-performance-best-practices-and-strategies",
        destination: "/insights/improving-board-performance",
        permanent: true,
      },
      {
        source: "/post/is-diversity-on-boards-critical-for-success",
        destination: "/insights/board-diversity-and-performance",
        permanent: true,
      },
      {
        source: "/post/get-the-best-of-the-best-strategies-for-attracting-top-board-members",
        destination: "/insights/attracting-top-board-members",
        permanent: true,
      },
      {
        source: "/post/are-you-ready-for-a-high-performance-advisory-board-key-indicators-and-steps-for-success",
        destination: "/insights/advisory-board-readiness",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
