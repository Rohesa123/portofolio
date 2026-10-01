import { useLang } from "../i18n/languageContext";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  const { t } = useLang();

  return (
    <section id="tentang" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-24 md:scroll-mt-20">
      <SectionTitle kicker={t.about.kicker} title={t.about.title} />

      <div className="grid gap-x-14 gap-y-8 md:grid-cols-[1fr_1fr]">
        <p className="m-0 text-lg leading-relaxed text-bone">{t.about.intro}</p>
        <p className="m-0 text-[0.9375rem] leading-relaxed text-ash">{t.about.bio}</p>
      </div>

      {/* Daftar istilah — pasangan judul/keterangan, bukan kartu berjejer. */}
      <dl className="m-0 mt-14">
        {t.about.points.map((p) => (
          <div
            key={p.title}
            className="grid gap-x-10 gap-y-2 border-t border-rule py-6 md:grid-cols-[minmax(0,14rem)_1fr]"
          >
            <dt className="heading text-base text-bone">{p.title}</dt>
            <dd className="m-0 max-w-2xl text-[0.9375rem] leading-relaxed text-ash">
              {p.body}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
