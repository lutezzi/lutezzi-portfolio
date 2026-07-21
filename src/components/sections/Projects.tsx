"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Star } from "lucide-react";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation, useLocalizeFn } from "@/hooks/useTranslation";
import { projectsData } from "@/data/projects";
import { SITE_URL } from "@/lib/constants";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Projects() {
  const t = useTranslation();
  const localize = useLocalizeFn();
  const hasScroll = projectsData.length > 4;

  return (
    <SectionWrapper id="projects" ariaLabel={t.projects.title}>
      <TerminalWindow title="projects/" command={t.projects.command}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2
            variants={fadeInUp}
            className="mb-6 font-mono text-lg text-[var(--accent-green)] md:text-xl"
          >
            # {t.projects.title}
          </motion.h2>

          <div className="relative">
            <div
              className={cn(
                "grid grid-cols-1 gap-4 overflow-y-auto pr-1 sm:grid-cols-2",
                "scroll-smooth [scrollbar-gutter:stable]",
                hasScroll && "max-h-[576px]"
              )}
              {...(hasScroll
                ? {
                    tabIndex: 0,
                    role: "region" as const,
                    "aria-label": t.projects.scrollHint,
                  }
                : {})}
            >
              {projectsData.map((project) => (
                <motion.article
                  key={project.slug}
                  variants={scaleIn}
                  className={cn(
                    "group relative flex min-h-[280px] flex-col rounded border border-[var(--border)]",
                    "bg-[var(--surface-elevated)] p-4 transition-all",
                    "hover:border-[var(--accent-green)] hover:shadow-[var(--glow)]"
                  )}
                >
                  {project.featured && (
                    <span className="absolute right-3 top-3 flex items-center gap-1 font-mono text-[10px] text-[var(--accent-amber)]">
                      <Star size={10} aria-hidden="true" />
                      {t.projects.featured}
                    </span>
                  )}

                  <div className="mb-3 font-mono text-xs text-[var(--accent-cyan)]">
                    drwxr-xr-x {project.slug}/
                  </div>

                  <h3 className="mb-2 font-mono text-base text-[var(--foreground)]">
                    {localize(project.title)}
                  </h3>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {localize(project.shortDescription)}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] text-[var(--accent-green)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 border-t border-[var(--border)] pt-3">
                    <a
                      href={`${SITE_URL}/projects/${project.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "rounded border border-[var(--accent-green)] px-3 py-1.5 font-mono text-xs",
                        "text-[var(--accent-green)] transition-all hover:bg-[var(--accent-green)]/10",
                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
                      )}
                    >
                      {t.projects.inspect}
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-mono text-xs text-[var(--accent-cyan)] hover:underline"
                        aria-label={`${t.projects.viewLive}: ${localize(project.title)}`}
                      >
                        <ExternalLink size={12} aria-hidden="true" />
                        {t.projects.viewLive}
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-xs text-[var(--muted)] hover:text-[var(--foreground)]"
                      aria-label={`${t.projects.viewGithub}: ${localize(project.title)}`}
                    >
                      <Code2 size={12} aria-hidden="true" />
                      {t.projects.viewGithub}
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {hasScroll && (
              <>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/80 to-transparent"
                  aria-hidden="true"
                />
                <p className="pointer-events-none absolute inset-x-0 bottom-2 text-center font-mono text-[10px] text-[var(--muted)]">
                  {t.projects.scrollHint}
                </p>
              </>
            )}
          </div>
        </motion.div>
      </TerminalWindow>
    </SectionWrapper>
  );
}
