// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [
      "https://raspina.shop/sitemap.xml",
      "https://diba.site/sitemap.xml",
    ],
  };
}
