type SectionProps = {
  number: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ number, title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-baseline gap-6">
        <span className="text-xs text-[#525252] font-mono">{number}</span>
        <h2 className="text-2xl font-semibold text-black">{title}</h2>
      </div>
      <div className="pl-14">
        <p className="text-base text-black max-w-xl">
          {children}
        </p>
      </div>
    </section>
  );
}
