export const siteData = {
  brand: {
    name: "VINCETONI",
    tagline: "Building the future, one idea at a time.",
    description:
      "VINCETONI is a growing technology organization creating products, experimenting with new ideas, and bringing ambitious projects to life.",
  },

  nav: {
    links: [
      { label: "Products", href: "#products" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    eyebrow: "Technology • Innovation • Creativity",
    title: "Building the future, one idea at a time.",
    description:
      "VINCETONI is a growing technology organization creating digital products, exploring new technologies, and bringing ambitious ideas to life.",
    primaryCta: {
      label: "Explore our work",
      href: "#products",
    },
    secondaryCta: {
      label: "About VINCETONI",
      href: "#about",
    },
  },

  about: {
    eyebrow: "01 — About VINCETONI",
    title: "Ideas into reality.",
    description:
      "VINCETONI is a technology organization focused on building meaningful digital products and exploring what's possible with technology.",
    philosophy: {
      title: "Our Philosophy",
      description:
        "We believe great technology should feel inevitable — simple on the surface, deeply considered underneath. Every product we build starts with a question, not a feature list.",
    },
    mission: {
      title: "Our Mission",
      description:
        "To craft digital experiences that empower people, accelerate innovation, and set a new standard for what small teams can achieve.",
    },
    vision: {
      title: "Our Vision",
      description:
        "A world where ambitious ideas move from concept to reality faster, with craftsmanship and intention at every step.",
    },
    values: [
      {
        id: "01",
        title: "Craft",
        description: "Every detail matters. We build with precision and care.",
      },
      {
        id: "02",
        title: "Curiosity",
        description: "We explore boldly and learn continuously.",
      },
      {
        id: "03",
        title: "Clarity",
        description: "Complex problems deserve elegant solutions.",
      },
      {
        id: "04",
        title: "Commitment",
        description: "We finish what we start, and we finish it well.",
      },
    ],
    pillars: [
      {
        id: "01",
        title: "Build",
        description: "We transform ambitious ideas into digital products.",
      },
      {
        id: "02",
        title: "Explore",
        description: "We experiment with emerging technologies.",
      },
      {
        id: "03",
        title: "Create",
        description: "We design beautiful, lasting digital experiences.",
      },
    ],
  },

  team: {
    eyebrow: "Our Team",
    title: "The people behind the craft.",
    description:
      "A small, focused team of engineers, designers, and builders united by a shared obsession with quality.",
    members: [
      {
        id: "vince",
        name: "Vince Toni",
        role: "Founder & Lead Engineer",
        initials: "VT",
        specialties: ["Full-Stack", "System Design", "Product Strategy"],
        bio: "Founder of VINCETONI. Passionate about building products that feel effortless and engineering teams that ship with intention.",
        portfolio: { label: "Portfolio", href: "#" },
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "hello@vincetoni.com",
      },
      {
        id: "engineer",
        name: "Alex Chen",
        role: "Senior Software Engineer",
        initials: "AC",
        specialties: ["React", "Node.js", "Cloud Infrastructure"],
        bio: "Full-stack engineer with a focus on performance, scalability, and developer experience. Believes clean architecture is a form of respect.",
        portfolio: { label: "Portfolio", href: "#" },
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: null,
      },
      {
        id: "designer",
        name: "Maya Okonkwo",
        role: "Product Designer",
        initials: "MO",
        specialties: ["UI/UX", "Motion Design", "Design Systems"],
        bio: "Designer who bridges aesthetics and usability. Creates interfaces that feel premium, purposeful, and deeply human.",
        portfolio: { label: "Portfolio", href: "#" },
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: null,
      },
    ],
  },

  featuredProduct: {
    eyebrow: "02 — Flagship Product",
    name: "Studify",
    tagline: "Learning, reimagined.",
    description:
      "A learning platform designed to make studying more engaging, rewarding, and accessible. Built for students who want more from their tools.",
    status: "In Development",
    statusType: "development",
    progress: 68,
    launchTarget: "Q3 2026",
    categories: ["EdTech", "Mobile", "AI"],
    technologies: ["React Native", "TypeScript", "Supabase", "OpenAI"],
    features: [
      "Adaptive study plans",
      "Gamified progress tracking",
      "AI-powered summaries",
      "Cross-platform sync",
    ],
    cta: { label: "Learn more", href: "#products" },
    image: "/projects/icon.webp",
  },

  products: {
    eyebrow: "03 — Products",
    title: "What we're building.",
    description:
      "Each product is a deliberate bet on the future — designed, engineered, and refined with care.",
    items: [
      {
        id: "studify",
        name: "Studify",
        status: "In Development",
        statusType: "development",
        progress: 68,
        categories: ["EdTech", "Mobile"],
        description:
          "A learning platform designed to make studying more engaging, rewarding, and accessible.",
        technologies: ["React Native", "TypeScript", "Supabase"],
        image: "/projects/icon.webp",
        layout: "featured",
        href: "#",
      },
      {
        id: "devpilot",
        name: "DevPilot",
        status: "In Development",
        statusType: "development",
        progress: 42,
        categories: ["AI", "Productivity"],
        description:
          "An AI-powered project management tool designed to help teams plan, build, and collaborate more effectively.",
        technologies: ["Next.js", "Python", "PostgreSQL"],
        image: "/projects/icon.webp",
        layout: "horizontal",
        href: "#",
      },
      {
        id: "future",
        name: "Project Nova",
        status: "Coming Soon",
        statusType: "coming-soon",
        progress: 12,
        categories: ["Experimental"],
        description:
          "Something new is taking shape. An experiment at the edge of what's possible.",
        technologies: ["TBD"],
        image: "/projects/icon.webp",
        layout: "minimal",
        href: "#",
      },
    ],
  },

  projects: {
    eyebrow: "04 — Engineering",
    title: "Built with intention.",
    description:
      "Open experiments, internal tools, and engineering showcases that push our craft forward.",
    items: [
      {
        id: "studify-core",
        title: "Studify Core Engine",
        description:
          "The adaptive learning engine powering Studify — real-time progress tracking, spaced repetition, and intelligent content delivery.",
        technologies: ["TypeScript", "Node.js", "Redis", "PostgreSQL"],
        tags: ["Backend", "EdTech", "Open Source"],
        status: "Active",
        progress: 72,
        timeline: "2025 — Present",
        contribution: "Lead",
        github: "https://github.com",
        demo: null,
        image: "/projects/icon.webp",
      },
      {
        id: "design-system",
        title: "VINCETONI Design System",
        description:
          "A unified component library and design token system ensuring consistency across all VINCETONI products.",
        technologies: ["React", "Tailwind CSS", "Storybook"],
        tags: ["Design", "Frontend", "Internal"],
        status: "Active",
        progress: 55,
        timeline: "2025 — Present",
        contribution: "Maintainer",
        github: "https://github.com",
        demo: null,
        image: "/projects/icon.webp",
      },
      {
        id: "devpilot-ai",
        title: "DevPilot AI Layer",
        description:
          "Natural language project planning and task decomposition powered by fine-tuned language models.",
        technologies: ["Python", "OpenAI", "FastAPI"],
        tags: ["AI", "Productivity", "R&D"],
        status: "In Progress",
        progress: 38,
        timeline: "2026 — Present",
        contribution: "Contributor",
        github: "https://github.com",
        demo: null,
        image: "/projects/icon.webp",
      },
    ],
  },

  roadmap: {
    eyebrow: "05 — Roadmap",
    title: "How we move from idea to delivery.",
    description:
      "Our process is designed to keep momentum while staying flexible, with clear milestones and thoughtful execution.",
    items: [
      {
        number: "01",
        title: "Discover & define",
        description:
          "We research, align on goals, and build the right plan for your product vision.",
      },
      {
        number: "02",
        title: "Design & validate",
        description:
          "We prototype, test, and refine the experience before moving into development.",
      },
      {
        number: "03",
        title: "Build & launch",
        description:
          "We ship high-quality products with clear steps, collaboration, and continuous improvement.",
      },
    ],
  },

  cta: {
    eyebrow: "Get in touch",
    title: "Let's build tomorrow.",
    description:
      "Have an idea, a project, or just want to connect? We'd love to hear from you.",
    primaryCta: { label: "Start a conversation", href: "mailto:hello@vincetoni.com" },
    email: "hello@vincetoni.com",
    cards: [
      {
        title: "Partnerships",
        description: "Collaborate on ambitious products and ventures.",
        href: "mailto:hello@vincetoni.com",
      },
      {
        title: "Careers",
        description: "Join a team that cares deeply about craft.",
        href: "mailto:hello@vincetoni.com",
      },
      {
        title: "Press",
        description: "Media inquiries and brand assets.",
        href: "mailto:hello@vincetoni.com",
      },
    ],
  },

  footer: {
    tagline: "Building the future, one idea at a time.",
    links: {
      company: [
        { label: "About", href: "#about" },
        { label: "Team", href: "#team" },
        { label: "Roadmap", href: "#roadmap" },
        { label: "Contact", href: "#contact" },
      ],
      products: [
        { label: "Studify", href: "#products" },
        { label: "DevPilot", href: "#products" },
        { label: "All Products", href: "#products" },
      ],
      projects: [
        { label: "Engineering", href: "#projects" },
        { label: "Open Source", href: "#projects" },
      ],
    },
    social: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "X", href: "https://x.com" },
      { label: "Discord", href: "https://discord.com" },
    ],
    contact: {
      email: "hello@vincetoni.com",
      phone: "+44 7879 232909",
    },
    copyright: `© ${new Date().getFullYear()} VINCETONI. All rights reserved.`,
  },

  contact: {
    email: "hello@vincetoni.com",
    phone: "+447879232909",
  },
};
