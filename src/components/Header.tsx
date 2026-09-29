import { useLanguage } from "../context/LanguageContext";
import { LogoMark, LogoWordmark } from "./Logo";

export function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-end gap-2">
          <LogoMark size={30} />
          <LogoWordmark />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-body md:flex">
          <a href="#offer" className="hover:text-ink transition-colors">{t.nav.offer}</a>
          <a href="#trust" className="hover:text-ink transition-colors">{t.nav.trust}</a>
          <a href="#how" className="hover:text-ink transition-colors">{t.nav.how}</a>
          <a href="#contact" className="hover:text-ink transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-full border border-border p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("fr")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "fr" ? "brand-gradient text-white" : "text-body hover:text-ink"
              }`}
              aria-pressed={lang === "fr"}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en" ? "brand-gradient text-white" : "text-body hover:text-ink"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:inline-block"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
