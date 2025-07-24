/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Disable caching to prevent corruption issues
  experimental: {
    // Disable build cache
    incrementalCacheHandlerPath: false,
  },
  // Disable static optimization for development
  staticPageGenerationTimeout: 0,
}

module.exports = nextConfig 