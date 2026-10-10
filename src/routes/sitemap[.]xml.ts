import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

const lastmod = "2026-10-09";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const pages: [string, string, string][] = [
          ["/", "monthly", "1.0"],
          ["/certifications", "monthly", "0.8"],
          ["/hackathons", "monthly", "0.8"],
          ["/education", "yearly", "0.7"],
          ...projects.filter((p) => p.featured).map((p) => [`/projects/${p.slug}`, "monthly", "0.7"] as [string, string, string]),
        ];
        const body = pages
          .map(([path, freq, pr]) => `<url><loc>${site.siteUrl}${path === "/" ? "/" : path}</loc><lastmod>${lastmod}</lastmod><changefreq>${freq}</changefreq><priority>${pr}</priority></url>`)
          .join("");
        return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
