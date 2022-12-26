/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
    optimizeCss: true,
    scrollRestoration: true,
    granularChunks: true,
  },
  images: {
        minimumCacheTTL: 2592000,   

    },
}



module.exports = nextConfig
