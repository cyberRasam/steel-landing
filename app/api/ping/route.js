export async function GET(req) {
  const host = req.headers.get("host"); // raspina.shop or diba.site
  const theme = host.includes("diba.site") ? "Diba" : "Raspina";

  return new Response(
    JSON.stringify({
      alive: true,
      theme,
      time: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
