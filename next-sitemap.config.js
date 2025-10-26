/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://fertiterratechnologies.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,

  // Exclude admin, API routes, and internal pages
  exclude: [
    "/admin/*",
    "/api/*",
    "/auth/*",
    "/debug/*",
    "/dev-helper",
    "/test-*",
    "/emergency-home",
    "/simple-home",
    "/auto-restart",
    "/one-click-setup",
    "/verify-env",
    "/working-login",
    "/working-signup",
    "/basic-signup",
    "/simple-signup",
  ],

  // Custom transformation for specific routes
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    // High priority pages
    const highPriorityPages = [
      "/learn",
      "/shop",
      "/shop/merch",
      "/knowledge-centre",
      "/plans/basic-fertility-checkup",
      "/plans/ttc",
    ]

    if (highPriorityPages.includes(path)) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }

    // Service pages (appointments)
    if (path.startsWith("/appointments/")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // Educational content
    if (path.startsWith("/learn/") || path.startsWith("/knowledge-centre/")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // About and info pages
    if (path.startsWith("/about/") || path === "/meet-the-team" || path === "/for-employers") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    }

    // Default
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },

  // robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/api",
          "/auth",
          "/debug",
          "/dev-helper",
          "/test-*",
          "/emergency-home",
          "/simple-home",
          "/auto-restart",
          "/one-click-setup",
          "/verify-env",
          "/working-login",
          "/working-signup",
          "/basic-signup",
          "/simple-signup",
        ],
      },
    ],
    additionalSitemaps: ["https://fertiterratechnologies.com/sitemap.xml"],
  },
}
