import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { generateResumePDF } from "@/lib/resume";

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-start pt-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-4 py-1.5 text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-muted-foreground">Available for Senior Roles</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            <span className="text-gradient">Android, iOS, Flutter</span>
            <br />
            <span className="text-foreground">& Ktor backends.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
            I'm <span className="text-foreground font-medium">Md Fazle Rabbi</span>, Senior Mobile Software Engineer specializing in cross-platform systems, native Android, and Ktor-driven backend integrations.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Button size="lg" className="gap-2 group" asChild>
              <Link to="/projects">
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={generateResumePDF}>
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/srabbijan" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/srabbijan" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:srabbijan@gmail.com" className="hover:text-foreground transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            { value: "6+", label: "Years mobile + backend" },
            { value: "1M+", label: "App installs shipped" },
            { value: "99.99%", label: "Crash-free sessions" },
            { value: "1M", label: "Ktor req/day served" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
