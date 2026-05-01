import { SectionHeader } from "../SectionHeader";

const experience = [
  {
    role: "Senior Mobile Platform Engineer",
    company: "Hishabee Technologies Limited",
    period: "2023,July — Present",
    location: "Panthapath, Dhaka",
    achievements: [
      "Lead architect for the Android app — migrated legacy modules to kotlin + Coroutines, reducing cold start by 8%.",
      "App Size Reduced by 50% and Crash Rate Reduced by 3% through performance optimizations and refactoring.",
      "Improved crash-free sessions from 99.2% → 99.9% via a structured-concurrency refactor.",
      "Mentored junior engineers and established best practices for code quality and testing.",
      "Implemented a new onboarding flow that improved user retention by 20% and reduced drop-off rates by 25%.",
    ],
  },
  {
    role: "Mobile Application Development",
    company: "Red Dot Digital (Contractually)",
    period: "2023,January — 2023,June",
    location: "Gulshan, Dhaka",
    achievements: [
      "Feature development and maintenance for a client, focusing on Android platforms.",
      "Implemented offline-first transaction sync with Room + WorkManager, reducing API load by 38%.",
      "Collaborated closely with cross-functional teams to deliver high-quality features on time.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "SOFTIC",
    period: "2022,October — 2023,January",
    location: "Banglamotor, Dhaka",
    achievements: [
      "Developed and maintained cross-platform mobile applications using Flutter, ensuring a seamless user experience across both Android and iOS platforms.",
      "Implemented state management solutions and optimized app performance, resulting in a 30% increase in user engagement and a 25% reduction in crash rates.",
    ],
  },
  {
    role: "Mid Level Android Developer",
    company: "Easy Payment System",
    period: "2021,February — 2022,September",
    location: "Uttara, Dhaka",
    achievements: [
      "Developed and maintained the Android application for a leading payment processing company, ensuring high performance and reliability.",
      "Implemented new features and optimized existing ones, resulting in a 15% increase in user retention and a 20% reduction in crash rates.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="py-28 md:py-8">
    <div className="container">
      <SectionHeader  title="Experience" />
      <div className="relative max-w-4xl">
        <div className="absolute left-0 md:left-[180px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-14">
          {experience.map((job, i) => (
            <div key={i} className="relative pl-8 md:pl-[220px]">
              <div className="absolute left-0 md:left-[174px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="md:absolute md:left-0 md:top-0 md:w-[160px] text-sm font-mono text-muted-foreground mb-2 md:mb-0">
                {job.period}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <div className="text-accent font-medium mb-1">{job.company}</div>
                <div className="text-xs text-muted-foreground mb-4">{job.location}</div>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  {job.achievements.map((a, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-accent mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
