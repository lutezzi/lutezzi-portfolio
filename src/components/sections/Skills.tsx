"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation, useLocalizeFn } from "@/hooks/useTranslation";
import { skillsData } from "@/data/skills";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

export function Skills() {
  const t = useTranslation();
  const localize = useLocalizeFn();

  return (
    <SectionWrapper id="skills" ariaLabel={t.skills.title}>
      <TerminalWindow title="skills.json" command={t.skills.command}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeInUp} className="mb-6 flex items-center justify-between">
            <h2 className="font-mono text-lg text-[var(--accent-green)] md:text-xl">
              # {t.skills.title}
            </h2>
            <span className="flex items-center gap-2 font-mono text-xs text-[var(--accent-amber)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent-green)]" />
              {t.skills.statusLabel}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {skillsData.map((category) => (
              <motion.div
                key={category.id}
                variants={scaleIn}
                className="rounded border border-[var(--border)] bg-[var(--surface-elevated)] p-4"
              >
                <pre className="mb-3 font-mono text-xs text-[var(--accent-cyan)]">
                  {`"${localize(category.title)}": [`}
                </pre>
                <div className="flex flex-wrap gap-2 pl-4">
                  {category.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="font-mono text-xs text-[var(--foreground)]"
                    >
                      <span className="text-[var(--accent-green)]">&quot;{skill}&quot;</span>
                      {i < category.skills.length - 1 && (
                        <span className="text-[var(--muted)]">,</span>
                      )}
                    </span>
                  ))}
                </div>
                <pre className="mt-2 font-mono text-xs text-[var(--accent-cyan)]">{`]`}</pre>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </TerminalWindow>
    </SectionWrapper>
  );
}
