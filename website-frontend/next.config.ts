import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["admin.gtls.store", "localhost", 'gtam-test.gtls.com.lb', 'gtam.gtls.com.lb', 'gtam.gtls.store', 'gtam.gtls.com.au'],
  },
  reactStrictMode: false,
};

export default nextConfig;
