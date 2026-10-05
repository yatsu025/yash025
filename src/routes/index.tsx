import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Cursor, Preloader, SmoothScroll } from "@/components/site/fx";
import { Navbar, Hero, Marquee, Stats, Work, About, Skills, Certificates, Community, Education, Resume, Contact, Footer } from "@/components/site/sections";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      jobTitle: site.role,
      url: site.url,
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Prayagraj", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      sameAs: [site.github, site.linkedin],
      alumniOf: { "@type": "CollegeOrUniversity", name: "United Institute of Management" },
      knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Supabase"],
    },
    { "@type": "WebSite", name: `${site.name} — Portfolio`, url: site.url },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { name: "keywords", content: "Yash Srivastava, Yash Srivastava Prayagraj, frontend developer in Prayagraj, full stack developer Prayagraj, React Next.js developer Uttar Pradesh" },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:url", content: site.url },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: site.title },
      { name: "twitter:description", content: site.description },
    ],
    links: [{ rel: "canonical", href: site.url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-primary focus:p-3">Skip to content</a>
      <Preloader name="Yash Srivastava" />
      <Cursor />
      <SmoothScroll />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Stats />
        <Work />
        <About />
        <Skills />
        <Certificates />
        <Community />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
