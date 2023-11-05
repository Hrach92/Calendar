/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SKIP_LINT: process.env.SKIP_LINT,
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
  eslint: {
    ignoreDuringBuilds: process.env.SKIP_LINT === "true",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: process.env.SKIP_LINT === "true",
  },
  output: "standalone",
};

module.exports = nextConfig;
