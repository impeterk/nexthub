import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "peterk.dev",
      },
      {
        protocol: "https",
        hostname: "next.peterk.dev",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
