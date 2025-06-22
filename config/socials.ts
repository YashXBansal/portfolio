import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@YashXBansal",
    icon: Icons.gitHub,
    link: "https://github.com/YashXBansal",
  },
  {
    name: "LinkedIn",
    username: "Yash Bansal",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/yashbansal261204/",
  },
  {
    name: "Twitter",
    username: "@Yash261204",
    icon: Icons.twitter,
    link: "https://x.com/Yash261204",
  },
  {
    name: "Gmail",
    username: "yashbansal26.dev@gmail.com",
    icon: Icons.gmail,
    link: "mailto:yashbansal26.dev@gmail.com",
  },
];
