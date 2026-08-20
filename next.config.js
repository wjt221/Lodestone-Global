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
      // ---------------------------------------------------------------
      // LEGACY WIX URLS
      //
      // The live Wix blog serves every post under /single-post/, confirmed from
      // the rendered rel=canonical on all 33 posts. The /post/* rules below this
      // block never matched real traffic. These are 2015-2017 URLs: the oldest on
      // the domain and the likeliest to hold external backlinks.
      //
      // Ordering matters: Next.js takes the first match, so the specific rules
      // must stay above the /single-post/:slug* and /post/:slug* catch-alls.
      // ---------------------------------------------------------------
      // --- Migrated posts: real 1:1 replacements ---
      { source: "/single-post/lodestone-capital-leads-7-million-investment-in-blulabs-to-expand-global-supply-chain-platform", destination: "/insights/lodestone-capital-blulabs-investment", permanent: true },
      { source: "/single-post/is-diversity-on-boards-critical-for-success", destination: "/insights/board-diversity-and-performance", permanent: true },
      { source: "/single-post/how-to-improve-your-board-s-performance-best-practices-and-strategies", destination: "/insights/improving-board-performance", permanent: true },
      { source: "/single-post/get-the-best-of-the-best-strategies-for-attracting-top-board-members", destination: "/insights/attracting-top-board-members", permanent: true },
      { source: "/single-post/are-you-ready-for-a-high-performance-advisory-board-key-indicators-and-steps-for-success", destination: "/insights/advisory-board-readiness", permanent: true },

      // --- Compensation posts -> the research hub ---
      { source: "/single-post/private-director-compensation-growth-accelerates-2023-private-company-board-compensation-survey", destination: "/research", permanent: true },
      { source: "/single-post/2022-private-company-board-compensation-survey-director-compensation-growth-resumes-post-covid-19", destination: "/research", permanent: true },
      { source: "/single-post/2021-private-company-d", destination: "/research", permanent: true },
      { source: "/single-post/how-much-should-i-pay-my-directors-in-2020", destination: "/research", permanent: true },
      { source: "/single-post/2016/11/26/how-much-should-i-pay-the-directors-on-my-board", destination: "/research", permanent: true },
      { source: "/single-post/2015/10/10/private-company-compensation-grows-8-in-2015-new-data-shows", destination: "/research", permanent: true },
      { source: "/single-post/2015/11/12/private-company-qa-with-private-company-director-magazine", destination: "/research", permanent: true },

      // --- Board and governance posts -> governance advisory ---
      { source: "/single-post/unlock-the-power-of-a-high-performing-board-why-your-business-can-t-afford-to-miss-out", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/advisoryboards-leverageexternalexpertiseforsuccess", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/building-high-performance-boards-to-accelerate-growth", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2016/09/07/how-big-does-a-company-have-to-be-before-it-needs-a-board", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2016/10/16/can-a-board-of-directors-really-help-my-company", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2016/08/06/do-private-boards-increase-financial-performance", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2016/06/20/building-an-optimal-board-of-directors", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2016/09/26/if-i-create-a-board-of-directors-am-i-still-in-charge", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2016/07/23/is-it-worth-having-a-board-of-directors", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2016/10/31/board-of-directors-fiduciary-or-advisory", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2017/01/26/who-do-i-want-on-my-board-of-directors", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2017/02/13/finding-great-directors-for-your-board", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2017/04/24/top-10-questions-high-performance-directors-ask-before-joining-a-board", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2017/06/05/how-to-run-a-great-board-meeting-part-i-the-importance-of-social-interaction", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2017/08/08/how-to-run-a-great-board-meeting-part-ii-setting-the-perfect-agenda", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2017/08/27/how-to-run-a-great-board-meeting-part-iii", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2017/03/14/boards-drive-profit-the-diesco-story", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2016/03/25/good-wsj-article-on-boards-at-sp-500-companies", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/2017/05/29/lodestone-global-client-wins-2017-private-company-board-of-the-year", destination: "/governance-advisory", permanent: true },
      { source: "/single-post/manage-your-blog-from-your-live-site", destination: "/governance-advisory", permanent: true },

      // --- Safety net for anything under /single-post/ not listed above ---
      { source: "/single-post/:slug*", destination: "/insights", permanent: true },

      // --- Legacy /blog/* prefix. 21 of these are live 301s on the Wix site today
      //     and would be lost entirely at cutover. ---
      { source: "/blog/:slug*", destination: "/insights", permanent: true },

      // --- Static pages with no route and no redirect ---
      { source: "/lodestone-blog", destination: "/insights", permanent: true },
      { source: "/compreport", destination: "/research", permanent: true },
      { source: "/director-compensation-survey", destination: "/research", permanent: true },
      { source: "/compensation-summary", destination: "/research", permanent: true },
      { source: "/2024-full-report", destination: "/research", permanent: true },
      { source: "/compensation-summary-thank-you", destination: "/research", permanent: true },
      { source: "/devinschain", destination: "/about", permanent: true },
      { source: "/dottieschindlinger", destination: "/about", permanent: true },
      { source: "/lynnclarke", destination: "/about", permanent: true },
      { source: "/kenmunkacy", destination: "/about", permanent: true },
      { source: "/jordanglatt", destination: "/about", permanent: true },
      { source: "/alliance", destination: "/governance-advisory", permanent: true },
      { source: "/plans-pricing", destination: "/contact", permanent: true },
      { source: "/mailing-list", destination: "/contact", permanent: true },
      { source: "/thanks", destination: "/", permanent: true },
      { source: "/thank-you-page", destination: "/", permanent: true },
      { source: "/home-new", destination: "/", permanent: true },
      { source: "/cart-page", destination: "/research", permanent: true },
      { source: "/search", destination: "/", permanent: true },
      { source: "/output", destination: "/", permanent: true },

      // --- Needs a decision before cutover, deliberately NOT mapped ---
      // /opportunities  -> under securities-counsel review. Do not publish without it.
      // /charity        -> Tenenbaum Charitable Fund. Keep, move, or retire?
      // /qdd            -> currently redirected to /governance-advisory, but the
      //                    Qualified Director Network is a 356-person asset with no
      //                    equivalent page in the new build. Losing the intake form
      //                    loses the pipeline.

      // Remaining blog posts (newer /post/* and older date-path) -> Insights index
      { source: "/post/:slug*", destination: "/insights", permanent: true },
      { source: "/:year(\\d{4})/:rest*", destination: "/insights", permanent: true },
    ];
  },
};

module.exports = nextConfig;
