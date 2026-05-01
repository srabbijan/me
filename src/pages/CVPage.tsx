import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { generateResumePDF } from "@/lib/resume";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-4 pb-3 border-b border-border">
      {title}
    </h2>
    {children}
  </section>
);

const Role = ({
  role,
  company,
  period,
  location,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}) => (
  <div className="mb-8">
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
      <h3 className="text-lg font-semibold">
        {role} <span className="text-accent">· {company}</span>
      </h3>
      <span className="text-sm font-mono text-muted-foreground">{period}</span>
    </div>
    <div className="text-xs text-muted-foreground mb-3">{location}</div>
    <ul className="space-y-2">
      {bullets.map((b, i) => (
        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
          <span className="text-accent mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CVPage = () => (
  <PageLayout>
    <article className="py-20 md:py-8">
      <div className="container max-w-4xl">
        <header className="mb-14 pb-10 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Md Fazle Rabbi</h1>
              <p className="text-lg text-muted-foreground">
                Senior Mobile & Backend Engineer · Android · iOS · Ktor
              </p>
            </div>
            <Button onClick={generateResumePDF} className="gap-2 self-start md:self-auto">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="mailto:srabbijan@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4" /> srabbijan@gmail.com</a>
            <a href="https://github.com/srabbijan" className="inline-flex items-center gap-2 hover:text-foreground"><Github className="h-4 w-4" /> github.com/srabbijan</a>
            <a href="https://linkedin.com/in/srabbijan" className="inline-flex items-center gap-2 hover:text-foreground"><Linkedin className="h-4 w-4" /> linkedin.com/in/srabbijan</a>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> KathalBagan Bazar, Dhaka</span>
          </div>
        </header>

        <Section title="Summary">
          <p className="text-muted-foreground leading-relaxed">
            Senior full-stack mobile engineer with 6+ years building production Android (Kotlin/Compose), iOS (Swift/SwiftUI),
            Cross-platform (KMP,Flutter) and Ktor backend services. Specialized in offline-first architecture, Kotlin Multiplatform shared modules, and
            high-throughput JVM APIs serving millions of mobile clients.
          </p>
        </Section>

        <Section title="Core Stack">
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold mb-2">Mobile</div>
              <p className="text-muted-foreground leading-relaxed">Kotlin · Jetpack Compose · Coroutines · KMP · Flutter · Swift · SwiftUI </p>
            </div>
            <div>
              <div className="font-semibold mb-2">Backend</div>
              <p className="text-muted-foreground leading-relaxed">Ktor · Kotlin · Exposed · PostgreSQL · Redis</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Infra</div>
              <p className="text-muted-foreground leading-relaxed">Docker · Kubernetes · GitHub Actions · AWS · Grafana</p>
            </div>
          </div>
        </Section>

        <Section title="Experience">
          <Role
            role="Senior Mobile Platform Engineer"
            company="Hishabee Technologies Limited"
            period="2023,July — Present"
            location="Panthapath, Dhaka"
            bullets={[
      "App Size Reduced by 50% and Crash Rate Reduced by 3% through performance optimizations and refactoring.",
      "Improved crash-free sessions from 99.2% → 99.9% via a structured-concurrency refactor.",
      "Mentored junior engineers and established best practices for code quality and testing.",
      "Implemented a new onboarding flow that improved user retention by 20% and reduced drop-off rates by 25%.",
            ]}
          />
          <Role
            role="Mobile Application Development"
            company="Red Dot Digital (Contractually)"
            period="2023,January — 2023,June"
            location="Gulshan, Dhaka"
            bullets={[
             "Feature development and maintenance for a client, focusing on Android platforms.",
      "Implemented offline-first transaction sync with Room + WorkManager, reducing API load by 38%.",
      "Collaborated closely with cross-functional teams to deliver high-quality features on time.",
            ]}
          />
          <Role
            role="Flutter Developer"
            company="SOFTIC"
            period="2022,October — 2023,January"
            location="Banglamotor, Dhaka"
            bullets={[
              "Developed and maintained cross-platform mobile applications using Flutter, ensuring a seamless user experience across both Android and iOS platforms.",
      "Implemented state management solutions and optimized app performance, resulting in a 30% increase in user engagement and a 25% reduction in crash rates.",
            ]}
          />
          <Role
            role="Mid Level Android Developer"
            company="Easy Payment System"
            period="2021,February — 2022,September"
            location="Uttara, Dhaka"
            bullets={[
              "Developed and maintained the Android application for a leading payment processing company, ensuring high performance and reliability.",
      "Implemented new features and optimized existing ones, resulting in a 15% increase in user retention and a 20% reduction in crash rates.",
            ]}
          />
        </Section>

        <Section title="Selected Projects">
          <Role
            role="SDK"
            company="Offline-first Event Mapping SDK"
            period=""
            location=""
            bullets={["Android library for event mapping and analytics. Features an offline-capable architecture with local batching and retry logic."]}
          />
          <Role
            role="Library"
            company="KMP DateTime Picker Library"
            period=""
            location=""
            bullets={["A Kotlin Multiplatform library providing a consistent date and time picker UI across Android and iOS, with shared business logic and platform-specific UI implementations."]}
          />
          <Role
            role="App"
            company="Due Book"
            period=""
            location=""
            bullets={["A personal project — a mobile app for tracking bills and subscriptions. Features include bill reminders, subscription management, and spending insights."]}
          />
        </Section>

        <Section title="Education">
          <Role
            role="BSc Computer Science"
            company="GSTU"
            period="2020"
            location="Goplagonj, Bangladesh"
            bullets={[
            "CGPA : 3.69 (First Position) out of 4.0",
            ]}
          />
          <Role
            role="HSC Science"
            company="Rajshahi City College"
            period="2016"
            location="Rajshahi, Bangladesh"
            bullets={[
            "GPA : 5.00 out of 5.0",
            ]}
          />
          <Role
            role="SSC Science"
            company="Barogharia High School"
            period="2014"
            location="Natore, Bangladesh"
            bullets={[
            "GPA : 5.00 (Golden) out of 5.0",
            ]}
          />
        </Section>
      </div>
    </article>
  </PageLayout>
);

export default CVPage;
