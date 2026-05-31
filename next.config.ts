import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https",
      },
      {
        hostname: "html.tailus.io",
        protocol: "https",
      },
      {
        hostname: "alt.tailus.io",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
