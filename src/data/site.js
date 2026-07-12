import escrowImg from "../assets/images/escrow.webp";
import donImg from "../assets/images/don.webp";
import ireporterImg from "../assets/images/ireporter.webp";

export const site = {
  name: "Vincent Mumo",
  role: "Full-Stack Developer",
  location: "Nairobi, Kenya",
  email: "vinnymummo@gmail.com",
  resume: "/Vincent-Mumo-Resume.pdf",
  github: "https://github.com/Vinmumo",
  linkedin: "https://www.linkedin.com/in/vincent-mumo-940635252/",
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

// TODO: point `repo` at each project's actual repository.
export const projects = [
  {
    title: "EscrowEase",
    featured: true,
    description:
      "A secure escrow platform that holds funds in trust until both parties fulfil their side of a transaction — covering deal creation, milestone tracking, and dispute flows. Built as a team project with a React front end against a Flask REST API.",
    image: escrowImg,
    stack: ["React", "Tailwind CSS", "Flask", "PostgreSQL"],
    live: "https://escrow-ease-group-project.vercel.app/",
    repo: "https://github.com/Vinmumo",
  },
  {
    title: "Don Jerseys",
    description:
      "An e-commerce store for sports jerseys with product catalogue, shopping cart, checkout, and inventory management.",
    image: donImg,
    stack: ["React", "Firebase"],
    live: "",
    repo: "https://github.com/Vinmumo",
  },
  {
    title: "I-Reporter",
    description:
      "A civic platform that lets citizens report corruption and incidents that need government intervention, with geolocation, media attachments, and admin status tracking.",
    image: ireporterImg,
    stack: ["React", "Flask", "PostgreSQL"],
    live: "https://i-reporter-client-1.vercel.app/",
    repo: "https://github.com/Vinmumo",
  },
];

export const timeline = [
  {
    period: "Jan 2026 — Present",
    title: "LLM Evaluator",
    org: "Freelance, Remote",
    kind: "Work",
    points: [
      "Evaluate AI model outputs for task completion, reasoning quality, code correctness, and instruction following.",
      "Compare model trajectories and document differences in process, final output, and testing behavior.",
    ],
  },
  {
    period: "Oct 2024 — Dec 2025",
    title: "Legal Transcriptionist",
    org: "Freelance, Remote",
    kind: "Work",
    points: [
      "Transcribed legal audio recordings, hearings, and case files into accurate written documents.",
      "Handled sensitive client information confidentially and ran quality checks before every submission.",
    ],
  },
  {
    period: "Jun — Dec 2024",
    title: "Certified Software Engineer",
    org: "Moringa School",
    kind: "Education",
    points: [
      "Intensive full-stack software engineering program.",
      "Shipped team projects end to end with React, Flask, and PostgreSQL.",
    ],
  },
  {
    period: "Sep — Dec 2022 · Jan — Sep 2024",
    title: "IT Intern",
    org: "Ministry of Information, Communications and The Digital Economy",
    kind: "Work",
    points: [
      "Built and maintained internal web applications with HTML, CSS, JavaScript, and React.",
      "Worked with the backend team to integrate RESTful APIs built on Flask.",
      "Assisted with MySQL database design and optimization, and took part in code reviews.",
    ],
  },
  {
    period: "2020 — 2024",
    title: "BSc. Business Information Technology",
    org: "Jomo Kenyatta University of Agriculture and Technology",
    kind: "Education",
    points: [
      "Combined software development with business systems, databases, and business intelligence.",
    ],
  },
];
