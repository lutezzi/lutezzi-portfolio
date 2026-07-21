import { SITE_URL } from "@/lib/site";

export { SITE_URL };

export const NAV_SECTIONS = [
  { id: "about", href: "#about" },
  { id: "education", href: "#education" },
  { id: "skills", href: "#skills" },
  { id: "projects", href: "#projects" },
  { id: "contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/lutezzi",
  linkedin: "https://linkedin.com/in/yigityılmaz",
  discord: "https://discord.com/users/lutezzi",
  email: "mailto:hello@lutezzi.space",
} as const;

export const STORAGE_KEYS = {
  theme: "portfolio-theme",
  locale: "portfolio-locale",
} as const;
