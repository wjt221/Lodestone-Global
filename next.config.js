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
    ];
  },
};

module.exports = nextConfig;
