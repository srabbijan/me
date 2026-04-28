import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Link } from "react-router-dom";
import { posts } from "@/data/posts";

export const Blog = () => (
  <section className="py-28 md:py-36 bg-surface/50 border-y border-border">
    <div className="container">
      <SectionHeader eyebrow="Writing" title="Engineering notes." description="Essays on mobile architecture, Ktor, and Kotlin Multiplatform." />
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
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
          </Link>
        ))}
      </div>
    </div>
  </section>
);
