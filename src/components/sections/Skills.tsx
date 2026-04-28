import { SectionHeader } from "../SectionHeader";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "React Query", "Vite"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Go", "Java / Spring", ".NET Core", "GraphQL", "gRPC", "REST APIs"],
  },
  {
    category: "Mobile",
    skills: ["Kotlin / KMP", "Swift", "React Native", "Android SDK"],
  },
  {
    category: "Data & Infra",
    skills: ["PostgreSQL", "Redis", "Kafka", "Elasticsearch", "DynamoDB", "ClickHouse"],
  },
  {
    category: "Cloud",
    skills: ["AWS", "GCP", "Azure", "Cloudflare", "Terraform", "Pulumi"],
  },
  {
    category: "DevOps",
    skills: ["Kubernetes", "Docker", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana"],
  },
];

export const Skills = () => (
  <section id="skills" className="py-28 md:py-36 bg-surface/50 border-y border-border">
    <div className="container">
      <SectionHeader
        eyebrow="Stack"
        title="Tools I reach for."
        description="Polyglot by necessity, pragmatic by choice. I pick the right tool for the job — not the newest one on Hacker News."
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
