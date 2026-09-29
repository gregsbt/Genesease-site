import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function Check() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-purple"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

type OfferStep = {
  badge: string;
  title: string;
  items: readonly string[];
};

type OfferCardProps = {
  badge: string;
  title: string;
  intro: string;
  step1: OfferStep;
  step2: OfferStep;
};

function OfferCard({ badge, title, intro, step1, step2 }: OfferCardProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-white p-8">
      <span className="inline-block w-fit rounded-full bg-brand-purple-soft px-3 py-1 text-xs font-semibold text-brand-purple">
        {badge}
      </span>
      <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-body">{intro}</p>

      {open && (
        <div className="mt-6 space-y-6 border-t border-border pt-6">
          {[step1, step2].map((step) => (
            <div key={step.title}>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                {step.badge}
              </span>
              <h4 className="mt-1 text-base font-semibold text-ink">{step.title}</h4>
              <ul className="mt-3 space-y-2.5">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-6 self-end rounded-full border border-border px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-brand-purple hover:text-brand-purple"
        aria-expanded={open}
      >
        {open ? t.offer.close : t.offer.details}
      </button>
    </div>
  );
}

export function Offer() {
  const { t } = useLanguage();

  return (
    <section id="offer" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {t.offer.title}
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:items-start">
        <OfferCard
          badge={t.offer.automation.badge}
          title={t.offer.automation.title}
          intro={t.offer.automation.intro}
          step1={t.offer.automation.step1}
          step2={t.offer.automation.step2}
        />
        <OfferCard
          badge={t.offer.training.badge}
          title={t.offer.training.title}
          intro={t.offer.training.intro}
          step1={t.offer.training.step1}
          step2={t.offer.training.step2}
        />
      </div>
    </section>
  );
}
