import { SectionHeader } from "../SectionHeader";
import { Layers, Database, Zap, Shield } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "Service decomposition",
    desc: "Right-size service boundaries around data ownership and change velocity — not org charts.",
    tags: ["Microservices", "DDD", "Event sourcing"],
  },
  {
    icon: Database,
    title: "Data & caching strategy",
    desc: "Multi-tier caching (CDN → Redis → DB) with invalidation protocols and read-through semantics.",
    tags: ["Redis", "CDN", "Read replicas"],
  },
  {
    icon: Zap,
    title: "Performance & scale",
    desc: "Horizontal scaling, connection pooling, async pipelines. Measure first, optimize second.",
    tags: ["Kafka", "Load shedding", "Backpressure"],
  },
  {
    icon: Shield,
    title: "Reliability & observability",
    desc: "SLOs, error budgets, distributed tracing. If you can't see it in production, it doesn't exist.",
    tags: ["OpenTelemetry", "SLOs", "Chaos eng"],
  },
];

export const Architecture = () => (
  <section className="py-28 md:py-36">
    <div className="container">
      <SectionHeader
        eyebrow="System design"
        title="How I think about scale."
        description="The patterns and principles I lean on when designing systems that will outlive their first author."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((p) => (
          <div
            key={p.title}
            className="group relative rounded-2xl border border-border bg-card p-8 hover-lift overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-accent opacity-0 group-hover:opacity-10 blur-3xl transition-opacity" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
