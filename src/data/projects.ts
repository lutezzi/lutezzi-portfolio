import type { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    slug: "lutezzi-portfolio",
    title: {
      en: "Lutezzi Portfolio — Terminal Edition",
      tr: "Lutezzi Portfolyo — Terminal Sürümü",
    },
    shortDescription: {
      en: "Production-ready terminal/CLI-inspired portfolio with TR/EN i18n, theme switching, scroll animations, and modular content architecture.",
      tr: "TR/EN i18n, tema değiştirme, scroll animasyonları ve modüler içerik mimarisiyle üretime hazır terminal/CLI estetikli portfolyo.",
    },
    fullDescription: {
      en: "This is the portfolio you're browsing right now — a cyberpunk-inspired developer site built with Next.js App Router. It features a terminal aesthetic with CRT scanlines, glassmorphism UI, Framer Motion scroll-triggered animations, three theme modes (Dark Terminal, Light Paper, High-Contrast), full Turkish/English localization with localStorage persistence, interactive education accordion, project detail pages, and typed data files for easy content updates.",
      tr: "Şu an incelediğiniz portfolyo sitesi — Next.js App Router ile geliştirilmiş siberpunk ilhamlı bir geliştirici sitesi. CRT scanline efektleri ve glassmorphism UI ile terminal estetiği, Framer Motion kaydırma animasyonları, üç tema modu (Karanlık Terminal, Açık Kağıt, Yüksek Kontrast), localStorage ile kalıcı TR/EN yerelleştirme, interaktif eğitim accordion'u, proje detay sayfaları ve kolay içerik güncellemesi için tipli veri dosyaları içerir.",
    },
    problem: {
      en: "Developers need a portfolio that reflects their technical identity — not a generic template — while remaining accessible, performant, bilingual, and easy to maintain without touching component code for every content change.",
      tr: "Geliştiricilerin generic bir şablondan öte teknik kimliklerini yansıtan; erişilebilir, performanslı, iki dilli ve her içerik değişikliğinde bileşen koduna dokunmadan güncellenebilir bir portfolyoya ihtiyacı vardır.",
    },
    architecture: {
      en: "Next.js App Router with modular sections, Zustand stores for theme/locale persistence, separated locale/project/education data files, CSS custom properties for theme switching, Framer Motion viewport animations, and SSG project detail routes. Deployed on Vercel with custom domain lutezzi.space.",
      tr: "Modüler section'lar ile Next.js App Router, tema/yerel ayar kalıcılığı için Zustand store'ları, ayrılmış locale/proje/eğitim veri dosyaları, tema değişimi için CSS custom property'ler, Framer Motion viewport animasyonları ve SSG proje detay route'ları. Vercel üzerinde lutezzi.space özel domain ile dağıtım.",
    },
    tags: ["Portfolio", "Next.js", "Terminal UI"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
    githubUrl: "https://github.com/lutezzi/lutezzi-portfolio",
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
