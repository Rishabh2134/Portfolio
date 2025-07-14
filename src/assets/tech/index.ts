import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  git,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Cloud & DevOps Engineer",
    icon: backend, // you can replace this with a cloud/infra icon later
  },
  {
    title: "CI/CD Pipeline Expert",
    icon: web, // can use gear icon if available
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: mobile, // consider a Terraform or code icon
  },
  {
    title: "Monitoring & Automation",
    icon: creator, // consider metrics or automation icon
  },
];


const technologies: TTechnology[] = [
  {
    name: "AWS",
    icon: docker, // Replace with aws icon in your assets
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: docker, // Replace with k8s icon in your assets
  },
  {
    name: "Jenkins",
    icon: docker, // Replace with jenkins icon in your assets
  },
  {
    name: "Terraform",
    icon: docker, // Replace with terraform icon in your assets
  },
  {
    name: "Linux",
    icon: docker, // Replace with linux icon in your assets
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "CloudWatch",
    icon: docker, // Replace with cloudwatch icon
  },
  {
    name: "Kibana",
    icon: docker, // Replace with kibana icon
  },
];


const experiences: TExperience[] = [
  {
    title: "DevOps Engineer",
    companyName: "Barclays",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 – Present",
    points: [
      "Built CI/CD pipelines using Jenkins and Chef, reducing deployment time by 25%.",
      "Automated AWS provisioning using CloudFormation and Terraform, achieving 99.99% uptime.",
      "Upgraded AMIs and optimized cookbooks, cutting cloud waste by 15%.",
      "Designed 1,000+ Kibana alerts, reducing incident resolution time by 30%.",
      "Received 50+ recognitions for deployment efficiency across environments.",
    ],
  },
  {
    title: "Cloud Products Associate",
    companyName: "WhizLabs",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2022 – July 2023",
    points: [
      "Led migration of 120+ apps to GCP, reducing cloud cost by 30%.",
      "Built disaster recovery architecture ensuring zero downtime.",
      "Developed GKE-based MVPs, increasing platform adoption by 10%.",
      "Delivered infrastructure changes under tight deadlines with high reliability.",
    ],
  },
];

const testimonials: TTestimonial[] = [
];

const projects: TProject[] = [
  {
    name: "Terraform RAG AI Assistant",
    description: "An AI tool that uses LangChain and Ollama to generate Terraform configurations using RAG. Integrates with Terraform plan validation and scrapes documentation for vector embeddings.",
    tags: [
      { name: "LangChain", color: "blue-text-gradient" },
      { name: "Terraform", color: "green-text-gradient" },
      { name: "RAG", color: "pink-text-gradient" },
    ],
    image: carrent, // Replace with actual project image
    sourceCodeLink: "https://github.com/Rishabh2134/Terraform-RAG-AI-Assistant",
  },
  {
    name: "Spring Boot DevCLI App",
    description: "A command-line driven Spring Boot app that displays dynamic content based on developer tool (GitLab, DUO, DevCLI) selection. Follows MVC architecture and uses Thymeleaf templates.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "DevOps Tools", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Rishabh2134/springboot-devcli",
  },
  {
    name: "3D DevOps Portfolio",
    description: "A 3D interactive portfolio using React Three Fiber and Tailwind CSS showcasing DevOps tools and achievements with clickable pods, clouds, and live metrics simulation.",
    tags: [
      { name: "React Three Fiber", color: "blue-text-gradient" },
      { name: "DevOps", color: "green-text-gradient" },
      { name: "3D Portfolio", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Rishabh2134/devops-3d-portfolio",
  },
];


export { services, technologies, experiences, testimonials, projects };
