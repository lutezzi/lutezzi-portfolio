"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Code2, Link2, Mail, MessageCircle } from "lucide-react";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation } from "@/hooks/useTranslation";
import { SOCIAL_LINKS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const socialItems = [
  { key: "github", icon: Code2, href: SOCIAL_LINKS.github, label: "GitHub" },
  { key: "linkedin", icon: Link2, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { key: "discord", icon: MessageCircle, href: SOCIAL_LINKS.discord, label: "Discord" },
  { key: "email", icon: Mail, href: SOCIAL_LINKS.email, label: "Email" },
] as const;

export function Contact() {
  const t = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!accessKey) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const botcheck = String(formData.get("botcheck") ?? "").trim();

    if (botcheck) {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject,
          message,
          from_name: "Lutezzi Portfolio",
          replyto: email,
        }),
      });

      const result = (await response.json()) as { success?: boolean };

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <SectionWrapper id="contact" ariaLabel={t.contact.title}>
      <TerminalWindow title="send_message.py" command={t.contact.command}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2
            variants={fadeInUp}
            className="mb-6 font-mono text-lg text-[var(--accent-green)] md:text-xl"
          >
            # {t.contact.title}
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="space-y-4 lg:col-span-3"
              noValidate
            >
              <input
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {(["name", "email", "subject"] as const).map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="mb-1 block font-mono text-xs text-[var(--accent-cyan)]"
                  >
                    {t.contact[field]} =
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    required
                    disabled={status === "sending"}
                    className={cn(
                      "w-full rounded border border-[var(--border)] bg-[var(--background)]",
                      "px-3 py-2 font-mono text-sm text-[var(--foreground)]",
                      "placeholder:text-[var(--muted)] focus:border-[var(--accent-green)]",
                      "focus:outline-none focus:ring-1 focus:ring-[var(--accent-green)]",
                      "disabled:cursor-not-allowed disabled:opacity-60"
                    )}
                    placeholder={`"${t.contact[field]}"`}
                    aria-required="true"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block font-mono text-xs text-[var(--accent-cyan)]"
                >
                  {t.contact.message} =
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  minLength={10}
                  disabled={status === "sending"}
                  className={cn(
                    "w-full resize-y rounded border border-[var(--border)] bg-[var(--background)]",
                    "px-3 py-2 font-mono text-sm text-[var(--foreground)]",
                    "placeholder:text-[var(--muted)] focus:border-[var(--accent-green)]",
                    "focus:outline-none focus:ring-1 focus:ring-[var(--accent-green)]",
                    "disabled:cursor-not-allowed disabled:opacity-60"
                  )}
                  placeholder={`"""${t.contact.message}"""`}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={cn(
                  "rounded border border-[var(--accent-green)] px-4 py-2 font-mono text-sm",
                  "text-[var(--accent-green)] transition-all hover:bg-[var(--accent-green)]/10",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
                )}
              >
                {status === "sending" ? t.contact.sending : t.contact.send}
              </button>

              {status === "success" && (
                <p className="font-mono text-sm text-[var(--accent-green)]" role="status">
                  {t.contact.success}
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-sm text-[var(--accent-red)]" role="alert">
                  {t.contact.error}
                </p>
              )}
            </motion.form>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <p className="mb-4 font-mono text-xs text-[var(--accent-amber)]">
                # {t.contact.socialTitle}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socialItems.map(({ key, icon: Icon, href, label }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-2 rounded border border-[var(--border)] p-3",
                      "font-mono text-xs text-[var(--muted)] transition-all",
                      "hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
                    )}
                    aria-label={label}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </TerminalWindow>
    </SectionWrapper>
  );
}
