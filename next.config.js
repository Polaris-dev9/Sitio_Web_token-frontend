/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  reactStrictMode: true,
  swcMinify: true,
  // Disable static optimization for all pages
  staticPageGenerationTimeout: 0,
  // Enable server-side rendering
  output: 'standalone',
}

module.exports = nextConfig; 