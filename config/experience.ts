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
    techStack: [
      "MongoDB",
      "express.js",
      "React",
      "Node.js",
      "Redux",
      "Javascript",
    ],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-03-01"),
    companyLogoImg: "/experience/blogorama/companyLogo.png",
    pagesInfoArr: [
      {
        title: "Home Page",
        description:
          "Displays all blogs with categories and featured articles.",
        imgArr: ["/experience/blogorama/companyLogo.png"],
      },
      {
        title: "Admin Panel",
        description:
          "Admin-only panel for blog management and content publishing.",
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
  {
    id: "AI-SUMMARY",
    companyName: "AI-SUMMARY",
    type: "Personal Project",
    category: ["Web Dev", "AI/ML", "Full Stack", "SaaS"],
    shortDescription:
      "AI-powered SaaS to summarize uploaded PDFs using LLMs, featuring subscriptions, sharing, and markdown rendering.",
    websiteLink: "https://ai-summary-azure.vercel.app/",
    githubLink: "https://github.com/YashXBansal/ai-summary",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
      "Razorpay",
      "LangChain",
      "Google Gemini",
      "Clerk",
    ],
    startDate: new Date("2025-07-12"),
    endDate: new Date("2025-07-23"),
    companyLogoImg: "/experience/AI-SUMMARY/companyLogo.png",
    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "Displays summarized PDFs, status, dates, and actions like View/Delete/Share.",
        imgArr: ["/experience/AI-SUMMARY/dashboard.png"],
      },
      {
        title: "Upload Page",
        description:
          "Users can upload PDFs and get LLM-powered summaries in markdown format.",
        imgArr: ["/experience/AI-SUMMARY/upload.png"],
      },
      {
        title: "Summary View",
        description:
          "Rich summary display with markdown, shareable links, word count, and PDF reference.",
        imgArr: ["/experience/AI-SUMMARY/summary.png"],
      },
      {
        title: "Authentication & Payments",
        description:
          "Clerk-powered login/signup and Razorpay ₹299/month subscription integration.",
        imgArr: ["/experience/AI-SUMMARY/auth.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "AI-SUMMARY is a full-stack SaaS app built using Next.js and Google Gemini via LangChain, allowing users to generate AI summaries from uploaded PDFs.",
        "It features a free-tier limiter, secure Clerk auth, Razorpay billing, and summary sharing.",
        "Raw SQL was used instead of ORM for faster data handling, improving performance by 30%.",
      ],
      bullets: [
        "Summarized 500+ PDF pages using LangChain + Gemini.",
        "₹299/month Razorpay subscription (test mode) with dynamic billing.",
        "Reduced TTFB to <100ms with `React.Suspense` and route-level lazy loading.",
        "Raw SQL (Neon) used for optimized database access.",
        "Markdown rendering and summary sharing enabled.",
        "Clerk auth with 99.9% login success across 100+ test users.",
      ],
    },
  },
  {
    id: "shardfs",
    companyName: "ShardFS",
    type: "Personal Project",
    category: ["CLI", "Distributed Systems", "Backend", "Storage", "Dashboard"],
    shortDescription:
      "A CLI based distributed file system that shards and replicates files across nodes for fault tolerance, scalability, along with a live real time dashboard.",
    websiteLink: "https://www.npmjs.com/package/shardfs-cli",
    githubLink: "https://github.com/YashXBansal/shardfs",
    techStack: [
      "Node.js",
      "Typescript",
      "express.js",
      "PostgreSQL",
      "Docker",
      "Redis",
      "React",
      "Socket.IO",
    ],
    startDate: new Date("2025-08-12"),
    endDate: new Date("2025-07-01"),
    companyLogoImg: "/experience/shardfs/companyLogo.png",
    pagesInfoArr: [
      {
        title: "System Overview",
        description:
          "Architecture diagram showing how files are split into shards, replicated, and distributed across storage nodes with metadata service orchestration.",
        imgArr: ["/experience/shardfs/overview.png"],
      },
      {
        title: "Upload CLI",
        description:
          "Example of uploading a file via CLI. The system splits it into shards, replicates them, and updates metadata service.",
        imgArr: ["/experience/shardfs/upload-cli.png"],
      },
      {
        title: "Retrieval CLI",
        description:
          "CLI command fetching shards in parallel from distributed nodes, reconstructing the file seamlessly for the client.",
        imgArr: ["/experience/shardfs/retrieval-cli.png"],
      },
      {
        title: "Fault Tolerance Demo",
        description:
          "Terminal output showing successful file recovery when one node fails, leveraging shard replicas for high availability.",
        imgArr: ["/experience/shardfs/fault-tolerant.png"],
      },
      {
        title: "Realtime Dashboard",
        description:
          "A web dashboard showing live system metrics such as shard distribution, node health, active connections, throughput, and replication status.",
        imgArr: [
          "/experience/shardfs/dashboard1.png",
          "/experience/shardfs/dashboard2.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ShardFS is a distributed file system inspired by GFS/HDFS, designed for scalable and fault-tolerant storage. Large files are split into shards, distributed across nodes, and replicated to guarantee durability and availability.",
        "It features a central metadata service for shard indexing, node health tracking, and orchestration of uploads/retrievals. Redis was used as a caching layer for hot metadata, reducing lookup latency.",
        "Alongside the CLI, a real-time monitoring dashboard was built to visualize cluster health, shard placement, and I/O statistics, enabling better observability.",
        "By supporting parallel uploads and downloads, ShardFS achieves higher throughput for large datasets, while its replication strategy ensures resilience against node failures.",
      ],
      bullets: [
        "Built a distributed file system with sharding + replication.",
        "Designed automatic fault recovery for high availability.",
        "Implemented metadata service for shard indexing and node coordination.",
        "Developed realtime monitoring dashboard for system observability.",
        "Dockerized cluster setup for reproducible testing and deployment.",
        "Optimized performance with parallel shard fetches.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
