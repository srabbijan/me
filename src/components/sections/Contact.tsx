import { FormEvent, useState } from "react";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { SectionHeader } from "../SectionHeader";

const EMAIL_ADDRESS = "srabbijan@gmail.com";
const WHATSAPP_NUMBER = "+8801711348262";
const WHATSAPP_MESSAGE = "Hello!%20I'd%20like%20to%20connect%20about%20a%20project.";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please complete all fields before sending.");
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setLoading(true);
    window.location.href = mailtoLink;

    setTimeout(() => {
      setLoading(false);
      toast.success("Your email composer should now be open.");
      form.reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-8">
      <div className="container">
        <SectionHeader
        
          title="Let's build something."
          description="Open to senior engineering roles, technical advising, and interesting distributed-systems problems."
        />
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover-lift group"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium group-hover:text-accent transition-colors">{EMAIL_ADDRESS}</div>
              </div>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover-lift group"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-medium group-hover:text-accent transition-colors">Message on WhatsApp</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/srabbijan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover-lift group"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="font-medium group-hover:text-accent transition-colors">linkedin.com/in/srabbijan</div>
              </div>
            </a>
            <a
              href="https://github.com/srabbijan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover-lift group"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="font-medium group-hover:text-accent transition-colors">github.com/srabbijan</div>
              </div>
            </a>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required placeholder="Senior engineering role at Acme" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Tell me about the problem you're solving..." />
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
