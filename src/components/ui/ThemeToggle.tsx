"use client";

import { Monitor, Sun, Contrast } from "lucide-react";
import { useThemeStore } from "@/stores/themeStore";
import { useTranslation } from "@/hooks/useTranslation";
import type { Theme } from "@/types";
import { cn } from "@/lib/utils";

const themeIcons: Record<Theme, React.ReactNode> = {
  dark: <Monitor size={16} aria-hidden="true" />,
  light: <Sun size={16} aria-hidden="true" />,
  "terminal-hc": <Contrast size={16} aria-hidden="true" />,
};

export function ThemeToggle() {
  const { theme, cycleTheme } = useThemeStore();
  const t = useTranslation();

  const labels: Record<Theme, string> = {
    dark: t.theme.dark,
    light: t.theme.light,
    "terminal-hc": t.theme.terminalHc,
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={cn(
        "flex items-center gap-1.5 rounded border border-[var(--border)] px-2.5 py-1.5",
        "font-mono text-xs text-[var(--accent-cyan)] transition-all",
        "hover:border-[var(--accent-green)] hover:shadow-[var(--glow)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
      )}
      aria-label={`Theme: ${labels[theme]}. Click to switch.`}
      title={labels[theme]}
    >
      {themeIcons[theme]}
      <span className="hidden sm:inline">{labels[theme]}</span>
    </button>
  );
}
