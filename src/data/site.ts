export const site = {
  name: "Yash Srivastava",
  short: "YS.dev",
  role: "Frontend & Full Stack Developer",
  location: "Prayagraj, Uttar Pradesh, India",
  url: "https://yash025.vercel.app",
  email: "yashsrivastava1808@gmail.com",
  phone: "+91 95549 24590",
  github: "https://github.com/yatsu025",
  linkedin: "https://www.linkedin.com/in/yash-srivastava-514252322/",
  whatsappNumber: "919554924590",
  whatsappMessage: "Hi Yash, I saw your portfolio and I'd like to talk about an opportunity.",
  heroImageMode: "both" as "avatar" | "both",
  resume: "/__l5e/assets-v1/f0d5a0a4-2daf-482a-a661-9f1213ca0621/yash-srivastava-resume.pdf",
  title: "Yash Srivastava in Prayagraj — Frontend Developer & Hackathon Developer",
  description:
    "Yash Srivastava is a frontend & full stack developer in Prayagraj building fast React, Next.js and TypeScript web apps. 14+ hackathons, real users, open to work.",
  pitch:
    "I build fast, production-ready web apps with React, Next.js and TypeScript — and I've shipped software real people actually use.",
  proof: "Built the official SIH Internal Hackathon platform for my college — used by 50+ participants.",
  proofUrl: "https://sih-internal-hackathon-uim.vercel.app",
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const marquee = ["Frontend Dev", "Next.js", "React", "TypeScript", "Hackathon Grinder", "Ya~tsu Squad", "Open to work"];

export const stats = [
  { value: 14, suffix: "+", label: "Hackathons" },
  { value: 65, suffix: "+", label: "Real users across my live apps" },
  { value: 24, suffix: "", label: "GitHub repos" },
  { value: 2, suffix: "", label: "Freelance client projects" },
];

export const education = [
  { years: "2024 — 2027", title: "BCA", place: "United Institute of Management (FUGS), Prof. Rajju Bhaiya University" },
  { years: "2023 — 24", title: "12th · UP Board", place: "P.N. Public Inter College, Prayagraj" },
  { years: "2021 — 22", title: "10th · UP Board", place: "P.N. Public Inter College, Prayagraj" },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Freelance", href: "/freelance" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
