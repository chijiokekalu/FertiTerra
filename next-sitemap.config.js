/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://fertiterratechnologies.com",
  generateRobotsTxt: true,
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

    // High priority pages - Main services and shopping
    const highPriorityPages = [
      "/shop",
      "/shop/merch",
      "/learn",
      "/knowledge-centre",
      "/plans/basic-fertility-checkup",
      "/plans/ttc",
      "/test-kits/hormone-fertility",
    ]

    if (highPriorityPages.includes(path)) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }

    // Service pages (appointments and clinical care)
    if (path.startsWith("/appointments/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // Educational content (blog, knowledge centre, learn pages)
    if (path.startsWith("/learn/") || path.startsWith("/knowledge-centre/") || path.startsWith("/blog/")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.85,
        lastmod: new Date().toISOString(),
      }
    }

    // About and company pages
    if (path.startsWith("/about/") || path === "/meet-the-team" || path === "/for-employers" || path === "/community") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    }

    // Authentication and user pages
    if (
      path.startsWith("/login") ||
      path.startsWith("/signup") ||
      path.startsWith("/wombs") ||
      path.startsWith("/profile")
    ) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      }
    }

    // Default for all other pages
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
    additionalSitemaps: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://fertiterratechnologies.com"}/sitemap.xml`],
  },
}
