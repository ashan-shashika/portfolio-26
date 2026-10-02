export interface Role {
  period: string;
  title: string;
  company: string;
  points: string[];
}

export interface Principle {
  title: string;
  text: string;
}

export interface StackGroup {
  name: string;
  items: { name: string; role: string }[];
}

export const links = {
  github: "https://github.com/YOUR-USERNAME", // TODO
  linkedin: "https://www.linkedin.com/in/YOUR-PROFILE", // TODO
  email: "hello@yourdomain.com", // TODO
};

export const site = {
  firstName: "Ashan",
  lastName: "Shashika",
  role: "Full-Stack Web Developer",
  location: "Slough, United Kingdom",
  tagline:
    "Building fast, scalable and engaging digital experiences.",
  links,

  about: {
    headline: "Turning ideas into digital experiences.",
    intro:
      "I’m a Full-Stack Web Developer with experience building modern web applications, scalable APIs and data-driven digital products.",
    body: "I studied at the University of Hertfordshire and have built production software ranging from marketplace platforms to retail systems that run a working shop floor. I prefer small, well-understood components, explicit data contracts and interfaces that work for everyone.",
  },

  tech: [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "GraphQL",
    "Python",
    "SQL",
    "AWS",
  ],
  experience: [
    // TODO: replace these with your real roles, newest first.
    {
      period: "[20XX] — Present",
      title: "[Role title]",
      company: "[Company name] · [Location or Remote]",
      points: [
        "[Key responsibility or outcome, stated concretely]",
        "[System or feature you owned and what it enabled]",
        "[Technical improvement, with a real measure if you have one]",
      ],
    },
    {
      period: "[20XX] — [20XX]",
      title: "[Role title]",
      company: "[Company name] · [Location or Remote]",
      points: [
        "[Key responsibility or outcome]",
        "[Key responsibility or outcome]",
      ],
    },
  ] satisfies Role[],

  education: {
    school: "University of Hertfordshire",
    detail: "[Degree and subject] · [Year]", // TODO
  },

  principles: [
    {
      title: "Architecture",
      text: "Design modular systems with clear boundaries between presentation, business logic and data.",
    },
    {
      title: "Frontend",
      text: "Compose typed React components around explicit state, with the server as the source of truth for shared data.",
    },
    {
      title: "Backend",
      text: "Model APIs on the domain, validate at the edge and keep business rules in one place that can be tested directly.",
    },
    {
      title: "Data",
      text: "Normalise relational schemas, index for real query patterns and use search engines where relational queries stop being the right tool.",
    },
    {
      title: "Cloud",
      text: "Deploy repeatable environments on AWS with configuration kept out of code and costs understood before they grow.",
    },
    {
      title: "Performance",
      text: "Measure first. Ship less JavaScript, cache deliberately and keep the critical path short so pages feel instant on real devices.",
    },
    {
      title: "Accessibility",
      text: "Semantic HTML, keyboard support and sufficient contrast are part of the definition of done, not a later audit.",
    },
    {
      title: "Testing",
      text: "Unit-test business rules, integration-test API contracts and keep a short end-to-end suite on the flows users depend on.",
    },
  ] satisfies Principle[],

  stack: [
    {
      name: "Frontend",
      items: [
        { name: "React", role: "UI" },
        { name: "TypeScript", role: "Types" },
        { name: "JavaScript", role: "Runtime" },
        { name: "HTML", role: "Semantics" },
        { name: "CSS", role: "Layout" },
      ],
    },
    {
      name: "Backend",
      items: [
        { name: "Node.js", role: "Services" },
        { name: "GraphQL", role: "API" },
        { name: "REST", role: "API" },
        { name: "Python · FastAPI", role: "Services" },
      ],
    },
    {
      name: "Data",
      items: [
        { name: "MySQL", role: "Relational" },
        { name: "PostgreSQL", role: "Relational" },
        { name: "SQLite", role: "Embedded" },
        { name: "Elasticsearch", role: "Search" },
      ],
    },
    {
      name: "Cloud",
      items: [{ name: "AWS", role: "Infrastructure" }],
    },
  ] satisfies StackGroup[],

  contact: {
    headline: "Let’s build something useful.",
    text: "Interested in working together or discussing a project?",
  },
};
