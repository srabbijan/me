import { SectionHeader } from "../SectionHeader";
import { Smartphone, Server, Layers, Users } from "lucide-react";

const pillars = [
  { icon: Smartphone, title: "Native Mobile", desc: "Production Android (Kotlin, Compose) and iOS (Swift, SwiftUI) — offline-first, type-safe, testable." },
  { icon: Server, title: "Ktor Backends", desc: "High-throughput JVM services with Ktor, Coroutines, and Exposed. p99 latencies under 100ms at scale." },
  { icon: Layers, title: "Kotlin Multiplatform", desc: "Sharing networking, persistence, and domain logic across Android, iOS, and JVM with KMP." },
  { icon: Users, title: "Mobile Leadership", desc: "Mentoring mobile teams, driving release-train discipline, and owning the on-call rotation." },
];

export const About = () => (
  <section id="about" className="py-28 md:py-36">
    <div className="container">
      <SectionHeader eyebrow="About" title="Mobile-first, full-stack." />
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I've spent the last decade shipping mobile apps and the backends behind them — from real-time fintech to ride-hailing platforms used by tens of millions of riders and drivers daily.
          </p>
          <p>
            My focus is on the unglamorous problems of mobile engineering: <span className="text-foreground">cold-start performance, battery cost, flaky networks, and shared business logic</span> across Android and iOS.
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
