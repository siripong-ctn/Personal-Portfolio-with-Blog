import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "www.rawpixel.com",
      "images.rawpixel.com",
      "firebasestorage.googleapis.com"
    ],
  },
};

export default nextConfig;