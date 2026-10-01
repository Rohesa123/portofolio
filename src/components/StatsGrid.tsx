import { statFields } from "../data/profile";
import { useGithub, formatRelative } from "../github/githubContext";
import { useLang } from "../i18n/languageContext";

export default function StatsGrid() {
  const { snapshot, status } = useGithub();
  const { t } = useLang();

  const rel = formatRelative(snapshot.fetchedAt, t.rel);
  const statusMeta = {
    live: { mark: "bg-brass", text: "text-ash", label: t.stats.live },
    cached: { mark: "bg-alert", text: "text-alert", label: t.stats.cached(rel) },
    loading: { mark: "bg-ash animate-pulse", text: "text-ash", label: t.stats.loading },
    static: { mark: "bg-ash", text: "text-ash", label: t.stats.static },
  }[status];

  return (
    <section className="mx-auto max-w-5xl px-6" aria-label="GitHub">
      {/* Deret angka dibaca seperti panel instrumen: garis 1px lahir dari gap
          pada latar `rule`, jadi rapi di semua breakpoint. Tiap sel diregangkan
          penuh lalu isinya dipisah atas–bawah, supaya angkanya tetap sebaris
          walau ada label yang pecah jadi dua baris. */}
      <dl className="hairline-grid m-0 grid grid-cols-2 border border-rule sm:grid-cols-4">
        {statFields.map((f) => (
          <div key={f.key} className="flex h-full flex-col justify-between gap-3 bg-ink px-5 py-6">
            <dt className="spec-label">{t.stats[f.labelKey]}</dt>
            <dd
              className={`nameplate m-0 text-[2rem] leading-none text-bone tabular-nums ${
                status === "loading" ? "opacity-50" : ""
              }`}
            >
              {snapshot[f.key]}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-3 flex items-center gap-2 font-mono text-[0.6875rem] text-ash">
        <span className={`h-1.5 w-1.5 shrink-0 ${statusMeta.mark}`} aria-hidden />
        <span className={statusMeta.text}>{statusMeta.label}</span>
      </p>
    </section>
  );
}
