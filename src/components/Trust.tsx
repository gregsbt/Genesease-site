import { useLanguage } from "../context/LanguageContext";

export function Trust() {
  const { t } = useLanguage();

  return (
    <section id="trust" className="bg-bg-soft py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {t.trust.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-body/80">{t.trust.tagline}</p>

        <div className="mt-10 flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-border bg-white px-6 py-10">
          <p className="text-sm text-body/70">{t.trust.placeholder}</p>
        </div>
      </div>
    </section>
  );
}
