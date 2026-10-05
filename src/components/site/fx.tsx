import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring, useReducedMotion, animate } from "motion/react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MaskLine({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(value);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  return (
    <motion.span
      ref={ref}
      className="inline-block"
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.25);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.span>
  );
}

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35 });
  const sy = useSpring(y, { stiffness: 500, damping: 35 });
  const [big, setBig] = useState(false);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setOn(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      setBig(!!(e.target as HTMLElement).closest("a,button,[role=button]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  if (!on) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full bg-paper mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: big ? 56 : 12, height: big ? 56 : 12 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    />
  );
}

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void; scrollTo: (t: string | HTMLElement, o?: object) => void } | null = null;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a || !lenis) return;
      const el = document.querySelector(a.getAttribute("href")!);
      if (el) { e.preventDefault(); lenis.scrollTo(el as HTMLElement, { offset: -70 }); }
    };
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.1 });
      const loop = (t: number) => { lenis!.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
    });
    document.addEventListener("click", onClick);
    return () => { cancelAnimationFrame(raf); lenis?.destroy(); document.removeEventListener("click", onClick); };
  }, []);
  return null;
}

export function Preloader({ name }: { name: string }) {
  const [p, setP] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("ys-loaded")) { setDone(true); return; }
    const c = animate(0, 100, { duration: 1.3, ease: "easeInOut", onUpdate: (v) => setP(Math.round(v)), onComplete: () => { sessionStorage.setItem("ys-loaded", "1"); setTimeout(() => setDone(true), 200); } });
    return () => c.stop();
  }, []);
  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[80] flex flex-col justify-between bg-foreground p-6 text-background md:p-10"
      initial={{ y: 0 }}
      animate={{ y: done ? "-100%" : 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{ pointerEvents: done ? "none" : "auto" }}
    >
      <span className="mono text-xs uppercase">Portfolio · 2026</span>
      <div className="flex items-end justify-between gap-4">
        <span className="display text-[clamp(2.5rem,9vw,8rem)]">{name}</span>
        <span className="display text-[clamp(2.5rem,9vw,8rem)] text-primary">{p}</span>
      </div>
    </motion.div>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("theme") === "dark";
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
  }, []);
  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => {
        const d = !dark;
        setDark(d);
        document.documentElement.classList.toggle("dark", d);
        localStorage.setItem("theme", d ? "dark" : "light");
      }}
      className="mono grid h-10 w-10 place-items-center border-2 border-foreground text-xs font-bold hover:bg-foreground hover:text-background"
    >
      {dark ? "☀" : "◐"}
    </button>
  );
}
