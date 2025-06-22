import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "hackatron-s5",
    position: "Hackathon Winner - Top 5",
    company: "HackaTRON Season 5 by TronDAO",
    location: "Remote",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-10-15"),
    description: [
      "Developed a full-stack decentralized application during HackaTRON S5.",
      "Wrote and deployed smart contracts while also building the frontend integration.",
      "Focused on secure and optimized smart contract architecture with real-time Web3 interactions.",
    ],
    achievements: [
      "Achieved a Top 5 position in HackaTRON Season 5, winning a prize of $3000.",
      "Handled both smart contract development and frontend implementation for the dApp.",
      "Featured on Decrypt for hackathon success: https://decrypt.co/206566/hackatron-season-5-announces-qualifiers-list",
      "Active participant in the TronDAO community: https://forum.trondao.org/u/yashbansal/summary",
    ],
    skills: ["React", "Typescript", "Node.js", "Web3", "Smart Contracts"],
    logo: "/career/hackatron.png",
    companyUrl: "https://trondao.org/hackatron",
  },
  {
    id: "ipu-college",
    position: "B.Tech CSE Undergraduate",
    company: "Guru Gobind Singh Indraprastha University (GGSIPU)",
    location: "New Delhi, India",
    startDate: new Date("2022-11-07"),
    endDate: new Date("2026-08-07"),
    description: [
      "Pursuing Bachelor of Technology in Computer Science and Engineering.",
      "Gained core fundamentals in DSA, Operating Systems, DBMS, Computer Networks, and Software Engineering.",
      "Built multiple full-stack and React Native projects as part of academic and personal learning.",
    ],
    achievements: [
      "Participated in national and international hackathons, including a Top 5 win at HackaTRON S5.",
      "Built 'Blogorama', a MERN stack blogging platform with role-based access.",
      "Completed internships in both frontend and full-stack development during college.",
    ],
    skills: [
      "HTML 5",
      "CSS 3",
      "Javascript",
      "React",
      "MongoDB",
      "Node.js",
      "express.js",
      "Redux",
    ],
    // logo: "/career/ggsipu-logo.png",
    companyUrl: "https://ipu.ac.in",
  },
];
