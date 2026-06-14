import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode, type SVGProps } from "react";

import collageHero from "@/assets/collage-hero.png.asset.json";
import imgAnalysis from "@/assets/analysis.png.asset.json";
import imgMonitoring from "@/assets/monitoring.png.asset.json";
import imgDevices from "@/assets/devices.png.asset.json";
import imgHandshake from "@/assets/handshake.png.asset.json";
import imgPointer from "@/assets/pointer.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أعمدة | نبني الأساس الذي ينمو عليه متجرك" },
      {
        name: "description",
        content:
          "أعمدة تساعد المتاجر الإلكترونية على فهم واقعها التشغيلي وبناء خطة تنفيذ واضحة تقلل الفوضى وتدعم النمو.",
      },
    ],
  }),
  component: LandingPage,
});

// ============================================================
// CONFIG
// ============================================================
const WHATSAPP_NUMBER = "966500000000";
const BRAND_AR = "أعمدة";

const PILLARS: { t: string; d: string }[] = [
  { t: "الطلبات", d: "نحلل رحلة الطلب من لحظة الشراء حتى التسليم لضمان كفاءة التنفيذ وتقليل الأخطاء." },
  { t: "التسويق", d: "نراجع القنوات التسويقية والأداء الفعلي للوصول إلى قرارات مبنية على البيانات." },
  { t: "العمليات", d: "نقيم سير العمل الداخلي ونقاط التعطل والتحديات التشغيلية اليومية." },
  { t: "المرتجعات", d: "نحدد أسباب المرتجعات وتأثيرها على الربحية وتجربة العميل." },
  { t: "العملاء", d: "نقيس جودة الخدمة وتجربة العميل ومستوى الرضا والاحتفاظ بالعملاء." },
];

const SERVICES = [
  "تحليل تشغيلي شامل",
  "دراسة نقاط القوة والضعف",
  "بناء خطة تطوير واضحة",
  "تنظيم مؤشرات الأداء",
  "متابعة التنفيذ والتحسين",
  "تقارير إدارية تساعد على اتخاذ القرار",
];

const SERVICE_VISUALS: { src: string; t: string }[] = [
  { src: imgAnalysis.url, t: "تحليل البيانات" },
  { src: imgMonitoring.url, t: "متابعة الأداء" },
  { src: imgDevices.url, t: "تنظيم القنوات" },
];

const WHY_VISUALS: { src: string; t: string }[] = [
  { src: imgHandshake.url, t: "شراكة تنفيذية" },
  { src: imgPointer.url, t: "توجيه دقيق" },
];

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

// ============================================================
// HOOK
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
// ICONS
// ============================================================
type IconProps = SVGProps<SVGSVGElement>;
const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
function IBox(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 7v10l9 4 9-4V7" />
      <path d="M12 11v10" />
    </svg>
  );
}
function IMega(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M3 11v2a2 2 0 0 0 2 2h2l8 4V5L7 9H5a2 2 0 0 0-2 2z" />
      <path d="M18 8a4 4 0 0 1 0 8" />
    </svg>
  );
}
function ICog(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1A2 2 0 1 1 4.3 17l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8L4.2 7A2 2 0 1 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
}
function IReturn(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M9 14L4 9l5-5" />
      <path d="M4 9h11a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5H8" />
    </svg>
  );
}
function IUsers(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 20a5 5 0 0 1 5.5-5" />
    </svg>
  );
}
function ICheck(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M5 12l4 4 10-10" />
    </svg>
  );
}
function IArrow(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
function IWa(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M19.11 17.21c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.85.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
    </svg>
  );
}

const PILLAR_ICONS = [IBox, IMega, ICog, IReturn, IUsers];

// ============================================================
// VISUAL CARD (interactive image)
// ============================================================
function VisualCard({
  src,
  title,
  className = "",
}: {
  src: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[#0D1B3E]/10 bg-white shadow-[0_10px_30px_-20px_rgba(13,27,62,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(13,27,62,0.45)] ${className}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/55 via-[#0D1B3E]/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 text-right opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#0D1B3E] backdrop-blur">
          {title}
        </span>
      </div>
    </div>
  );
}

// ============================================================
// LANDING
// ============================================================
function LandingPage() {
  useEffect(() => {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }, []);
  return (
    <div dir="rtl" lang="ar" className="relative min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <Header />
      <main className="relative">
        <Hero />
        <Pillars />
        <Services />
        <Why />
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
        scrolled ? "border-b border-[#0D1B3E]/10 bg-[#F8F7F4]/85 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <Logo className="h-7 w-7 shrink-0 text-[#0D1B3E]" />
          <span className="truncate text-base font-bold tracking-wide text-[#0D1B3E]">{BRAND_AR}</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#pillars" className="hover:text-[#0D1B3E] transition">الأعمدة الخمسة</a>
          <a href="#services" className="hover:text-[#0D1B3E] transition">ما نقدمه</a>
          <a href="#why" className="hover:text-[#0D1B3E] transition">لماذا أعمدة</a>
          <a href="#contact" className="hover:text-[#0D1B3E] transition">تواصل</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#0D1B3E] px-4 py-2 text-sm font-medium text-[#F8F7F4] transition hover:-translate-y-0.5"
        >
          ابدأ التحليل
        </a>
      </div>
    </header>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} {...stroke}>
      <path d="M5 22V9" />
      <path d="M10 22V6" />
      <path d="M15 22V10" />
      <path d="M20 22V7" />
      <path d="M3 22h22" />
    </svg>
  );
}

// ============================================================
// HERO
// ============================================================
function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-90" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-[1.15fr_1fr] lg:px-8">
        <div className="text-right">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0D1B3E]/15 bg-white/60 px-3 py-1 text-xs text-[#0D1B3E]/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0D1B3E]" />
            تحليل تشغيلي للمتاجر الإلكترونية
          </div>
          <h1
            className="animate-fade-up mt-6 text-3xl font-bold leading-[1.25] sm:text-5xl lg:text-[56px] lg:leading-[1.15]"
            style={{ animationDelay: "100ms" }}
          >
            نبني الأساس الذي
            <br />
            ينمو عليه متجرك
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-loose text-muted-foreground sm:text-lg"
            style={{ animationDelay: "220ms" }}
          >
            في {BRAND_AR} نساعد المتاجر الإلكترونية على فهم واقعها التشغيلي، كشف فرص التحسين، وتنظيم
            العمل اليومي من خلال تحليل شامل وخطة تنفيذ واضحة تركز على ما يصنع الفرق الحقيقي في النمو.
          </p>
          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0D1B3E] px-6 py-3 text-sm font-medium text-[#F8F7F4] transition hover:-translate-y-0.5"
            >
              ابدأ تحليل متجرك
              <IArrow className="h-4 w-4 rotate-180" />
            </a>
            <a
              href={waLink(`السلام عليكم، أرغب بتحليل متجري عبر ${BRAND_AR}.`)}
              className="inline-flex items-center gap-2 rounded-full border border-[#0D1B3E]/20 bg-white px-6 py-3 text-sm font-medium text-[#0D1B3E] transition hover:bg-[#0D1B3E]/5 hover:-translate-y-0.5"
            >
              تواصل معنا
            </a>
          </div>
        </div>

        {/* Hero collage visual */}
        <div className="relative mx-auto w-full max-w-md">
          <div
            className="group relative overflow-hidden rounded-3xl border border-[#0D1B3E]/10 bg-[#0D1B3E] shadow-[0_30px_80px_-40px_rgba(13,27,62,0.45)] transition-all duration-700 hover:-translate-y-1"
            style={{ animationDelay: "400ms" }}
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={collageHero.url}
                alt="لوحة تشغيلية لمتجر إلكتروني"
                className="h-full w-full object-cover object-center opacity-95 transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#0D1B3E] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0D1B3E]" />
                صورة تشغيلية شاملة
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(13,27,62,0.10),transparent_70%)]" />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PILLARS
// ============================================================
function Pillars() {
  const STRENGTH = [78, 62, 88, 55, 72];
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const [labelsIn, setLabelsIn] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setStarted(true);
            const tm = window.setTimeout(() => setLabelsIn(true), 5 * 120 + 650);
            io.unobserve(e.target);
            return () => window.clearTimeout(tm);
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const max = Math.max(...STRENGTH);

  return (
    <section id="pillars" ref={sectionRef} className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-right">
            <span className="text-xs tracking-[0.25em] text-muted-foreground">الأعمدة الخمسة</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-snug sm:text-4xl">
              كل متجر ناجح يرتكز على خمسة أعمدة
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-loose text-muted-foreground">
              نقوم بدراسة متجرك من خلال خمسة محاور مترابطة تساعدنا على اكتشاف نقاط القوة والضعف
              وتحديد الأولويات التي تستحق التركيز.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <div
            className="relative mx-auto max-w-4xl rounded-2xl border border-[#0D1B3E]/10 bg-white p-5 sm:p-8"
            role="group"
            aria-label="الأعمدة الخمسة"
          >
            <div aria-hidden className="pointer-events-none absolute inset-x-5 top-8 bottom-20 sm:inset-x-8 sm:bottom-24">
              {[0, 1, 2, 3].map((g) => (
                <div
                  key={g}
                  className="absolute inset-x-0 h-px bg-[#0D1B3E]/6"
                  style={{ top: `${(g / 3) * 100}%` }}
                />
              ))}
            </div>

            <div className="relative flex h-[220px] items-end justify-between gap-3 sm:h-[260px] sm:gap-6">
              {PILLARS.map((p, i) => {
                const Icon = PILLAR_ICONS[i];
                const targetPct = (STRENGTH[i] / max) * 100;
                const heightPct = started ? targetPct : 0;
                const isActive = active === i;
                return (
                  <div
                    key={p.t}
                    className="group relative flex h-full flex-1 flex-col items-center justify-end"
                  >
                    <div className="pointer-events-none absolute bottom-full z-10 mb-3 hidden w-60 -translate-y-0 rounded-xl border border-[#0D1B3E]/10 bg-white p-3 text-right opacity-0 shadow-[0_20px_50px_-25px_rgba(13,27,62,0.4)] transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 lg:block">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D1B3E]">
                          {p.t}
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[#1F2937]">{p.d}</p>
                      <span className="absolute -bottom-1 right-1/2 h-2 w-2 translate-x-1/2 rotate-45 border-b border-l border-[#0D1B3E]/10 bg-white" />
                    </div>

                    <button
                      type="button"
                      aria-label={p.t}
                      aria-expanded={isActive}
                      onClick={() => setActive(isActive ? null : i)}
                      className={`relative w-9 origin-bottom overflow-hidden rounded-t-md bg-[#0D1B3E] outline-none transition-[height,transform,box-shadow] duration-700 ease-out sm:w-14 lg:w-16 lg:group-hover:-translate-y-2 lg:group-hover:shadow-[0_18px_40px_-20px_rgba(13,27,62,0.6)] ${
                        isActive ? "-translate-y-2 shadow-[0_18px_40px_-20px_rgba(13,27,62,0.6)]" : ""
                      }`}
                      style={{
                        height: `${heightPct}%`,
                        transitionDelay: started ? `${i * 120}ms` : "0ms",
                      }}
                    >
                      <span aria-hidden className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent" />
                      <span
                        className="absolute left-1/2 top-2 -translate-x-1/2 text-[10px] font-semibold text-white/85 transition-opacity"
                        style={{ opacity: labelsIn ? 1 : 0 }}
                      >
                        {STRENGTH[i]}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-2 h-px w-full bg-[#0D1B3E]/15" />

            <div className="mt-3 flex items-start justify-between gap-3 sm:gap-6">
              {PILLARS.map((p, i) => {
                const Icon = PILLAR_ICONS[i];
                const isActive = active === i;
                return (
                  <button
                    key={p.t}
                    type="button"
                    onClick={() => setActive(isActive ? null : i)}
                    className="flex flex-1 flex-col items-center gap-1.5 text-center transition"
                    style={{
                      opacity: labelsIn ? 1 : 0,
                      transform: labelsIn ? "translateY(0)" : "translateY(6px)",
                      transition: `opacity 500ms ease ${i * 80}ms, transform 500ms ease ${i * 80}ms`,
                    }}
                    aria-label={p.t}
                  >
                    <Icon
                      className={`h-4 w-4 transition-colors ${
                        isActive ? "text-[#0D1B3E]" : "text-[#0D1B3E]/60"
                      }`}
                    />
                    <span
                      className={`text-[11px] font-bold sm:text-xs ${
                        isActive ? "text-[#0D1B3E]" : "text-[#0D1B3E]/80"
                      }`}
                    >
                      {p.t}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="mx-auto mt-4 max-w-4xl overflow-hidden transition-[max-height,opacity,margin] duration-500 lg:hidden"
            style={{
              maxHeight: active !== null ? 220 : 0,
              opacity: active !== null ? 1 : 0,
              marginTop: active !== null ? 16 : 0,
            }}
            aria-live="polite"
          >
            {active !== null && (
              <div className="rounded-xl border border-[#0D1B3E]/10 bg-white p-4 text-right">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-bold text-[#0D1B3E]">{PILLARS[active].t}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-[#1F2937]">{PILLARS[active].d}</p>
              </div>
            )}
          </div>

          <p className="mt-3 text-center text-[11px] text-muted-foreground lg:hidden">
            اضغط على أي عمود لعرض الوصف
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SERVICES — with 3 interactive image cards
// ============================================================
function Services() {
  return (
    <section id="services" className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-right">
            <span className="text-xs tracking-[0.25em] text-muted-foreground">ما نقدمه</span>
            <h2 className="mt-3 text-3xl font-bold leading-snug sm:text-4xl">
              ماذا نقدم لمتجرك؟
            </h2>
            <p className="mt-5 max-w-xl text-base leading-loose text-muted-foreground">
              خدمات تشغيلية مبنية على بيانات متجرك الفعلية، وموجّهة نحو قرارات قابلة للتنفيذ.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={i * 70}>
                <div className="flex items-start gap-3 rounded-xl border border-[#0D1B3E]/10 bg-[#F8F7F4] p-4 transition hover:border-[#0D1B3E]/30 hover:bg-white">
                  <span className="mt-0.5 inline-grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0D1B3E] text-[#F8F7F4]">
                    <ICheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#1F2937] sm:text-base">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Image cards — desktop grid, mobile horizontal slider */}
          <div className="-mx-5 lg:mx-0">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0">
              {SERVICE_VISUALS.map((v, i) => (
                <Reveal
                  key={v.t}
                  delay={i * 100}
                  className={`w-[78%] shrink-0 snap-start lg:w-auto ${
                    i === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <VisualCard src={v.src} title={v.t} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// WHY — with 2 visual cards
// ============================================================
function Why() {
  return (
    <section id="why" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-[#0D1B3E]/15 bg-[#0D1B3E] p-8 text-right text-[#F8F7F4] sm:p-10">
              <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                <div className="absolute inset-0 soft-grid" style={{ filter: "invert(1)" }} />
              </div>
              <span className="relative text-xs tracking-[0.3em] text-[#F8F7F4]/70">لماذا أعمدة</span>
              <h2 className="relative mt-3 text-3xl font-bold leading-snug text-[#F8F7F4] sm:text-4xl">
                لسنا جهة تقدم توصيات فقط
              </h2>
              <p className="relative mt-5 max-w-xl text-base leading-loose text-[#F8F7F4]/85 sm:text-lg">
                نعمل على فهم تفاصيل المتجر من الداخل، ونحوّل الملاحظات إلى خطوات عملية قابلة للتنفيذ
                والمتابعة. هدفنا ليس تقديم تقرير فقط، بل المساعدة في بناء أساس تشغيلي أكثر وضوحاً
                واستقراراً يساعد المتجر على النمو بثقة.
              </p>
              <div className="relative mt-7 grid gap-2.5 sm:grid-cols-2">
                {[
                  "تنفيذ ومتابعة لا توصيات فقط",
                  "قرارات مبنية على بيانات",
                  "خطط واضحة قابلة للقياس",
                  "فهم عميق لواقع المتجر",
                ].map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-xl border border-[#F8F7F4]/15 bg-white/5 px-3.5 py-2.5 text-sm text-[#F8F7F4]"
                  >
                    <ICheck className="h-4 w-4 shrink-0 text-[#F8F7F4]/90" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {WHY_VISUALS.map((v, i) => (
              <Reveal key={v.t} delay={i * 120}>
                <VisualCard src={v.src} title={v.t} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CONTACT
// ============================================================
function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      `السلام عليكم ${BRAND_AR}،`,
      `الاسم: ${f.get("name") || ""}`,
      `اسم المتجر: ${f.get("store") || ""}`,
      `المنصة: ${f.get("platform") || ""}`,
      `رابط المتجر: ${f.get("url") || ""}`,
      `رقم التواصل: ${f.get("phone") || ""}`,
      "",
      String(f.get("msg") || ""),
    ].join("\n");
    window.open(waLink(text), "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="text-right">
              <span className="text-xs tracking-[0.25em] text-muted-foreground">تواصل</span>
              <h2 className="mt-3 text-3xl font-bold leading-snug sm:text-4xl">
                ابدأ بخطوة واحدة نحو صورة أوضح لمتجرك
              </h2>
              <p className="mt-5 max-w-md text-base leading-loose text-muted-foreground">
                شاركنا معلومات متجرك الأساسية، وسنساعدك على معرفة أين تقف اليوم وما الأولويات التي
                تستحق العمل عليها أولاً.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(`السلام عليكم ${BRAND_AR}، أرغب بالتواصل.`)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0D1B3E]/20 bg-white px-5 py-3 text-sm font-medium text-[#0D1B3E] transition hover:bg-[#0D1B3E]/5"
                >
                  <IWa className="h-4 w-4" />
                  تواصل عبر واتساب
                </a>
                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0D1B3E] px-5 py-3 text-sm font-medium text-[#F8F7F4] transition hover:-translate-y-0.5"
                >
                  احجز اجتماعاً
                  <IArrow className="h-4 w-4 rotate-180" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              id="book"
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-[#0D1B3E]/10 bg-white p-5 shadow-[0_20px_60px_-40px_rgba(13,27,62,0.3)] sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="الاسم الكامل" required />
                <Field name="store" label="اسم المتجر" required />
                <Field name="platform" label="المنصة (سلة، زد، شوبيفاي…)" />
                <Field name="phone" label="رقم التواصل" type="tel" />
                <div className="sm:col-span-2">
                  <Field name="url" label="رابط المتجر" type="url" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-right">
                    <span className="mb-1.5 block text-xs text-[#0D1B3E]/70">
                      نبذة عن وضع المتجر
                    </span>
                    <textarea
                      name="msg"
                      rows={4}
                      className="w-full rounded-xl border border-[#0D1B3E]/15 bg-[#F8F7F4] px-3.5 py-2.5 text-sm text-[#1F2937] outline-none transition focus:border-[#0D1B3E]/40 focus:bg-white"
                      placeholder="مثال: نواجه تأخراً في تنفيذ الطلبات وارتفاعاً في المرتجعات…"
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0D1B3E] px-5 py-3 text-sm font-medium text-[#F8F7F4] transition hover:-translate-y-0.5"
              >
                إرسال الطلب
                <IArrow className="h-4 w-4 rotate-180" />
              </button>

              {sent && (
                <p className="mt-3 text-center text-xs text-[#0D1B3E]/70">
                  تم فتح واتساب لإكمال الإرسال. سنعود إليك خلال 24 ساعة.
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
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-right">
      <span className="mb-1.5 block text-xs text-[#0D1B3E]/70">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-[#0D1B3E]/15 bg-[#F8F7F4] px-3.5 py-2.5 text-sm text-[#1F2937] outline-none transition focus:border-[#0D1B3E]/40 focus:bg-white"
      />
    </label>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="border-t border-[#0D1B3E]/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-center text-xs text-muted-foreground sm:flex-row sm:text-right lg:px-8">
        <div className="flex items-center gap-2">
          <Logo className="h-4 w-4 text-[#0D1B3E]" />
          <span className="font-bold text-[#0D1B3E]">{BRAND_AR}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div>تحليل تشغيلي للمتاجر الإلكترونية</div>
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
      href={waLink(`السلام عليكم ${BRAND_AR}، أرغب بتحليل متجري.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل واتساب"
      className="fixed bottom-5 left-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0D1B3E] text-[#F8F7F4] shadow-[0_15px_40px_-15px_rgba(13,27,62,0.6)] transition hover:-translate-y-0.5"
    >
      <IWa className="h-5 w-5" />
    </a>
  );
}
