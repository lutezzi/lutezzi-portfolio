import type { EducationItem } from "@/types";

export const educationData: EducationItem[] = [
  {
    id: "kdu-internet-network-tech",
    institution: {
      en: "Kütahya Dumlupınar University",
      tr: "Kütahya Dumlupınar Üniversitesi",
    },
    degree: {
      en: "Internet and Network Technologies (Associate Degree)",
      tr: "İnternet ve Ağ Teknolojileri (Önlisans)",
    },
    period: "2024 — 2026",
    location: { en: "Kütahya, Türkiye", tr: "Kütahya, Türkiye" },
    summary: {
      en: "Currently a 2nd-year student focused on network infrastructure, web technologies, and information systems. Continuously developing technical competencies aligned with the IT and software industry.",
      tr: "Ağ altyapısı, web teknolojileri ve bilişim sistemlerine odaklanan 2. sınıf öğrencisi. Bilişim ve yazılım sektörüne yönelik teknik yetkinliklerini sürekli geliştirmektedir.",
    },
    technologies: [
      "Computer Networks",
      "Web Technologies",
      "Linux",
      "Network Security",
      "Python",
      "SQL",
      "C#",
    ],
    coursework: [
      {
        en: "Network Fundamentals",
        tr: "Ağ Temelleri",
      },
      {
        en: "Advanced Network Technologies",
        tr: "İleri Ağ Teknolojileri",
      },
      {
        en: "Web Programming",
        tr: "Web Programlama",
      },
      {
        en: "Database Management",
        tr: "Veritabanı Yönetimi",
      },
    ],
    achievements: [
      {
        en: "2nd-year student actively following current technologies",
        tr: "Güncel teknolojileri takip eden 2. sınıf öğrencisi",
      },
      {
        en: "Completed multiple BTK Akademi certifications in networking and cyber security",
        tr: "Ağ ve siber güvenlik alanında birden fazla BTK Akademi sertifikası tamamlandı",
      },
    ],
    skillsAcquired: [
      "Team Collaboration",
      "Analytical Thinking",
      "Network Fundamentals",
      "Web Development",
      "Problem Solving",
    ],
  },
  {
    id: "mtal-web-programming",
    institution: {
      en: "Vocational and Technical Anatolian High School",
      tr: "Mesleki ve Teknik Anadolu Lisesi",
    },
    degree: {
      en: "Web Programming",
      tr: "Web Programcılığı",
    },
    period: "2018 — 2021",
    location: { en: "Samsun, Türkiye", tr: "Samsun, Türkiye" },
    summary: {
      en: "Vocational high school program providing foundational training in web development, front-end technologies, and software development principles.",
      tr: "Web geliştirme, ön yüz teknolojileri ve yazılım geliştirme prensiplerinde temel eğitim sağlayan meslek lisesi programı.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "C#"],
    coursework: [
      {
        en: "Front-End Web Design",
        tr: "Ön Yüz Web Tasarımı",
      },
      {
        en: "Back-End Web Programming",
        tr: "Arka Yüz Web Programlama",
      },
      {
        en: "Database Applications",
        tr: "Veritabanı Uygulamaları",
      },
      {
        en: "Software Project Development",
        tr: "Yazılım Projesi Geliştirme",
      },
    ],
    achievements: [
      {
        en: "Graduated with practical web development skills",
        tr: "Uygulamalı web geliştirme becerileriyle mezun olundu",
      },
      {
        en: "Built foundational projects in HTML, CSS, JavaScript and PHP",
        tr: "HTML, CSS, JavaScript ve PHP ile temel projeler geliştirildi",
      },
    ],
    skillsAcquired: [
      "HTML/CSS",
      "JavaScript",
      "PHP",
      "Responsive Design",
      "Programming Fundamentals",
    ],
  },
  {
    id: "btk-akademi-certifications",
    institution: {
      en: "BTK Akademi",
      tr: "BTK Akademi",
    },
    degree: {
      en: "Professional Certifications — Networking & Cyber Security",
      tr: "Mesleki Sertifikalar — Ağ ve Siber Güvenlik",
    },
    period: "2024 — Present",
    location: { en: "Online", tr: "Online" },
    summary: {
      en: "Completed a series of professional certifications covering artificial intelligence fundamentals, networking, and cyber security disciplines through BTK Akademi.",
      tr: "BTK Akademi üzerinden yapay zeka temelleri, ağ teknolojileri ve siber güvenlik disiplinlerini kapsayan mesleki sertifika programları tamamlandı.",
    },
    technologies: [
      "Network Security",
      "Cyber Security",
      "Threat Intelligence",
      "Incident Response",
      "AI Fundamentals",
    ],
    coursework: [
      {
        en: "Introduction to Artificial Intelligence and Algorithms",
        tr: "Yapay Zeka ve Algoritmalara Giriş",
      },
      {
        en: "Network Fundamentals",
        tr: "Ağ Temelleri",
      },
      {
        en: "Advanced Network Technologies",
        tr: "İleri Ağ Teknolojileri",
      },
      {
        en: "Introduction to Cyber Security",
        tr: "Siber Güvenliğe Giriş",
      },
      {
        en: "Cyber Incident Detection and Response",
        tr: "Siber Olay Tespit ve Müdahale",
      },
      {
        en: "Cyber Threat Intelligence and Threat Hunting",
        tr: "Siber Tehdit İstihbaratı ve Tehdit Avcılığı",
      },
    ],
    achievements: [
      {
        en: "6 professional certifications completed via BTK Akademi",
        tr: "BTK Akademi üzerinden 6 mesleki sertifika tamamlandı",
      },
      {
        en: "Specialized training in cyber security and network infrastructure",
        tr: "Siber güvenlik ve ağ altyapısı alanında uzmanlaşmış eğitim",
      },
    ],
    skillsAcquired: [
      "Cyber Security",
      "Network Administration",
      "Threat Detection",
      "Incident Response",
      "Security Analysis",
    ],
  },
];
