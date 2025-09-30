// app/sitemap.js
export default async function sitemap() {
  const baseUrls = [
    { domain: "https://raspina.shop", pages: ["/raspina", "/contact"] },
    { domain: "https://dibajahansanat.site", pages: ["/diba", "/contact"] },
  ];

  const urls = baseUrls.flatMap(({ domain, pages }) =>
    pages.map((p) => ({
      url: `${domain}${p}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: p === "" ? 1 : 0.8,
    }))
  );

  return urls;
}
