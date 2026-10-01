import { profile } from "../data/profile";
import { useLang } from "../i18n/languageContext";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="heading m-0 text-base text-bone">{profile.name}</p>
          <p className="m-0 mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ash">
            {profile.role}
          </p>
        </div>

        <SocialLinks />
      </div>

      <div className="mx-auto max-w-5xl border-t border-rule px-6 py-5">
        <p className="m-0 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ash">
          © {profile.joinedYear}–2026 {profile.username} · {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
