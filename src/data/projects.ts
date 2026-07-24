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
    slug: "hislerimsana",
    title: {
      en: "hislerimsana — Personal Bio Link Page",
      tr: "hislerimsana — Kişisel Bio / Link Sayfası",
    },
    shortDescription: {
      en: "Linktree-style personal bio page with video background, ambient music, Discord-style status card, and atmospheric animations — built with vanilla HTML/CSS/JS.",
      tr: "Video arka plan, ambient müzik, Discord tarzı durum kartı ve atmosferik animasyonlarla Linktree tarzı kişisel bio sayfası — vanilla HTML/CSS/JS ile geliştirildi.",
    },
    fullDescription: {
      en: "A single-page personal link hub inspired by Linktree and guns.lol aesthetics. Features a click-to-enter loader (browser autoplay compliance), looping video background with canvas snow/star effects, toggleable background music, profile block with Discord avatar decoration and typewriter username, Discord-style status card with badge tooltips (Nitro, HypeSquad, boost, Orbs), expandable social links (GitHub, Discord, SoundCloud), and a localStorage-based view counter with one increment per session.",
      tr: "Linktree ve guns.lol estetiğinden ilham alan tek sayfalık kişisel link hub'ı. Click-to-enter loader (tarayıcı otomatik oynatma uyumu), canvas kar/yıldız efektli döngüsel video arka plan, aç/kapa arka plan müziği, Discord avatar dekorasyonlu profil bloğu ve typewriter kullanıcı adı, rozet tooltip'li Discord tarzı durum kartı (Nitro, HypeSquad, boost, Orbs), genişletilebilir sosyal linkler (GitHub, Discord, SoundCloud) ve oturum başına tek artışlı localStorage görüntülenme sayacı içerir.",
    },
    problem: {
      en: "Generic link-in-bio tools offer limited customization and atmosphere — a developer's personal page should feel immersive and unique while remaining lightweight enough for static hosting.",
      tr: "Generic link-in-bio araçları sınırlı özelleştirme ve atmosfer sunar — bir geliştiricinin kişisel sayfası, statik hosting için yeterince hafif kalırken sürükleyici ve özgün hissettirmelidir.",
    },
    architecture: {
      en: "Vanilla HTML/CSS/JS with no framework dependency. script.js orchestrates loader flow, audio playback, typewriter animation, view counting, and canvas particle effects; styles.css handles theme, layout, tooltips, and transitions; assets/ stores avatar, music, badge images, and background video. Deployed as static files on Vercel with custom domain hislerimsana.xyz.",
      tr: "Framework bağımlılığı olmayan vanilla HTML/CSS/JS. script.js loader akışı, ses oynatma, typewriter animasyonu, görüntülenme sayacı ve canvas parçacık efektlerini yönetir; styles.css tema, layout, tooltip ve geçişleri sağlar; assets/ avatar, müzik, rozet görselleri ve arka plan videosunu barındırır. hislerimsana.xyz özel domain ile Vercel üzerinde statik dosya olarak dağıtılır.",
    },
    tags: ["Personal Site", "Bio Link", "Static Web"],
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/lutezzi/hislerimsana",
    liveUrl: "https://hislerimsana.xyz",
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
      en: "Extensible Discord bot with 20 slash commands — moderation, role menus, per-user i18n, lofi radio, and a signature embed design system.",
      tr: "20 slash komutlu genişletilebilir Discord botu — moderasyon, rol menüleri, kullanıcı bazlı i18n, lofi radyo ve özgün embed tasarım sistemi.",
    },
    fullDescription: {
      en: "sharks is a production Discord bot built with discord.js v14, running 24/7 on Oracle Cloud VPS via PM2. It ships custom welcome/leave embeds, `/setup` for guild-specific channels and role menus without code edits, color/gender dropdown menus with hex sync, interest role buttons, moderation tools (ban, kick, mute, unban, unmute, clear) with public channel embeds and ephemeral moderator confirmations, info commands (`/rules`, `/userinfo`, `/serverinfo`, `/avatar`, `/help`), per-user `/language tr|en`, voice join/leave, soft-lofi radio via `/lofi`, and playback controls via `/music`. Every reply follows a unified embed language — kicker, divider, pastel palette, and `𝘴𝘩𝘢𝘳𝘬𝘴` signature.",
      tr: "sharks, discord.js v14 ile geliştirilmiş ve PM2 ile Oracle Cloud VPS üzerinde 7/24 çalışan bir Discord botudur. Özel karşılama/ayrılma embed'leri, kod düzenlemeden sunucu bazlı kanal ve rol menüleri için `/setup`, hex senkronlu renk/cinsiyet dropdown menüleri, ilgi alanı rol butonları, kanalda moderasyon embed'i ve moderatöre gizli onaylı moderasyon araçları (ban, kick, mute, unban, unmute, clear), bilgi komutları (`/rules`, `/userinfo`, `/serverinfo`, `/avatar`, `/help`), kullanıcı bazlı `/language tr|en`, ses join/leave, `/lofi` ile soft-lofi radyo ve `/music` ile oynatma kontrolleri sunar. Tüm yanıtlar kicker, divider, pastel palet ve `𝘴𝘩𝘢𝘳𝘬𝘴` imzasıyla birleşik bir embed dilinde gelir.",
    },
    problem: {
      en: "Growing Discord communities need moderation, onboarding, self-service roles, and ambient voice features in one cohesive bot — without juggling multiple third-party tools or inconsistent UI.",
      tr: "Büyüyen Discord toplulukları, birden fazla üçüncü taraf araca ve tutarsız arayüze bağımlı kalmadan moderasyon, onboarding, self-servis roller ve ses özelliklerini tek bir uyumlu botta bir arada ister.",
    },
    architecture: {
      en: "Modular `src/commands` tree (admin, genel, ses) with dynamic loader. JSON per-guild settings store, centralized TR/EN locale files, select menu and button interaction handlers, `syncColorRoles` for hex role sync, `musicPlayer` with @discordjs/voice for lofi streams, rotating presence via `activities.js`, and terminal startup banner. Deployed with PM2 on Oracle Cloud Always Free tier.",
      tr: "Dinamik yükleyici ile modüler `src/commands` yapısı (admin, genel, ses). JSON sunucu bazlı ayar deposu, merkezi TR/EN locale dosyaları, select menu ve buton handler'ları, hex rol senkronu için `syncColorRoles`, lofi stream'ler için @discordjs/voice ve `musicPlayer`, `activities.js` ile dönen durum çubuğu ve terminal açılış banner'ı. Oracle Cloud Always Free tier üzerinde PM2 ile dağıtım.",
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
    mockups: ["welcome", "roles", "moderation", "embed", "setup", "music"],
  },
  {
    slug: "sharks-bot-website",
    title: {
      en: "sharks — Community Website",
      tr: "sharks — Topluluk Websitesi",
    },
    shortDescription: {
      en: "Official bilingual site for sharks with locale routing, command reference, interactive feature mockups, docs subdomain, and Discord verification legal pages.",
      tr: "sharks için locale routing, komut referansı, interaktif özellik mockup'ları, docs alt alan adı ve Discord doğrulama yasal sayfaları içeren resmi iki dilli site.",
    },
    fullDescription: {
      en: "Official website for the sharks Discord bot built with Next.js App Router and deployed on Vercel. Serves TR/EN homepages (`/tr`, `/en`), category-based command lists (`/tr/commands`, `/en/commands`), Terms of Use and Privacy Policy pages required for Discord bot verification, and a documentation area at `docs.sharksbot.site`. The homepage features a hero with Discord invite integration, alternating feature sections with live Discord-style mockups (welcome, roles, moderation, setup, voice), scroll-reveal animations, and deep links into external docs.",
      tr: "sharks Discord botu için Next.js App Router ile geliştirilmiş ve Vercel'e deploy edilmiş resmi website. TR/EN ana sayfalar (`/tr`, `/en`), kategorilere ayrılmış komut listeleri (`/tr/commands`, `/en/commands`), Discord bot doğrulaması için Kullanım Koşulları ve Gizlilik Politikası sayfaları ile `docs.sharksbot.site` üzerinde dokümantasyon alanı sunar. Ana sayfada Discord davet entegrasyonlu hero, canlı Discord tarzı mockup'larla (karşılama, roller, moderasyon, setup, ses) alternatif özellik bölümleri, scroll-reveal animasyonları ve harici docs'a derin linkler yer alır.",
    },
    problem: {
      en: "Discord bots require verified legal URLs and a professional discovery surface — users need localized pages to explore features, browse commands, read docs, and invite the bot from one cohesive domain.",
      tr: "Discord botları doğrulanmış yasal URL'ler ve profesyonel bir keşif yüzeyi gerektirir — kullanıcıların özellikleri keşfetmesi, komutlara göz atması, dokümantasyon okuması ve botu tek bir domain üzerinden davet etmesi gerekir.",
    },
    architecture: {
      en: "Next.js 16 App Router with middleware-driven locale rewrites (`/` → `/tr`, prefixless Turkish paths, `/en/...` for English) and docs subdomain routing (`docs.sharksbot.site` → `/docs/[locale]`). Typed i18n dictionaries, `FeaturesShowcase` with `FeatureMockup` components, catch-all docs routes, legal content modules, and Vercel deployment on sharksbot.site.",
      tr: "Middleware ile locale rewrite (`/` → `/tr`, `/tr` öneksiz Türkçe yollar, İngilizce için `/en/...`) ve docs alt alan adı yönlendirmesi (`docs.sharksbot.site` → `/docs/[locale]`) sunan Next.js 16 App Router. Tipli i18n sözlükleri, `FeatureMockup` bileşenli `FeaturesShowcase`, catch-all docs route'ları, yasal içerik modülleri ve sharksbot.site üzerinde Vercel dağıtımı.",
    },
    tags: ["Website", "Next.js", "Discord"],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Vercel"],
    githubUrl: "https://github.com/lutezzi/sharks-bot-website",
    liveUrl: "https://sharksbot.site",
    featured: true,
    screenshots: [
      "/projects/sharks-bot-website/hero.png",
      "/projects/sharks-bot-website/features-welcome-roles.png",
      "/projects/sharks-bot-website/features-moderation-embed.png",
      "/projects/sharks-bot-website/features-setup-music.png",
    ],
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
    githubUrl: "https://github.com/lutezzi/server-side-chat-app",
    featured: false,
    screenshots: [],
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
