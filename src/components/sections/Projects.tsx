import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const projects = [
  {
    title: "Orbit — Distributed Payments Engine",
    description: "Multi-region, eventually consistent payments orchestration platform with pluggable rails and idempotent retry semantics.",
    stack: ["Go", "PostgreSQL", "Kafka", "Kubernetes", "Terraform"],
    challenges: "Achieving exactly-once semantics across 4 regions with cross-region failover under 30s.",
    impact: "Processes $2B+ annually · p99 < 80ms · 99.995% uptime",
    featured: true,
  },
  {
    title: "Pulse — Real-time Analytics Platform",
    description: "Event ingestion and OLAP query engine for product telemetry, handling 500K events/sec with sub-second dashboards.",
    stack: ["Rust", "ClickHouse", "Kafka", "React", "TypeScript"],
    challenges: "Sharding strategy for high-cardinality time-series data with 30-day retention at petabyte scale.",
    impact: "500K events/sec · 50ms query latency · 3 PB under management",
  },
  {
    title: "Kontext — AI Code Review Bot",
    description: "GitHub App that uses LLMs + static analysis to deliver context-aware code reviews with cited references.",
    stack: ["Next.js", "OpenAI", "tRPC", "Postgres", "Vercel"],
    challenges: "Keeping LLM costs predictable while preserving review quality across polyglot codebases.",
    impact: "12K+ repos · 80% reviewer acceptance rate",
  },
  {
    title: "Mesh — Internal Developer Platform",
    description: "Self-service infrastructure platform with golden paths for service creation, deployment, and observability.",
    stack: ["Kotlin", "Kubernetes", "ArgoCD", "Backstage"],
    challenges: "Balancing developer autonomy with safe defaults and org-wide compliance.",
    impact: "Service bootstrap: 2 weeks → 15 minutes across 80+ engineers",
  },
];

export const Projects = () => (
  <section id="projects" className="py-28 md:py-36 bg-surface/50 border-y border-border">
    <div className="container">
      <SectionHeader
        eyebrow="Selected work"
        title="Production systems, not demos."
        description="A look at a few things I've built or led. Real users, real on-call, real scale."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`group relative rounded-2xl border border-border bg-card p-8 hover-lift ${p.featured ? "md:col-span-2" : ""}`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                {p.featured && (
                  <span className="inline-block text-xs font-mono text-accent uppercase tracking-wider mb-2">Featured</span>
                )}
                <h3 className="text-2xl font-semibold tracking-tight mb-2">{p.title}</h3>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Live demo" className="hover:text-foreground transition-colors">
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">{p.description}</p>

            <div className="space-y-3 text-sm mb-6">
              <div>
                <span className="text-foreground font-medium">Challenge · </span>
                <span className="text-muted-foreground">{p.challenges}</span>
              </div>
              <div>
                <span className="text-foreground font-medium">Impact · </span>
                <span className="text-accent font-mono">{p.impact}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
