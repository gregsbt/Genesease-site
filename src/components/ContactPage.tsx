import { useState, type FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import { WEB3FORMS_ACCESS_KEY } from "../config";

type Status = "idle" | "sending" | "success" | "error";

export function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(t.contactPage.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — silently ignore
    }
  }

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function sendViaMailto() {
    const subject = encodeURIComponent(
      `${t.contactPage.title} — ${form.firstName} ${form.lastName}`.trim()
    );
    const body = encodeURIComponent(
      [
        `${t.contactPage.fields.lastName}: ${form.lastName}`,
        `${t.contactPage.fields.firstName}: ${form.firstName}`,
        `${t.contactPage.fields.phone}: ${form.phone}`,
        `${t.contactPage.fields.email}: ${form.email}`,
        "",
        form.message,
      ].join("\n")
    );
    window.location.href = `mailto:${t.contactPage.email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // No access key configured yet — fall back to opening the visitor's
    // own mail app, pre-filled, rather than silently failing.
    if (!WEB3FORMS_ACCESS_KEY) {
      sendViaMailto();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${t.contactPage.title} — ${form.firstName} ${form.lastName}`.trim(),
          name: `${form.firstName} ${form.lastName}`.trim(),
          [t.contactPage.fields.lastName]: form.lastName,
          [t.contactPage.fields.firstName]: form.firstName,
          [t.contactPage.fields.phone]: form.phone,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ lastName: "", firstName: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand-purple";
  const labelClass = "mb-1.5 block text-sm font-medium text-ink";

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <a href="#top" className="text-sm text-body hover:text-ink transition-colors">
        ← {t.contactPage.back}
      </a>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {t.contactPage.title}
      </h1>

      <div className="mt-6 rounded-2xl border border-border bg-brand-blue-soft px-6 py-5">
        <p className="text-sm text-body">{t.contactPage.intro}</p>
        <div className="mt-1 flex items-center gap-2">
          <a
            href={`mailto:${t.contactPage.email}`}
            className="text-lg font-semibold brand-gradient-text"
          >
            {t.contactPage.email}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="relative rounded-lg p-1.5 text-body/70 transition-colors hover:bg-white hover:text-brand-purple"
            aria-label={t.contactPage.copy}
            title={t.contactPage.copy}
          >
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="7" y="7" width="10" height="10" rx="2" />
                <path d="M13 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs text-white">
                {t.contactPage.copied}
              </span>
            )}
          </button>
        </div>
      </div>

      <h2 className="mt-10 text-lg font-semibold text-ink">{t.contactPage.formTitle}</h2>

      <form onSubmit={handleSubmit} className="mt-5 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="lastName">
              {t.contactPage.fields.lastName}
            </label>
            <input
              id="lastName"
              type="text"
              required
              value={form.lastName}
              onChange={update("lastName")}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="firstName">
              {t.contactPage.fields.firstName}
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={update("firstName")}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">
              {t.contactPage.fields.phone}
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              {t.contactPage.fields.email}
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="message">
            {t.contactPage.fields.message}
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={update("message")}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col items-end gap-3">
          {status === "success" && (
            <p className="text-sm font-medium text-brand-purple">{t.contactPage.success}</p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600">{t.contactPage.error}</p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full brand-gradient px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "sending" ? t.contactPage.sending : t.contactPage.submit}
          </button>
        </div>
      </form>
    </section>
  );
}
