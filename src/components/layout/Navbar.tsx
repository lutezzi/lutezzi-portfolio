"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useTranslation } from "@/hooks/useTranslation";
import { NAV_SECTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabels: Record<string, string> = {
    about: t.nav.about,
    education: t.nav.education,
    skills: t.nav.skills,
    projects: t.nav.projects,
    contact: t.nav.contact,
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md shadow-[var(--glow)]"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="font-mono text-sm text-[var(--accent-green)] transition-colors hover:text-[var(--accent-cyan)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
          aria-label="Home"
        >
          <span className="hidden sm:inline">{t.nav.brand}</span>
          <span className="sm:hidden">lutezzi@portfolio:~$</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex" role="list">
          {NAV_SECTIONS.map(({ id, href }) => (
            <li key={id}>
              <a
                href={href}
                className={cn(
                  "rounded px-3 py-1.5 font-mono text-xs text-[var(--muted)] transition-all",
                  "hover:bg-[var(--surface-elevated)] hover:text-[var(--accent-cyan)]",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
                )}
              >
                ./{id}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="rounded p-1.5 text-[var(--muted)] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col px-4 py-3" role="list">
            {NAV_SECTIONS.map(({ id, href }) => (
              <li key={id}>
                <a
                  href={href}
                  className="block rounded px-3 py-2.5 font-mono text-sm text-[var(--muted)] hover:text-[var(--accent-cyan)]"
                  onClick={() => setMobileOpen(false)}
                >
                  ./{navLabels[id]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
