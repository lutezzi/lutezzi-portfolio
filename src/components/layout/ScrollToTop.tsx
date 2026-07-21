"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const t = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setVisible(window.scrollY > heroHeight || nearBottom);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-6 right-6 z-40 rounded border border-[var(--border)]",
            "bg-[var(--surface)] px-3 py-2 font-mono text-xs text-[var(--accent-green)]",
            "shadow-[var(--glow)] backdrop-blur-sm transition-all",
            "hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
          )}
          aria-label="Scroll to top"
        >
          {t.scrollTop}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
