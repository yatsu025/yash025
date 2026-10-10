import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/shared";
import { certificates } from "@/data/certificates";
import { site } from "@/data/site";

const title = "Hackathon Developer in Prayagraj | Yash Srivastava, Prayagraj";
const description = "Meet Yash Srivastava, a hackathon developer in Prayagraj with 14+ competitions and practical experience shipping web, AI and full stack projects.";
const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.siteUrl }, { "@type": "ListItem", position: 2, name: "Hackathons", item: `${site.siteUrl}/hackathons` }] };

export const Route = createFileRoute("/hackathons")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: `${site.siteUrl}/hackathons` }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `${site.siteUrl}/hackathons` }], scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb) }] }),
  component: HackathonsPage,
});

function HackathonsPage() {
  const hackathons = certificates.filter((certificate) => certificate.group === "hackathon");
  return <PageLayout><main className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28"><p className="mono text-xs font-bold uppercase text-primary">14+ competitions and counting</p><h1 className="display mt-5 text-[clamp(3.4rem,10vw,8rem)]">Hackathon Developer in Prayagraj</h1><p className="mt-7 max-w-3xl text-xl leading-relaxed">Hackathons taught me to scope fast, collaborate clearly and ship under pressure. My strongest result is an official college platform that went on to serve 50+ real participants.</p><Link to="/projects/$slug" params={{ slug: "sih-internal-uim" }} className="btn-brutal mt-8 bg-primary">See the SIH platform →</Link><ol className="mt-16 border-t-2 border-foreground">{hackathons.map((hackathon, index) => <li key={hackathon.slug} className="grid gap-4 border-b-2 border-foreground py-7 md:grid-cols-12"><span className="display text-5xl text-primary md:col-span-2">{String(index + 1).padStart(2, "0")}</span><div className="md:col-span-10"><h2 className="display text-4xl md:text-5xl">{hackathon.title} — Hackathon developer in Prayagraj</h2>{hackathon.issuer && <p className="mono mt-2 text-[13px] uppercase">Organised by {hackathon.issuer}</p>}<p className="mt-4 max-w-3xl text-lg">{hackathon.blurb}</p></div></li>)}</ol></main></PageLayout>;
}