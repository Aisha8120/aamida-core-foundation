import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMEDAH — Operations & Growth Consulting" },
      {
        name: "description",
        content:
          "AMEDAH turns ecommerce store data into a clear operating plan for sustainable growth.",
      },
    ],
  }),
  component: LandingPage,
});

// ============================================================
// EASY-TO-EDIT CONFIG
// ============================================================
const WHATSAPP_NUMBER = "966500000000"; // <-- change here (international format, no +)
const BRAND = "AMEDAH";

const PILLAR_LABELS = ["Orders", "Marketing", "Operations", "Returns", "Customers"] as const;

const SERVICES = [
  {
    title: "Operational Diagnosis",
    desc: "Deep audit of orders, fulfillment, returns, and customer journey to find the real bottlenecks.",
  },
  {
    title: "Growth Operating Plan",
    desc: "A clear, sequenced plan that turns insights into priorities your team can execute.",
  },
  {
    title: "Process & Workflow Design",
    desc: "Lean SOPs, ownership maps, and tooling that scale with order volume without chaos.",
  },
  {
    title: "Performance Tracking",
    desc: "KPI dashboards aligned with operations and growth — not vanity metrics.",
  },
  {
    title: "Embedded Advisory",
    desc: "We sit beside your team during execution to remove blockers and protect velocity.",
  },
];

const STEPS = [
  { n: "01", t: "Discover", d: "Data, interviews, and store walkthroughs to map reality." },
  { n: "02", t: "Diagnose", d: "Identify gaps, root causes, and the highest-leverage moves." },
  { n: "03", t: "Design", d: "Build a 90-day operating plan with owners and milestones." },
  { n: "04", t: "Deliver", d: "Implement, measure weekly, and adjust until results compound." },
];

const METRICS = [
  { v: 38, suffix: "%", l: "Faster fulfillment", prefix: "−" },
  { v: 24, suffix: "%", l: "Fewer returns", prefix: "−" },
  { v: 31, suffix: "%", l: "Higher CSAT", prefix: "+" },
  { v: 46, suffix: "%", l: "Operational efficiency", prefix: "+" },
];

const FORM_LABELS = {
  name: "Full name",
  store: "Store / Company",
  email: "Email",
  msg: "How can we help?",
  submit: "Send via WhatsApp",
};

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

// ============================================================
// HOOKS
// ============================================================
function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ ["--reveal-delay" as any]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ============================================================
// LANDING PAGE
// ============================================================
function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <Header />
      <main className="relative">
        <Hero />
        <Transformation />
        <Services />
        <Process />
        <Results />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

// ============================================================
// HEADER
// ============================================================
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="inline-grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground font-bold">
            A
          </span>
          <span className="truncate text-base font-semibold tracking-[0.18em]">{BRAND}</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#process" className="hover:text-foreground transition">Process</a>
          <a href="#results" className="hover:text-foreground transition">Results</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_25px_-4px_oklch(0.62_0.21_274_/_0.7)] transition hover:-translate-y-0.5"
        >
          Book a Meeting
        </a>
      </div>
    </header>
  );
}

// ============================================================
// SECTION 1 — HERO (full viewport, pillars rise on mount)
// ============================================================
function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.22_275_/_0.4),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-20 text-center lg:px-8">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Operations & Growth Consulting
        </div>

        <h1
          className="animate-fade-up mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "100ms" }}
        >
          <span className="text-gradient">The operating foundation</span>
          <br />
          <span className="text-gradient">for sustainable growth.</span>
        </h1>

        <p
          className="animate-fade-up mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
          style={{ animationDelay: "220ms" }}
        >
          {BRAND} turns ecommerce store data into a clear, executable operating plan — so growth
          stops creating chaos and starts compounding.
        </p>

        <div
          className="animate-fade-up mt-7 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_35px_-4px_oklch(0.62_0.21_274_/_0.7)] transition hover:-translate-y-0.5"
          >
            Book a Meeting
          </a>
          <a
            href={waLink(`Hello ${BRAND}, I'd like to book an initial consultation.`)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/10 hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
        </div>

        {/* Five vertical pillars */}
        <div className="mt-14 flex w-full max-w-2xl items-end justify-center gap-3 sm:gap-5">
          {PILLAR_LABELS.map((_, i) => (
            <div
              key={i}
              className="animate-pillar relative h-32 w-12 origin-bottom rounded-t-md bg-gradient-to-b from-primary to-[oklch(0.32_0.12_275)] sm:h-44 sm:w-16"
              style={{
                animationDelay: `${500 + i * 110}ms`,
                boxShadow:
                  "inset 0 1px 0 oklch(1 0 0 / 0.25), 0 20px 60px -20px oklch(0.55 0.22 275 / 0.6)",
              }}
            >
              <span className="absolute -top-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/80" />
            </div>
          ))}
        </div>
        <div className="mt-3 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <a
          href="#transformation"
          className="mt-10 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
        >
          scroll
        </a>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 2 — TRANSFORMATION (pillars morph into 5 business pillars)
// ============================================================
function Transformation() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const total = el.offsetHeight - vh;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        setP(total > 0 ? scrolled / total : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Headline crossfade
  const introOpacity = Math.max(0, 1 - p * 2.2);
  const namedOpacity = Math.max(0, Math.min(1, (p - 0.35) * 2.4));

  return (
    <section
      id="transformation"
      ref={wrapRef}
      className="relative"
      style={{ height: "200vh" }} /* 100vh sticky pin + 100vh of scroll progress */
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center lg:px-8">
          {/* Headlines stacked */}
          <div className="relative h-16 w-full">
            <h2
              className="absolute inset-0 text-2xl font-semibold sm:text-4xl"
              style={{ opacity: introOpacity, transform: `translateY(${-p * 30}px)` }}
            >
              Five pillars hold every ecommerce store.
            </h2>
            <h2
              className="absolute inset-0 text-2xl font-semibold sm:text-4xl"
              style={{
                opacity: namedOpacity,
                transform: `translateY(${(1 - namedOpacity) * 30}px)`,
              }}
            >
              <span className="text-gradient">Orders. Marketing. Operations. Returns. Customers.</span>
            </h2>
          </div>

          <p
            className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base"
            style={{ opacity: 0.5 + p * 0.5 }}
          >
            When one weakens, the whole store wobbles. {BRAND} builds them deliberately.
          </p>

          {/* Pillars */}
          <div className="mt-10 flex w-full max-w-3xl items-end justify-center gap-3 sm:gap-6">
            {PILLAR_LABELS.map((label, i) => {
              // Each pillar reveals its label progressively
              const start = 0.25 + i * 0.1;
              const local = Math.max(0, Math.min(1, (p - start) / 0.18));
              const labelOpacity = local;
              const heightBoost = 1 + local * 0.18;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="relative w-12 origin-bottom overflow-hidden rounded-t-md bg-gradient-to-b from-primary to-[oklch(0.32_0.12_275)] transition-[height,transform] duration-500 sm:w-16"
                    style={{
                      height: `${(128 + i * 6) * heightBoost}px`,
                      boxShadow:
                        "inset 0 1px 0 oklch(1 0 0 / 0.25), 0 20px 60px -20px oklch(0.55 0.22 275 / 0.6)",
                    }}
                  >
                    {/* shimmer band that travels up as we scroll */}
                    <span
                      className="absolute inset-x-0 h-10 bg-gradient-to-t from-transparent via-white/30 to-transparent"
                      style={{ bottom: `${local * 100}%`, opacity: local }}
                    />
                  </div>
                  <span
                    className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground sm:text-xs"
                    style={{
                      opacity: labelOpacity,
                      transform: `translateY(${(1 - labelOpacity) * 8}px)`,
                    }}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-10 h-px w-48 bg-white/10">
            <div
              className="h-full bg-primary transition-[width]"
              style={{ width: `${Math.round(p * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 3 — SERVICES
// ============================================================
function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              <span className="text-gradient">What we do with you.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="glass group h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/40">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <span className="text-sm font-semibold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 4 — PROCESS (horizontal on desktop, vertical on mobile)
// ============================================================
function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Process</span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              <span className="text-gradient">Four steps. One outcome.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          {/* connector line */}
          <div
            aria-hidden
            className="absolute hidden lg:block lg:left-0 lg:right-0 lg:top-6 lg:h-px lg:bg-gradient-to-r lg:from-transparent lg:via-primary/40 lg:to-transparent"
          />
          <div
            aria-hidden
            className="absolute left-[15px] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:hidden"
          />

          <ol className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <li className="relative flex gap-4 lg:flex-col lg:gap-4">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-background text-xs font-semibold text-primary">
                    {s.n}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{s.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 5 — RESULTS (animated metrics)
// ============================================================
function Results() {
  return (
    <section id="results" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Results</span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              <span className="text-gradient">Outcomes you can measure.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.l} delay={i * 100}>
              <Metric prefix={m.prefix} value={m.v} suffix={m.suffix} label={m.l} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({
  value,
  suffix,
  prefix,
  label,
}: {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1400;
            const tick = (t: number) => {
              const k = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - k, 3);
              setN(Math.round(eased * value));
              if (k < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="glass rounded-2xl p-6">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {prefix}
          {n}
        </span>
        <span className="text-xl font-medium text-primary">{suffix}</span>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{label}</div>
      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-[oklch(0.75_0.14_275)] transition-[width] duration-1000"
          style={{ width: `${Math.min(100, (n / value) * 100)}%` }}
        />
      </div>
    </div>
  );
}

// ============================================================
// SECTION 6 — CONTACT
// ============================================================
function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const store = String(data.get("store") || "");
    const email = String(data.get("email") || "");
    const msg = String(data.get("msg") || "");
    const text = [
      `Hello ${BRAND},`,
      `Name: ${name}`,
      `Store: ${store}`,
      `Email: ${email}`,
      "",
      msg,
    ].join("\n");
    window.open(waLink(text), "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                <span className="text-gradient">Let's pressure-test your operations.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                Book a 30-minute call. We'll review where you are, where the leverage is, and
                whether {BRAND} is the right partner.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(`Hello ${BRAND}, I'd like to book a meeting.`)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/10"
                >
                  WhatsApp us
                </a>
                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_25px_-4px_oklch(0.62_0.21_274_/_0.7)] transition hover:-translate-y-0.5"
                >
                  Book a Meeting
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              id="book"
              onSubmit={onSubmit}
              className="glass rounded-2xl p-5 sm:p-7"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label={FORM_LABELS.name} required />
                <Field name="store" label={FORM_LABELS.store} />
                <div className="sm:col-span-2">
                  <Field name="email" type="email" label={FORM_LABELS.email} required />
                </div>
                <div className="sm:col-span-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {FORM_LABELS.msg}
                    </span>
                    <textarea
                      name="msg"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/10 bg-background/60 px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                    />
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_25px_-4px_oklch(0.62_0.21_274_/_0.7)] transition hover:-translate-y-0.5 sm:w-auto"
              >
                {FORM_LABELS.submit}
              </button>
              {sent && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Opening WhatsApp with your message…
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-background/60 px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
      />
    </label>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 text-sm text-muted-foreground sm:flex sm:justify-between lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="inline-grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
            A
          </span>
          <span className="truncate tracking-[0.18em] text-foreground">{BRAND}</span>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
      </div>
    </footer>
  );
}

// ============================================================
// FLOATING WHATSAPP
// ============================================================
function FloatingWhatsApp() {
  return (
    <a
      aria-label="WhatsApp"
      href={waLink(`Hello ${BRAND}, I'd like to talk.`)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.21_274_/_0.9)] transition hover:-translate-y-0.5 sm:h-14 sm:w-14"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M19.11 17.21c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.85.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-1.8a8.2 8.2 0 1 0 0-16.4 8.2 8.2 0 0 0 0 16.4z" />
      </svg>
    </a>
  );
}
