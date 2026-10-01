import { techStack } from "../data/profile";
import { useLang } from "../i18n/languageContext";
import SectionTitle from "./SectionTitle";

export default function TechStack() {
  const { t, lang } = useLang();

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-24 md:scroll-mt-20">
      <SectionTitle kicker={t.tech.kicker} title={t.tech.title} />

      {/* Tabel spesifikasi — data tabular ditampilkan sebagai tabel. */}
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-rule">
            <th scope="col" className="spec-label py-3 font-normal">
              {t.tech.columns.name}
            </th>
          </tr>
        </thead>
        <tbody>
          {techStack.map((tech) => (
            <tr key={tech.name} className="border-b border-rule align-baseline">
              <th scope="row" className="py-5 pr-6 font-normal">
                <span className="heading block text-base text-bone">{tech.name}</span>
                <span className="mt-1.5 block max-w-xl text-[0.875rem] leading-relaxed text-ash">
                  {tech.description[lang]}
                </span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
