import { useLanguage } from "../context/LanguageContext";

export function ForWho() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center">
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {t.forWho.title}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-body">{t.forWho.body}</p>
    </section>
  );
}
