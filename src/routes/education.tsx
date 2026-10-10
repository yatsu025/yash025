import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/shared";
import { education, site } from "@/data/site";

const title = "Education — BCA at United Institute of Management, Prayagraj | Yash Srivastava, Prayagraj";
const description = "Yash Srivastava's education: BCA 2024–2027 at United Institute of Management (FUGS), Prof. Rajju Bhaiya University, and schooling at P.N. Public Inter College, Prayagraj.";
const url = `${site.siteUrl}/education`;
const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.siteUrl }, { "@type": "ListItem", position: 2, name: "Education", item: url }] };

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb) }],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <PageLayout>
      <main className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <p className="mono text-[13px] font-bold uppercase text-primary">BCA student developer in Prayagraj</p>
        <h1 className="display mt-5 max-w-6xl text-[clamp(2.8rem,7vw,6rem)] tracking-[-0.02em]">Education — BCA at United Institute of Management, Prayagraj</h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed">I'm studying BCA (2024–2027) at United Institute of Management (FUGS), affiliated with Prof. Rajju Bhaiya University, Prayagraj. Before that I completed my 10th and 12th (UP Board) at P.N. Public Inter College, Prayagraj.</p>

        <ol className="mt-16 border-t-2 border-foreground">
          {education.map((e) => (
            <li key={e.title} className="grid gap-2 border-b-2 border-foreground py-7 md:grid-cols-12">
              <span className="mono text-sm font-bold md:col-span-3">{e.years}</span>
              <h2 className="text-3xl font-extrabold md:col-span-4">{e.title}</h2>
              <p className="text-lg md:col-span-5">{e.place}</p>
            </li>
          ))}
        </ol>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          <article className="brutal-box p-6 shadow-[var(--shadow-hard)]">
            <h2 className="display text-3xl">SIH platform for my college</h2>
            <p className="mt-4 text-[15px] leading-relaxed md:text-base">I built the official registration platform for my college's Smart India Hackathon internal round. It was used by 50+ real participants.</p>
            <Link to="/projects/$slug" params={{ slug: "sih-internal-uim" }} className="mono mt-5 inline-block text-[13px] font-bold uppercase underline">See the project →</Link>
          </article>
          <article className="brutal-box p-6 shadow-[var(--shadow-hard)]">
            <h2 className="display text-3xl">Founder, Ya~tsu Squad</h2>
            <p className="mt-4 text-[15px] leading-relaxed md:text-base">A student developer community for hackathons, collaboration and project-based learning — we find events, form teams and build together.</p>
            <Link to="/hackathons" className="mono mt-5 inline-block text-[13px] font-bold uppercase underline">Our hackathons →</Link>
          </article>
          <article className="brutal-box p-6 shadow-[var(--shadow-hard)]">
            <h2 className="display text-3xl">PW Campus Ambassador</h2>
            <p className="mt-4 text-[15px] leading-relaxed md:text-base">I represent PW on campus, helping fellow students discover learning opportunities alongside my studies.</p>
            <Link to="/certifications" className="mono mt-5 inline-block text-[13px] font-bold uppercase underline">My certifications →</Link>
          </article>
        </section>
      </main>
    </PageLayout>
  );
}
