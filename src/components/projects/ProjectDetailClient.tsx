"use client";

import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { SharksFeatureMockup, getMockupLabel } from "@/components/projects/SharksFeatureMockup";
import { useTranslation, useLocalizeFn } from "@/hooks/useTranslation";
import { useLocaleStore } from "@/stores/localeStore";
import type { ProjectItem } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectDetailClientProps {
  project: ProjectItem;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const t = useTranslation();
  const localize = useLocalizeFn();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="mb-6 inline-block font-mono text-sm text-[var(--accent-cyan)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
        >
          {t.projectDetail.back}
        </Link>

        <TerminalWindow title={`${project.slug}/README.md`}>
          <div className="space-y-8">
            <header>
              <p className="mb-2 font-mono text-xs text-[var(--accent-amber)]">
                PID: {project.slug} | STATUS: ACTIVE
              </p>
              <h1 className="font-mono text-2xl text-[var(--accent-green)] md:text-3xl">
                {localize(project.title)}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                {localize(project.fullDescription)}
              </p>
            </header>

            <section aria-labelledby="problem-heading">
              <h2
                id="problem-heading"
                className="mb-3 font-mono text-sm text-[var(--accent-cyan)]"
              >
                ## {t.projectDetail.problem}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {localize(project.problem)}
              </p>
            </section>

            <section aria-labelledby="architecture-heading">
              <h2
                id="architecture-heading"
                className="mb-3 font-mono text-sm text-[var(--accent-cyan)]"
              >
                ## {t.projectDetail.architecture}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {localize(project.architecture)}
              </p>
            </section>

            <section aria-labelledby="tech-heading">
              <h2
                id="tech-heading"
                className="mb-3 font-mono text-sm text-[var(--accent-cyan)]"
              >
                ## {t.projectDetail.techStack}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-[var(--border)] px-2.5 py-1 font-mono text-xs text-[var(--accent-green)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {(project.screenshots.length > 0 || (project.mockups?.length ?? 0) > 0) && (
              <section aria-labelledby="gallery-heading">
                <h2
                  id="gallery-heading"
                  className="mb-4 font-mono text-sm text-[var(--accent-cyan)]"
                >
                  ## {t.projectDetail.gallery}
                </h2>
                <div
                  className={
                    project.mockups?.length
                      ? "grid grid-cols-1 gap-6 lg:grid-cols-2"
                      : "grid grid-cols-1 gap-6"
                  }
                >
                  {project.mockups?.map((type) => (
                    <figure
                      key={type}
                      className="overflow-hidden rounded-lg border border-[var(--border)] bg-[#0f0d14] p-3"
                    >
                      <figcaption className="mb-3 font-mono text-xs text-[var(--accent-amber)]">
                        {getMockupLabel(type, locale)}
                      </figcaption>
                      <SharksFeatureMockup type={type} />
                    </figure>
                  ))}
                  {project.screenshots.map((src, i) => (
                    <figure
                      key={src}
                      className="overflow-hidden rounded-lg border border-[var(--border)] bg-[#0f0d14]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${localize(project.title)} screenshot ${i + 1}`}
                        className="h-auto w-full object-contain"
                      />
                    </figure>
                  ))}
                </div>
              </section>
            )}

            <div className="flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 rounded border border-[var(--accent-green)] px-4 py-2",
                    "font-mono text-sm text-[var(--accent-green)] transition-all hover:bg-[var(--accent-green)]/10"
                  )}
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  {t.projectDetail.liveDemo}
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 rounded border border-[var(--border)] px-4 py-2",
                  "font-mono text-sm text-[var(--muted)] transition-all hover:text-[var(--foreground)]"
                )}
              >
                <Code2 size={16} aria-hidden="true" />
                {t.projectDetail.repository}
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
