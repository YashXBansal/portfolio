import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description: "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description: "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Redux",
    description: "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Tailwind CSS",
    description: "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Material UI",
    description: "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 4,
    icon: Icons.mui,
  },
  {
    name: "Bootstrap",
    description: "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 3,
    icon: Icons.bootstrap,
  },
  {
    name: "HTML 5",
    description: "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description: "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Node.js",
    description: "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "express.js",
    description: "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Nest.js",
    description: "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "Socket.io",
    description: "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 3,
    icon: Icons.socketio,
  },
  {
    name: "MongoDB",
    description: "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "MySQL",
    description: "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "GraphQL",
    description: "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "Javascript",
    description: "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Typescript",
    description: "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "AWS",
    description: "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Netlify",
    description: "Deploy and manage static websites with seamless CI/CD integrations.",
    rating: 4,
    icon: Icons.netlify,
  },
  {
    name: "Firebase",
    description: "Use Google’s real-time database, auth, and hosting to build powerful web apps fast.",
    rating: 4,
    icon: Icons.firebase,
  },
  {
    name: "R Programming",
    description: "Analyze and visualize data for statistical and predictive modeling with R.",
    rating: 4,
    icon: Icons.rlang,
  },
  {
    name: "R Shiny",
    description: "Build interactive dashboards and visualizations for data analytics in R.",
    rating: 4,
    icon: Icons.shiny,
  },
  {
    name: "Smart Contracts (Solidity)",
    description: "Write Ethereum-based contracts for dApps, tokens, and blockchain systems.",
    rating: 4,
    icon: Icons.solidity,
  },
  {
    name: "Git & GitHub",
    description: "Track changes, collaborate on code, and manage repositories efficiently.",
    rating: 5,
    icon: Icons.git,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
