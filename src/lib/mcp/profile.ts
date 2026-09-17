export const profile = {
  name: "Ahmed Muhammed Seid",
  alternateNames: ["AhmedMS"],
  title: "Front End Developer & Software Engineer",
  location: "Addis Ababa, Ethiopia",
  summary:
    "Software Developer and Project Manager based in Addis Ababa, Ethiopia. Turns complex problems into elegant, scalable solutions and bridges engineering with project delivery. Trilingual collaboration in English, Arabic, and Amharic.",
  website: "https://ahmedms.lovable.app/",
  contact: {
    email: "ahmedmuh543@gmail.com",
    phone: "+251 920 928 989",
    telegram: "https://telegram.me/Amsa899",
    linkedin: "https://www.linkedin.com/in/ahmed-muhammed-seid-983138309",
    github: "https://github.com/ahmed-webcode",
  },
  availability:
    "Open to opportunities — freelance, contract, or full-time. Reach out by email (ahmedmuh543@gmail.com) or Telegram (@Amsa899).",
  languages: ["English", "Arabic (العربية)", "Amharic (አማርኛ)"],
  skills: {
    "Programming languages": ["Python", "Java", "JavaScript", "PHP"],
    "Backend frameworks": ["Django", "Node.js", "NestJS", "Express.js"],
    "Databases & DevOps": ["MySQL", "Git", "Docker", "Bash scripting"],
    "Linux & servers": ["Ubuntu", "CentOS", "Apache", "Nginx", "SSH", "Cron jobs"],
    Frontend: ["React", "Modern responsive web design"],
    "Project management": [
      "Stakeholder coordination",
      "SOPs",
      "Agile delivery",
      "Digital transformation",
    ],
  } as Record<string, string[]>,
  experience: [
    {
      role: "Project Manager",
      organization: "Addis Ababa University",
      period: "Feb 2025 – Feb 2026",
      highlights: [
        "Led the Fleet Management System project, replacing manual vehicle logging with an automated platform.",
        "Improved fleet utilization and cut unauthorized vehicle use.",
        "Reduced downtime through maintenance-alert integration.",
        "Delivered on time and on budget with full SOPs and documentation.",
      ],
    },
  ],
  projects: [
    {
      name: "Emarosh Residence",
      url: "https://emarosh.vercel.app",
      stack: ["React", "3D", "Scroll animation"],
      description:
        "A cinematic 3D scrolling experience for a luxury residence — brutalist architecture meets biophilic serenity across five levels. Open it and see the magic in the scroll.",
    },
    {
      name: "AURUM Mouse",
      url: "https://aurum-opal-nu.vercel.app/",
      stack: ["React", "3D", "Luxury product"],
      description:
        "A cinematic luxury product showcase for an artisan gaming mouse — hand-finished American Walnut meets aerospace metallurgy with esports-grade optical precision.",
    },
    {
      name: "Fleet Management System (AAU)",
      url: null as string | null,
      stack: ["React", "Node.js", "MySQL"],
      description:
        "Full digital transformation of Addis Ababa University transport operations — automated vehicle logging, utilization tracking, and maintenance alerts.",
    },
    {
      name: "kheyrukum.com",
      url: "https://kheyrukum.com",
      stack: ["Web design", "Responsive frontend"],
      description:
        "A website built to show the world that Kheyrukum exists — a polished digital presence that tells its story.",
    },
    {
      name: "Kheyrukum Portal",
      url: "https://kheyrukumportal.vercel.app",
      stack: ["React", "Node.js"],
      description:
        "A portal where teachers and parents meet to track students' learning patterns, progress, and daily behavior in a collaborative dashboard.",
    },
    {
      name: "Sanid Islamic Development Center (SIDC)",
      url: "https://sanid-sable.vercel.app/",
      stack: ["React", "Responsive frontend"],
      description:
        "Bilingual website for a registered Ethiopian non-profit — strategic pillars, governance, media gallery and partnership calls.",
    },
    {
      name: "HOA Agriproducts",
      url: "https://hoaglobalagro.vercel.app/",
      stack: ["React", "Responsive frontend"],
      description:
        "Corporate landing experience for an East African animal-nutrition distributor with a clear partnership funnel.",
    },
    {
      name: "Moon Cakes",
      url: "https://mooncakes.lovable.app/",
      stack: ["React", "Motion design"],
      description:
        "Cinematic dark-mode brand site for a bakery with gallery, menu and light/dark toggle.",
    },
    {
      name: "MOSQIKIL Pro",
      url: "https://mosqikil-3.vercel.app/",
      stack: ["React", "3D/animation"],
      description:
        "Product launch page for a next-gen mosquito repellent device with animated architecture sections.",
    },
    {
      name: "CBE Hero",
      url: "https://cbe-hero.vercel.app/",
      stack: ["React", "Animation"],
      description:
        "Concept experience for Commercial Bank of Ethiopia with an animated coin hero and legacy storytelling.",
    },
  ],
} as const;
