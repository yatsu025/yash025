import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(
          `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://yatsu025.vercel.app/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url></urlset>`,
          { headers: { "Content-Type": "application/xml" } },
        ),
    },
  },
});
