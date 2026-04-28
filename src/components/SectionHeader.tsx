export const SectionHeader = ({  title, description }: { title: string; description?: string }) => (
  <div className="max-w-2xl mb-14">
    
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
    {description && <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>}
  </div>
);
