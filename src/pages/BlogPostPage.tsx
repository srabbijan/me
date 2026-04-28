import { Link, useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { posts } from "@/data/posts";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <section className="py-32">
          <div className="container max-w-2xl text-center">
            <h1 className="text-3xl font-bold mb-4">Post not found</h1>
            <Button asChild variant="outline">
              <Link to="/blog">Back to blog</Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>
          <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-5">
            <span className="text-accent">{post.tag}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{post.excerpt}</p>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPostPage;
