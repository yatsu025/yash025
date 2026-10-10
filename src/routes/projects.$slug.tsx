import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/shared";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((entry) => entry.featured && entry.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => {
    const name = loaderData?.title ?? "Project";
    const title = `${name} | Yash Srivastava, Prayagraj`;
    const description = loaderData?.description ?? "A featured web development project by Yash Srivastava, frontend and full stack developer in Prayagraj.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "article" }, { property: "og:url", content: `${site.siteUrl}/projects/${params.slug}` }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `${site.siteUrl}/projects/${params.slug}` }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.siteUrl }, { "@type": "ListItem", position: 2, name, item: `${site.siteUrl}/projects/${params.slug}` }] }) }] };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  return <PageLayout><main className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28"><p className="mono text-xs font-bold uppercase text-primary">Featured project {project.badge ? `· ${project.badge}` : ""}</p><h1 className="display mt-5 max-w-6xl text-[clamp(3.4rem,10vw,8rem)]">{project.title}</h1><p className="mt-8 max-w-3xl text-2xl leading-snug">{project.tagline}</p><p className="mt-6 max-w-3xl text-lg leading-relaxed">{project.description}</p><div className="mt-10 flex flex-wrap gap-3">{project.tech?.map((item) => <span key={item} className="mono border-2 border-foreground px-3 py-2 text-xs font-bold">{item}</span>)}</div>{project.features && <section className="mt-16 border-t-2 border-foreground pt-8"><h2 className="display text-5xl">Key features</h2><ul className="mt-6 grid gap-3 text-lg md:grid-cols-2">{project.features.map((feature) => <li key={feature} className="border-2 border-foreground p-4">→ {feature}</li>)}</ul></section>}{project.impact && <section className="mt-16 border-t-2 border-foreground pt-8"><h2 className="display text-5xl">Impact</h2><ul className="mt-6 space-y-2 text-xl">{project.impact.map((item) => <li key={item}>→ {item}</li>)}</ul></section>}<div className="mt-14 flex flex-wrap gap-4">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-brutal bg-primary">Open live site ↗</a>}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-brutal bg-background">GitHub code ↗</a>}</div></main></PageLayout>;
}