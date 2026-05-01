import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const projects = [
  {
    title: "Offline-first Event Mapping SDK",
    description: "Android library for event mapping and analytics. Features an offline-capable architecture with local batching and retry logic.",
    stack: ["Kotlin", "Coroutines", "Room", "WorkManager"],
    challenges: "Ensuring reliable event delivery under varying network conditions while minimizing battery impact.",
    impact: "38% reduction in API load · 99.5% event delivery success rate",
    featured: true,
  },
  {
    title: "KMP DateTime Picker Library",
    description: "A Kotlin Multiplatform library providing a consistent date and time picker UI across Android and iOS, with shared business logic and platform-specific UI implementations.",
    stack: ["Kotlin Multiplatform", "Jetpack Compose"],
    challenges: "Achieving 95% code reuse across platforms while adhering to native design guidelines and ensuring smooth performance.",
    impact: "95% code reuse across Android and iOS · Adopted by 10+ production apps",
  },
  {
    title: "Due Book App",
    description: "A personal project — a mobile app for tracking bills and subscriptions. Features include bill reminders, subscription management, and spending insights.",
    stack: ["Kotlin", "Kotlin Multiplatform", "Ktor", "Exposed", "PostgreSQL"],
    challenges: "Building a full-stack KMP app with a Ktor backend, implementing offline-first features, and ensuring data consistency across platforms.",
    impact: "Built a full-stack KMP app with a Ktor backend · Implemented offline-first features with Room and WorkManager",
  },
];

export const Projects = () => (
  <section id="projects" className="py-28 md:py-8 bg-surface/50 border-y border-border">
    <div className="container">
      <SectionHeader
        title="Selected work"
        description="A few mobile and Ktor systems I've built."
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
