import { SectionHeader } from "../SectionHeader";

const experience = [
  {
    role: "Senior Staff Software Engineer",
    company: "Stripe",
    period: "2022 — Present",
    location: "Remote",
    achievements: [
      "Lead architect for a global payments orchestration platform processing $2B+ in annual transactions across 40+ countries.",
      "Reduced p99 API latency by 63% through a multi-region caching layer and query optimization.",
      "Mentor 8 engineers across 3 teams; run weekly system design reviews.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Airbnb",
    period: "2019 — 2022",
    location: "San Francisco, CA",
    achievements: [
      "Owned the pricing intelligence service (Kotlin / Kafka) serving 150M+ requests daily with 99.99% uptime.",
      "Migrated legacy monolith to event-driven microservices, cutting deploy time from 45min to 4min.",
      "Tech lead for a 6-person team shipping host onboarding redesign used by 4M+ hosts.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Uber",
    period: "2016 — 2019",
    location: "San Francisco, CA",
    achievements: [
      "Built real-time dispatch matching service in Go, improving trip ETA accuracy by 22%.",
      "Designed the driver earnings pipeline on Kafka + Flink processing 20M events/hour.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Early-stage startups",
    period: "2014 — 2016",
    location: "New York, NY",
    achievements: [
      "Shipped MVPs across fintech and healthtech, from schema to production deployment.",
      "Learned the hard lessons: observability isn't optional, and migrations are forever.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="py-28 md:py-36">
    <div className="container">
      <SectionHeader eyebrow="Experience" title="A decade of shipping." />
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
