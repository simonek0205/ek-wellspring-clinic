export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="bg-navy text-cream py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {eyebrow && (
          <p className="uppercase tracking-[0.3em] text-xs text-cream/60 mb-4">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl md:text-6xl text-cream">{title}</h1>
        {lead && (
          <p className="mt-6 text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">{lead}</p>
        )}
      </div>
    </section>
  );
}
