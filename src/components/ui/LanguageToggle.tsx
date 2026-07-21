"use client";

import { useLocaleStore } from "@/stores/localeStore";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLocaleStore();
  const t = useTranslation();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={cn(
        "rounded border border-[var(--border)] px-2.5 py-1.5 font-mono text-xs",
        "text-[var(--accent-amber)] transition-all",
        "hover:border-[var(--accent-green)] hover:shadow-[var(--glow)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
      )}
      aria-label={`Language: ${locale === "en" ? "English" : "Türkçe"}. Click to switch.`}
    >
      {locale === "en" ? t.language.tr : t.language.en}
    </button>
  );
}
