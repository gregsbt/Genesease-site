import { useLanguage } from "../context/LanguageContext";

export function Problem() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
        {t.problem.eyebrow}
      </span>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {t.problem.title}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-body">{t.problem.body}</p>
      <p className="mt-6 rounded-2xl border border-border bg-brand-blue-soft px-6 py-5 text-base font-medium leading-relaxed text-ink">
        {t.problem.highlight}
      </p>
    </section>
  );
}
