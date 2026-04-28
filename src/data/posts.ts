export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "ktor-coroutines-at-scale",
    title: "Ktor + Coroutines at scale: lessons from 220M req/day",
    date: "Mar 2026",
    readTime: "12 min",
    tag: "Backend",
    excerpt: "What we learned running a Ktor BFF in production for a fintech mobile app with hundreds of millions of daily requests.",
    content: [
      "When we picked Ktor as the BFF for our mobile apps, the appeal was simple: the same language as our Android team, structured concurrency by default, and a small enough surface area that the whole team could reason about it.",
      "Two years and 220M req/day later, here's what actually mattered.",
      "1. Treat coroutine scopes as load-bearing infrastructure. Every inbound request gets its own scope. Cancellation propagates. Your downstream calls die when the client disconnects — for free.",
      "2. Connection pools are your real bottleneck. Tune Hikari before you tune anything else. We sized pools per service, not per node.",
      "3. Backpressure isn't optional on mobile. Flaky networks cause reconnect storms; we shed load at the edge with a token-bucket interceptor before requests ever hit the database.",
      "Ktor isn't magic — it's small enough to understand end-to-end, which at scale is the most valuable property a backend framework can have.",
    ],
  },
  {
    slug: "kmp-shared-networking",
    title: "Sharing networking across Android & iOS with Kotlin Multiplatform",
    date: "Jan 2026",
    readTime: "8 min",
    tag: "Mobile",
    excerpt: "How we removed 18k LOC of duplication by moving our networking, auth, and persistence layers to KMP.",
    content: [
      "Our Android and iOS apps used to ship the same bug twice — once in Kotlin, once in Swift. KMP fixed that.",
      "The hard part wasn't the code. It was the contract with the iOS team: APIs had to feel native on both sides.",
      "We exposed Kotlin suspend functions through a thin Swift wrapper that bridged to async/await. SwiftUI engineers never knew it was Kotlin underneath.",
      "Eighteen months in: 95% code reuse on networking + persistence, zero divergence between platforms, and a single test suite catching bugs once instead of twice.",
    ],
  },
  {
    slug: "compose-cold-start",
    title: "Cutting Jetpack Compose cold start by 41%",
    date: "Nov 2025",
    readTime: "15 min",
    tag: "Android",
    excerpt: "A practical case study of profiling, baseline profiles, and the unglamorous work of fast app startup.",
    content: [
      "Cold start is the most honest metric in Android: it doesn't lie, and users feel every millisecond.",
      "We started at 1.4s. We ended at 820ms. Here's what moved the needle.",
      "Baseline profiles: free 18% win, no code changes. If you're not shipping them, start today.",
      "Hilt warm-up: lazy graphs, smaller modules, and removing unused bindings shaved 90ms.",
      "Compose: deferring composition of below-the-fold content with Modifier.layout shaved another 110ms.",
      "Cold start is a sum of small wins. Profile, fix, measure. There's no silver bullet — just discipline.",
    ],
  },
];
