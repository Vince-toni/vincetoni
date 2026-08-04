export const siteData = {
  brand: {
    name: "VINCETONI",
    tagline: "Building the future, one idea at a time.",
    description:
      "VINCETONI is a growing technology organization creating products, experimenting with new ideas, and bringing ambitious projects to life.",
  },

  nav: {
    links: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    eyebrow: "Technology • Innovation • Creativity",

    title: "Building the future, one idea at a time.",

    description:
      "VINCETONI is a growing technology organization creating digital products, exploring new technologies, and bringing ambitious ideas to life.",

    primaryCta: {
      label: "Explore our work →",
      href: "#work",
    },

    secondaryCta: {
      label: "About VINCETONI",
      href: "#about",
    },
  },

  projects: {
    eyebrow: "02 — Featured Work",

    title: "Things we're building, exploring, and bringing to life.",

    items: [
      {
        id: "studify",
        name: "Studify",

        status: "In Development",
        statusType: "development",

        category: ["EdTech", "Mobile"],

        description:
          "A learning platform designed to make studying more engaging, rewarding, and accessible.",

        image: "/projects/icon.webp",

        projectPage: {
          label: "View Project",
          href: "/work/studify",
          available: true,
        },

        tryProject: {
          label: "Try Project",
          href: "#",
          available: false,
          unavailableLabel: "Coming Soon",
        },
      },

      {
        id: "devpilot",
        name: "DevPilot",

        status: "In Development",
        statusType: "development",

        category: ["AI", "Productivity"],

        description:
          "An AI-powered project management tool designed to help teams plan, build, and collaborate more effectively.",

        image: "/projects/icon.webp",

        projectPage: {
          label: "View Project",
          href: "/work/devpilot",
          available: true,
        },

        tryProject: {
          label: "Try Project",
          href: "#",
          available: false,
          unavailableLabel: "Coming Soon",
        },
      },

      {
        id: "future-project",
        name: "Future Project",

        status: "Coming Soon",
        statusType: "coming-soon",

        category: ["Experimental"],

        description:
          "Something new is taking shape. Stay tuned.",

        image: "/projects/icon.webp",

        projectPage: {
          label: "View Project",
          href: "#",
          available: false,
          unavailableLabel: "Coming Soon",
        },

        tryProject: {
          label: "Try Project",
          href: "#",
          available: false,
          unavailableLabel: "Coming Soon",
        },
      },
    ],
  },

  roadmap: {
    eyebrow: "Roadmap",
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

 about: {
  eyebrow: "01 — About VINCETONI",

  title: "Ideas into reality.",

  description:
    "VINCETONI is a technology organization focused on building meaningful digital products and exploring what's possible with technology.",

  pillars: [
    {
      id: "01",
      title: "Build",
      description: "We transform ambitious ideas into digital products."
    },
    {
      id: "02",
      title: "Explore",
      description: "We experiment with emerging technologies."
    },
    {
      id: "03",
      title: "Create",
      description: "We design beautiful, lasting digital experiences."
    }
  ]
},
contact: {
    email: "hello@vincetoni.com",
    phone: "+447879232909",
  },  
};