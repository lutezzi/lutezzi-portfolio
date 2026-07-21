import { en } from "./en";
import { tr } from "./tr";
import type { Locale } from "@/types";

export const locales = { en, tr } satisfies Record<Locale, typeof en>;

export type { LocaleStrings } from "@/types";
