import { SectionHeader } from "../SectionHeader";

const experience = [
  {
    role: "Senior Mobile Platform Engineer",
    company: "Revolut",
    period: "2022 — Present",
    location: "Remote",
    achievements: [
      "Lead architect for the Android app (8M+ MAU) — migrated legacy Java modules to Jetpack Compose + Coroutines, reducing cold start by 41%.",
      "Built a shared Kotlin Multiplatform networking + persistence layer powering both Android and iOS, eliminating 18k LOC of duplication.",
      "Designed a Ktor-based BFF service handling 220M req/day with p99 < 90ms.",
    ],
  },
  {
    role: "Senior iOS / Backend Engineer",
    company: "Bolt",
    period: "2019 — 2022",
    location: "Tallinn, Estonia",
    achievements: [
      "Owned the driver iOS app (SwiftUI + Combine) and its Ktor backend, shipping a real-time location pipeline on Kafka.",
      "Improved crash-free sessions from 99.2% → 99.94% via a structured-concurrency refactor.",
      "Tech lead for a 5-person mobile team across Android and iOS surfaces.",
    ],
  },
  {
    role: "Android Engineer",
    company: "N26",
    period: "2016 — 2019",
    location: "Berlin, Germany",
    achievements: [
      "Built the biometric onboarding flow used by 4M+ customers; led the migration to a single-activity Compose architecture.",
      "Implemented offline-first transaction sync with Room + WorkManager, reducing API load by 38%.",
    ],
  },
  {
    role: "Mobile & Full Stack Engineer",
    company: "Early-stage startups",
    period: "2014 — 2016",
    location: "Berlin / Remote",
    achievements: [
      "Shipped MVPs across fintech and healthtech — Android first, iOS soon after, Kotlin on the backend.",
      "Learned the hard lessons: instrumentation isn't optional, and migrations live forever.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="py-28 md:py-36">
    <div className="container">
      <SectionHeader eyebrow="Experience" title="A decade of shipping mobile." />
      <div className="relative max-w-4xl">
        <div className="absolute left-0 md:left-[180px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-14">
          {experience.map((job, i) => (
            <div key={i} className="relative pl-8 md:pl-[220px]">
              <div className="absolute left-0 md:left-[174px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="md:absolute md:left-0 md:top-0 md:w-[160px] text-sm font-mono text-muted-foreground mb-2 md:mb-0">
                {job.period}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <div className="text-accent font-medium mb-1">{job.company}</div>
                <div className="text-xs text-muted-foreground mb-4">{job.location}</div>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  {job.achievements.map((a, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-accent mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
