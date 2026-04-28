import { SectionHeader } from "../SectionHeader";
import { Layers, Database, Zap, Shield } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "Mobile architecture",
    desc: "Unidirectional data flow, single-activity Compose, MVI on Android and TCA-style state on iOS. Boring, predictable, testable.",
    tags: ["Compose", "SwiftUI", "MVI", "TCA"],
  },
  {
    icon: Database,
    title: "Offline-first sync",
    desc: "Local-first storage with conflict-free merge protocols over Ktor. The network is treated as an optimization, not a dependency.",
    tags: ["Room", "SQLDelight", "Core Data", "WorkManager"],
  },
  {
    icon: Zap,
    title: "Ktor at scale",
    desc: "Coroutine-driven Ktor services with structured concurrency, connection pooling, and backpressure on the mobile-facing edges.",
    tags: ["Ktor", "Coroutines", "Exposed", "WebSockets"],
  },
  {
    icon: Shield,
    title: "Mobile reliability",
    desc: "Crash-free SLOs, client-side tracing, and feature flags wired into release trains. Observability extends to the device.",
    tags: ["OpenTelemetry", "Sentry", "Feature flags"],
  },
];

export const Architecture = () => (
  <section className="py-28 md:py-8">
    <div className="container">
      <SectionHeader
        title="System design principles "
        description="The patterns I lean on when designing apps and the Ktor services behind them."
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
