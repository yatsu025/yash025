import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Cursor, Preloader, SmoothScroll } from "@/components/site/fx";
import { WhatsAppButton } from "@/components/site/shared";
import { Navbar, Hero, Marquee, Stats, Work, About, Skills, Certificates, Community, Education, Resume, Contact, Footer, FAQ, faqs } from "@/components/site/sections";
import { certificates } from "@/data/certificates";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      jobTitle: site.role,
      url: site.siteUrl,
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Prayagraj", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      sameAs: [site.github, site.linkedin, site.freelanceUrl],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "United Institute of Management" },
        { "@type": "School", name: "P.N. Public Inter College" },
      ],
      hasCredential: certificates.filter((c) => c.group === "license").map((c) => ({ "@type": "EducationalOccupationalCredential", name: c.title, recognizedBy: { "@type": "Organization", name: c.issuer } })),
      knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Supabase", "Python", "Hackathons"],
    },
    { "@type": "WebSite", name: `${site.name} — Portfolio`, url: site.siteUrl },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:url", content: site.siteUrl },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: site.title },
      { name: "twitter:description", content: site.description },
    ],
    links: [{ rel: "canonical", href: site.siteUrl }],
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
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
