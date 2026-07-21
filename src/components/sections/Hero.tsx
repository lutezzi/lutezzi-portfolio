"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { TypingEffect } from "@/components/ui/TypingEffect";
import { useTranslation } from "@/hooks/useTranslation";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-20"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <TerminalWindow title="welcome.sh" command={t.hero.command}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--accent-green)]" />
              <span className="font-mono text-xs text-[var(--accent-green)]">
                {t.hero.statusOnline}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-xl font-bold leading-tight text-[var(--foreground)] sm:text-2xl md:text-3xl lg:text-4xl"
            >
              <TypingEffect text={t.hero.greeting} speed={30} />
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-mono text-sm text-[var(--accent-cyan)] md:text-base"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base"
            >
              {t.hero.intro}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className={cn(
                  "rounded border border-[var(--accent-green)] px-4 py-2 font-mono text-sm",
                  "text-[var(--accent-green)] transition-all hover:bg-[var(--accent-green)]/10",
                  "hover:shadow-[var(--glow)] focus-visible:outline-2 focus-visible:outline-offset-2",
                  "focus-visible:outline-[var(--accent-cyan)]"
                )}
              >
                {t.hero.viewProjects}
              </a>
              <a
                href="#contact"
                className={cn(
                  "rounded border border-[var(--border)] px-4 py-2 font-mono text-sm",
                  "text-[var(--accent-cyan)] transition-all hover:border-[var(--accent-cyan)]",
                  "hover:shadow-[var(--glow)] focus-visible:outline-2 focus-visible:outline-offset-2",
                  "focus-visible:outline-[var(--accent-cyan)]"
                )}
              >
                {t.hero.contactMe}
              </a>
            </motion.div>
          </motion.div>
        </TerminalWindow>
      </div>
    </section>
  );
}
