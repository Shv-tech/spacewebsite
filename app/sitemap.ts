import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXTAUTH_URL || 'http://localhost:3000'
  const routes = [
    '', '/academy', '/publications', '/label',
    '/esports', '/animation', '/recruitment',
    '/events', '/blog', '/about'
  ]
  return routes.map(p => ({
    url: base + p,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.6
  }))
}
