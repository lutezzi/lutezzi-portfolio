import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lutezzi | Full-Stack Developer",
    template: "%s | Lutezzi",
  },
  description:
    "Terminal-inspired portfolio showcasing web development, Discord bots, IoT projects, and modern applications.",
  keywords: [
    "Lutezzi",
    "portfolio",
    "web developer",
    "Discord bot",
    "React",
    "Next.js",
    "Arduino",
  ],
  authors: [{ name: "Yiğit Can Yılmaz", url: SITE_URL }],
  creator: "Lutezzi",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Lutezzi Portfolio",
    title: "Lutezzi | Full-Stack Developer",
    description:
      "Terminal-inspired portfolio showcasing web development, Discord bots, IoT projects, and modern applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lutezzi | Full-Stack Developer",
    description:
      "Terminal-inspired portfolio showcasing web development, Discord bots, IoT, and modern web applications.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistMono.variable} h-full`} suppressHydrationWarning>
      <body className="scanlines min-h-full font-mono antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
