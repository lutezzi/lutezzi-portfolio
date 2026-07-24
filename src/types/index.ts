export type Locale = "en" | "tr";
export type Theme = "dark" | "light" | "terminal-hc";

export interface LocalizedString {
  en: string;
  tr: string;
}

export interface EducationItem {
  id: string;
  institution: LocalizedString;
  degree: LocalizedString;
  period: string;
  location: LocalizedString;
  summary: LocalizedString;
  technologies: string[];
  coursework: LocalizedString[];
  achievements: LocalizedString[];
  skillsAcquired: string[];
}

export type ProjectMockupType =
  | "embed"
  | "welcome"
  | "roles"
  | "moderation"
  | "setup"
  | "voice"
  | "music";

export interface ProjectItem {
  slug: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  problem: LocalizedString;
  architecture: LocalizedString;
  tags: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  screenshots: string[];
  mockups?: ProjectMockupType[];
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  skills: string[];
}

export interface LocaleStrings {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    education: string;
    skills: string;
    projects: string;
    contact: string;
    brand: string;
  };
  hero: {
    command: string;
    greeting: string;
    tagline: string;
    intro: string;
    viewProjects: string;
    contactMe: string;
    statusOnline: string;
  };
  about: {
    title: string;
    command: string;
    paragraphs: string[];
    highlights: { label: string; value: string }[];
  };
  education: {
    title: string;
    command: string;
    expandHint: string;
    technologies: string;
    coursework: string;
    achievements: string;
    skillsAcquired: string;
  };
  skills: {
    title: string;
    command: string;
    statusLabel: string;
  };
  projects: {
    title: string;
    command: string;
    inspect: string;
    viewLive: string;
    viewGithub: string;
    featured: string;
    scrollHint: string;
  };
  projectDetail: {
    back: string;
    problem: string;
    architecture: string;
    techStack: string;
    gallery: string;
    liveDemo: string;
    repository: string;
    notFound: string;
  };
  contact: {
    title: string;
    command: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    socialTitle: string;
  };
  footer: {
    copyright: string;
  };
  scrollTop: string;
  theme: {
    dark: string;
    light: string;
    terminalHc: string;
  };
  language: {
    en: string;
    tr: string;
  };
}
