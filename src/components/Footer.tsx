import { useLanguage } from "../context/LanguageContext";
import { LogoMark, LogoWordmark } from "./Logo";

export function Footer() {
  const { lang, setLang, t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <a href="#top" className="flex items-end gap-2">
          <LogoMark size={24} />
          <LogoWordmark className="text-base" />
        </a>

        <div className="flex items-center gap-6 text-sm text-body">
          <a href="#contact-page" className="hover:text-ink transition-colors">
            {t.footer.contact}
          </a>
          <a href="#legal" className="hover:text-ink transition-colors">
            {t.footer.legal}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("fr")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "fr" ? "brand-gradient text-white" : "text-body hover:text-ink"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en" ? "brand-gradient text-white" : "text-body hover:text-ink"
              }`}
            >
              EN
            </button>
          </div>
          <span className="text-xs text-body/70">© {year} Genesease. {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
