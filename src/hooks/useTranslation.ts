import { LocaleKeys, locales, SupportedLangs } from "@/locales/locales"

export default function useTranslation(locale: SupportedLangs){
    const t = (key: LocaleKeys) => locales[key][locale] ?? key;
    return { t };
}

export function parseLocale(l: string): SupportedLangs {
    if (l === "en") return "en";
    return "es";
}