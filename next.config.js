/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== "production";
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, out, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
  reactStrictMode: true,
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;
