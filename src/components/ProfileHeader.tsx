import { profile } from "../data/profile";
import { useGithub } from "../github/githubContext";
import { useLang } from "../i18n/languageContext";
import SocialLinks from "./SocialLinks";

export default function ProfileHeader() {
  const { snapshot } = useGithub();
  const { t } = useLang();
  const nameLines = snapshot.name.split(" ").filter(Boolean);

  return (
    <header id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-32 md:pt-36">
      <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
        {/* kiri: plat nama */}
        <div>
          <p className="spec-label rise flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 bg-brass" aria-hidden />
            {t.hero.open}
          </p>

          <h1 className="nameplate rise mt-7 text-[2.75rem] uppercase leading-[0.88] text-bone sm:text-[4rem] lg:text-[4.75rem]">
            {nameLines.map((line, i) => (
              <span key={line} className="block" style={{ animationDelay: `${80 + i * 70}ms` }}>
                {line}
              </span>
            ))}
          </h1>

          <p
            className="rise mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-bone"
            style={{ animationDelay: "300ms" }}
          >
            {t.hero.role}
            <span className="h-px w-6 bg-brass" aria-hidden />
            <span className="text-ash">{snapshot.location ?? profile.location}</span>
          </p>

          <p
            className="rise mt-6 max-w-md text-[0.9375rem] leading-relaxed text-ash"
            style={{ animationDelay: "360ms" }}
          >
            {t.hero.tagline}
          </p>

          <ul
            className="rise mt-7 flex list-none flex-wrap gap-2 p-0"
            style={{ animationDelay: "420ms" }}
          >
            {t.hero.badges.map((b) => (
              <li
                key={b}
                className="border border-rule px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ash"
              >
                {b}
              </li>
            ))}
          </ul>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "480ms" }}
          >
            <a
              href="#proyek"
              className="bg-bone px-6 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink transition-opacity hover:opacity-85"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#kontak"
              className="border border-rule px-6 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-bone transition-colors hover:border-brass/60 hover:text-brass"
            >
              {t.hero.contactMe}
            </a>
          </div>

          <div className="rise mt-9" style={{ animationDelay: "540ms" }}>
            <SocialLinks />
          </div>
        </div>

        {/* kanan: potret hitam-putih */}
        <div className="rise flex flex-col gap-3" style={{ animationDelay: "220ms" }}>
          <div className="relative border border-rule bg-panel">
            <img
              src={snapshot.avatar}
              alt={snapshot.name}
              width={640}
              height={800}
              className="aspect-[4/5] w-full object-cover"
              style={{ filter: "var(--photo-filter)" }}
            />
            <span
              className="absolute bottom-0 right-0 bg-ink/85 px-2.5 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ash"
              aria-hidden
            >
              @{profile.username}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
