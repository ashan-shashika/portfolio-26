import type { TimelineEntry } from "./types";

// Add, remove or reorder entries here. The timeline renders them top to bottom
// and alternates sides automatically.
export const careerTimeline: TimelineEntry[] = [
  {
    id: "2016-bsc",
    year: "2016",
    type: "education",
    title: "BSc",
    organization: "University of Ruhuna, Sri Lanka",
    description:
      "Graduated with a multidisciplinary background combining Applied Mathematics, Bio-Mathematics and Computer Science.",
    technologies: ["Mathematics", "Computer Science", "Statistics", "Algorithms"],
    details: [
      {
        label: "Relevant areas",
        items: [
          "Algorithms & Data Structures",
          "Object-Oriented Programming",
          "Computer Architecture",
          "Linear Algebra",
          "Applied Statistics",
          "Multimedia Technology",
        ],
      },
    ],
  },
  {
    id: "2017-eniplex",
    year: "2017",
    type: "career",
    title: "Software Engineer",
    organization: "Eniplex",
    description:
      "Started my professional software engineering career, focusing on frontend development for web applications.",
    technologies: ["React", "Relay", "GraphQL", "JavaScript"],
    achievements: [
      "Developed frontend features for web applications",
      "Worked with component-based UI development",
      "Integrated frontend applications with GraphQL APIs",
    ],
  },
  {
    id: "2018-technohive",
    year: "2018",
    type: "career",
    title: "Joined Technohive",
    organization: "Technohive",
    description:
      "Moved into full-stack software engineering, working across frontend applications, backend APIs, databases and AWS infrastructure.",
    highlight: "Frontend to full-stack",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Node.js",
      "GraphQL",
      "MySQL",
      "Elasticsearch",
      "AWS",
    ],
  },
  {
    id: "2022-senior",
    year: "2022",
    type: "career",
    title: "Senior Full-Stack Software Engineer",
    organization: "Technohive",
    description:
      "Progressed into a senior engineering role, taking greater ownership of production applications, technical implementation and full-stack development.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "AWS",
      "Elasticsearch",
      "MySQL",
    ],
    details: [
      {
        label: "Focus areas",
        items: [
          "Frontend Architecture",
          "Backend Development",
          "API Development",
          "Cloud Infrastructure",
          "Production Systems",
        ],
      },
    ],
  },
  {
    id: "2025-msc",
    year: "2025",
    type: "education",
    title: "MSc Data Science",
    organization: "University of Hertfordshire, United Kingdom",
    description:
      "Expanded my software engineering background into data science, machine learning and statistical modelling.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "XGBoost",
    ],
    details: [
      {
        label: "Relevant areas",
        items: [
          "Machine Learning",
          "Data Mining",
          "Data Visualisation",
          "Neural Networks",
          "Statistics",
          "Python",
          "Data Analysis",
        ],
      },
    ],
  },
  {
    id: "2025-sp500",
    year: "2025",
    type: "project",
    title: "S&P 500 & Macroeconomic Analysis",
    organization: "MSc Data Science Project",
    description:
      "Investigated how macroeconomic variables influence S&P 500 returns and sector performance using statistical and machine learning models.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "SHAP",
      "FRED",
      "Yahoo Finance",
    ],
    details: [
      {
        label: "Models",
        items: [
          "Linear Regression",
          "Ridge Regression",
          "Random Forest",
          "XGBoost",
          "Neural Networks",
        ],
      },
    ],
    // TODO: set to the project URL to show the "View project" link
    link: null,
    linkLabel: "View project",
  },
  {
    id: "2026-current",
    year: "2026",
    type: "current",
    title: "Full-Stack / Frontend Developer",
    organization: "United Kingdom",
    description:
      "Combining years of production software engineering experience with modern frontend development and a data science background.",
    status: "Currently",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "GraphQL",
      "AWS",
      "Python",
    ],
  },
];
