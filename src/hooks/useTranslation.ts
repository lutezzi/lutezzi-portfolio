"use client";

import { useLocaleStore } from "@/stores/localeStore";
import { locales } from "@/data/locales";
import type { LocaleStrings } from "@/types";

export function useTranslation(): LocaleStrings {
  const locale = useLocaleStore((s) => s.locale);
  return locales[locale];
}

export function useLocalizeFn() {
  const locale = useLocaleStore((s) => s.locale);
  return <T extends { en: string; tr: string }>(item: T): string => item[locale];
}
