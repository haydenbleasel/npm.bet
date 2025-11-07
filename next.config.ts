import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
