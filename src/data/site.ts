import resumePdf from "@/assets/yash-resume.pdf";

export const site = {
  name: "Yash Srivastava",
  short: "YS.dev",
  role: "Frontend & Full Stack Developer",
  location: "Prayagraj, Uttar Pradesh, India",
  siteUrl: "https://yash025.vercel.app",
  freelanceUrl: "https://yatsu025.vercel.app",
  email: "yashsrivastava1808@gmail.com",
  phone: "+91 95549 24590",
  github: "https://github.com/yatsu025",
  linkedin: "https://www.linkedin.com/in/yash-srivastava-514252322/",
  whatsappNumber: "919554924590",
  whatsappMessage: "Hi Yash, I saw your portfolio and I'd like to talk about an opportunity.",
  heroImageMode: "both" as "avatar" | "both",
  resume: resumePdf,
  title: "Yash Srivastava in Prayagraj — Frontend & Full Stack Developer",
  description:
    "Yash Srivastava is a frontend and full stack developer in Prayagraj and BCA student at UIM (FUGS). 14+ hackathons, 50+ real users, open to jobs and internships.",
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
  { value: 2, suffix: "", label: "Client projects shipped" },
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
  { label: "Education", href: "/education" },
  { label: "Freelance", href: "https://yatsu025.vercel.app" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
