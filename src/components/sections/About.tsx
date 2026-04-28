import { SectionHeader } from "../SectionHeader";
import { Code2, Cloud, GitBranch, Users } from "lucide-react";

const pillars = [
  { icon: Code2, title: "System Design", desc: "Architecting distributed systems that handle millions of requests with sub-50ms latency." },
  { icon: Cloud, title: "Cloud Native", desc: "Deep expertise in AWS, Kubernetes, and event-driven architectures at scale." },
  { icon: GitBranch, title: "Engineering Excellence", desc: "Championing code quality, observability, and zero-downtime deployments." },
  { icon: Users, title: "Technical Leadership", desc: "Mentoring engineers, running design reviews, and shaping product direction." },
];

export const About = () => (
  <section id="about" className="py-28 md:py-36">
    <div className="container">
      <SectionHeader eyebrow="About" title="Engineering with intent." />
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I've spent the last decade building software that matters — from real-time trading platforms processing billions in transactions, to consumer apps serving tens of millions of daily users.
          </p>
          <p>
            My focus is on the unglamorous problems that define production systems: <span className="text-foreground">reliability, observability, and the subtle tradeoffs</span> between consistency, availability, and cost.
          </p>
          <p>
            I believe great engineering is less about new frameworks and more about understanding failure modes, data flow, and the humans operating the system at 3am.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="group rounded-xl border border-border bg-card p-6 hover-lift">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
