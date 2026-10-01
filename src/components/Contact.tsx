import { useState, type FormEvent } from "react";
import { profile, company, WEB3FORMS_ACCESS_KEY } from "../data/profile";
import { useLang } from "../i18n/languageContext";
import SectionTitle from "./SectionTitle";
import SocialLinks from "./SocialLinks";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const sendViaMailto = (name: string, email: string, message: string) => {
    const subject = encodeURIComponent(`Pesan dari ${name} (via web profil)`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) return;

    if (!WEB3FORMS_ACCESS_KEY) {
      sendViaMailto(name, email, message);
      form.reset();
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Pesan dari ${name} (web profil)`,
          from_name: name,
          name,
          email,
          message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(json.message || "error");
      }
    } catch (err) {
      setError((err as Error).message);
      setStatus("error");
    }
  };

  // Input bergaris bawah saja — seperti isian pada formulir cetak.
  const fieldCls =
    "w-full border-0 border-b border-rule bg-transparent px-0 py-2.5 text-[0.9375rem] text-bone outline-none transition-colors placeholder:text-ash/50 focus:border-brass";

  return (
    <section id="kontak" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-24 md:scroll-mt-20">
      <SectionTitle kicker={t.contact.kicker} title={t.contact.title} />

      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-14">
        {/* kiri: keterangan */}
        <div>
          <p className="m-0 max-w-md text-[0.9375rem] leading-relaxed text-ash">
            {t.contact.intro}
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-7 flex items-baseline gap-3 border-b border-rule pb-3 font-mono text-sm text-bone transition-colors hover:border-brass hover:text-brass"
          >
            {profile.email}
          </a>

          <a
            href={company.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 block border border-rule bg-panel p-5 transition-colors hover:border-brass/50"
          >
            <p className="spec-label m-0">{t.contact.currentlyAt}</p>
            <p className="heading m-0 mt-3 text-base text-bone">{company.name}</p>
            <p className="m-0 mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-brass">
              {company.role}
            </p>
            <p className="m-0 mt-3 text-[0.875rem] leading-relaxed text-ash">
              {t.contact.companyDesc}
            </p>
          </a>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        {/* kanan: formulir */}
        <form onSubmit={handleSubmit} className="border border-rule bg-panel p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="spec-label mb-2 block">
                {t.contact.namePlaceholder}
              </label>
              <input id="contact-name" name="name" required className={fieldCls} />
            </div>
            <div>
              <label htmlFor="contact-email" className="spec-label mb-2 block">
                {t.contact.emailPlaceholder}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className={fieldCls}
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="contact-message" className="spec-label mb-2 block">
              {t.contact.messagePlaceholder}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              className={`${fieldCls} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-8 w-full bg-bone px-6 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink transition-opacity hover:opacity-85 disabled:opacity-50"
          >
            {status === "sending" ? t.contact.sending : t.contact.send}
          </button>

          <p className="m-0 mt-4 min-h-5 text-[0.8125rem] text-ash" aria-live="polite">
            {status === "success" &&
              (WEB3FORMS_ACCESS_KEY ? t.contact.successSent : t.contact.successMailto)}
            {status === "error" && (
              <span className="text-alert">
                {t.contact.errorPrefix} ({error}).{" "}
                <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
                  {t.contact.emailDirect}
                </a>
                .
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
