"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function SectionWrapper({ id, children, className, ariaLabel }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("scroll-mt-24 py-16 md:py-24", className)}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}
