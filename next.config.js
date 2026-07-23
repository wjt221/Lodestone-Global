/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
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
      // Old Wix service pages -> Governance Advisory
      { source: "/build", destination: "/governance-advisory", permanent: true },
      { source: "/optimize", destination: "/governance-advisory", permanent: true },
      { source: "/compensate", destination: "/governance-advisory", permanent: true },
      { source: "/educate", destination: "/governance-advisory", permanent: true },
      { source: "/seminars", destination: "/governance-advisory", permanent: true },
      { source: "/qdd", destination: "/governance-advisory", permanent: true },
      // Old Wix research/store pages -> Research
      { source: "/reports", destination: "/research", permanent: true },
      { source: "/shop", destination: "/research", permanent: true },
      // Old Wix store product pages -> new research edition pages
      // (the current edition is shown inline on /research itself)
      { source: "/product-page/2026-private-company-board-compensation-survey", destination: "/research", permanent: true },
      { source: "/product-page/2025-private-company-board-compensation-survey", destination: "/research/2025-private-company-board-compensation-survey", permanent: true },
      { source: "/product-page/2024-private-company-board-compensation-survey", destination: "/research/2024-private-company-board-compensation-survey", permanent: true },
      { source: "/product-page/2023-private-company-board-compensation-survey", destination: "/research/2023-private-company-board-compensation-survey", permanent: true },
      { source: "/product-page/2022-private-company-board-compensation-survey", destination: "/research/2022-private-company-board-compensation-survey", permanent: true },
      { source: "/product-page/2021-private-company-board-compensation-survey", destination: "/research/2021-private-company-board-compensation-survey", permanent: true },
      { source: "/product-page/2020-private-company-board-compensation-survey", destination: "/research/2020-private-company-board-compensation-survey", permanent: true },
      { source: "/product-page/2019-private-company-board-compensation-survey", destination: "/research/2019-private-company-board-compensation-survey", permanent: true },
      { source: "/product-page/2017-2018-private-company-board-compensation-survey", destination: "/research/2017-2018-private-company-board-compensation-survey", permanent: true },
      { source: "/product-page/2016-private-company-board-compensation-survey", destination: "/research/2016-private-company-board-compensation-survey", permanent: true },
      // Old Wix entity pages -> new business pages
      { source: "/capital", destination: "/lodestone-capital", permanent: true },
      { source: "/lodestone-family-advisors", destination: "/family-advisors", permanent: true },
      // Team / leadership -> About
      { source: "/team", destination: "/about", permanent: true },
      { source: "/williamtenenbaum", destination: "/about", permanent: true },
      { source: "/marissalevin", destination: "/about", permanent: true },
      // Legal
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      // Remaining blog posts (newer /post/* and older date-path) -> Insights index
      { source: "/post/:slug*", destination: "/insights", permanent: true },
      { source: "/:year(\\d{4})/:rest*", destination: "/insights", permanent: true },
    ];
  },
};

module.exports = nextConfig;
