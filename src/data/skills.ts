import type { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    id: "web-dev",
    title: {
      en: "Web Development",
      tr: "Web Geliştirme",
    },
    skills: [
      "React",
      "Node.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "PHP",
    ],
  },
  {
    id: "game-dev",
    title: {
      en: "Game Dev & 3D",
      tr: "Oyun Geliştirme & 3D",
    },
    skills: ["Unity", "C#", "Blender"],
  },
  {
    id: "hardware",
    title: {
      en: "Hardware & Systems",
      tr: "Donanım & Sistemler",
    },
    skills: [
      "Arduino",
      "ESP32",
      "Linux Administration",
      "Networking",
      "Bash Scripting",
    ],
  },
  {
    id: "tools",
    title: {
      en: "Tools & Deployment",
      tr: "Araçlar & Dağıtım",
    },
    skills: ["Git", "Vercel", "Cursor IDE", "Linux/Kali", "CI/CD", "Npm"],
  },
];
