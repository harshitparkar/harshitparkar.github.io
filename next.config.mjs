/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true, // Enable additional route caching when users navigate through pages with next/link.
  aggressiveFrontEndNavCaching: true, //  Cache every <link rel="stylesheet" /> and <script /> on frontend navigation. Requires cacheOnFrontEndNav to be enabled.
  reloadOnOnline: true, // Reload the app when it has gone back online.
  swcMinify: true, //  The service worker's output filename.
  // disable: process.env.NODE_ENV === "development",
  disable: false, // Whether next-pwa should be disabled.
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
export default withPWA(nextConfig);
