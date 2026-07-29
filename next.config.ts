import type { NextConfig } from "next";
import type { Headers } from "next/config";

const securityHeaders: Headers = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "maps.gstatic.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async contentSecurityPolicy() {
    return {
      "default-src": "'self'",
      "script-src": "'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src": "'self' 'unsafe-inline'",
      "img-src": "'self' data: blob: https://maps.google.com https://maps.gstatic.com",
      "font-src": "'self' https://fonts.gstatic.com",
      "frame-src": "https://maps.google.com https://www.google.com",
      "connect-src": "'self' https://wa.me https://maps.google.com https://maps.googleapis.com",
      "media-src": "'self'",
      "object-src": "'none'",
      "base-uri": "'self'",
      "form-action": "'self' https://wa.me",
      "frame-ancestors": "'self'",
      "upgrade-insecure-requests": "",
    };
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
