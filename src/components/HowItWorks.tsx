import { useLanguage } from "../context/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how" className="bg-bg-soft py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {t.how.title}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-sm font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
