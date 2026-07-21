"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title?: string;
  command?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({
  title = "terminal",
  command,
  children,
  className,
}: TerminalWindowProps) {
  return (
    <motion.div
      className={cn(
        "terminal-window overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-[var(--glow)] backdrop-blur-sm",
        className
      )}
      role="region"
      aria-label={title}
    >
      <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[var(--accent-red)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--accent-amber)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--accent-green)]" />
        </div>
        <span className="ml-2 font-mono text-xs text-[var(--muted)]">{title}</span>
      </div>
      <div className="p-4 md:p-6">
        {command && (
          <p className="mb-4 font-mono text-sm text-[var(--accent-cyan)]">
            <span className="text-[var(--accent-green)]">$</span> {command}
          </p>
        )}
        {children}
      </div>
    </motion.div>
  );
}
