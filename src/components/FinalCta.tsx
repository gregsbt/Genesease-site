import { useLanguage } from "../context/LanguageContext";

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 pb-24 text-center">
      <div className="rounded-3xl brand-gradient px-8 py-14 sm:px-16">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t.finalCta.title}</h2>
        <a
          href="mailto:contact@genesease.com"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-base font-semibold text-ink shadow-lg transition-transform hover:scale-[1.02]"
        >
          {t.finalCta.cta}
        </a>
      </div>
    </section>
  );
}
