import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my digital portfolio.",
    metadata: {
      title: "Yash Bansal | Full Stack Developer Portfolio",
      description: "Explore the portfolio of Yash Bansal, a full stack web developer and software engineer.",
    },
  },
  skills: {
    title: "Skills",
    description: "Technologies and tools I work with.",
    metadata: {
      title: "Skills | Yash Bansal",
      description: "Core technologies and programming skills used by Yash Bansal.",
    },
  },
  experience: {
    title: "Experience",
    description: "A journey through my technical and project experience.",
    metadata: {
      title: "Experience | Yash Bansal",
      description: "Yash Bansal's experience in building scalable, full-stack applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Get in touch with me for collaborations or opportunities.",
    metadata: {
      title: "Contact | Yash Bansal",
      description: "Reach out to Yash Bansal for software development collaborations and freelance work.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source projects and community contributions.",
    metadata: {
      title: "Open Source Contributions | Yash Bansal",
      description: "Explore the open-source and community contributions of Yash Bansal.",
    },
  },
  resume: {
    title: "Resume",
    description: "Download or view my resume.",
    metadata: {
      title: "Resume | Yash Bansal",
      description: "Resume of Yash Bansal - Full Stack Developer and Software Engineer.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "A visual timeline of my academic and professional milestones.",
    metadata: {
      title: "Career Timeline | Yash Bansal",
      description: "The career journey and achievements of Yash Bansal in software development.",
    },
  },
  achievements: {
    title: "Achievements",
    description: "Notable milestones and recognitions throughout my journey.",
    metadata: {
      title: "Achievements | Yash Bansal",
      description: "Explore achievements like hackathon victories and coding recognitions by Yash Bansal.",
    },
  },
};
