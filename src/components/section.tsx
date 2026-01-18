type SectionProps = {
  title: string;
  items: string[];
};

export function Section({ title, items }: SectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black">{title}</h2>
      <ul className="space-y-2 list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="text-base text-black/80">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
