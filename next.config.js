/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Produce a static export via `next build`.
  output: 'export',

  images: {
    domains: [
      'cdn.jsdelivr.net',
      'cdn-icons-png.flaticon.com',
      'raw.githubusercontent.com',
      'seeklogo.com'
    ]
  }
};

module.exports = nextConfig;
