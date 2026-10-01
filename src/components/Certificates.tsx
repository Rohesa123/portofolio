import { certificates } from "../data/profile";
import { useLang } from "../i18n/languageContext";
import SectionTitle from "./SectionTitle";

export default function Certificates() {
  const { t } = useLang();

  return (
    <section id="sertifikat" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-24 md:scroll-mt-20">
      <SectionTitle kicker={t.certs.kicker} title={t.certs.title} />

      <ul className="m-0 list-none p-0">
        {certificates.map((c) => (
          <li key={c.url} className="border-b border-rule">
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline gap-5 py-5 transition-colors hover:text-brass"
            >
              <span className="text-[0.9375rem] leading-snug text-bone transition-colors group-hover:text-brass">
                {c.title}
              </span>
              <span className="ml-auto shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ash">
                {c.issuer}
              </span>
              <span
                className="shrink-0 font-mono text-[0.6875rem] text-ash transition-transform group-hover:translate-x-1 group-hover:text-brass"
                aria-hidden
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
