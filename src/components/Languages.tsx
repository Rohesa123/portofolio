import { useGithub } from "../github/githubContext";
import { useLang } from "../i18n/languageContext";
import SectionTitle from "./SectionTitle";

// Warna kanonik GitHub linguist. Ini satu-satunya tempat warna masuk halaman,
// karena di sini warna memang membawa data — bukan hiasan.
const langColor: Record<string, string> = {
  Java: "#e76f00",
  Dart: "#00b4ab",
  PHP: "#8993be",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  "C++": "#f34b7d",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Kotlin: "#a97bff",
  Python: "#3572A5",
};

const colorFor = (name: string) => langColor[name] ?? "#8a8d8f";

export default function Languages() {
  const { snapshot } = useGithub();
  const { t } = useLang();
  const langs = snapshot.languages;

  return (
    <section id="bahasa" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-24 md:scroll-mt-20">
      <SectionTitle kicker={t.languages.kicker} title={t.languages.title} />

      <div className="flex h-2 w-full gap-px overflow-hidden bg-rule">
        {langs.map((l) => (
          <div
            key={l.name}
            style={{ width: `${l.pct}%`, backgroundColor: colorFor(l.name) }}
            title={`${l.name} · ${l.pct}%`}
          />
        ))}
      </div>

      <dl className="m-0 mt-8 grid gap-x-14 sm:grid-cols-2">
        {langs.map((l) => (
          <div
            key={l.name}
            className="flex items-baseline gap-3 border-t border-rule py-3"
          >
            <span
              className="h-2 w-2 shrink-0 translate-y-px"
              style={{ backgroundColor: colorFor(l.name) }}
              aria-hidden
            />
            <dt className="text-sm text-bone">{l.name}</dt>
            <dd className="m-0 ml-auto flex items-baseline gap-4 font-mono text-xs tabular-nums">
              <span className="text-ash">{t.languages.repoCount(l.count)}</span>
              <span className="w-9 text-right text-bone">{l.pct}%</span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 max-w-lg text-xs leading-relaxed text-ash">
        {t.languages.note}
      </p>
    </section>
  );
}
