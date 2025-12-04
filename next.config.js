/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
