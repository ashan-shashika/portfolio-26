import type { StackGroup } from "./types";

export const techStack: StackGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Typed, component-based interfaces focused on usability, performance and accessibility.",
    icon: "frontend",
    items: [
      { name: "React", core: true },
      { name: "TypeScript", core: true },
      { name: "JavaScript", core: true },
      { name: "Next.js", core: true },
      { name: "Redux", core: true },
      { name: "Relay" },
      { name: "Apollo Client", core: true },
      { name: "HTML5", core: true },
      { name: "CSS3", core: true },
      { name: "Sass" },
      { name: "Bootstrap" },
      { name: "Material UI" },
      { name: "Tailwind CSS", core: true },
      { name: "Responsive Design", core: true },
      { name: "Accessibility", core: true },
    ],
  },

  {
    id: "backend",
    title: "Backend & APIs",
    description:
      "API-driven backend systems with clear domain logic, integrations and scalable services.",
    icon: "backend",
    items: [
      { name: "Node.js", core: true },
      { name: "Express.js", core: true },
      { name: "GraphQL", core: true },
      { name: "TypeScript", core: true },
      { name: "Apollo Server", core: true },
      { name: "NestJS" },
      { name: "REST APIs", core: true },
      { name: "Knex.js" },
      { name: "Prisma", core: true },
      { name: "Mongoose" },
      { name: "Sequelize" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "PHP" },
      { name: "Laravel" },
      { name: "C#" },
      { name: ".NET" },
    ],
  },

  {
    id: "data",
    title: "Databases & Search",
    description:
      "Relational and document databases combined with indexing and search for data-intensive applications.",
    icon: "database",
    items: [
      { name: "MySQL", core: true },
      { name: "PostgreSQL", core: true },
      { name: "MongoDB", core: true },
      { name: "Elasticsearch", core: true },
      { name: "Redis" },
    ],
  },

  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description:
      "Cloud infrastructure, application deployment and managed services for production systems.",
    icon: "cloud",
    items: [
      { name: "AWS", core: true },
      { name: "EC2" },
      { name: "Lambda" },
      { name: "S3" },
      { name: "Cognito" },
      { name: "CloudFront" },
      { name: "API Gateway" },
      { name: "IAM" },
      { name: "CloudWatch" },
      { name: "Route 53" },
      { name: "SES" },
    ],
  },

  {
    id: "devops",
    title: "DevOps & CI/CD",
    description:
      "Automated development and deployment workflows for reliable software delivery.",
    icon: "tooling",
    items: [
      { name: "Docker", core: true },
      { name: "Git", core: true },
      { name: "GitHub", core: true },
      { name: "GitLab" },
      { name: "GitHub Actions", core: true },
      { name: "GitLab CI/CD" },
      { name: "AWS CI/CD", core: true },
      { name: "Vite" },
      { name: "npm", core: true },
      { name: "Yarn", core: true },
    ],
  },

  {
    id: "data-science",
    title: "Data Science & ML",
    description:
      "Statistical analysis and machine learning applied to real-world datasets and research projects.",
    icon: "data",
    items: [
      { name: "Python", core: true },
      { name: "Pandas", core: true },
      { name: "NumPy", core: true },
      { name: "TensorFlow", core: true },
      { name: "Keras" },
      { name: "Scikit-learn" },
      { name: "Matplotlib" },
      { name: "Jupyter" },
      { name: "SciPy" },
      { name: "Feature Engineering" },
      { name: "Statistical Modelling" },
    ],
  },
];
