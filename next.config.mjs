import createMDX from '@next/mdx'
const withMDX = createMDX({ extension: /\.mdx?$/ })

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false, // was true — disabling to avoid Link<Route> type errors
  },
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default withMDX(nextConfig)


