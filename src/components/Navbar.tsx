import { profile } from "../data/profile";
import { useLang } from "../i18n/languageContext";
import { useTheme } from "../theme/themeContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { label: t.nav.about, href: "#tentang" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#proyek" },
    { label: t.nav.certificates, href: "#sertifikat" },
    { label: t.nav.contact, href: "#kontak" },
  ];

  // Kontrol ikon & tombol kecil pakai bentuk yang sama supaya barisnya rata.
  const iconButton =
    "grid h-8 w-8 place-items-center border border-rule text-ash transition-colors hover:border-brass/60 hover:text-bone";

  const sectionLink =
    "shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ash transition-colors hover:text-bone";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-ink">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm text-bone transition-colors hover:text-brass"
        >
          <span className="h-2 w-2 bg-brass" aria-hidden />
          <span className="heading">Rohesa</span>
        </a>

        <div className="flex items-center gap-1.5">
          <div className="mr-1 hidden items-center gap-5 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className={sectionLink}>
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleLang}
            title={lang === "id" ? "Switch to English" : "Ganti ke Indonesia"}
            className={`${iconButton} font-mono text-[0.6875rem] font-medium tracking-wider`}
          >
            {lang === "id" ? "ID" : "EN"}
          </button>

          <button
            onClick={toggleTheme}
            title={theme === "dark" ? t.ui.toLight : t.ui.toDark}
            aria-label={theme === "dark" ? t.ui.toLight : t.ui.toDark}
            className={iconButton}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <circle cx="12" cy="12" r="4.5" />
                <path
                  d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M5.2 18.8l1.4-1.4M17.4 6.6l1.4-1.4"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-1 border border-rule px-3 py-[0.4375rem] font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-bone transition-colors hover:border-brass/60 hover:text-brass"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Di layar sempit tautan bagian tidak muat di baris utama, jadi diberi
          barisnya sendiri yang bisa digeser — bukan disembunyikan. */}
      <div className="border-t border-rule md:hidden">
        <div className="no-scrollbar mx-auto flex max-w-5xl gap-6 overflow-x-auto px-6 py-2.5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={sectionLink}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
