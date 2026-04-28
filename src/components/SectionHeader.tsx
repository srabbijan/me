export const SectionHeader = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => (
  <div className="max-w-2xl mb-14">
    <div className="flex items-center gap-2 mb-4">
      <div className="h-px w-8 bg-accent" />
      <span className="text-sm font-mono text-accent uppercase tracking-wider">{eyebrow}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
    {description && <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>}
  </div>
);
