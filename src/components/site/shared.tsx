import { Link } from "@tanstack/react-router";
import { site, whatsappUrl } from "@/data/site";
import { Cursor, ThemeToggle } from "./fx";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function WhatsAppIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.37 0-3.03-1.18-5.89-3.34-8.04z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <a href={whatsappUrl} {...ext} aria-label="Chat with Yash on WhatsApp" className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center border-2 border-foreground bg-primary shadow-[var(--shadow-hard)] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[var(--shadow-hard-sm)] md:bottom-8">
      <WhatsAppIcon />
    </a>
  );
}

export function PageHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background">
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="display text-2xl">YS<span className="text-primary">.</span>dev</Link>
        <div className="flex items-center gap-3">
          <Link to="/education" className="mono hidden text-[13px] font-bold uppercase hover:text-primary sm:block">Education</Link>
          <a href={site.freelanceUrl} {...ext} className="mono hidden text-[13px] font-bold uppercase hover:text-primary sm:block">Freelance ↗</a>
          <Link to="/certifications" className="mono hidden text-[13px] font-bold uppercase hover:text-primary md:block">Certifications</Link>
          <Link to="/hackathons" className="mono hidden text-[13px] font-bold uppercase hover:text-primary lg:block">Hackathons</Link>
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
        <nav aria-label="Footer" className="mono flex flex-wrap gap-5 text-[13px] uppercase">
          <Link to="/education" className="hover:text-primary">Education</Link>
          <a href={site.freelanceUrl} {...ext} className="hover:text-primary">Freelance ↗</a>
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