import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { SectionHeader } from "../SectionHeader";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success("Message received. I'll reply within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something."
          description="Open to senior engineering roles, technical advising, and interesting distributed-systems problems."
        />
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <a
              href="mailto:alex@example.com"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover-lift group"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium group-hover:text-accent transition-colors">alex@example.com</div>
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover-lift group"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="font-medium group-hover:text-accent transition-colors">linkedin.com/in/alexchen</div>
              </div>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover-lift group"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="font-medium group-hover:text-accent transition-colors">github.com/alexchen</div>
              </div>
            </a>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="jane@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" required placeholder="Senior engineering role at Acme" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={5} placeholder="Tell me about the problem you're solving..." />
            </div>
            <Button type="submit" size="lg" className="gap-2 w-full sm:w-auto" disabled={loading}>
              <Send className="h-4 w-4" />
              {loading ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
