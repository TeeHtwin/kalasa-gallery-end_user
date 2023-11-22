/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "via.placeholder.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "placekitten.com",
      // },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
