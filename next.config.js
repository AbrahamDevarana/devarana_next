/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    images: {
        minimumCacheTTL: 2592000
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/empresa': { page: '/empresa' },
            '/empresa/responsabilidad-social': { page: '/empresa/responsabilidad-social' },
            '/empresa/great-place-to-work': { page: '/empresa/great-place-to-work' },
            '/empresa/certificados-y-premios': { page: '/empresa/certificados-y-premios' },
            '/carrera': { page: '/carrera' },
            '/vacantes': { page: '/vacantes' },
            '/contacto': { page: '/contacto' },
        }
    },
    headers: function () {
        return [
          {
            source: '/:path*',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
              },
            ],
          },
        ]
      },
      compress: true,
}



module.exports = nextConfig
