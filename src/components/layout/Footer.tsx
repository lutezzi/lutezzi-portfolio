"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
  const t = useTranslation();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center font-mono text-xs text-[var(--muted)]">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
