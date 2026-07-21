import type { LocaleStrings } from "@/types";

export const en: LocaleStrings = {
  meta: {
    title: "Lutezzi | Full-Stack Developer",
    description:
      "Terminal-inspired portfolio showcasing full-stack engineering, IoT, game development, and modern web applications.",
  },
  nav: {
    about: "About",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    brand: "lutezzi@portfolio:~$",
  },
  hero: {
    command: "cat welcome.txt",
    greeting: "Hello, I'm Lutezzi — Full-Stack Developer",
    tagline: "> Building immersive web experiences, IoT systems, and interactive worlds.",
    intro:
      "I craft production-grade applications across the stack — from React/Next.js frontends and Node.js backends to Unity/Unreal Engine game prototypes and Ardunio UNO microcontroller. Passionate about clean architecture, terminal aesthetics, and pushing hardware + software boundaries.",
    viewProjects: "./view_projects.sh",
    contactMe: "./contact.me",
    statusOnline: "STATUS: ONLINE",
  },
  about: {
    title: "About Me",
    command: "whoami --verbose",
    paragraphs: [
      "I started my software journey by coding Discord bots. As I built projects covering slash commands, moderation systems, role menus, and server automation, I realized programming is not just about writing code — it's about solving problems and designing experiences. That path taught me backend logic, event-driven architecture, and user-centered thinking in practice.",
      "After bot development, I moved into building responsive web pages and modern interfaces. Designing layouts that work consistently across mobile, tablet, and desktop; structuring component-based architectures; and shipping performant, accessible web experiences became the natural next step. I kept growing in this space with HTML, CSS, JavaScript, and the React ecosystem.",
      "During university, I also explored hardware: I built a remote-controlled RC car using an Arduino Uno board and a Bluetooth module. Bridging software with the physical world — working with sensors, motor drivers, and wireless communication — showed me that full-stack thinking extends far beyond the browser.",
      "Today, driven by my interest in web development and artificial intelligence, I build modern websites, turn ideas into prototypes through vibe coding, and closely follow new tools, frameworks, and AI-assisted development workflows. As a curious, productive developer who never stops learning, I aim to push one step further with every project.",
    ],
    highlights: [
      { label: "Focus", value: "Web · Discord Bot · IoT / Arduino" },
      { label: "Stack", value: "React · Next.js · Node.js · Tailwind" },
      { label: "Location", value: "Samsun / Türkiye" },
      { label: "Status", value: "Building Web & AI-focused projects" },
    ],
  },
  education: {
    title: "Education",
    command: "tree ~/education --depth=2",
    expandHint: "Click to expand terminal output",
    technologies: "Technologies",
    coursework: "Coursework",
    achievements: "Achievements",
    skillsAcquired: "Skills Acquired",
  },
  skills: {
    title: "Skills",
    command: "cat skills.json | jq",
    statusLabel: "RUNNING",
  },
  projects: {
    title: "Projects",
    command: "ls -la ~/projects/",
    inspect: "[INSPECT_PROJECT]",
    viewLive: "Live Demo",
    viewGithub: "GitHub",
    featured: "FEATURED",
  },
  projectDetail: {
    back: "← Back to Projects",
    problem: "Problem Solved",
    architecture: "Architecture & Approach",
    techStack: "Tech Stack",
    gallery: "Screenshots",
    liveDemo: "Open Live Demo",
    repository: "View Repository",
    notFound: "Project not found.",
  },
  contact: {
    title: "Contact",
    command: "python send_message.py",
    name: "name",
    email: "email",
    subject: "subject",
    message: "message",
    send: "Execute send_message()",
    sending: "Transmitting...",
    success: "✓ Message delivered to my inbox. I'll reply via email shortly.",
    error: "✗ Message could not be sent. Please try again or email me directly.",
    socialTitle: "Connect via",
  },
  footer: {
    copyright: "© 2026 Lutezzi. All rights reserved.",
  },
  scrollTop: "[▲]",
  theme: {
    dark: "Dark Terminal",
    light: "Light Terminal",
    terminalHc: "High-Contrast",
  },
  language: {
    en: "EN",
    tr: "TR",
  },
};
