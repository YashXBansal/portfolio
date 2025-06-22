import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: string;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "blogorama",
    companyName: "Blogorama",
    type: "Personal Project",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Built a full-stack blogging platform where only admin can post blogs and users can read and comment.",
    websiteLink: "https://blogorama.onrender.com",
    githubLink: "https://github.com/YashXBansal/blog",
    techStack: ["MongoDB", "express.js", "React", "Node.js", "Redux", "Javascript"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-03-01"),
    companyLogoImg: "/experience/blogorama/companyLogo.png",
    pagesInfoArr: [
      {
        title: "Home Page",
        description: "Displays all blogs with categories and featured articles.",
        imgArr: ["/experience/blogorama/companyLogo.png"],
      },
      {
        title: "Admin Panel",
        description: "Admin-only panel for blog management and content publishing.",
        imgArr: ["/experience/blogorama/admin.png"],
      },
      {
        title: "Blog View",
        description: "Blog reading interface with nested comment support.",
        imgArr: ["/experience/blogorama/blog.png"],
      },
      {
        title: "Authentication",
        description: "JWT and Google Auth based user login and signup.",
        imgArr: ["/experience/blogorama/auth.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Blogorama is a full-stack blog platform made using the MERN stack. Admins can post and manage content, while users can read and comment.",
        "The backend handles role-based access, comment nesting, and secure routes.",
        "Redux was used to manage authentication state and user interactions.",
      ],
      bullets: [
        "Full-stack blog platform with admin control.",
        "Implemented JWT auth and protected routes.",
        "Used Redux for state management.",
        "MongoDB for storing blogs, users, comments.",
        "Clean and responsive UI with category filters.",
      ],
    },
  },

];

export const featuredExperiences = Experiences.slice(0, 3);
