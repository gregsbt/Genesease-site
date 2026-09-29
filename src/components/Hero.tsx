import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden bg-bg-soft">
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full brand-gradient opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full brand-gradient opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <span className="inline-block rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-body">
          {t.hero.eyebrow}
        </span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          {t.hero.title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed brand-gradient-text">
          {t.hero.subtitle}
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-body">
          {t.hero.body}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="#contact"
            className="inline-block rounded-full brand-gradient px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:scale-[1.02]"
          >
            {t.hero.cta}
          </a>
          <span className="text-sm text-body/80">{t.hero.ctaNote}</span>
        </div>
      </div>
    </section>
  );
}
