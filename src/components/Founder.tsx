import { useLanguage } from "../context/LanguageContext";
import founderPhoto from "../assets/founder.jpg";

export function Founder() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
          {t.founder.eyebrow}
        </span>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {t.founder.name}
        </h2>
      </div>

      <div className="mt-10 grid items-start gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="order-2 space-y-4 md:order-1">
          {t.founder.paragraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-body">
              {p}
            </p>
          ))}
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="w-56 overflow-hidden rounded-2xl border border-border shadow-lg sm:w-64">
            <img
              src={founderPhoto}
              alt={t.founder.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <p className="mt-8 rounded-2xl border border-border bg-gradient-to-r from-brand-blue-soft to-brand-purple-soft px-8 py-6 text-base font-medium leading-relaxed text-ink">
        {t.founder.tagline}
      </p>
    </section>
  );
}
