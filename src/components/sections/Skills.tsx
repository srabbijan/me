import { SectionHeader } from "../SectionHeader";

const skillGroups = [
  {
    category: "Android",
    skills: ["Kotlin", "Jetpack Compose", "Coroutines", "Flow", "Hilt", "Room", "WorkManager", "Retrofit"],
  },
  {
    category: "iOS",
    skills: ["Swift", "SwiftUI", "Combine", "async/await", "Core Data", "XCTest", "SwiftPM"],
  },
  {
    category: "Ktor / Backend",
    skills: ["Ktor", "Kotlin", "Coroutines", "Exposed", "Koin", "kotlinx.serialization", "WebSockets", "gRPC"],
  },
  {
    category: "Kotlin Multiplatform",
    skills: ["KMP", "Compose Multiplatform", "SQLDelight", "Ktor Client", "Kermit", "Touchlab tooling"],
  },
  {
    category: "Data & Infra",
    skills: ["PostgreSQL", "Redis", "Kafka", "Firebase", "S3", "OpenTelemetry"],
  },
  {
    category: "DevOps & Release",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Fastlane", "Gradle", "Play Console", "App Store Connect"],
  },
];

export const Skills = () => (
  <section id="skills" className="py-28 md:py-36 bg-surface/50 border-y border-border">
    <div className="container">
      <SectionHeader
        eyebrow="Stack"
        title="Tools I reach for."
        description="Kotlin-first across mobile and backend, Swift on the iOS side. Pragmatic about everything else."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div key={group.category} className="rounded-xl border border-border bg-card p-6 hover-lift">
            <div className="flex items-baseline justify-between mb-5">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <span className="text-xs font-mono text-muted-foreground">{group.skills.length}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
