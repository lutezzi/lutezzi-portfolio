"use client";

import { useEffect } from "react";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { useThemeStore } from "@/stores/themeStore";

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <ParticleBackground />
      <div className="relative z-10">{children}</div>
    </>
  );
}
