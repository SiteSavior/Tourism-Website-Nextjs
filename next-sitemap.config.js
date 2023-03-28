/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://www.bizkarts.in',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: ['/protected-page', '/awesome/secret-page', '/server-sitemap.xml','/myorder', '/order' , '/cart' , '/myaccount' , '/search' , '/checkout'], 
   
    // Default transformation function
    transform: async (config, path) => {
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    },
   
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: ['/secret','/myorder', '/order' , '/cart' , '/myaccount' , '/search' , '/checkout'],
        },
      ],
      additionalSitemaps: [
        'https://www.bizkarts.in/server-sitemap.xml', // <==== Add here
      ],
    },
  }