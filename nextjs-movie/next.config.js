/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
  experimental: {
    serverActions: true,
  }
};

module.exports = nextConfig;