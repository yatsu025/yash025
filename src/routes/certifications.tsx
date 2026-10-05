import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/shared";
import { certificates } from "@/data/certificates";
import { site } from "@/data/site";

const title = "Certifications & Hackathons | Yash Srivastava, Prayagraj";
const description = "Explore Yash Srivastava’s AWS, Claude, Accenture, TATA and freeCodeCamp certifications plus hackathon learning as a Prayagraj developer.";
const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: "Certifications", item: `${site.url}/certifications` }] };

export const Route = createFileRoute("/certifications")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: `${site.url}/certifications` }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `${site.url}/certifications` }], scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb) }] }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return <PageLayout><main className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28"><p className="mono text-xs font-bold uppercase text-primary">Verified learning & competition</p><h1 className="display mt-5 text-[clamp(3.4rem,10vw,8rem)]">Certifications</h1><p className="mt-7 max-w-3xl text-xl">Coursework and hackathon experience that support my work as a frontend and full stack developer in Prayagraj.</p><div className="mt-16 space-y-8">{certificates.map((certificate) => <section id={certificate.slug} key={certificate.slug} className="scroll-mt-24 border-t-2 border-foreground pt-7"><p className="mono text-xs font-bold uppercase text-primary">{certificate.group === "hackathon" ? "Hackathon" : "Certification"} · {certificate.issuer}</p><h2 className="display mt-3 text-4xl md:text-6xl">{certificate.title} — Developer in Prayagraj</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed">{certificate.blurb}</p>{certificate.url && <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="btn-brutal mt-6 bg-primary">View certificate ↗</a>}</section>)}</div></main></PageLayout>;
}