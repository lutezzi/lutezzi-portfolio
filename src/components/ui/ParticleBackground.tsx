"use client";

import { useEffect, useRef } from "react";
import { useThemeStore } from "@/stores/themeStore";
import type { Theme } from "@/types";

const PARTICLE_COLORS: Record<Theme, { dot: string; line: string }> = {
  dark: {
    dot: "rgba(0, 255, 136, 0.45)",
    line: "rgba(0, 255, 136, 0.07)",
  },
  light: {
    dot: "rgba(26, 138, 74, 0.3)",
    line: "rgba(26, 138, 74, 0.06)",
  },
  "terminal-hc": {
    dot: "rgba(0, 255, 0, 0.55)",
    line: "rgba(0, 255, 0, 0.1)",
  },
};

const CONNECTION_DISTANCE = 130;
const MOUSE_RADIUS = 140;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

function createParticles(width: number, height: number): Particle[] {
  const area = width * height;
  const count = Math.min(90, Math.max(35, Math.floor(area / 18000)));

  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    size: Math.random() * 1.4 + 0.6,
  }));
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useThemeStore((s) => s.theme);
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationId = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    const mouse = { x: -1000, y: -1000, active: false };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(width, height);
    };

    const draw = () => {
      const colors = PARTICLE_COLORS[themeRef.current];
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x <= 0 || particle.x >= width) particle.vx *= -1;
          if (particle.y <= 0 || particle.y >= height) particle.vy *= -1;

          if (mouse.active) {
            const dx = particle.x - mouse.x;
            const dy = particle.y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < MOUSE_RADIUS && dist > 0) {
              const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
              particle.x += (dx / dist) * force * 0.6;
              particle.y += (dy / dist) * force * 0.6;
            }
          }
        }

        ctx.beginPath();
        ctx.fillStyle = colors.dot;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < CONNECTION_DISTANCE) {
            ctx.globalAlpha = 1 - dist / CONNECTION_DISTANCE;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationId = window.requestAnimationFrame(draw);
    };

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
