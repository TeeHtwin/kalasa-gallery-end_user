/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.kalasa.gallery",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "placekitten.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "kalasa-gallery-end-user-website-8c6wfdzc7-teehtwin",
      },
      {
        protocol: "https",
        hostname: "staging.kalasa.gallery",
      },
    ],
  },
};

module.exports = nextConfig;
