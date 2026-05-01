// Generates a clean text-based PDF resume on the fly using jsPDF.
// Keeps bundle small and avoids needing static assets.
import { jsPDF } from "jspdf";

export const generateResumePDF = () => {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 48;
  let y = margin;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - margin * 2;

  const h1 = (text: string) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text(text, margin, y);
    y += 32;
  };

  const sub = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(90);
    doc.text(text, margin, y);
    y += 18;
    doc.setTextColor(0);
  };

  const h2 = (text: string) => {
    y += 14;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11.5);
    doc.text(text.toUpperCase(), margin, y);
    y += 8;
    doc.setDrawColor(200);
    doc.line(margin, y, pageWidth - margin, y);
    y += 18;
  };

  const p = (text: string, opts: { bold?: boolean; size?: number } = {}) => {
    doc.setFont("helvetica", opts.bold ? "bold" : "normal");
    doc.setFontSize(opts.size ?? 10.5);
    const lines = doc.splitTextToSize(text, contentWidth);
    lines.forEach((line: string) => {
      if (y > 780) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += 16;
    });
  };

  const bullet = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    const lines = doc.splitTextToSize(text, contentWidth - 18);
    lines.forEach((line: string, i: number) => {
      if (y > 780) {
        doc.addPage();
        y = margin;
      }
      if (i === 0) doc.text("•", margin, y);
      doc.text(line, margin + 18, y);
      y += 16;
    });
  };

  const paragraphWithLabel = (label: string, text: string) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.text(`${label}:`, margin, y);
    const labelWidth = doc.getTextWidth(`${label}: `);
    doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(text, contentWidth - labelWidth);
    lines.forEach((line: string, i: number) => {
      if (y > 780) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin + labelWidth, y);
      y += 16;
    });
  };

  h1("Md Fazle Rabbi");
  sub("Senior Mobile & Backend Engineer · Android · iOS · Ktor");
  sub("srabbijan@gmail.com · github.com/srabbijan · linkedin.com/in/srabbijan · KathalBagan Bazar, Dhaka");

  h2("Summary");
  p(
    "Senior full-stack mobile engineer with 6+ years building production Android (Kotlin/Compose), iOS (Swift/SwiftUI), Cross-platform (KMP,Flutter) and Ktor backend services. Specialized in offline-first architecture, Kotlin Multiplatform shared modules, and high-throughput JVM APIs serving millions of mobile clients."
  );

  h2("Core Stack");
  paragraphWithLabel("Mobile", "Kotlin · Jetpack Compose · Coroutines · KMP · Flutter · Swift · SwiftUI");
  paragraphWithLabel("Backend", "Ktor · Kotlin · Exposed · PostgreSQL · Redis");
  paragraphWithLabel("Infra", "Docker · Kubernetes · GitHub Actions · AWS · Grafana");

  h2("Experience");
  p("Senior Mobile Platform Engineer — Hishabee Technologies Limited    2023,July — Present", { bold: true });
  bullet("App Size Reduced by 50% and Crash Rate Reduced by 3% through performance optimizations and refactoring.");
  bullet("Improved crash-free sessions from 99.2% → 99.9% via a structured-concurrency refactor.");
  bullet("Mentored junior engineers and established best practices for code quality and testing.");
  bullet("Implemented a new onboarding flow that improved user retention by 20% and reduced drop-off rates by 25%.");

  p("Mobile Application Development — Red Dot Digital (Contractually)    2023,January — 2023,June", { bold: true });
  bullet("Feature development and maintenance for a client, focusing on Android platforms.");
  bullet("Implemented offline-first transaction sync with Room + WorkManager, reducing API load by 38%.");
  bullet("Collaborated closely with cross-functional teams to deliver high-quality features on time.");

  p("Flutter Developer — SOFTIC    2022,October — 2023,January", { bold: true });
  bullet("Developed and maintained cross-platform mobile applications using Flutter, ensuring a seamless user experience across both Android and iOS platforms.");
  bullet("Implemented state management solutions and optimized app performance, resulting in a 30% increase in user engagement and a 25% reduction in crash rates.");

  p("Mid Level Android Developer — Easy Payment System    2021,February — 2022,September", { bold: true });
  bullet("Developed and maintained the Android application for a leading payment processing company, ensuring high performance and reliability.");
  bullet("Implemented new features and optimized existing ones, resulting in a 15% increase in user retention and a 20% reduction in crash rates.");

  h2("Selected Projects");
  p("SDK — Offline-first Event Mapping SDK", { bold: true });
  bullet("Android library for event mapping and analytics. Features an offline-capable architecture with local batching and retry logic.");

  p("Library — KMP DateTime Picker Library", { bold: true });
  bullet("A Kotlin Multiplatform library providing a consistent date and time picker UI across Android and iOS, with shared business logic and platform-specific UI implementations.");

  p("App — Due Book", { bold: true });
  bullet("A personal project — a mobile app for tracking bills and subscriptions. Features include bill reminders, subscription management, and spending insights.");

  h2("Education");
  p("BSc Computer Science — GSTU    2020");
  p("HSC Science — Rajshahi City College    2016");
  p("SSC Science — Barogharia High School    2014");

  doc.save("Md-Fazle-Rabbi-Resume.pdf");
};
