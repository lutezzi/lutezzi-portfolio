import type { LocaleStrings } from "@/types";

export const tr: LocaleStrings = {
  meta: {
    title: "Lutezzi | Full-Stack Developer",
    description:
      "Full-stack mühendislik, IoT, oyun geliştirme ve modern web uygulamalarını sergileyen terminal estetikli portfolyo.",
  },
  nav: {
    about: "Hakkımda",
    education: "Eğitim",
    skills: "Yetenekler",
    projects: "Projeler",
    contact: "İletişim",
    brand: "lutezzi@portfolio:~$",
  },
  hero: {
    command: "cat hosgeldin.txt",
    greeting: "Merhaba, ben Lutezzi — Full-Stack Developer",
    tagline: "> Sürükleyici web deneyimleri, IoT sistemleri ve interaktif dünyalar inşa ediyorum.",
    intro:
      "React/Next.js frontend'lerinden Node.js backend'lere, Unity/Unreal Engine oyun prototiplerinden Ardunio UNO microcontroller'lerine kadar uçtan uca üretim kalitesinde uygulamalar geliştiriyorum. Temiz mimari, terminal estetiği ve donanım + yazılım sınırlarını zorlamaya tutkuluyum.",
    viewProjects: "./projeleri_gor.sh",
    contactMe: "./iletisim.me",
    statusOnline: "DURUM: ÇEVRİMİÇİ",
  },
  about: {
    title: "Hakkımda",
    command: "whoami --verbose",
    paragraphs: [
      "Yazılım öğrenme yolculuğuma Discord botları kodlayarak başladım. Slash komutları, moderasyon sistemleri, rol menüleri ve sunucu otomasyonu gibi gerçek kullanıcı ihtiyaçlarına dokunan projeler geliştirdikçe programlamanın yalnızca kod yazmak değil, sorun çözmek ve deneyim tasarlamak olduğunu fark ettim. Bu süreç, backend mantığı, event-driven mimari ve kullanıcı odaklı düşünmeyi pratikte öğrenmemi sağladı.",
      "Bot geliştirme deneyimimin ardından responsive web sayfaları ve modern arayüzler üretmeye yöneldim. Mobil, tablet ve masaüstünde tutarlı çalışan arayüzler tasarlamak; bileşen tabanlı yapılar kurmak ve performanslı, erişilebilir web deneyimleri oluşturmak benim için doğal bir sonraki adım oldu. HTML, CSS, JavaScript ve React ekosistemiyle bu alanda kendimi sürekli geliştirdim.",
      "Üniversite eğitimim sırasında donanım tarafına da el attım: Arduino Uno kart ve Bluetooth modülü kullanarak uzaktan kumandalı bir RC araba projesi geliştirdim. Yazılım ile fiziksel dünyayı bir araya getirmek; sensörler, motor sürücüler ve kablosuz iletişimle çalışmak, bana full-stack düşüncenin sadece web ile sınırlı olmadığını gösterdi.",
      "Bugün web geliştirme ve yapay zekaya duyduğum ilgi doğrultusunda modern websiteler geliştiriyor, vibe coding ile fikirleri hızla prototipe dönüştürüyor ve sektördeki yeni araçları, framework'leri ve AI destekli geliştirme süreçlerini yakından takip ediyorum. Öğrenmeyi hiç bırakmayan, meraklı ve üretken bir geliştirici olarak her projede bir adım daha ileri gitmeyi hedefliyorum.",
    ],
    highlights: [
      { label: "Odak", value: "Web · Discord Bot · IoT / Arduino" },
      { label: "Stack", value: "React · Next.js · Node.js · Tailwind" },
      { label: "Konum", value: "Samsun / Türkiye" },
      { label: "Durum", value: "Web & AI odaklı projeler geliştiriyor" },
    ],
  },
  education: {
    title: "Eğitim",
    command: "tree ~/egitim --depth=2",
    expandHint: "Terminal çıktısını genişletmek için tıklayın",
    technologies: "Teknolojiler",
    coursework: "Dersler",
    achievements: "Başarılar",
    skillsAcquired: "Kazanılan Beceriler",
  },
  skills: {
    title: "Yetenekler",
    command: "cat yetenekler.json | jq",
    statusLabel: "ÇALIŞIYOR",
  },
  projects: {
    title: "Projeler",
    command: "ls -la ~/projeler/",
    inspect: "[PROJE_INCELE]",
    viewLive: "Canlı Demo",
    viewGithub: "GitHub",
    featured: "ÖNE ÇIKAN",
  },
  projectDetail: {
    back: "← Projelere Dön",
    problem: "Çözülen Problem",
    architecture: "Mimari & Yaklaşım",
    techStack: "Teknoloji Yığını",
    gallery: "Ekran Görüntüleri",
    liveDemo: "Canlı Demoyu Aç",
    repository: "Depoyu Görüntüle",
    notFound: "Proje bulunamadı.",
  },
  contact: {
    title: "İletişim",
    command: "python mesaj_gonder.py",
    name: "isim",
    email: "eposta",
    subject: "konu",
    message: "mesaj",
    send: "send_message() çalıştır",
    sending: "İletiliyor...",
    success: "✓ Mesaj başarıyla kuyruğa alındı. Kısa sürede yanıtlayacağım.",
    error: "✗ İletim başarısız. Lütfen tekrar deneyin.",
    socialTitle: "Bağlantılar",
  },
  footer: {
    copyright: "© 2026 Lutezzi. Tüm hakları saklıdır.",
  },
  scrollTop: "[▲]",
  theme: {
    dark: "Karanlık Terminal",
    light: "Açık Terminal",
    terminalHc: "Yüksek Kontrast",
  },
  language: {
    en: "EN",
    tr: "TR",
  },
};
