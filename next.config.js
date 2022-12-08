/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // 1 month
        minimumCacheTTL: 2592000,
    },
    env: {
        // ... PRODUCTION ? DEVELOPMENT ?
        

    },
}



module.exports = nextConfig
