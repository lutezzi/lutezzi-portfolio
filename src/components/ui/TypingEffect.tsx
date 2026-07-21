"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  delay?: number;
}

export function TypingEffect({
  text,
  speed = 35,
  className,
  showCursor = true,
  delay = 0,
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayed(text.slice(0, index + 1));
        index++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started]);

  return (
    <span className={cn("font-mono", className)} aria-label={text}>
      {displayed}
      {showCursor && (
        <span
          className={cn(
            "ml-0.5 inline-block w-2 bg-[var(--accent-green)]",
            done ? "animate-blink" : "opacity-100"
          )}
          aria-hidden="true"
        >
          &nbsp;
        </span>
      )}
    </span>
  );
}
