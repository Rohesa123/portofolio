import { featuredProjects, profile } from "../data/profile";
import { useLang } from "../i18n/languageContext";
import SectionTitle from "./SectionTitle";

export default function FeaturedProjects() {
  const { t, lang } = useLang();

  return (
    <section id="proyek" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-24 md:scroll-mt-20">
      <SectionTitle kicker={t.projects.kicker} title={t.projects.title} />

      <div className="grid gap-4">
        {featuredProjects.map((p) => (
          <a
            key={p.name}
            href={`${profile.githubUrl}/${p.name}`}
            target="_blank"
            rel="noreferrer"
            className="group block border border-rule bg-panel p-7 transition-colors hover:border-brass/50 sm:p-9"
          >
            <div className="flex items-center gap-4 border-b border-rule pb-4">
              {p.spec && (
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-brass">
                  {p.spec}
                </span>
              )}
              <span className="ml-auto flex items-center gap-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ash">
                <span>{p.language}</span>
                {p.stars ? <span className="tabular-nums">{p.stars} star</span> : null}
              </span>
            </div>

            <h3 className="nameplate mt-6 text-3xl lowercase text-bone transition-colors group-hover:text-brass">
              {p.name}
            </h3>

            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-ash">
              {p.description[lang]}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="border border-rule px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ash">
                {p.highlight[lang]}
              </span>
              <span
                className="ml-auto font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-bone transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </div>
          </a>
        ))}
      </div>

      <a
        href={`${profile.githubUrl}?tab=repositories`}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block border-b border-rule pb-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ash transition-colors hover:border-brass hover:text-bone"
      >
        {t.projects.viewAll}
      </a>
    </section>
  );
}
