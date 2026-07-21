"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation } from "@/hooks/useTranslation";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function About() {
  const t = useTranslation();

  return (
    <SectionWrapper id="about" ariaLabel={t.about.title}>
      <TerminalWindow title="about.txt" command={t.about.command}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2
            variants={fadeInUp}
            className="mb-6 font-mono text-lg text-[var(--accent-green)] md:text-xl"
          >
            # {t.about.title}
          </motion.h2>

          <div className="mb-8 space-y-4">
            {t.about.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="text-sm leading-relaxed text-[var(--muted)] md:text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {t.about.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded border border-[var(--border)] bg-[var(--surface-elevated)] p-3"
              >
                <p className="font-mono text-xs text-[var(--accent-amber)]">{item.label}</p>
                <p className="mt-1 font-mono text-sm text-[var(--foreground)]">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </TerminalWindow>
    </SectionWrapper>
  );
}
