export const profile = {
  name: "Ahmed Muhammed Seid",
  alternateNames: ["AhmedMS"],
  title: "Software Developer & Project Manager",
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
  ],
} as const;
