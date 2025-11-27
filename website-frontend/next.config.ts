import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["admin.gtls.store", "localhost"],
  },
  reactStrictMode: false,
};

export default nextConfig;
