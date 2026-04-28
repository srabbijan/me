import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const projects = [
  {
    title: "Halo — Offline-first KMP Banking SDK",
    description: "Kotlin Multiplatform module shared across Android, iOS, and a Ktor server. Handles auth, sync, and encrypted local storage with a single source of truth.",
    stack: ["Kotlin", "KMP", "SQLDelight", "Ktor Client", "Swift Interop"],
    challenges: "Achieving 95% code reuse while keeping platform-idiomatic APIs for SwiftUI and Compose.",
    impact: "1 codebase · Android + iOS + JVM · 95% shared",
    featured: true,
  },
  {
    title: "Pulse — Ktor Real-time Backend",
    description: "Ktor service with WebSocket fan-out for 500K concurrent mobile clients, backed by Redis pub/sub and a Postgres event log.",
    stack: ["Ktor", "Coroutines", "Redis", "PostgreSQL", "Kubernetes"],
    challenges: "Backpressure and reconnect storms on flaky mobile networks.",
    impact: "500K concurrent · p99 < 90ms · 99.99% uptime",
  },
  {
    title: "Compass — SwiftUI Driver App",
    description: "iOS driver app with offline-capable navigation, background location, and a Combine-based reactive state pipeline.",
    stack: ["Swift", "SwiftUI", "Combine", "Core Data", "MapKit"],
    challenges: "Sustained background tracking under iOS energy budgets without battery regressions.",
    impact: "Crash-free sessions: 99.2% → 99.94%",
  },
  {
    title: "Forge — Compose Design System",
    description: "Internal Jetpack Compose design system with tokens, motion specs, and a Storybook-style preview gallery.",
    stack: ["Kotlin", "Compose", "Material 3", "Paparazzi"],
    challenges: "Driving adoption across 6 product squads while supporting legacy XML screens.",
    impact: "Adopted by 80+ Android engineers across 12 apps",
  },
];

export const Projects = () => (
  <section id="projects" className="py-28 md:py-36 bg-surface/50 border-y border-border">
    <div className="container">
      <SectionHeader
        eyebrow="Selected work"
        title="Production apps, not demos."
        description="A few mobile and Ktor systems I've built or led — real users, real on-call, real scale."
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
