type Props = {
  kicker: string;
  title: string;
};

export default function SectionTitle({ kicker, title }: Props) {
  return (
    <div className="mb-10 border-b border-rule pb-6">
      <p className="spec-label flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 shrink-0 bg-brass" aria-hidden />
        {kicker}
      </p>
      <h2 className="heading mt-4 max-w-2xl text-[1.75rem] leading-[1.15] text-bone sm:text-[2.25rem]">
        {title}
      </h2>
    </div>
  );
}
