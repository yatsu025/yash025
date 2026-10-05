import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const pages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/freelance", changefreq: "monthly", priority: "0.8" },
  { path: "/certifications", changefreq: "monthly", priority: "0.8" },
  { path: "/hackathons", changefreq: "monthly", priority: "0.8" },
  ...projects
    .filter((project) => project.featured)
    .map((project) => ({
      path: `/projects/${project.slug}`,
      changefreq: "monthly",
      priority: "0.7",
    })),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = pages
          .map(
            ({ path, changefreq, priority }) =>
              `<url><loc>${site.url}${path}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`,
          )
          .join("");

        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
          { headers: { "Content-Type": "application/xml; charset=utf-8" } },
        );
      },
    },
  },
});
