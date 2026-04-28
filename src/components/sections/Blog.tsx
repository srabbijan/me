import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const posts = [
  {
    title: "Designing idempotency for distributed payment systems",
    date: "Mar 2026",
    readTime: "12 min",
    tag: "Systems",
  },
  {
    title: "The hidden cost of microservices: a 3-year retrospective",
    date: "Jan 2026",
    readTime: "8 min",
    tag: "Architecture",
  },
  {
    title: "Kafka at 500K msg/sec: lessons from the trenches",
    date: "Nov 2025",
    readTime: "15 min",
    tag: "Infrastructure",
  },
];

export const Blog = () => (
  <section className="py-28 md:py-36 bg-surface/50 border-y border-border">
    <div className="container">
      <SectionHeader eyebrow="Writing" title="Engineering notes." description="Occasional essays on systems, architecture, and the craft." />
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <a
            key={post.title}
            href="#"
            className="group rounded-2xl border border-border bg-card p-6 hover-lift flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-4">
                <span className="text-accent">{post.tag}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h3>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-6" />
          </a>
        ))}
      </div>
    </div>
  </section>
);
