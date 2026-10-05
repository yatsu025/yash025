import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/data/site";
import { Cursor, ThemeToggle } from "./fx";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function WhatsAppButton() {
  return (
    <a href={whatsappUrl} {...ext} aria-label="Chat with Yash on WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center border-2 border-foreground bg-primary shadow-[var(--shadow-hard)] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[var(--shadow-hard-sm)]">
      <MessageCircle aria-hidden className="h-7 w-7" />
    </a>
  );
}

export function PageHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background">
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="display text-2xl">YS<span className="text-primary">.</span>dev</Link>
        <div className="flex items-center gap-3">
          <Link to="/freelance" className="mono hidden text-xs font-bold uppercase hover:text-primary sm:block">Freelance</Link>
          <Link to="/certifications" className="mono hidden text-xs font-bold uppercase hover:text-primary md:block">Certifications</Link>
          <Link to="/hackathons" className="mono hidden text-xs font-bold uppercase hover:text-primary lg:block">Hackathons</Link>
          <ThemeToggle />
          <a href={whatsappUrl} {...ext} className="btn-brutal bg-primary !px-4 !py-2">Hire Me</a>
        </div>
      </nav>
    </header>
  );
}

export function PageFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="mono text-xs">© 2026 {site.name} · Prayagraj, India</p>
        <nav aria-label="Footer" className="mono flex flex-wrap gap-5 text-xs uppercase">
          <Link to="/freelance" className="hover:text-primary">Freelance</Link>
          <Link to="/certifications" className="hover:text-primary">Certifications</Link>
          <Link to="/hackathons" className="hover:text-primary">Hackathons</Link>
          <a href={site.linkedin} {...ext} className="hover:text-primary">LinkedIn</a>
          <a href={`mailto:${site.email}`} className="hover:text-primary">Email</a>
        </nav>
      </div>
    </footer>
  );
}

export function PageLayout({ children }: { children: React.ReactNode }) {
  return <div className="grain min-h-screen"><Cursor /><PageHeader />{children}<PageFooter /><WhatsAppButton /></div>;
}