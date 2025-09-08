import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // typedRoutes: true, //not supported by turbopack yet :-(
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "peterk.dev",
      },
      {
        protocol: "https",
        hostname: "next.peterk.dev",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
