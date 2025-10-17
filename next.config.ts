import type { NextConfig } from "next";
import nextPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache"; // optional, recommended

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  // disable: process.env.NODE_ENV === "development", // uncomment to disable in dev
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // any other Next config options
};

export default withPWA(nextConfig);
