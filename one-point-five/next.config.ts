import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [],
    // Ensure SVGs are optimized
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable React strict mode for better performance and debugging
  reactStrictMode: true,
  // Add performance optimizations
  experimental: {
    // Enable optimized loading of pages
    optimizeCss: true,
    // Enable memory optimization
    optimizePackageImports: ['react-markdown'],
  },
  // Improve page loading
  poweredByHeader: false,
};

export default nextConfig;
