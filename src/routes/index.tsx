import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode, type SVGProps } from "react";

import collageHero from "@/assets/collage-fistbump.png.asset.json";
import collagePuzzle from "@/assets/collage-puzzle.jpg.asset.json";
import collageTarget from "@/assets/collage-target.jpg.asset.json";
import collageBridge from "@/assets/collage-bridge.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أعمدة | رحلة تغيير حقيقية لمتجرك خلال 90 يوماً" },
      {
        name: "description",
        content:
          "أعمدة ترافق متجرك خلال رحلة 90 يوماً لفهم واقعك التشغيلي، تشخيص التحديات، وبناء نظام عمل واضح يساعدك على النمو.",
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

const PILLARS: { t: string; lines: string[] }[] = [
  {
    t: "الطلبات",
    lines: [
      "هل يتم تنفيذ الطلبات بكفاءة؟",
      "أين تتكرر الأخطاء؟",
      "ما الذي يسبب التأخير؟",
    ],
  },
  {
    t: "التسويق",
    lines: [
      "هل يتم صرف الميزانية في المكان الصحيح؟",
      "ما القنوات الأكثر تأثيراً؟",
      "ما فرص النمو المتاحة؟",
    ],
  },
  {
    t: "العمليات",
    lines: [
      "كيف يتحرك العمل داخل المتجر؟",
      "هل يوجد اختناقات أو مهام غير واضحة؟",
      "هل الفريق يعمل وفق نظام أم اجتهادات فردية؟",
    ],
  },
  {
    t: "المرتجعات",
    lines: [
      "ما الأسباب الحقيقية للمرتجعات؟",
      "ما أثرها على الأرباح؟",
      "كيف يمكن تقليلها؟",
    ],
  },
  {
    t: "العملاء",
    lines: [
      "كيف تبدو تجربة العميل؟",
      "ما مستوى الرضا؟",
      "هل توجد فرص لتحسين الولاء والاحتفاظ بالعملاء؟",
    ],
  },
];

const JOURNEY = [
  {
    month: "الشهر الأول",
    title: "التشخيص والتأسيس",
    items: [
      "دراسة المتجر بالكامل",
      "تحليل الوضع الحالي",
      "مراجعة العمليات",
      "تحديد التحديات الرئيسية",
      "بناء خارطة الأولويات",
    ],
    close: "في نهاية الشهر الأول يصبح لدينا تصور واضح للوضع الحالي وخطة عمل واضحة للمرحلة القادمة.",
  },
  {
    month: "الشهر الثاني",
    title: "التطبيق والتحسين",
    items: [
      "البدء بتنفيذ التحسينات",
      "تنظيم الإجراءات التشغيلية",
      "بناء آليات المتابعة",
      "تطوير مؤشرات الأداء",
      "معالجة الاختناقات التشغيلية",
    ],
    close: "",
  },
  {
    month: "الشهر الثالث",
    title: "التثبيت والمتابعة",
    items: [
      "متابعة التنفيذ",
      "قياس النتائج",
      "تحسين الإجراءات",
      "رفع كفاءة التشغيل",
      "التأكد من استقرار النظام",
    ],
    close: "الهدف هو أن ينتهي المشروع والمتجر يعمل بطريقة أكثر وضوحاً وتنظيماً من اليوم الأول.",
  },
];

const SYSTEM_FEATURES = [
  "تنظيم المهام والمسؤوليات",
  "متابعة سير العمل",
  "إدارة العمليات اليومية",
  "لوحات مؤشرات الأداء",
  "متابعة الفريق",
  "النماذج والإجراءات التشغيلية",
  "التقارير الإدارية",
];

const OUTCOMES = [
  "تحليل تشغيلي شامل",
  "تقرير تنفيذي واضح",
  "خطة تطوير عملية",
  "متابعة لمدة ثلاثة أشهر",
  "مؤشرات أداء واضحة",
  "نظام تشغيلي خاص بمتجرك",
  "إجراءات تشغيل منظمة",
  "رؤية أوضح لاتخاذ القرار",
  "أساس يساعد على النمو المستدام",
];

const SERVICE_VISUALS: { src: string; t: string; rotate: string }[] = [
  { src: collagePuzzle.url, t: "نُركّب القطع المبعثرة في متجرك", rotate: "-rotate-1" },
  { src: collageTarget.url, t: "نوجّه التركيز نحو ما يصنع الفرق", rotate: "rotate-1" },
];

const WHY_VISUAL = { src: collageBridge.url, t: "نعبر بك الفجوة نحو النمو" };

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
  rotate = "",
}: {
  src: string;
  title: string;
  className?: string;
  rotate?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-[#0D1B3E]/10 bg-gradient-to-br from-[#F8F7F4] to-white shadow-[0_25px_60px_-30px_rgba(13,27,62,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_80px_-30px_rgba(13,27,62,0.55)] ${rotate} ${className}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(13,27,62,0.07),transparent_70%)]" />
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-4 drop-shadow-[0_18px_25px_rgba(13,27,62,0.25)] transition-transform duration-700 group-hover:scale-[1.05] group-hover:-rotate-1"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 p-3 text-right opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0D1B3E]/10 bg-white/95 px-3 py-1 text-xs font-bold text-[#0D1B3E] backdrop-blur shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0D1B3E]" />
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
        <Problems />
        <Pillars />
        <Journey />
        <SystemService />
        <Outcomes />
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
          <span className="truncate text-base font-bold text-[#0D1B3E]">{BRAND_AR}</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#pillars" className="hover:text-[#0D1B3E] transition">الأعمدة الخمسة</a>
          <a href="#journey" className="hover:text-[#0D1B3E] transition">رحلة التغيير</a>
          <a href="#system" className="hover:text-[#0D1B3E] transition">النظام التشغيلي</a>
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
            رحلة تغيير حقيقية
            <br />
            لمتجرك خلال 90 يوماً
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-loose text-muted-foreground sm:text-lg"
            style={{ animationDelay: "220ms" }}
          >
            ليست استشارة تُسلّم في ملف PDF ثم تنتهي.
            <br />
            في {BRAND_AR} نرافق متجرك خلال رحلة تمتد لثلاثة أشهر نبدأ فيها بفهم الواقع الحالي، وتشخيص
            التحديات التشغيلية، ثم بناء نظام عمل واضح يساعد الفريق على العمل بكفاءة أكبر واتخاذ قرارات
            أفضل.
          </p>
          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0D1B3E] px-6 py-3 text-sm font-medium text-[#F8F7F4] transition hover:-translate-y-0.5"
            >
              ابدأ رحلة التغيير
              <IArrow className="h-4 w-4 rotate-180" />
            </a>
            <a
              href={waLink(`السلام عليكم، أرغب بتحليل متجري عبر ${BRAND_AR}.`)}
              className="inline-flex items-center gap-2 rounded-full border border-[#0D1B3E]/20 bg-white px-6 py-3 text-sm font-medium text-[#0D1B3E] transition hover:bg-[#0D1B3E]/5 hover:-translate-y-0.5"
            >
              احجز اجتماعاً
            </a>
          </div>
        </div>

        {/* Hero collage — interactive floating composition */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="group relative">
            <span aria-hidden className="absolute -top-4 right-6 h-20 w-20 rounded-full bg-[#0D1B3E]/10 blur-2xl transition-all duration-700 group-hover:scale-125" />
            <span aria-hidden className="absolute -bottom-6 -left-4 h-28 w-28 rounded-full bg-[#0D1B3E]/15 blur-2xl transition-all duration-700 group-hover:-translate-x-2" />
            <span aria-hidden className="absolute right-2 top-10 h-3 w-3 rounded-full bg-[#0D1B3E] opacity-70 transition-transform duration-700 group-hover:translate-y-2" />
            <span aria-hidden className="absolute -left-1 top-1/3 h-2 w-2 rounded-full bg-[#0D1B3E]/50 transition-transform duration-700 group-hover:-translate-y-2" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#0D1B3E]/10 bg-gradient-to-br from-white to-[#F8F7F4] p-2 shadow-[0_40px_90px_-40px_rgba(13,27,62,0.5)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_50px_110px_-40px_rgba(13,27,62,0.6)]">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[1.5rem]">
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(13,27,62,0.06),transparent_75%)]" />
                <img
                  src={collageHero.url}
                  alt="شراكة بين أعمدة والمتجر الإلكتروني"
                  className="absolute inset-0 h-full w-full object-contain p-3 drop-shadow-[0_25px_30px_rgba(13,27,62,0.25)] transition-transform duration-700 group-hover:scale-[1.04] group-hover:-rotate-1"
                />
              </div>
              <div className="pointer-events-none absolute bottom-4 right-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0D1B3E]/10 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#0D1B3E] shadow-sm backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0D1B3E]" />
                  شراكة تشغيلية حقيقية
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROBLEMS
// ============================================================
function Problems() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#0D1B3E] p-8 text-right text-[#F8F7F4] sm:p-12 lg:p-14">
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
              <div className="absolute inset-0 soft-grid" style={{ filter: "invert(1)" }} />
            </div>
            <span className="relative text-xs tracking-[0.25em] text-[#F8F7F4]/60">تشخيص</span>
            <h2 className="relative mt-3 text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
              ما الذي يجعل المتاجر تتعثر؟
            </h2>
            <div className="relative mt-6 max-w-3xl space-y-3 text-base leading-loose text-[#F8F7F4]/85 sm:text-lg">
              <p>
                كثير من المتاجر لا تعاني من نقص المبيعات بقدر ما تعاني من <strong className="text-[#F8F7F4]">الفوضى التشغيلية</strong>.
              </p>
              <ul className="mt-3 space-y-2 text-[#F8F7F4]/80">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#F8F7F4]/60" />
                  طلبات تتأخر.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#F8F7F4]/60" />
                  مهام تتعطل.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#F8F7F4]/60" />
                  قرارات تتخذ دون بيانات.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#F8F7F4]/60" />
                  فرق تعمل دون وضوح.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#F8F7F4]/60" />
                  وأخطاء تتكرر يومياً دون معرفة أسبابها الحقيقية.
                </li>
              </ul>
              <p className="mt-4 text-[#F8F7F4]/70">
                ومع مرور الوقت يبدأ النمو بالتباطؤ رغم استمرار الجهد.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ============================================================
// PILLARS
// ============================================================
function Pillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setStarted(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="pillars" ref={sectionRef} className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-right">
            <span className="text-xs tracking-[0.25em] text-muted-foreground">الأعمدة الخمسة</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-snug sm:text-4xl">
              أعمدة النمو الخمسة
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-loose text-muted-foreground">
              نقوم بدراسة المتجر من خلال خمسة أعمدة رئيسية تمثل أساس أي عملية تشغيل ناجحة.
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
              {[88, 70, 95, 60, 78].map((h, i) => {
                const p = PILLARS[i];
                const Icon = PILLAR_ICONS[i];
                const heightPct = started ? h : 0;
                const isActive = active === i;
                return (
                  <div
                    key={p.t}
                    className="group relative flex h-full flex-1 flex-col items-center justify-end"
                  >
                    <div className="pointer-events-none absolute bottom-full z-10 mb-3 hidden w-64 -translate-y-0 rounded-xl border border-[#0D1B3E]/10 bg-white p-3 text-right opacity-0 shadow-[0_20px_50px_-25px_rgba(13,27,62,0.4)] transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 lg:block">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D1B3E]">
                          {p.t}
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1">
                        {p.lines.map((line, li) => (
                          <li key={li} className="flex items-start gap-1.5 text-xs leading-relaxed text-[#1F2937]">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#0D1B3E]/40" />
                            {line}
                          </li>
                        ))}
                      </ul>
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
                      opacity: started ? 1 : 0,
                      transform: started ? "translateY(0)" : "translateY(6px)",
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
              maxHeight: active !== null ? 280 : 0,
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
                <ul className="mt-2 space-y-1">
                  {PILLARS[active].lines.map((line, li) => (
                    <li key={li} className="flex items-start gap-2 text-sm leading-relaxed text-[#1F2937]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0D1B3E]/40" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="mt-3 text-center text-[11px] text-muted-foreground lg:hidden">
            اضغط على أي عمود لعرض الأسئلة
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// JOURNEY — 3-month roadmap
// ============================================================
function Journey() {
  return (
    <section id="journey" className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-right">
            <span className="text-xs tracking-[0.25em] text-muted-foreground">رحلة التغيير</span>
            <h2 className="mt-3 text-3xl font-bold leading-snug sm:text-4xl">
              رحلة الثلاثة أشهر
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-loose text-muted-foreground">
              نرافقك خلال ثلاثة أشهر من التشخيص إلى التثبيت.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {JOURNEY.map((j, i) => (
            <Reveal key={j.month} delay={i * 120}>
              <div className="relative h-full rounded-2xl border border-[#0D1B3E]/10 bg-[#F8F7F4] p-6 transition hover:border-[#0D1B3E]/25 hover:bg-white sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0D1B3E] text-[10px] font-bold text-[#F8F7F4]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs tracking-[0.2em] text-muted-foreground">{j.month}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#0D1B3E]">{j.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {j.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed text-[#1F2937]">
                      <ICheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0D1B3E]/70" />
                      {item}
                    </li>
                  ))}
                </ul>
                {j.close && (
                  <p className="mt-5 border-t border-[#0D1B3E]/10 pt-4 text-sm leading-relaxed text-muted-foreground">
                    {j.close}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SYSTEM SERVICE
// ============================================================
function SystemService() {
  return (
    <section id="system" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="text-right">
              <span className="text-xs tracking-[0.25em] text-muted-foreground">خدمة مميزة</span>
              <h2 className="mt-3 text-3xl font-bold leading-snug sm:text-4xl">
                خدمة بناء النظام التشغيلي
              </h2>
              <p className="mt-4 text-base leading-loose text-muted-foreground">
                من أكثر الخدمات تميزاً في {BRAND_AR}.
              </p>
              <p className="mt-4 text-base leading-loose text-muted-foreground">
                نقوم ببناء نظام تشغيلي داخلي خاص بالمتجر يساعد على تنظيم العمل اليومي وإدارة العمليات
                بطريقة واضحة وسهلة.
              </p>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {SYSTEM_FEATURES.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-xl border border-[#0D1B3E]/10 bg-white px-3.5 py-2.5 text-sm text-[#1F2937]"
                  >
                    <ICheck className="h-4 w-4 shrink-0 text-[#0D1B3E]/70" />
                    {f}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-loose text-muted-foreground">
                ليس مجرد ملف أو دليل إجرائي. بل بيئة تشغيل متكاملة مصممة لتناسب طريقة عمل متجرك
                واحتياجات فريقك.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div aria-hidden className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(13,27,62,0.08),transparent_70%)]" />
            <div className="grid gap-5 sm:grid-cols-2">
              {SERVICE_VISUALS.map((v, i) => (
                <Reveal
                  key={v.t}
                  delay={i * 120}
                  className={i === 1 ? "sm:mt-10" : ""}
                >
                  <VisualCard src={v.src} title={v.t} rotate={v.rotate} />
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
// OUTCOMES
// ============================================================
function Outcomes() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="text-right">
            <h2 className="text-3xl font-bold leading-snug sm:text-4xl">
              ماذا ستحصل عليه؟
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="flex items-start gap-3 rounded-xl border border-[#0D1B3E]/10 bg-[#F8F7F4] p-4 transition hover:border-[#0D1B3E]/30 hover:bg-white">
                <span className="mt-0.5 inline-grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0D1B3E] text-[#F8F7F4]">
                  <ICheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-[#1F2937] sm:text-base">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// WHY
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
                لماذا أعمدة؟
              </h2>
              <p className="relative mt-5 max-w-xl text-base leading-loose text-[#F8F7F4]/85 sm:text-lg">
                لأننا نؤمن أن النمو الحقيقي لا يبدأ من زيادة الإنفاق.
              </p>
              <p className="relative mt-4 max-w-xl text-base leading-loose text-[#F8F7F4]/80 sm:text-lg">
                بل يبدأ من بناء أساس قوي يستطيع المتجر الاعتماد عليه. عندما تصبح العمليات أوضح،
                والقرارات أدق، والمسؤوليات محددة، يصبح النمو نتيجة طبيعية للعمل المنظم.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full">
              <div aria-hidden className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(13,27,62,0.10),transparent_70%)]" />
              <VisualCard src={WHY_VISUAL.src} title={WHY_VISUAL.t} rotate="rotate-1" />
            </div>
          </Reveal>
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
                ابدأ رحلة التغيير
              </h2>
              <p className="mt-5 max-w-md text-base leading-loose text-muted-foreground">
                إذا كنت تبحث عن فهم أعمق لمتجرك وبناء نظام يساعدك على النمو بثقة أكبر، فنحن جاهزون
                للبدء معك.
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
