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
    doc.setFontSize(22);
    doc.text(text, margin, y);
    y += 26;
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
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(text.toUpperCase(), margin, y);
    y += 6;
    doc.setDrawColor(200);
    doc.line(margin, y, pageWidth - margin, y);
    y += 14;
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
      y += 14;
    });
  };
  const bullet = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    const lines = doc.splitTextToSize(text, contentWidth - 14);
    lines.forEach((line: string, i: number) => {
      if (y > 780) {
        doc.addPage();
        y = margin;
      }
      if (i === 0) doc.text("•", margin, y);
      doc.text(line, margin + 14, y);
      y += 14;
    });
  };

  h1("Alex Chen");
  sub("Senior Mobile & Backend Engineer · Android · iOS · Ktor");
  sub("alex@example.com · github.com/alexchen · linkedin.com/in/alexchen");

  h2("Summary");
  p(
    "Senior full-stack mobile engineer with 10+ years building production Android (Kotlin/Compose), iOS (Swift/SwiftUI), and Ktor backend services. Specialized in offline-first architecture, KMP shared modules, and high-throughput JVM APIs serving millions of mobile clients."
  );

  h2("Core Stack");
  p("Mobile: Kotlin, Jetpack Compose, Coroutines, KMP, Swift, SwiftUI, Combine", { bold: true });
  p("Backend: Ktor, Kotlin, Exposed, PostgreSQL, Redis, gRPC, GraphQL", { bold: true });
  p("Infra: Docker, Kubernetes, GitHub Actions, AWS, Grafana, OpenTelemetry", { bold: true });

  h2("Experience");

  p("Senior Mobile Platform Engineer — Revolut    2022 — Present", { bold: true });
  bullet("Lead architect for Android app (8M+ MAU) — migrated legacy Java modules to Compose + Coroutines, cut cold start by 41%.");
  bullet("Built shared KMP networking layer powering both Android and iOS, removing 18k LOC of duplication.");
  bullet("Designed Ktor-based BFF service handling 220M req/day with p99 < 90ms.");

  p("Senior iOS / Backend Engineer — Bolt    2019 — 2022", { bold: true });
  bullet("Owned the driver iOS app (SwiftUI) and its Ktor backend; shipped real-time location pipeline on Kafka.");
  bullet("Reduced crash-free sessions from 99.2% → 99.94% via structured concurrency refactor.");

  p("Android Engineer — N26    2016 — 2019", { bold: true });
  bullet("Built biometric onboarding flow used by 4M+ customers; led migration to single-activity Compose.");
  bullet("Implemented offline-first transaction sync with Room + WorkManager.");

  h2("Selected Projects");
  p("Halo — Offline-first KMP banking SDK", { bold: true });
  bullet("Shared Kotlin module: Android, iOS, JVM. 95% code reuse across platforms.");

  p("Pulse — Ktor real-time analytics backend", { bold: true });
  bullet("WebSocket fan-out for 500K concurrent mobile clients with Redis pub/sub.");

  h2("Education");
  p("BSc Computer Science — TU Munich, 2014");

  doc.save("Alex-Chen-Resume.pdf");
};
