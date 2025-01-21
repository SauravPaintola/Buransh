export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog"],
      disallow: [],
    },
    sitemap: "https://buranshfoundation.in/sitemap.xml",
  };
}
