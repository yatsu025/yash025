import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/shared";
import { projects } from "@/data/projects";
import { site, whatsappUrl } from "@/data/site";

const title = "Freelance Web Developer in Prayagraj | Yash Srivastava, Prayagraj";
const description = "Hire Yash Srivastava, a freelance web developer in Prayagraj, for landing pages, portfolios, small business websites and focused UI improvements.";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const serviceLd = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Yash Srivastava — Freelance Web Developer", url: `${site.url}/freelance`, email: site.email, areaServed: "Prayagraj, Uttar Pradesh, India", serviceType: ["Landing pages", "Portfolio websites", "Small business websites", "UI fixes"] };

export const Route = createFileRoute("/freelance")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: `${site.url}/freelance` }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `${site.url}/freelance` }], scripts: [{ type: "application/ld+json", children: JSON.stringify(serviceLd) }] }),
  component: FreelancePage,
});

function FreelancePage() {
  const clients = projects.filter((project) => project.category === "client");
  return <PageLayout><main>
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <p className="mono text-xs font-bold uppercase text-primary">Available for select client work</p>
      <h1 className="display mt-5 max-w-5xl text-[clamp(3.4rem,10vw,8rem)]">Freelance Web Developer in Prayagraj</h1>
      <p className="mt-8 max-w-3xl text-xl leading-relaxed">I build focused web experiences for local businesses, students and startups—from a clear first page to a polished launch-ready product.</p>
      <a href={whatsappUrl} {...ext} className="btn-brutal mt-9 bg-primary">Discuss your project ↗</a>
    </section>
    <section className="border-y-2 border-foreground bg-muted"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
      <div><p className="mono text-xs font-bold uppercase">What I build</p><h2 className="display mt-4 text-5xl md:text-7xl">Useful sites.<br />No noise.</h2></div>
      <ul className="grid grid-cols-2 border-l-2 border-t-2 border-foreground text-lg font-bold">{["Landing pages", "Portfolios", "Business websites", "UI fixes"].map((item) => <li key={item} className="border-b-2 border-r-2 border-foreground p-5">{item}</li>)}</ul>
    </div></section>
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8"><p className="mono text-xs font-bold uppercase">Simple process</p><h2 className="display mt-4 text-5xl md:text-7xl">Quick call → Build → Launch</h2></section>
    <section className="border-t-2 border-foreground"><div className="mx-auto max-w-7xl px-4 py-20 md:px-8"><h2 className="display text-5xl md:text-7xl">Client work</h2><div className="mt-10 grid gap-6 md:grid-cols-2">{clients.map((project) => <article key={project.slug} className="brutal-box p-6 shadow-[var(--shadow-hard)]"><p className="mono text-xs font-bold uppercase text-primary">Freelance · Client project</p><h3 className="display mt-4 text-4xl">{project.title}</h3><p className="mt-4 text-lg">{project.tagline}</p><div className="mt-6 flex gap-3">{project.liveUrl && <a href={project.liveUrl} {...ext} className="btn-brutal bg-primary">Live site ↗</a>}{project.repoUrl && <a href={project.repoUrl} {...ext} className="btn-brutal bg-background">GitHub code</a>}</div></article>)}</div></div></section>
  </main></PageLayout>;
}