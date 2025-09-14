export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "MeloSynthiaAI",
    contibutionDescription:
      "Wrote the smart contracts using Solidity, along with the frontend.",
    repoOwner: "Ayushman0503",
    link: "https://github.com/AYUSHMAN0503/MeloSynthiaAI",
  },
  {
    repo: "RapportRave",
    contibutionDescription: "Contributed to the auth part of the app",
    repoOwner: "PiyushXmishra",
    link: "https://github.com/PiyushXmishra/RapportRave",
  },
  {
    repo: "ShardFS",
    contibutionDescription:
      "Worked on distributed file storage with sharding and fault tolerance.",
    repoOwner: "YashBansal",
    link: "https://github.com/YashXBansal/ShardFS",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
