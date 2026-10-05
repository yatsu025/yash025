export type Project = {
  title: string;
  slug: string;
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  tagline?: string;
  description?: string;
  tech?: string[];
  features?: string[];
  badge?: string;
  impact?: string[];
  category: "own" | "client";
  users?: number;
};

export const projects: Project[] = [
  {
    title: "SIH Internal Hackathon — UIM",
    slug: "sih-internal-uim",
    liveUrl: "https://sih-internal-hackathon-uim.vercel.app",
    repoUrl: "https://github.com/yatsu025/SIH-Internal-Hackathon-UIM",
    featured: true,
    category: "own",
    users: 50,
    badge: "LIVE AT UIM · 50+ REAL USERS",
    tagline: "Official registration platform for my college's SIH Internal Hackathon.",
    description:
      "The official registration platform for United Institute of Management (FUGS)'s Smart India Hackathon internal round. Real software that solved a real problem for a real institution — teams registered, organisers managed entries, and the college ran its internal hackathon on it.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    features: ["Team registration flow", "Problem statement selection", "Organiser-facing data", "Production deployment on Vercel"],
    impact: ["Built for my own college", "Used by 50+ real participants", "Adopted by the institute for its internal hackathon"],
  },
  {
    title: "StreakVerse",
    slug: "streakverse",
    liveUrl: "https://streak-verse.vercel.app",
    repoUrl: "https://github.com/yatsu025/StreakVerse",
    featured: true,
    category: "own",
    users: 5,
    badge: "5+ REAL USERS",
    tagline: "Gamified GitHub consistency — commits become streaks, XP and tiers.",
    description:
      "A gamified GitHub consistency platform that turns commit activity into streaks, XP, shields, tiers and a global leaderboard.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "Supabase Auth", "PostgreSQL", "GitHub API", "GitHub Webhooks", "Vercel"],
    features: [
      "Commit streak tracking + streak shields",
      "XP + milestone bonuses",
      "Tiers from Rookie → Mythic",
      "Rank score algorithm + global leaderboard",
      "Signature-verified webhooks + auto-sync polling",
      "Gamified dashboard",
    ],
  },
  {
    title: "Jivan AI",
    slug: "jivan-ai",
    liveUrl: "https://jivan-ai.vercel.app",
    repoUrl: "https://github.com/yatsu025/jivan-ai",
    featured: true,
    category: "own",
    users: 10,
    badge: "10+ USERS",
    tagline: "Multi-faith spiritual AI companion — anonymous and multilingual.",
    description:
      "A spiritual AI companion for Hindu, Muslim, Christian and Sikh users with religion-specific UI and context-aware prompts. Multilingual (Hindi, Urdu, Punjabi, English, Hinglish), light/dark mode, 100% anonymous with no login.",
    tech: ["React (Vite)", "Tailwind", "React Router", "Context API", "Axios", "Vercel"],
    features: ["Religion-specific themes and prompts", "5 languages incl. Hinglish", "No login, fully anonymous", "Light / dark mode"],
  },
  { title: "2X Fire Cup", slug: "2x-fire-cup", liveUrl: "https://2x-fire-cup.vercel.app", repoUrl: "https://github.com/yatsu025/2x-fire-cup", featured: false, category: "client", tagline: "Free Fire tournament registration portal with payment integration.", tech: ["Next.js", "React Hook Form", "Zod"] },
  { title: "Prayagraj ka Novel", slug: "prayagraj-ka-novel", liveUrl: "", repoUrl: "", featured: false, category: "client", tagline: "General-knowledge competition platform for students.", tech: ["React", "Tailwind", "Vercel"] },
  { title: "UIM-Evaluation", slug: "uim-evaluation", liveUrl: "", repoUrl: "https://github.com/yatsu025/UIM-Evaluation", featured: false, category: "own" },
  { title: "Twitter-clone", slug: "twitter-clone", liveUrl: "", repoUrl: "https://github.com/yatsu025/Twitter-clone", featured: false, category: "own" },
  { title: "task-buddy", slug: "task-buddy", liveUrl: "", repoUrl: "https://github.com/yatsu025/task-buddy", featured: false, category: "own" },
  { title: "Secure-room", slug: "secure-room", liveUrl: "", repoUrl: "https://github.com/yatsu025/Secure-room", featured: false, category: "own" },
  { title: "NayaDisha", slug: "nayadisha", liveUrl: "", repoUrl: "https://github.com/yatsu025/NayaDisha", featured: false, category: "own" },
  { title: "kodekalesh-2025", slug: "kodekalesh-2025", liveUrl: "", repoUrl: "https://github.com/yatsu025/kodekalesh-2025", featured: false, category: "own" },
  { title: "voicebid-pro", slug: "voicebid-pro", liveUrl: "", repoUrl: "https://github.com/yatsu025/voicebid-pro", featured: false, category: "own" },
  { title: "AI-Powered-Smart-Contract-Bug-Finder", slug: "smart-contract-bug-finder", liveUrl: "", repoUrl: "https://github.com/yatsu025/AI-Powered-Smart-Contract-Bug-Finder", featured: false, category: "own" },
];
