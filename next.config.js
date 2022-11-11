/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  test: /\.svg$/,
  use: ["@svgr/webpack"],

  images: {
    unoptimized: true,
    domains: [
      'files.stripe.com',
    ]
  },

  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    }
  }
}

module.exports = nextConfig
