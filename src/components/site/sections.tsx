import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { site, marquee, stats, education, navLinks } from "@/data/site";
import { projects, type Project } from "@/data/projects";
import { certificates, type Certificate } from "@/data/certificates";
import { skills } from "@/data/skills";
import { Reveal, MaskLine, Counter, Magnetic, ThemeToggle } from "./fx";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Label({ n, children }: { n: string; children: string }) {
  return (
    <div className="mono mb-8 flex items-center gap-4 text-xs uppercase">
      <span className="font-bold text-primary">({n})</span>
      <span className="h-px flex-1 bg-foreground" />
      <span>{children}</span>
    </div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background pt-[env(safe-area-inset-top)]">
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="display text-2xl">YS<span className="text-primary">.</span>dev</a>
        <ul className="mono hidden gap-6 text-xs uppercase lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-primary">{l.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="btn-brutal hidden bg-primary !px-4 !py-2 sm:inline-flex">Hire Me</a>
          <button className="mono border-2 border-foreground px-3 py-2 text-xs font-bold lg:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-nav" className="mono border-t-2 border-foreground px-4 py-4 text-sm uppercase lg:hidden">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-2">{l.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-8 md:pt-16">
      <div className="mono mb-8 flex flex-wrap justify-between gap-2 text-xs uppercase">
        <span>Portfolio — Vol. 2026</span>
        <span>{site.location}</span>
      </div>
      <h1 className="display text-[clamp(3.5rem,15vw,13rem)]">
        <MaskLine delay={0.1}>Yash</MaskLine>
        <MaskLine delay={0.22}><span className="pl-[8vw] text-primary">Srivastava</span></MaskLine>
      </h1>
      <div className="mt-10 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="mono text-sm font-bold uppercase md:text-base">
            Frontend &amp; Full Stack Developer based in Prayagraj, Uttar Pradesh, India
          </p>
          <p className="mt-4 max-w-xl text-xl leading-snug md:text-2xl">{site.pitch}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Magnetic><a href="#contact" className="btn-brutal bg-primary">Hire Me <Arrow /></a></Magnetic>
            <Magnetic><a href={site.resume} download className="btn-brutal bg-background">Download Resume</a></Magnetic>
            <Magnetic><a href="#work" className="btn-brutal bg-secondary text-secondary-foreground">See my work</a></Magnetic>
          </div>
          <p className="mono mt-8 max-w-xl border-l-4 border-primary pl-3 text-xs">
            ▲ <a href={site.proofUrl} {...ext} className="underline decoration-2 underline-offset-4 hover:text-primary">{site.proof}</a>
          </p>
          <p className="mono mt-3 text-xs text-muted-foreground">Also open to select freelance work — <a href={`mailto:${site.email}`} className="underline">email me</a>.</p>
        </div>
        <div className="flex items-start justify-end md:col-span-5">
          <a href="#contact" aria-label="Open to work — go to contact" className="relative grid h-40 w-40 place-items-center rounded-full border-2 border-foreground bg-primary animate-wobble md:h-48 md:w-48">
            <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow" aria-hidden>
              <defs><path id="c" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
              <text className="mono" fontSize="15" fontWeight="700" letterSpacing="3" fill="currentColor"><textPath href="#c">OPEN TO WORK ✦ INTERNSHIPS ✦ FULL-TIME ✦</textPath></text>
            </svg>
            <span className="display text-3xl">Hire<br />me ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-foreground py-4 text-background" aria-label="Highlights">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0" aria-hidden={k === 1}>
            {items.map((m, i) => (
              <span key={i} className="display flex items-center text-3xl md:text-5xl">
                <span className="px-6">{m}</span><span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section aria-label="Quick stats" className="mx-auto grid max-w-7xl grid-cols-2 border-x-2 border-b-2 border-foreground md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className={`border-foreground p-6 md:p-8 ${i % 2 === 0 ? "border-r-2" : ""} ${i < 2 ? "border-b-2 md:border-b-0" : ""} ${i === 1 ? "md:border-r-2" : ""}`}>
          <div className="display text-6xl md:text-7xl"><Counter value={s.value} suffix={s.suffix} /></div>
          <p className="mono mt-2 text-xs uppercase">{s.label}</p>
        </Reveal>
      ))}
    </section>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-[75] grid place-items-center bg-foreground/60 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} role="dialog" aria-modal="true" aria-label={`${p.title} details`}>
      <motion.div data-lenis-prevent className="brutal-box max-h-[88vh] w-full max-w-2xl overflow-y-auto p-6 shadow-[var(--shadow-hard)] md:p-8" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="display text-4xl md:text-5xl">{p.title}</h3>
          <button onClick={onClose} className="mono border-2 border-foreground px-3 py-1 text-xs font-bold" autoFocus>Close ✕</button>
        </div>
        {p.badge && <p className="mono mt-4 inline-block bg-primary px-2 py-1 text-xs font-bold">{p.badge}</p>}
        <p className="mt-4 text-lg leading-snug">{p.description}</p>
        {p.impact && (
          <div className="mt-6 border-2 border-foreground bg-primary p-4">
            <h4 className="mono text-xs font-bold uppercase">Impact</h4>
            <p className="mt-1 text-lg font-bold">{p.impact.join(" · ")}</p>
          </div>
        )}
        {p.features && (
          <><h4 className="mono mt-6 text-xs font-bold uppercase">Key features</h4>
          <ul className="mt-2 space-y-1">{p.features.map((f) => <li key={f}>→ {f}</li>)}</ul></>
        )}
        <div className="mt-6 flex flex-wrap gap-2">{p.tech?.map((t) => <span key={t} className="mono border-2 border-foreground px-2 py-1 text-xs">{t}</span>)}</div>
        <div className="mt-8 flex flex-wrap gap-4">
          {p.liveUrl && <a href={p.liveUrl} {...ext} className="btn-brutal bg-primary">Open live site <Arrow /></a>}
          {p.repoUrl && <a href={p.repoUrl} {...ext} className="btn-brutal bg-background">GitHub code</a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <Label n="01">Selected work</Label>
      <Reveal><h2 className="display mb-12 text-[clamp(3rem,9vw,7rem)]">Things I've<br />shipped</h2></Reveal>
      <ol className="border-t-2 border-foreground">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <li className="group relative border-b-2 border-foreground transition-colors duration-300 hover:bg-primary">
              <a href={p.liveUrl || p.repoUrl} {...ext} className="flex flex-col gap-4 px-2 py-8 transition-transform duration-300 group-hover:translate-x-3 md:flex-row md:items-center md:gap-8 md:px-4" aria-label={`Open ${p.title} live site`}>
                <span className="display text-5xl text-primary transition-colors group-hover:text-foreground md:w-24">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <h3 className="display text-4xl md:text-6xl">{p.title}</h3>
                  <p className="mt-2 max-w-2xl text-lg">{p.tagline}</p>
                  {p.badge && <p className="mono mt-3 inline-block border-2 border-foreground bg-primary px-2 py-1 text-xs font-bold group-hover:bg-background">● {p.badge}</p>}
                  <p className="mono mt-3 text-xs text-muted-foreground group-hover:text-foreground">{p.tech?.slice(0, 5).join(" / ")}</p>
                </div>
                <span className="grid h-14 w-14 place-items-center border-2 border-foreground bg-background transition-transform duration-300 group-hover:-rotate-45"><Arrow className="h-6 w-6" /></span>
              </a>
              <div className="flex gap-3 px-2 pb-6 md:absolute md:bottom-6 md:right-24 md:px-0 md:pb-0">
                <button onClick={() => setActive(p)} className="mono border-2 border-foreground bg-background px-3 py-1 text-xs font-bold hover:bg-foreground hover:text-background">Details</button>
                <a href={p.repoUrl} {...ext} className="mono border-2 border-foreground bg-background px-3 py-1 text-xs font-bold hover:bg-foreground hover:text-background">GitHub Code</a>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
      <h3 className="mono mt-20 mb-4 text-xs font-bold uppercase">More projects ({more.length})</h3>
      <ul className="grid border-l-2 border-t-2 border-foreground sm:grid-cols-2 lg:grid-cols-3">
        {more.map((p) => {
          const href = p.liveUrl || p.repoUrl;
          const inner = (
            <>
              <span className="text-lg font-bold">{p.title}</span>
              {p.tagline && <span className="mt-1 block text-sm text-muted-foreground group-hover:text-foreground">{p.tagline}</span>}
              <span className="mono mt-2 block text-xs">{href ? (p.liveUrl ? "Live ↗" : "Code ↗") : "Coming soon"}</span>
            </>
          );
          return (
            <li key={p.slug} className="border-b-2 border-r-2 border-foreground">
              {href ? <a href={href} {...ext} className="group block h-full p-5 transition-colors hover:bg-primary">{inner}</a> : <div className="h-full p-5">{inner}</div>}
            </li>
          );
        })}
      </ul>
      <AnimatePresence>{active && <ProjectModal p={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}

export function About() {
  const facts = [["Location", "Prayagraj, UP"], ["Education", "BCA 2024–2027"], ["Focus", "Frontend + Full-Stack"]];
  return (
    <section id="about" className="border-t-2 border-foreground">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <Label n="02">About</Label>
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5"><h2 className="display text-[clamp(3rem,8vw,6rem)]">Builds<br />under<br /><span className="text-primary">pressure.</span></h2></Reveal>
          <Reveal delay={0.1} className="space-y-5 text-xl leading-snug md:col-span-7">
            <p>I'm Yash — a BCA student (2024–2027) at United Institute of Management (FUGS), Prof. Rajju Bhaiya University, and a developer who'd rather ship than talk about shipping.</p>
            <p>14+ hackathons taught me to build fast, scope hard and deliver under a deadline. I'm a PW Campus Ambassador, and I'm growing from frontend into full stack — MERN and Django.</p>
            <p>I work comfortably with AI-assisted workflows — prompt engineering, vibe coding — while still understanding every line that goes to production.</p>
          </Reveal>
        </div>
        <dl className="mt-16 grid border-2 border-foreground sm:grid-cols-3">
          {facts.map(([k, v], i) => (
            <div key={k} className={`p-6 ${i < 2 ? "border-b-2 sm:border-b-0 sm:border-r-2" : ""} border-foreground`}>
              <dt className="mono text-xs uppercase text-muted-foreground">{k}</dt>
              <dd className="mt-1 text-2xl font-bold">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-t-2 border-foreground bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <Label n="03">Skills</Label>
        <Reveal><h2 className="display mb-12 text-[clamp(3rem,8vw,6rem)]">Toolkit</h2></Reveal>
        <div className="space-y-10">
          {skills.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05} className="grid gap-4 border-t-2 border-foreground pt-6 md:grid-cols-12">
              <h3 className="mono text-sm font-bold uppercase md:col-span-3">{String(gi + 1).padStart(2, "0")} — {g.group}</h3>
              <ul className="flex flex-wrap gap-3 md:col-span-9">
                {g.items.map((s, i) => (
                  <li key={s} className={`border-2 border-foreground bg-background px-4 py-2 text-lg font-bold transition-all duration-200 hover:bg-primary hover:shadow-[var(--shadow-hard-sm)] ${i % 2 ? "hover:rotate-2" : "hover:-rotate-2"}`}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ c, onOpen }: { c: Certificate; onOpen: (c: Certificate) => void }) {
  const body = (
    <>
      <span className="mono text-[10px] uppercase text-muted-foreground">{c.group === "hackathon" ? "Hackathon" : "Certification"}</span>
      <span className="mt-2 block text-lg font-bold leading-tight">{c.title}</span>
      <span className="mono mt-3 block text-xs">— {c.issuer}</span>
    </>
  );
  const cls = "mx-3 block w-64 shrink-0 border-2 border-dashed border-foreground bg-background p-5 outline outline-2 outline-offset-4 outline-foreground text-left";
  return c.url ? <button className={`${cls} hover:bg-primary`} onClick={() => onOpen(c)}>{body}</button> : <div className={cls}>{body}</div>;
}

function CertRow({ items, rev, onOpen, label }: { items: Certificate[]; rev?: boolean; onOpen: (c: Certificate) => void; label: string }) {
  return (
    <div className="overflow-hidden py-4 pause-hover" aria-label={label}>
      <div className={`flex w-max ${rev ? "animate-marquee-rev" : "animate-marquee"}`}>
        {[0, 1].map((k) => (
          <div key={k} className="flex" aria-hidden={k === 1}>{items.map((c) => <CertCard key={c.title + k} c={c} onOpen={onOpen} />)}</div>
        ))}
      </div>
    </div>
  );
}

export function Certificates() {
  const [open, setOpen] = useState<Certificate | null>(null);
  const hack = certificates.filter((c) => c.group === "hackathon");
  const lic = certificates.filter((c) => c.group === "license");
  return (
    <section id="certificates" className="border-t-2 border-foreground py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Label n="04">Certificates</Label>
        <Reveal><h2 className="display mb-10 text-[clamp(3rem,8vw,6rem)]">Stamped &amp;<br />certified</h2></Reveal>
        <h3 className="mono mb-2 text-xs font-bold uppercase">Hackathons ({hack.length})</h3>
      </div>
      <CertRow items={hack} onOpen={setOpen} label="Hackathon certificates" />
      <div className="mx-auto mt-8 max-w-7xl px-4 md:px-8"><h3 className="mono mb-2 text-xs font-bold uppercase">Licenses &amp; certifications ({lic.length})</h3></div>
      <CertRow items={lic} rev onOpen={setOpen} label="Licenses and certifications" />
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[75] grid place-items-center bg-foreground/60 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} role="dialog" aria-modal="true">
            <div className="brutal-box w-full max-w-md p-8 shadow-[var(--shadow-hard)]" onClick={(e) => e.stopPropagation()}>
              <p className="mono text-xs uppercase">{open.issuer}</p>
              <h3 className="display mt-2 text-4xl">{open.title}</h3>
              <div className="mt-6 flex gap-3">
                <a href={open.url} {...ext} className="btn-brutal bg-primary">View certificate</a>
                <button onClick={() => setOpen(null)} className="btn-brutal bg-background">Close</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Community() {
  return (
    <section aria-labelledby="community-h" className="border-t-2 border-foreground bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-12"><div className="mono mb-2 text-xs uppercase">(05) — Community &amp; leadership</div></div>
        <Reveal className="md:col-span-7">
          <h2 id="community-h" className="display text-[clamp(3rem,8vw,6.5rem)]">Founder,<br />Ya~tsu Squad</h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-4 text-xl md:col-span-5">
          <p>A student developer community for hackathons, collaboration and project-based learning — we find events, form teams and build together.</p>
          <p className="mono border-t-2 border-current pt-4 text-sm uppercase">Also: PW Campus Ambassador</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section aria-labelledby="edu-h" className="border-t-2 border-foreground">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <Label n="06">Education</Label>
        <h2 id="edu-h" className="display mb-10 text-[clamp(3rem,8vw,6rem)]">Timeline</h2>
        <ol>
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <li className="grid gap-2 border-t-2 border-foreground py-6 md:grid-cols-12">
                <span className="mono text-sm font-bold md:col-span-3">{e.years}</span>
                <h3 className="text-2xl font-extrabold md:col-span-4">{e.title}</h3>
                <p className="text-lg text-muted-foreground md:col-span-5">{e.place}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Resume() {
  return (
    <section id="resume" className="border-t-2 border-foreground bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-24 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <div className="mono mb-4 text-xs font-bold uppercase">(07) — Resume</div>
          <h2 className="display text-[clamp(3.5rem,11vw,9rem)]">The one<br />pager.</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Magnetic><a href={site.resume} {...ext} className="btn-brutal bg-background">View Resume (PDF)</a></Magnetic>
          <Magnetic><a href={site.resume} download className="btn-brutal bg-foreground text-background">Download Resume ↓</a></Magnetic>
        </div>
      </div>
    </section>
  );
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  message: z.string().trim().min(10, "A few more words, please").max(2000),
});
type Form = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Form>({ resolver: zodResolver(schema) });
  const submit = (d: Form) => {
    const body = encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email})`);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${d.name}`)}&body=${body}`;
    setSent(true);
  };
  const field = "w-full border-2 border-foreground bg-background px-4 py-3 text-lg outline-none focus:shadow-[var(--shadow-hard-sm)]";
  return (
    <section id="contact" className="border-t-2 border-foreground">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <Label n="08">Contact</Label>
        <h2 className="display text-[clamp(3rem,9vw,7.5rem)]">Let's build something — <span className="text-primary">or hire me.</span></h2>
        <a href={`mailto:${site.email}`} className="mt-10 block break-all text-[clamp(1.4rem,4.5vw,3.5rem)] font-extrabold underline decoration-primary decoration-4 underline-offset-8 hover:text-primary">{site.email}</a>
        <div className="mono mt-6 flex flex-wrap gap-6 text-sm">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-primary">{site.phone}</a>
          <a href={site.github} {...ext} className="hover:text-primary">GitHub ↗</a>
          <a href={site.linkedin} {...ext} className="hover:text-primary">LinkedIn ↗</a>
          <span className="text-muted-foreground">Reply within 24 hours</span>
        </div>
        <form onSubmit={handleSubmit(submit)} noValidate className="mt-16 grid max-w-3xl gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block"><span className="mono text-xs font-bold uppercase">Name</span><input {...register("name")} className={field} autoComplete="name" />{errors.name && <span className="mono text-xs text-destructive">{errors.name.message}</span>}</label>
            <label className="block"><span className="mono text-xs font-bold uppercase">Email</span><input type="email" {...register("email")} className={field} autoComplete="email" />{errors.email && <span className="mono text-xs text-destructive">{errors.email.message}</span>}</label>
          </div>
          <label className="block"><span className="mono text-xs font-bold uppercase">Message</span><textarea rows={5} {...register("message")} className={field} />{errors.message && <span className="mono text-xs text-destructive">{errors.message.message}</span>}</label>
          <div><button type="submit" className="btn-brutal bg-primary">Send message <Arrow /></button>{sent && <span className="mono ml-4 text-xs">Your email app should open — thanks!</span>}</div>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 pb-[calc(2rem+env(safe-area-inset-bottom))] md:flex-row md:items-center md:justify-between md:px-8">
        <p className="mono text-xs">© 2026 Yash Srivastava · Prayagraj, India</p>
        <ul className="mono flex gap-6 text-xs uppercase">
          <li><a href={site.github} {...ext} className="hover:text-primary">GitHub</a></li>
          <li><a href={site.linkedin} {...ext} className="hover:text-primary">LinkedIn</a></li>
          <li><a href={`mailto:${site.email}`} className="hover:text-primary">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
