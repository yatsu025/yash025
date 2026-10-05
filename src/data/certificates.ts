export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  group: "hackathon" | "license";
  url: string;
  blurb: string;
};

export const certificates: Certificate[] = [
  { slug: "ace-hack-4", title: "Ace Hack 4.0", issuer: "Ace Hack", group: "hackathon", url: "", blurb: "A hands-on hackathon experience that strengthened rapid prototyping, teamwork and delivery under a deadline. I carry that practical approach into every web project I build." },
  { slug: "code-verse", title: "Code Verse", issuer: "Code Verse", group: "hackathon", url: "", blurb: "Code Verse gave me another opportunity to solve problems in a competitive build environment. It helped sharpen how I scope features and turn an idea into a working product quickly." },
  { slug: "coding-challenge-united", title: "Coding Challenge of United", issuer: "United Institute of Management", group: "hackathon", url: "", blurb: "This institute coding challenge tested practical problem-solving and implementation. The experience supports the disciplined development process I use in college and personal projects." },
  { slug: "hack-with-uttar-pradesh", title: "Hack with Uttar Pradesh", issuer: "Government of UP", group: "hackathon", url: "", blurb: "This hackathon exposed me to building solutions around real challenges with limited time. It strengthened my confidence in collaborating, prioritising and presenting a working result." },
  { slug: "hackshatra", title: "Hackshatra", issuer: "Hackshatra", group: "hackathon", url: "", blurb: "Hackshatra was part of my continuing practice in fast product development. I used the experience to improve idea validation, teamwork and clear technical execution." },
  { slug: "kode-kalesh", title: "Kode Kalesh", issuer: "Kode Kalesh", group: "hackathon", url: "", blurb: "Kode Kalesh helped me practise building and debugging under competition pressure. Those lessons now shape how I keep interfaces focused and projects shippable." },
  { slug: "namespace", title: "Namespace", issuer: "Namespace", group: "hackathon", url: "", blurb: "Namespace added to my experience of collaborative technical problem-solving. It reinforced the value of choosing a realistic scope and delivering the core user journey first." },
  { slug: "hackerground", title: "Hackerground", issuer: "Hackerground", group: "hackathon", url: "", blurb: "Hackerground provided another practical setting for testing ideas and working against a deadline. I apply that experience when planning features and resolving problems in production projects." },
  { slug: "bnb-chain-ai-hackathon", title: "BNB Chain AI Hackathon", issuer: "BNB Chain", group: "hackathon", url: "", blurb: "This event expanded my exposure to AI and blockchain-focused product ideas. It encouraged me to think carefully about where emerging technology can create a useful user experience." },
  { slug: "vibe-hack-2", title: "Vibe Hack 2.0", issuer: "Vibe Hack", group: "hackathon", url: "", blurb: "Vibe Hack 2.0 strengthened my AI-assisted development workflow while keeping attention on working code. I use that balance to move faster without losing control of implementation quality." },
  { slug: "claude-cowork", title: "Introduction to Claude Cowork", issuer: "Anthropic", group: "license", url: "", blurb: "This learning covered practical collaboration with Claude-based tools. I use the ideas to structure prompts, review outputs and support faster software development workflows." },
  { slug: "claude-code-in-action", title: "Claude Code in Action", issuer: "Anthropic", group: "license", url: "", blurb: "This course focused on using Claude Code in real development workflows. I apply the learning to code exploration, implementation planning and careful AI-assisted iteration." },
  { slug: "aws-cloud-practitioner", title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", group: "license", url: "", blurb: "This certification built my foundation in cloud concepts, AWS services, security and shared responsibility. It helps me make more informed deployment and architecture decisions." },
  { slug: "aws-apac-solutions-architecture", title: "AWS APAC Solutions Architecture Job Simulation", issuer: "Amazon Web Services", group: "license", url: "", blurb: "The simulation introduced practical solution-architecture thinking for customer requirements. I use that mindset to compare trade-offs before choosing a stack or deployment approach." },
  { slug: "accenture-developer-program", title: "Accenture Developer Program", issuer: "Accenture", group: "license", url: "", blurb: "This program provided exposure to structured software-development tasks in a professional context. It reinforced clear problem decomposition, testing and communication." },
  { slug: "tata-digital-skills", title: "TATA Digital Skills", issuer: "TATA", group: "license", url: "", blurb: "The program strengthened broad digital and workplace skills relevant to modern technology teams. I apply those foundations when collaborating, documenting work and presenting projects." },
  { slug: "freecodecamp-javascript", title: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", group: "license", url: "", blurb: "This certification covered core JavaScript, algorithms and data structures. Those fundamentals support the React and full-stack applications I build today." },
];