"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Terminal } from "lucide-react";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation, useLocalizeFn } from "@/hooks/useTranslation";
import { educationData } from "@/data/education";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { EducationItem } from "@/types";

function EducationDetail({ item }: { item: EducationItem }) {
  const t = useTranslation();
  const localize = useLocalizeFn();

  return (
    <div className="space-y-5 font-mono text-sm">
      <p className="text-[var(--muted)]">{localize(item.summary)}</p>

      <div>
        <h4 className="mb-2 text-[var(--accent-green)]">
          // {t.education.technologies}
        </h4>
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--accent-cyan)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-[var(--accent-green)]">
          // {t.education.coursework}
        </h4>
        <ul className="list-inside list-disc space-y-1 text-[var(--muted)]">
          {item.coursework.map((course, i) => (
            <li key={i}>{localize(course)}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 text-[var(--accent-green)]">
          // {t.education.achievements}
        </h4>
        <ul className="list-inside list-disc space-y-1 text-[var(--muted)]">
          {item.achievements.map((achievement, i) => (
            <li key={i}>{localize(achievement)}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 text-[var(--accent-green)]">
          // {t.education.skillsAcquired}
        </h4>
        <div className="flex flex-wrap gap-2">
          {item.skillsAcquired.map((skill) => (
            <span
              key={skill}
              className="rounded bg-[var(--accent-green)]/10 px-2 py-0.5 text-xs text-[var(--accent-green)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Education() {
  const t = useTranslation();
  const localize = useLocalizeFn();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <SectionWrapper id="education" ariaLabel={t.education.title}>
      <TerminalWindow title="education/" command={t.education.command}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2
            variants={fadeInUp}
            className="mb-2 font-mono text-lg text-[var(--accent-green)] md:text-xl"
          >
            # {t.education.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-6 font-mono text-xs text-[var(--muted)]">
            {t.education.expandHint}
          </motion.p>

          <div className="space-y-2">
            {educationData.map((item, index) => {
              const isExpanded = expandedId === item.id;
              return (
                <motion.div key={item.id} variants={fadeInUp}>
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className={cn(
                      "group flex w-full items-start gap-3 rounded border border-[var(--border)] p-4 text-left transition-all",
                      "hover:border-[var(--accent-green)] hover:shadow-[var(--glow)]",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]",
                      isExpanded && "border-[var(--accent-green)] bg-[var(--surface-elevated)]"
                    )}
                    aria-expanded={isExpanded}
                  >
                    <span className="mt-0.5 font-mono text-xs text-[var(--accent-amber)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ChevronRight
                      size={16}
                      className={cn(
                        "mt-0.5 shrink-0 text-[var(--accent-green)] transition-transform",
                        isExpanded && "rotate-90"
                      )}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className="font-mono text-sm text-[var(--foreground)]">
                        {localize(item.degree)}
                      </p>
                      <p className="font-mono text-xs text-[var(--accent-cyan)]">
                        @ {localize(item.institution)}
                      </p>
                      <p className="mt-1 font-mono text-xs text-[var(--muted)]">
                        {item.period} · {localize(item.location)}
                      </p>
                    </div>
                    <Terminal
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-8 border-l-2 border-[var(--accent-green)]/30 px-4 py-4">
                          <EducationDetail item={item} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </TerminalWindow>
    </SectionWrapper>
  );
}
