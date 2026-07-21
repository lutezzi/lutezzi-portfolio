import type { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    slug: "personal-portfolio",
    title: {
      en: "Personal Portfolio Website",
      tr: "Kişisel Portfolyo Websitesi",
    },
    shortDescription: {
      en: "A responsive, high-performance portfolio UI built with a component-based architecture for maintainable code.",
      tr: "Sürdürülebilir kod için bileşen tabanlı mimariyle geliştirilmiş, responsive ve yüksek performanslı portfolyo arayüzü.",
    },
    fullDescription: {
      en: "Designed and developed a personal portfolio website using modern web technologies. The project features a fully responsive layout compatible with all devices, a high-performance user interface, and a component-based architecture that ensures long-term code maintainability and scalability.",
      tr: "Modern web teknolojileri kullanılarak kişisel bir portfolyo websitesi tasarlandı ve geliştirildi. Tüm cihazlarla uyumlu tam responsive düzen, yüksek performanslı kullanıcı arayüzü ve kodun uzun vadeli sürdürülebilirliğini sağlayan bileşen tabanlı mimari içerir.",
    },
    problem: {
      en: "Developers need a professional online presence that showcases their skills across devices while keeping the codebase organized and easy to update.",
      tr: "Geliştiricilerin becerilerini tüm cihazlarda sergileyebilecek, kod tabanı düzenli ve güncellenmesi kolay profesyonel bir online varlığa ihtiyacı vardır.",
    },
    architecture: {
      en: "Component-based frontend architecture with reusable UI modules. Responsive design principles applied across mobile, tablet and desktop breakpoints. Styling managed through utility-first CSS for consistent and maintainable design tokens.",
      tr: "Yeniden kullanılabilir UI modülleriyle bileşen tabanlı frontend mimarisi. Mobil, tablet ve masaüstü breakpoint'lerinde responsive tasarım prensipleri. Tutarlı ve sürdürülebilir tasarım token'ları için utility-first CSS ile stil yönetimi.",
    },
    tags: ["Portfolio", "Frontend", "Responsive"],
    techStack: ["React.js", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/lutezzi",
    liveUrl: "https://lutezzi.space",
    featured: true,
    screenshots: [],
  },
  {
    slug: "realtime-messaging",
    title: {
      en: "Real-Time Messaging Application",
      tr: "Gerçek Zamanlı Mesajlaşma Uygulaması",
    },
    shortDescription: {
      en: "Low-latency real-time messaging app with bidirectional communication and server-side logic management.",
      tr: "Düşük gecikmeli, çift yönlü iletişim ve sunucu tarafı mantık yönetimi sunan gerçek zamanlı mesajlaşma uygulaması.",
    },
    fullDescription: {
      en: "Developed a real-time messaging application enabling low-latency data transmission between users. Managed server-side logic and bidirectional communication processes using WebSocket-based architecture for instant message delivery and live user interactions.",
      tr: "Kullanıcılar arasında düşük gecikmeli veri iletimi sağlayan gerçek zamanlı bir mesajlaşma uygulaması geliştirildi. Anlık mesaj iletimi ve canlı kullanıcı etkileşimleri için WebSocket tabanlı mimari kullanılarak sunucu tarafı mantığı ve çift yönlü iletişim süreçleri yönetildi.",
    },
    problem: {
      en: "Traditional HTTP request-response cycles cannot deliver instant messaging experiences with acceptable latency for real-time user communication.",
      tr: "Geleneksel HTTP istek-yanıt döngüleri, gerçek zamanlı kullanıcı iletişimi için kabul edilebilir gecikmeyle anlık mesajlaşma deneyimi sunamaz.",
    },
    architecture: {
      en: "Node.js backend with Express handling REST endpoints and Socket.io managing WebSocket connections. Event-driven architecture for real-time message broadcasting, room-based chat channels, and persistent connection management.",
      tr: "REST endpoint'lerini yöneten Express ve WebSocket bağlantılarını yöneten Socket.io ile Node.js backend. Gerçek zamanlı mesaj yayını, oda tabanlı sohbet kanalları ve kalıcı bağlantı yönetimi için olay güdümlü mimari.",
    },
    tags: ["Real-Time", "Backend", "WebSocket"],
    techStack: ["Node.js", "Socket.io", "Express"],
    githubUrl: "https://github.com/lutezzi",
    featured: true,
    screenshots: [],
  },
  {
    slug: "sharks-bot",
    title: {
      en: "sharks — Discord Moderation Bot",
      tr: "sharks — Discord Moderasyon Botu",
    },
    shortDescription: {
      en: "Extensible Discord moderation bot with 17 slash commands, role menus, welcome messages, and voice channel support.",
      tr: "17 slash komut, rol menüleri, karşılama mesajları ve ses kanalı desteği sunan genişletilebilir Discord moderasyon botu.",
    },
    fullDescription: {
      en: "sharks is a production Discord moderation bot built with discord.js v14, deployed 24/7 on Oracle Cloud VPS via PM2. It offers welcome/leave embeds, color and gender dropdown role menus, interest role buttons, moderation tools (ban, kick, mute, clear), info commands, and voice channel join/leave — all organized with auto-loading command handlers and centralized i18n via JSON locale files.",
      tr: "sharks, discord.js v14 ile geliştirilmiş ve PM2 ile Oracle Cloud VPS üzerinde 7/24 çalışan bir Discord moderasyon botudur. Karşılama/ayrılma embed'leri, renk ve cinsiyet dropdown rol menüleri, ilgi alanı rol butonları, moderasyon araçları (ban, kick, mute, clear), bilgi komutları ve ses kanalı join/leave özellikleri sunar — otomatik komut yükleyici ve JSON locale dosyalarıyla merkezi i18n yapısına sahiptir.",
    },
    problem: {
      en: "Growing Discord communities need automated moderation, self-service role assignment, and onboarding flows without relying on multiple third-party bots.",
      tr: "Büyüyen Discord toplulukları, birden fazla üçüncü taraf bota bağımlı kalmadan otomatik moderasyon, self-servis rol atama ve onboarding akışlarına ihtiyaç duyar.",
    },
    architecture: {
      en: "Modular src/commands structure (admin, general, voice) with dynamic loader. JSON-based per-guild settings store, select menu and button interaction handlers, deferred replies for network resilience, and @discordjs/voice for voice connections. Deployed with PM2 on Oracle Cloud Always Free tier.",
      tr: "Dinamik yükleyici ile modüler src/commands yapısı (admin, genel, ses). JSON tabanlı sunucu bazlı ayar deposu, select menu ve buton etkileşim handler'ları, ağ dayanıklılığı için defer reply'ler ve @discordjs/voice ile ses bağlantıları. Oracle Cloud Always Free tier üzerinde PM2 ile dağıtım.",
    },
    tags: ["Discord", "Bot", "Moderation"],
    techStack: [
      "Node.js",
      "discord.js v14",
      "@discordjs/voice",
      "PM2",
      "Oracle Cloud VPS",
    ],
    githubUrl: "https://github.com/lutezzi/sharks-bot",
    liveUrl: "https://sharksbot.site",
    featured: true,
    screenshots: [],
    mockups: ["welcome", "roles", "moderation", "setup", "voice"],
  },
  {
    slug: "sharks-bot-website",
    title: {
      en: "sharks — Community Website",
      tr: "sharks — Topluluk Websitesi",
    },
    shortDescription: {
      en: "Official bilingual community site for the sharks Discord bot with docs, commands reference, and legal pages.",
      tr: "sharks Discord botu için dokümantasyon, komut referansı ve yasal sayfalar içeren resmi iki dilli topluluk sitesi.",
    },
    fullDescription: {
      en: "Built the official website for the sharks Discord bot featuring TR/EN localized pages, a full command reference, interactive feature showcase, documentation subdomain (docs.sharksbot.site), Terms of Use and Privacy Policy pages required for Discord bot verification, and Discord OAuth invite integration.",
      tr: "sharks Discord botu için TR/EN yerelleştirilmiş sayfalar, tam komut referansı, interaktif özellik vitrini, dokümantasyon alt alan adı (docs.sharksbot.site), Discord bot doğrulaması için Kullanım Koşulları ve Gizlilik Politikası sayfaları ile Discord OAuth davet entegrasyonu içeren resmi website geliştirildi.",
    },
    problem: {
      en: "Discord bots require verified Terms of Service and Privacy Policy URLs, plus a professional landing page for users to discover features and invite the bot.",
      tr: "Discord botları doğrulanmış Kullanım Koşulları ve Gizlilik Politikası URL'leri ile kullanıcıların özellikleri keşfedip botu davet edebileceği profesyonel bir landing page gerektirir.",
    },
    architecture: {
      en: "Next.js App Router with locale-based routing (/tr, /en), middleware for docs subdomain routing, typed i18n dictionaries, modular component architecture, and Vercel deployment with custom domain (sharksbot.site) via Hostinger DNS.",
      tr: "Locale tabanlı routing (/tr, /en), docs alt alan adı yönlendirmesi için middleware, tipli i18n sözlükleri, modüler bileşen mimarisi ve Hostinger DNS ile özel domain (sharksbot.site) üzerinde Vercel dağıtımı ile Next.js App Router.",
    },
    tags: ["Website", "Next.js", "Discord"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/lutezzi/sharks-bot-website",
    liveUrl: "https://sharksbot.site",
    featured: true,
    screenshots: [
      "/projects/sharks-bot-website/hero.png",
      "/projects/sharks-bot-website/features-welcome-roles.png",
      "/projects/sharks-bot-website/features-moderation-embed.png",
      "/projects/sharks-bot-website/features-setup-voice.png",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
