/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['static.shoeprize.com'],
  },
}

module.exports = nextConfig
