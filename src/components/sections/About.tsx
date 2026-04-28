import { SectionHeader } from "../SectionHeader";
import { Smartphone, Server, Layers, Workflow } from "lucide-react";

const pillars = [
  { icon: Smartphone, title: "Native Android", desc: "Android (Kotlin, Compose) — MVVM, Clean Architecture, Coroutines, Flow, Compose." },
  { icon: Layers, title: "Cross-Platform", desc: "KMP / Flutter - Sharing networking, persistence, and domain logic across Android, iOS, and JVM." },
  { icon: Server, title: "Backend / APIs", desc: "REST APIs, websockets, robust networking layers." },
  { icon: Workflow, title: "Architecture", desc: "System Design - Offline-first sync, modularization, CI/CD pipelines." },
];

export const About = () => (
  <section id="about" className="pt-16 md:pt-8 pb-20 md:pb-24">
    <div className="container">
      <SectionHeader title="About Me" />
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>With over 6 years of experience building mission-critical mobile applications, I focus on clean architecture, performance optimization, and scalable system thinking.          </p>
          <p>
            My expertise spans native <span className="text-foreground">Android</span> development using Kotlin, cross-platform engineering with <span className="text-foreground">Flutter</span> and <span className="text-foreground">KMP</span>, and building robust networking layers via <span className="text-foreground">Ktor</span>.
          </p>
          <p>
            On the server side I lean on Ktor and Coroutines — small, composable services that pair naturally with the mobile clients consuming them.
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
