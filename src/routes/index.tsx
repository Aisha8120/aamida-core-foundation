import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أعمدة | Aamida — Ecommerce Operations Agency" },
      { name: "description", content: "نحوّل بيانات متجرك إلى خطة تشغيل واضحة للنمو." },
    ],
  }),
  component: LandingPage,
});

// ============================================================
// Easy-to-edit config
// ============================================================
const WHATSAPP_NUMBER = "966XXXXXXXXX"; // <-- change here

// ============================================================
// Translations  (CONTENT UNCHANGED)
// ============================================================
type Lang = "ar" | "en";

const T = {
  ar: {
    dir: "rtl",
    brand: "أعمدة",
    nav: {
      about: "من نحن",
      program: "البرنامج",
      pillars: "الأعمدة الخمسة",
      process: "رحلة العمل",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
    },
    cta: { book: "احجز استشارتك", whatsapp: "واتساب" },
    langSwitch: "EN",
    hero: {
      tag: "وكالة تشغيل وتطوير المتاجر الإلكترونية",
      title: "نحوّل بيانات متجرك إلى خطة تشغيل واضحة للنمو",
      slogan: "نبني أساس التشغيل لنموٍ مستدام",
      desc: "في أعمدة، ندرس واقع المتجر من الداخل، نحلل العمليات، الطلبات، العملاء، المرتجعات، والتسويق، ثم نبني خطة تطوير تشغيلية قابلة للتنفيذ والمتابعة.",
      ctaBook: "احجز استشارتك",
      ctaWa: "تواصل عبر واتساب",
      kpis: [
        { l: "تحسّن في زمن التنفيذ", v: "−38%" },
        { l: "انخفاض المرتجعات", v: "−24%" },
        { l: "رضا العملاء", v: "+31%" },
        { l: "كفاءة العمليات", v: "+46%" },
      ],
      pillarsMini: ["الطلبات", "العملاء", "العمليات", "المرتجعات", "التسويق"],
    },
    problem: {
      title: "عندما تنمو المبيعات دون نظام واضح، تبدأ الفجوات التشغيلية بالظهور",
      items: [
        "تأخر تنفيذ الطلبات",
        "ارتفاع المرتجعات",
        "انخفاض رضا العملاء",
        "ضعف التنسيق الداخلي",
        "قرارات غير مبنية على مؤشرات",
        "صعوبة معرفة سبب المشكلة",
      ],
    },
    diag: {
      title: "نبدأ من التشخيص، لا من التخمين",
      desc: "قبل تقديم أي توصية، نحلل واقع المتجر من خلال بياناته، إجراءاته، رحلة العميل، أداء الفريق، ومؤشرات التشغيل، حتى نفهم الأسباب الحقيقية خلف التحديات.",
      cards: [
        { t: "نجمع البيانات", d: "نفهم وضع المتجر، العمليات، الطلبات، العملاء، والمرتجعات." },
        { t: "نحلل الفجوات", d: "نحدد نقاط الخلل، أسباب التعطل، وفرص التحسين." },
        { t: "نبني خطة تشغيل", d: "نحوّل التحليل إلى أولويات واضحة وخطوات قابلة للتنفيذ." },
      ],
    },
    about: {
      title: "أعمدة: شريكك التشغيلي لبناء متجر أكثر كفاءة",
      text: "أعمدة وكالة متخصصة في تشغيل وتطوير المتاجر الإلكترونية. نؤمن أن النمو لا يبدأ من زيادة الإنفاق التسويقي فقط، بل من بناء منظومة تشغيلية قادرة على استيعاب هذا النمو وتحويله إلى تجربة عميل أفضل وربحية أكثر استقراراً.",
      close: "لكل متجر ناجح أعمدة يرتكز عليها، ومهمتنا هي بناء هذه الأعمدة وتعزيزها.",
      visionLabel: "رؤيتنا",
      vision: "أن نكون الشريك التشغيلي الأول للمتاجر الإلكترونية في المنطقة.",
      missionLabel: "رسالتنا",
      mission: "تمكين المتاجر الإلكترونية من تحقيق نمو مستدام عبر تطوير وتحسين أساسها التشغيلي.",
    },
    program: {
      title: "برنامج أعمدة التشغيلي",
      sub: "برنامج تطوير وتشغيل المتاجر الإلكترونية لمدة 3 أشهر",
      desc: "برنامج مصمم لتحليل المتجر، تشخيص التحديات، بناء خطة تشغيل، ثم متابعة تنفيذ التحسينات خلال فترة واضحة وقابلة للقياس.",
    },
    timeline: {
      title: "مراحل البرنامج",
      includes: "يشمل",
      outputs: "المخرجات",
      phases: [
        {
          n: "01",
          name: "التأسيس والتشخيص",
          period: "الشهر الأول",
          inc: [
            "تحليل الوضع الحالي للمتجر",
            "مراجعة الهيكل التشغيلي",
            "دراسة رحلة العميل",
            "تحليل الطلبات والتنفيذ",
            "دراسة خدمة العملاء",
            "تحليل المرتجعات والاستبدال",
            "مراجعة مؤشرات الأداء",
            "تحديد التحديات الرئيسية",
            "تحديد فرص التحسين",
          ],
          out: ["تقرير تشخيصي شامل", "خريطة الفجوات", "نقاط القوة", "أولويات التنفيذ", "خطة تشغيل أولية"],
        },
        {
          n: "02",
          name: "المتابعة والتطوير",
          period: "الشهر الثاني والثالث",
          inc: [
            "متابعة تنفيذ التوصيات",
            "مراجعة التقدم بشكل دوري",
            "تحليل النتائج",
            "دعم اتخاذ القرار",
            "معالجة التحديات الجديدة",
            "تحسين الإجراءات التشغيلية",
            "تطوير الأداء العام للمتجر",
          ],
          out: ["توصيات دورية", "متابعة تقدم", "تحسينات تشغيلية", "مؤشرات قابلة للقياس"],
        },
      ],
    },
    outputs: {
      title: "ماذا ستحصل عليه؟",
      items: [
        "تقرير تشخيصي شامل",
        "تحليل نقاط القوة",
        "تحليل فرص التحسين",
        "التحديات التشغيلية الرئيسية",
        "خطة تطوير وتشغيل",
        "أولويات التنفيذ",
        "متابعة وتوجيه خلال فترة البرنامج",
        "توصيات قابلة للقياس",
      ],
    },
    pillars: {
      title: "نقرأ المتجر من خلال خمسة أعمدة تشغيلية",
      labels: { what: "ماذا نحلل؟", indicators: "المؤشرات المرتبطة", impact: "أثره على النمو" },
      items: [
        { name: "الطلبات", desc: "نحلل دورة الطلب من الشراء حتى التسليم، ونحدد نقاط التأخير والأخطاء التشغيلية.", what: "دورة الطلب الكاملة، خطوات التنفيذ، نقاط التأخير.", ind: "زمن التنفيذ، نسبة الإلغاء، دقة الشحن.", imp: "تسريع التسليم وتقليل الأخطاء." },
        { name: "العملاء", desc: "نراجع تجربة العميل، جودة الخدمة، سرعة الاستجابة، ومستوى الرضا.", what: "نقاط الاتصال، رحلة العميل، جودة الردود.", ind: "زمن الرد، CSAT، معدل التكرار.", imp: "ولاء أعلى وحياة عميل أطول." },
        { name: "العمليات", desc: "نقيّم الإجراءات الداخلية، توزيع المسؤوليات، وضوح المهام، ونقاط الهدر.", what: "الإجراءات، الأدوار، البروتوكولات الداخلية.", ind: "إنتاجية الفريق، نقاط الازدواجية، الهدر.", imp: "تشغيل أنظف وكفاءة أعلى." },
        { name: "المرتجعات", desc: "نحلل أسباب المرتجعات والاستبدال وأثرها على الربحية وتجربة العميل.", what: "أسباب الإرجاع، الأنماط، التكاليف.", ind: "نسبة المرتجعات، تكلفة الاستبدال.", imp: "ربحية أكثر استقراراً." },
        { name: "التسويق", desc: "نربط النمو التسويقي بالجاهزية التشغيلية لضمان توسع متوازن.", what: "العلاقة بين الحملات والقدرة التشغيلية.", ind: "CAC، ROAS، جاهزية التنفيذ.", imp: "توسع متوازن دون انهيار التشغيل." },
      ],
    },
    fit: {
      title: "هل يناسبك برنامج أعمدة؟",
      items: [
        "إذا كان متجرك يبيع لكن التنفيذ غير منظم.",
        "إذا كانت المرتجعات أو الشكاوى تتكرر.",
        "إذا كان فريقك يعمل دون إجراءات واضحة.",
        "إذا كنت تريد التوسع لكن لا تعرف هل متجرك جاهز.",
        "إذا كانت قراراتك تعتمد على الانطباع أكثر من المؤشرات.",
        "إذا كنت تريد خطة تشغيل واضحة بدل التجارب المتكررة.",
      ],
    },
    why: {
      title: "لأن القرار التشغيلي الصحيح يبدأ من فهم ما يحدث داخل المتجر",
      items: [
        "لا نعتمد على الانطباعات.",
        "نقرأ التحديات من داخل العمليات.",
        "نربط التسويق بالتشغيل.",
        "نحدد الأولويات بدل تشتيت الجهود.",
        "نتابع التنفيذ وليس التقرير فقط.",
        "نساعدك على بناء متجر أكثر استقراراً.",
      ],
    },
    process: {
      title: "من أول تواصل إلى خطة تشغيل قابلة للتنفيذ",
      steps: [
        "تواصل أولي",
        "اجتماع تعريفي",
        "فهم احتياج المتجر",
        "توقيع الاتفاقية",
        "جمع البيانات",
        "التحليل والتشخيص",
        "بناء الخطة",
        "المتابعة والتطوير",
        "قياس النتائج",
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "هل تعملون مع جميع المتاجر؟", a: "نعمل مع المتاجر الإلكترونية في مختلف مراحل نموها، خاصة المتاجر التي ترغب في تحسين أدائها التشغيلي، تنظيم عملياتها، وتهيئة بنيتها الداخلية للنمو والتوسع." },
        { q: "هل تقدمون التنفيذ؟", a: "يركز البرنامج على التحليل والتوجيه والمتابعة التشغيلية، ويمكن تحديد نطاق التنفيذ حسب احتياج كل متجر." },
        { q: "كم مدة البرنامج؟", a: "ثلاثة أشهر تشمل شهراً للتشخيص والتأسيس وشهرين للمتابعة والتطوير." },
        { q: "هل يمكن تمديد المتابعة؟", a: "نعم، يمكن الاتفاق على برامج متابعة إضافية بعد انتهاء البرنامج الأساسي." },
        { q: "متى تظهر النتائج؟", a: "يختلف ذلك حسب وضع المتجر وطبيعة التحديات، والهدف هو تحقيق تحسينات تشغيلية قابلة للقياس خلال فترة العمل." },
      ],
    },
    form: {
      title: "احجز استشارتك الأولية",
      desc: "أرسل لنا بيانات متجرك، وسنراجعها مبدئياً لفهم احتياجك وتحديد الخطوة الأنسب.",
      labels: {
        name: "الاسم الكامل",
        store: "اسم المتجر",
        link: "رابط المتجر",
        phone: "رقم الجوال",
        email: "البريد الإلكتروني",
        stage: "مرحلة المتجر",
        challenge: "أبرز تحدي تشغيلي",
        team: "هل يوجد فريق عمل؟",
        orders: "متوسط الطلبات الشهرية (اختياري)",
        message: "رسالة إضافية",
      },
      stages: ["متجر جديد", "متجر قائم", "متجر في مرحلة نمو", "متجر يحتاج إعادة تنظيم"],
      challenges: ["الطلبات", "خدمة العملاء", "المرتجعات", "العمليات", "التسويق", "غير ذلك"],
      yesNo: ["نعم", "لا"],
      submit: "إرسال طلب الاستشارة",
      select: "اختر",
      waIntro: "مرحباً أعمدة،\nأرغب بحجز استشارة أولية.",
      waLabels: {
        name: "الاسم",
        store: "اسم المتجر",
        link: "رابط المتجر",
        phone: "رقم الجوال",
        email: "البريد الإلكتروني",
        stage: "مرحلة المتجر",
        challenge: "أبرز تحدي تشغيلي",
        team: "هل يوجد فريق عمل؟",
        orders: "متوسط الطلبات الشهرية",
        message: "رسالة إضافية",
      },
    },
    finalCta: {
      title: "هل تعرف ما الذي يعيق نمو متجرك فعلاً؟",
      desc: "احجز استشارتك الأولية، أو تواصل معنا مباشرة عبر واتساب، ودعنا نساعدك على قراءة واقع متجرك وبناء أساس تشغيلي أقوى للنمو.",
    },
    footer: {
      slogan: "نبني أساس التشغيل لنموٍ مستدام",
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    dir: "ltr",
    brand: "Aamida",
    nav: {
      about: "About",
      program: "Program",
      pillars: "Five Pillars",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
    },
    cta: { book: "Book Consultation", whatsapp: "WhatsApp" },
    langSwitch: "عربي",
    hero: {
      tag: "Ecommerce operations & development agency",
      title: "We turn your store data into a clear operating plan for growth",
      slogan: "Building the operational foundation for sustainable growth",
      desc: "At Aamida, we study your ecommerce store from the inside, analyze operations, orders, customers, returns, and marketing readiness, then build an actionable operational improvement plan with follow-up.",
      ctaBook: "Book Your Consultation",
      ctaWa: "Contact on WhatsApp",
      kpis: [
        { l: "Fulfillment time", v: "−38%" },
        { l: "Returns reduction", v: "−24%" },
        { l: "Customer satisfaction", v: "+31%" },
        { l: "Operational efficiency", v: "+46%" },
      ],
      pillarsMini: ["Orders", "Customers", "Operations", "Returns", "Marketing"],
    },
    problem: {
      title: "When sales grow without a clear system, operational gaps begin to appear",
      items: [
        "Delayed order fulfillment",
        "Higher returns",
        "Lower customer satisfaction",
        "Weak internal coordination",
        "Decisions not based on indicators",
        "Difficulty identifying the real cause",
      ],
    },
    diag: {
      title: "We start with diagnosis, not assumptions",
      desc: "Before giving recommendations, we analyze the store's data, processes, customer journey, team performance, and operational indicators to understand the real causes behind the challenges.",
      cards: [
        { t: "Collect data", d: "We understand the store, operations, orders, customers, and returns." },
        { t: "Analyze gaps", d: "We identify breakdown points, root causes, and improvement opportunities." },
        { t: "Build an operating plan", d: "We turn analysis into clear priorities and actionable steps." },
      ],
    },
    about: {
      title: "Aamida: Your operational partner for building a more efficient store",
      text: "Aamida is an agency specialized in operating and developing ecommerce stores. We believe growth does not begin with increasing marketing spend alone, but with building an operational system capable of absorbing growth and turning it into a better customer experience and more stable profitability.",
      close: "Every successful store stands on strong pillars. Our mission is to build and strengthen them.",
      visionLabel: "Vision",
      vision: "To become the leading operational partner for ecommerce stores in the region.",
      missionLabel: "Mission",
      mission: "To enable ecommerce stores to achieve sustainable growth by improving and developing their operational foundation.",
    },
    program: {
      title: "Aamida Operations Program",
      sub: "A 3-month ecommerce operations development program",
      desc: "A program designed to analyze the store, diagnose challenges, build an operating plan, and follow up on improvements within a clear and measurable period.",
    },
    timeline: {
      title: "Program phases",
      includes: "Includes",
      outputs: "Outputs",
      phases: [
        {
          n: "01",
          name: "Foundation & Diagnosis",
          period: "Month 1",
          inc: [
            "Analyze the store's current state",
            "Review the operational structure",
            "Study the customer journey",
            "Analyze orders and fulfillment",
            "Review customer service",
            "Analyze returns and exchanges",
            "Review performance indicators",
            "Identify key challenges",
            "Identify improvement opportunities",
          ],
          out: ["Comprehensive diagnostic report", "Gap map", "Strengths", "Execution priorities", "Initial operating plan"],
        },
        {
          n: "02",
          name: "Follow-up & Development",
          period: "Months 2 & 3",
          inc: [
            "Follow up on implementation",
            "Periodic progress reviews",
            "Analyze results",
            "Support decision making",
            "Address new challenges",
            "Improve operational procedures",
            "Develop overall store performance",
          ],
          out: ["Periodic recommendations", "Progress follow-up", "Operational improvements", "Measurable indicators"],
        },
      ],
    },
    outputs: {
      title: "What you will receive",
      items: [
        "Comprehensive diagnostic report",
        "Strengths analysis",
        "Improvement opportunities analysis",
        "Key operational challenges",
        "Development and operating plan",
        "Execution priorities",
        "Guidance throughout the program",
        "Measurable recommendations",
      ],
    },
    pillars: {
      title: "We read the store through five operational pillars",
      labels: { what: "What we analyze", indicators: "Related indicators", impact: "Impact on growth" },
      items: [
        { name: "Orders", desc: "We analyze the order lifecycle from purchase to delivery, identifying delay points and operational errors.", what: "Full order cycle, fulfillment steps, delay points.", ind: "Fulfillment time, cancellation rate, shipping accuracy.", imp: "Faster delivery and fewer errors." },
        { name: "Customers", desc: "We review customer experience, service quality, response speed, and satisfaction levels.", what: "Touchpoints, customer journey, reply quality.", ind: "Reply time, CSAT, repeat rate.", imp: "Higher loyalty and longer lifetime." },
        { name: "Operations", desc: "We assess internal procedures, responsibility distribution, task clarity, and waste points.", what: "Procedures, roles, internal protocols.", ind: "Team productivity, duplications, waste.", imp: "Cleaner operations and higher efficiency." },
        { name: "Returns", desc: "We analyze return reasons and their impact on profitability and customer experience.", what: "Return reasons, patterns, costs.", ind: "Return rate, exchange cost.", imp: "More stable profitability." },
        { name: "Marketing", desc: "We connect marketing growth with operational readiness to ensure balanced expansion.", what: "Campaign vs. operational capacity.", ind: "CAC, ROAS, fulfillment readiness.", imp: "Balanced expansion without ops collapse." },
      ],
    },
    fit: {
      title: "Is the Aamida program right for you?",
      items: [
        "Your store sells, but execution is disorganized.",
        "Returns or complaints keep repeating.",
        "Your team works without clear procedures.",
        "You want to expand but don't know if your store is ready.",
        "Your decisions rely on intuition more than indicators.",
        "You want a clear operating plan instead of repeated experiments.",
      ],
    },
    why: {
      title: "Because the right operational decision begins by understanding what happens inside the store",
      items: [
        "We don't rely on impressions.",
        "We read challenges from inside operations.",
        "We connect marketing with operations.",
        "We define priorities instead of scattering efforts.",
        "We follow up on execution, not just reports.",
        "We help you build a more stable store.",
      ],
    },
    process: {
      title: "From first contact to an actionable operating plan",
      steps: [
        "Initial contact",
        "Intro meeting",
        "Understand store needs",
        "Sign the agreement",
        "Collect data",
        "Analysis & diagnosis",
        "Build the plan",
        "Follow-up & development",
        "Measure results",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Do you work with all stores?", a: "We work with ecommerce stores at different growth stages, particularly stores looking to improve operational performance, organize processes, and prepare internal structure for growth and expansion." },
        { q: "Do you handle execution?", a: "The program focuses on analysis, guidance, and operational follow-up. Execution scope can be defined per store." },
        { q: "How long is the program?", a: "Three months — one month for diagnosis and foundation, and two months for follow-up and development." },
        { q: "Can follow-up be extended?", a: "Yes, additional follow-up packages can be agreed after the core program ends." },
        { q: "When do results appear?", a: "It varies by store and challenge. The goal is to achieve measurable operational improvements during the engagement." },
      ],
    },
    form: {
      title: "Book your initial consultation",
      desc: "Send us your store details and we'll review them initially to understand your needs and recommend the next step.",
      labels: {
        name: "Full name",
        store: "Store name",
        link: "Store link",
        phone: "Mobile number",
        email: "Email",
        stage: "Store stage",
        challenge: "Main operational challenge",
        team: "Do you have a team?",
        orders: "Average monthly orders (optional)",
        message: "Additional message",
      },
      stages: ["New store", "Established store", "Store in growth stage", "Store needing reorganization"],
      challenges: ["Orders", "Customer service", "Returns", "Operations", "Marketing", "Other"],
      yesNo: ["Yes", "No"],
      submit: "Send consultation request",
      select: "Select",
      waIntro: "Hello Aamida,\nI would like to book an initial consultation.",
      waLabels: {
        name: "Full name",
        store: "Store name",
        link: "Store link",
        phone: "Mobile number",
        email: "Email",
        stage: "Store stage",
        challenge: "Main operational challenge",
        team: "Do you have a team?",
        orders: "Average monthly orders",
        message: "Additional message",
      },
    },
    finalCta: {
      title: "Do you know what's truly holding your store back?",
      desc: "Book your initial consultation or contact us directly on WhatsApp, and let us help you understand your store's reality and build a stronger operational foundation for growth.",
    },
    footer: {
      slogan: "Building the operational foundation for sustainable growth",
      rights: "All rights reserved",
    },
  },
};
type TT = typeof T.ar;

// ============================================================
// Helpers
// ============================================================
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

// IntersectionObserver reveal hook
function useReveal<T extends HTMLElement = HTMLDivElement>(opts: IntersectionObserverInit = { threshold: 0.15 }) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      });
    }, opts);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children, className = "", as = "div", delay = 0, variant = "up",
}: {
  children: ReactNode; className?: string; as?: "div" | "section" | "li" | "ul";
  delay?: number; variant?: "up" | "scale";
}) {
  const ref = useReveal<HTMLDivElement>();
  const cls = variant === "scale" ? "reveal-scale" : "reveal";
  const Tag = as as any;
  return (
    <Tag ref={ref as any} className={`${cls} ${className}`} style={{ ["--reveal-delay" as any]: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

// ============================================================
// Icons (outline)
// ============================================================
const Icon = ({ d, className = "h-5 w-5" }: { d: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={d} />
  </svg>
);

const I = {
  orders: "M3 7h13l2 4h3v6h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3V7Z",
  customers: "M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2 M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M21 21v-2a4 4 0 0 0-3-3.87 M16 4.13A4 4 0 0 1 16 12",
  ops: "M12 2v3 M12 19v3 M4.2 4.2l2.1 2.1 M17.7 17.7l2.1 2.1 M2 12h3 M19 12h3 M4.2 19.8l2.1-2.1 M17.7 6.3l2.1-2.1 M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
  returns: "M3 7v6h6 M3 13a9 9 0 1 0 3-6.7L3 9",
  marketing: "M3 11l18-7-3 18-6-6-3 3v-5l-6-3Z",
  check: "M5 12l4 4 10-10",
  whatsapp: "M20.5 12a8.5 8.5 0 0 1-12.7 7.4L3 21l1.7-4.6A8.5 8.5 0 1 1 20.5 12Z M8.5 9.5c.4 1.7 1.5 3.3 3 4.5 1.2 1 2.6 1.5 3.5 1.5.6 0 1.1-.2 1.4-.5l.6-.7c.2-.2.2-.5 0-.7l-1.4-1.2c-.2-.2-.5-.2-.7 0l-.5.5c-.7-.2-1.4-.7-2-1.3-.6-.6-1.1-1.3-1.3-2l.5-.5c.2-.2.2-.5 0-.7L10.4 7c-.2-.2-.5-.2-.7 0l-.7.6c-.3.3-.5.8-.5 1.4",
  arrow: "M5 12h14 M13 5l7 7-7 7",
  chevron: "M6 9l6 6 6-6",
  menu: "M4 7h16 M4 12h16 M4 17h16",
  close: "M6 6l12 12 M18 6L6 18",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7l1-8Z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z",
  chart: "M4 20V10 M10 20V4 M16 20v-7 M22 20H2",
  target: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
  layers: "M12 3l9 5-9 5-9-5 9-5Z M3 13l9 5 9-5 M3 18l9 5 9-5",
  search: "M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z M21 21l-4.3-4.3",
  doc: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z M14 3v6h6 M9 14h6 M9 18h6",
  spark: "M12 3v4 M12 17v4 M3 12h4 M17 12h4 M5.6 5.6l2.8 2.8 M15.6 15.6l2.8 2.8 M5.6 18.4l2.8-2.8 M15.6 8.4l2.8-2.8",
};

const pillarIcons = [I.orders, I.customers, I.ops, I.returns, I.marketing];

// ============================================================
// Page
// ============================================================
function LandingPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const t = T[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  return (
    <div dir={t.dir} className="relative min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="relative">
        <Hero t={t} />
        <Problem t={t} />
        <Diagnosis t={t} />
        <About t={t} />
        <Program t={t} />
        <Timeline t={t} />
        <Outputs t={t} />
        <Pillars t={t} />
        <Fit t={t} />
        <Why t={t} />
        <Process t={t} />
        <FAQ t={t} />
        <BookingForm t={t} lang={lang} />
        <FinalCta t={t} />
      </main>
      <Footer t={t} />
      <FloatingWa t={t} />
    </div>
  );
}

// ============================================================
// Header
// ============================================================
function Header({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: TT }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", l: t.nav.about },
    { id: "program", l: t.nav.program },
    { id: "pillars", l: t.nav.pillars },
    { id: "process", l: t.nav.process },
    { id: "faq", l: t.nav.faq },
    { id: "contact", l: t.nav.contact },
  ];
  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

  return (
    <header className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 ${scrolled ? "glass-strong" : "border border-transparent"}`}>
          <a href="#top" className="flex items-center gap-2.5 group">
            <BrandMark />
            <span className="text-lg font-semibold tracking-tight text-gradient">{t.brand}</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition-all hover:text-foreground hover:bg-white/5">
                {l.l}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button onClick={toggleLang} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-white/10">
              {t.langSwitch}
            </button>
            <a href="#contact" className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-primary to-[oklch(0.6_0.18_28)] px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-[0_0_20px_-2px_oklch(0.65_0.18_28_/_0.6)] transition hover:shadow-[0_0_30px_-2px_oklch(0.7_0.2_28_/_0.8)]">
              {t.cta.book}
              <Icon d={I.arrow} className="h-3.5 w-3.5 rtl:rotate-180" />
            </a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="rounded-md border border-white/10 bg-white/5 p-2 lg:hidden" aria-label="menu">
            <Icon d={open ? I.close : I.menu} />
          </button>
        </div>

        {open && (
          <div className="mt-2 lg:hidden glass-strong rounded-2xl p-3">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-white/5">
                  {l.l}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2 px-1">
                <button onClick={toggleLang} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs">
                  {t.langSwitch}
                </button>
                <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                  {t.cta.book}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function BrandMark() {
  return (
    <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.4_0.12_28)] to-[oklch(0.25_0.06_28)] border border-white/10 shadow-[inset_0_1px_0_oklch(1_0_0_/_0.1),0_0_18px_-4px_oklch(0.6_0.18_28_/_0.6)]">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M5 20V8M12 20V4M19 20v-9" />
        <path d="M3 20h18" />
      </svg>
    </div>
  );
}

// ============================================================
// Section wrapper
// ============================================================
function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
      </span>
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-5 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-5xl text-gradient">
      {children}
    </h2>
  );
}

// ============================================================
// HERO
// ============================================================
function Hero({ t }: { t: TT }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.2_28_/_0.35),transparent_70%)] blur-3xl" />
      <Particles />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="relative z-10">
          <Reveal>
            <SectionTag>{t.hero.tag}</SectionTag>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[64px]">
              <span className="text-gradient">{t.hero.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 text-lg text-gradient-blue">{t.hero.slogan}</p>
          </Reveal>
          <Reveal delay={340}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{t.hero.desc}</p>
          </Reveal>
          <Reveal delay={460}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-primary to-[oklch(0.58_0.18_28)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-4px_oklch(0.65_0.18_28_/_0.7)] transition-all hover:shadow-[0_0_45px_-4px_oklch(0.72_0.2_28_/_0.9)] hover:-translate-y-0.5">
                <span>{t.hero.ctaBook}</span>
                <Icon d={I.arrow} className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </a>
              <a href={waLink(t.form.waIntro)} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:bg-white/10 hover:-translate-y-0.5">
                <Icon d={I.whatsapp} className="h-4 w-4" />
                {t.hero.ctaWa}
              </a>
            </div>
          </Reveal>

          <Reveal delay={620}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {t.hero.kpis.map((k, i) => (
                <div key={i} className="glass rounded-xl p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k.l}</div>
                  <div className="mt-1 text-xl font-semibold text-gradient-blue">{k.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={200}>
          <OperationalCore labels={t.hero.pillarsMini} />
        </Reveal>
      </div>

      <div className="hairline relative mx-auto h-px max-w-7xl" />
    </section>
  );
}

function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        dx: (Math.random() - 0.5) * 80,
        dy: (Math.random() - 0.5) * 80,
        d: 8 + Math.random() * 10,
        delay: Math.random() * 6,
        size: 1 + Math.random() * 2,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((p) => (
        <span
          key={p.i}
          className="absolute rounded-full bg-primary/70"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            ["--dx" as any]: `${p.dx}px`,
            ["--dy" as any]: `${p.dy}px`,
            animation: `particle-drift ${p.d}s ease-in-out ${p.delay}s infinite`,
            boxShadow: "0 0 8px oklch(0.7 0.18 28 / 0.7)",
          }}
        />
      ))}
    </div>
  );
}

function OperationalCore({ labels }: { labels: string[] }) {
  // 5 nodes on a pentagon, connected to a central hub
  const cx = 200, cy = 200, r = 130;
  const nodes = labels.map((l, i) => {
    const a = (-Math.PI / 2) + (i * 2 * Math.PI) / 5;
    return { l, x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), icon: pillarIcons[i] };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* glow */}
      <div className="pointer-events-none absolute inset-6 rounded-full bg-[radial-gradient(closest-side,oklch(0.5_0.2_28_/_0.35),transparent_70%)] blur-2xl animate-pulse-glow" />
      {/* rotating ring */}
      <div className="absolute inset-0 animate-spin-slow opacity-50">
        <div className="absolute inset-4 rounded-full border border-dashed border-white/10" />
        <div className="absolute inset-12 rounded-full border border-white/5" />
      </div>

      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.85 0.16 28)" />
            <stop offset="60%" stopColor="oklch(0.55 0.18 28)" />
            <stop offset="100%" stopColor="oklch(0.25 0.08 28)" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.7 0.18 28 / 0)" />
            <stop offset="50%" stopColor="oklch(0.75 0.18 28 / 0.9)" />
            <stop offset="100%" stopColor="oklch(0.7 0.18 28 / 0)" />
          </linearGradient>
        </defs>

        {/* connecting lines */}
        {nodes.map((n, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="url(#lineGrad)"
            strokeWidth="1.4"
            className="net-line"
            style={{ animationDelay: `${300 + i * 180}ms` }}
          />
        ))}
        {/* perimeter pentagon */}
        <polygon
          points={nodes.map((n) => `${n.x},${n.y}`).join(" ")}
          fill="none"
          stroke="oklch(0.6 0.1 28 / 0.25)"
          strokeWidth="1"
          strokeDasharray="3 5"
          className="net-line"
          style={{ animationDelay: "1.3s" }}
        />

        {/* center hub */}
        <circle cx={cx} cy={cy} r="34" fill="url(#hubGrad)" className="net-node" style={{ animationDelay: "200ms" }} />
        <circle cx={cx} cy={cy} r="34" fill="none" stroke="oklch(0.85 0.14 28 / 0.6)" strokeWidth="1" />
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fill="oklch(0.98 0 0)" style={{ letterSpacing: "0.18em" }}>
          AAMIDA
        </text>
      </svg>

      {/* node cards positioned absolutely */}
      {nodes.map((n, i) => (
        <div
          key={i}
          className="net-node absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${(n.x / 400) * 100}%`,
            top: `${(n.y / 400) * 100}%`,
            animationDelay: `${500 + i * 180}ms`,
          }}
        >
          <div className="group relative">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/30 blur-xl opacity-60 transition group-hover:opacity-100" />
            <div className="glass-strong glow-ring flex items-center gap-2 rounded-2xl px-3 py-2 animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-primary/40 to-transparent text-foreground">
                <Icon d={n.icon} className="h-4 w-4" />
              </span>
              <span className="text-[11px] font-medium text-foreground whitespace-nowrap">{n.l}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// PROBLEM
// ============================================================
function Problem({ t }: { t: TT }) {
  return (
    <Section>
      <div className="max-w-3xl">
        <Reveal><SectionTag>01 · Context</SectionTag></Reveal>
        <Reveal delay={120}><SectionTitle>{t.problem.title}</SectionTitle></Reveal>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.problem.items.map((it, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="group relative h-full overflow-hidden rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:glow-ring">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm leading-relaxed text-foreground">{it}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ============================================================
// DIAGNOSIS — intelligence system
// ============================================================
function Diagnosis({ t }: { t: TT }) {
  const icons = [I.search, I.chart, I.doc];
  return (
    <Section>
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl hairline" />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="max-w-2xl">
          <Reveal><SectionTag>02 · Approach</SectionTag></Reveal>
          <Reveal delay={120}><SectionTitle>{t.diag.title}</SectionTitle></Reveal>
          <Reveal delay={240}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.diag.desc}</p>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={200}>
          <DiagnosisVisual />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {t.diag.cards.map((c, i) => (
          <Reveal key={i} delay={i * 140}>
            <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1">
              <div className="absolute -top-px left-6 right-6 h-px hairline" />
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-primary/30 to-transparent text-foreground">
                  <Icon d={icons[i]} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">STEP 0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function DiagnosisVisual() {
  return (
    <div className="relative aspect-[5/4] w-full">
      <div className="absolute inset-0 rounded-3xl glass-strong p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_oklch(0.75_0.18_28)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Diagnostics · live</span>
          </div>
          <span className="text-[10px] text-muted-foreground">v.0 / scan</span>
        </div>

        {/* indicator chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["Orders", "Returns", "CSAT", "Ops", "ROAS"].map((l, i) => (
            <span key={l} className="animate-float rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-muted-foreground" style={{ animationDelay: `${i * 0.3}s` }}>
              {l}
            </span>
          ))}
        </div>

        {/* chart */}
        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
          <svg viewBox="0 0 300 120" className="h-28 w-full">
            <defs>
              <linearGradient id="areaG" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.7 0.18 28 / 0.6)" />
                <stop offset="100%" stopColor="oklch(0.7 0.18 28 / 0)" />
              </linearGradient>
            </defs>
            <path d="M0 90 L40 70 L80 78 L120 50 L160 60 L200 30 L240 42 L300 20 L300 120 L0 120 Z" fill="url(#areaG)" />
            <path d="M0 90 L40 70 L80 78 L120 50 L160 60 L200 30 L240 42 L300 20" fill="none" stroke="oklch(0.85 0.14 28)" strokeWidth="2" />
            {[
              [40, 70], [120, 50], [200, 30], [300, 20],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="oklch(0.95 0.06 28)" />
            ))}
          </svg>
        </div>

        {/* mini KPIs */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { l: "Gaps", v: "12" },
            { l: "Signals", v: "48" },
            { l: "Priorities", v: "6" },
          ].map((k, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-2 text-center">
              <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{k.l}</div>
              <div className="text-sm font-semibold text-foreground">{k.v}</div>
            </div>
          ))}
        </div>
      </div>
      {/* floating indicator card */}
      <div className="absolute -top-4 -right-4 hidden glass-strong glow-ring rounded-2xl p-3 animate-float sm:block">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/20 text-primary">
            <Icon d={I.spark} className="h-4 w-4" />
          </span>
          <div>
            <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Insight</div>
            <div className="text-xs font-medium text-foreground">+46% ops</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// ABOUT
// ============================================================
function About({ t }: { t: TT }) {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-3">
          <Reveal><SectionTag>{t.nav.about}</SectionTag></Reveal>
          <Reveal delay={120}><SectionTitle>{t.about.title}</SectionTitle></Reveal>
          <Reveal delay={240}><p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.about.text}</p></Reveal>
          <Reveal delay={340}>
            <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-base font-medium text-gradient-blue backdrop-blur-md">
              {t.about.close}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:col-span-2">
          <Reveal delay={200}>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Icon d={I.target} className="h-4 w-4 text-primary" />
                {t.about.visionLabel}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{t.about.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <div className="glass-strong glow-ring rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Icon d={I.bolt} className="h-4 w-4 text-primary" />
                {t.about.missionLabel}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{t.about.mission}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

// ============================================================
// PROGRAM
// ============================================================
function Program({ t }: { t: TT }) {
  return (
    <Section id="program">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl hairline" />
      <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal><SectionTag>{t.nav.program}</SectionTag></Reveal>
          <Reveal delay={120}><SectionTitle>{t.program.title}</SectionTitle></Reveal>
          <Reveal delay={240}><p className="mt-4 text-lg text-gradient-blue">{t.program.sub}</p></Reveal>
          <Reveal delay={340}><p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{t.program.desc}</p></Reveal>
        </div>
        <Reveal variant="scale" delay={200}>
          <div className="glass-strong rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Duration</span>
              <Icon d={I.layers} className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-6xl font-bold text-gradient">3</span>
              <span className="pb-2 text-sm text-muted-foreground">{t.dir === "rtl" ? "أشهر" : "months"}</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-primary to-[oklch(0.85_0.14_28)] shadow-[0_0_12px_oklch(0.7_0.18_28)]" />
            </div>
            <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>M1</span><span>M2</span><span>M3</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

// ============================================================
// TIMELINE — immersive journey
// ============================================================
function Timeline({ t }: { t: TT }) {
  return (
    <Section>
      <div className="max-w-3xl">
        <Reveal><SectionTag>03 · {t.timeline.title}</SectionTag></Reveal>
      </div>
      <div className="relative mt-14">
        {/* vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block" />
        <div className="grid gap-10 lg:grid-cols-2">
          {t.timeline.phases.map((p, idx) => (
            <Reveal key={p.n} delay={idx * 200} className={idx % 2 === 1 ? "lg:mt-24" : ""}>
              <div className="group relative overflow-hidden rounded-3xl glass-strong p-7 transition-all hover:-translate-y-1 hover:glow-ring lg:p-8">
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-bold text-gradient-blue">{p.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{p.name}</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.period}</span>
                  </div>
                </div>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.timeline.includes}</div>
                    <ul className="mt-3 space-y-2">
                      {p.inc.map((x, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <Icon d={I.check} className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.timeline.outputs}</div>
                    <ul className="mt-3 space-y-2">
                      {p.out.map((x, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-2 h-1 w-1 rounded-full bg-primary shadow-[0_0_6px_oklch(0.7_0.18_28)]" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ============================================================
// OUTPUTS — floating glass cards
// ============================================================
function Outputs({ t }: { t: TT }) {
  return (
    <Section>
      <div className="max-w-3xl">
        <Reveal><SectionTag>04 · Deliverables</SectionTag></Reveal>
        <Reveal delay={120}><SectionTitle>{t.outputs.title}</SectionTitle></Reveal>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.outputs.items.map((it, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="group relative h-full overflow-hidden rounded-2xl glass p-5 transition-all hover:-translate-y-1.5 hover:glow-ring">
              <div className="absolute inset-x-0 top-0 h-px hairline opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-primary/30 to-transparent text-foreground">
                  <Icon d={I.doc} className="h-4 w-4" />
                </div>
                <span className="text-sm leading-relaxed text-foreground">{it}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ============================================================
// PILLARS — rising foundation
// ============================================================
function Pillars({ t }: { t: TT }) {
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section id="pillars">
      <div className="max-w-3xl">
        <Reveal><SectionTag>05 · Five Pillars</SectionTag></Reveal>
        <Reveal delay={120}><SectionTitle>{t.pillars.title}</SectionTitle></Reveal>
      </div>

      <div ref={containerRef} className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {/* ground line */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px hairline opacity-60" />
        {t.pillars.items.map((p, i) => {
          const open = active === i;
          return (
            <div
              key={i}
              className={`pillar-rise ${visible ? "is-visible" : ""}`}
              style={{ ["--reveal-delay" as any]: `${i * 180}ms` }}
            >
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(open ? null : i)}
                className={`group relative h-full cursor-pointer overflow-hidden rounded-3xl p-6 transition-all duration-500 ${
                  open ? "glass-strong glow-ring -translate-y-2" : "glass hover:-translate-y-1"
                }`}
              >
                {/* glow base */}
                <div className={`absolute -bottom-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl transition-opacity duration-500 ${open ? "opacity-100" : "opacity-40"}`} />

                <div className="relative flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/40 to-transparent text-foreground shadow-[inset_0_1px_0_oklch(1_0_0_/_0.1)]">
                    <Icon d={pillarIcons[i]} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="relative mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>

                <div className={`relative grid overflow-hidden transition-all duration-500 ${open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="min-h-0 space-y-2.5 border-t border-white/10 pt-3 text-[11px]">
                    <Detail label={t.pillars.labels.what} value={p.what} />
                    <Detail label={t.pillars.labels.indicators} value={p.ind} />
                    <Detail label={t.pillars.labels.impact} value={p.imp} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <p className="mt-0.5 text-foreground">{value}</p>
    </div>
  );
}

// ============================================================
// FIT
// ============================================================
function Fit({ t }: { t: TT }) {
  return (
    <Section>
      <div className="max-w-3xl">
        <Reveal><SectionTag>06 · Fit</SectionTag></Reveal>
        <Reveal delay={120}><SectionTitle>{t.fit.title}</SectionTitle></Reveal>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {t.fit.items.map((it, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="flex h-full items-start gap-3 rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:glow-ring">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary/40 to-transparent text-foreground border border-white/10">
                <Icon d={I.check} className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed text-foreground">{it}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ============================================================
// WHY
// ============================================================
function Why({ t }: { t: TT }) {
  const icons = [I.search, I.layers, I.chart, I.target, I.bolt, I.shield];
  return (
    <Section>
      <div className="max-w-3xl">
        <Reveal><SectionTag>07 · Why Aamida</SectionTag></Reveal>
        <Reveal delay={120}><SectionTitle>{t.why.title}</SectionTitle></Reveal>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.why.items.map((it, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1">
              <Icon d={icons[i]} className="h-6 w-6 text-primary transition group-hover:scale-110" />
              <p className="mt-5 text-sm leading-relaxed text-foreground">{it}</p>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ============================================================
// PROCESS
// ============================================================
function Process({ t }: { t: TT }) {
  return (
    <Section id="process">
      <div className="max-w-3xl">
        <Reveal><SectionTag>08 · Process</SectionTag></Reveal>
        <Reveal delay={120}><SectionTitle>{t.process.title}</SectionTitle></Reveal>
      </div>

      <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {t.process.steps.map((s, i) => (
          <Reveal key={i} as="li" delay={i * 70}>
            <div className="group flex h-full items-center gap-3 rounded-2xl glass p-4 transition-all hover:-translate-y-0.5 hover:glow-ring">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.55_0.18_28)] text-xs font-bold text-primary-foreground shadow-[0_0_16px_-4px_oklch(0.65_0.18_28_/_0.7)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-foreground">{s}</span>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

// ============================================================
// FAQ
// ============================================================
function FAQ({ t }: { t: TT }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Reveal><SectionTag>09 · FAQ</SectionTag></Reveal>
          <Reveal delay={120}><SectionTitle>{t.faq.title}</SectionTitle></Reveal>
        </div>
        <Reveal delay={200}>
          <div className="overflow-hidden rounded-2xl glass-strong">
            {t.faq.items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`${i > 0 ? "border-t border-white/10" : ""}`}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-start transition hover:bg-white/5">
                    <span className="text-sm font-medium text-foreground sm:text-base">{it.q}</span>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all ${isOpen ? "rotate-180 bg-primary/20 text-primary" : ""}`}>
                      <Icon d={I.chevron} className="h-3.5 w-3.5" />
                    </span>
                  </button>
                  <div className={`grid overflow-hidden transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="min-h-0">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

// ============================================================
// BOOKING FORM
// ============================================================
type FormState = {
  name: string; store: string; link: string; phone: string; email: string;
  stage: string; challenge: string; team: string; orders: string; message: string;
};

function BookingForm({ t, lang }: { t: TT; lang: Lang }) {
  const [data, setData] = useState<FormState>({
    name: "", store: "", link: "", phone: "", email: "",
    stage: "", challenge: "", team: "", orders: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const req: (keyof FormState)[] = ["name", "store", "phone", "stage", "challenge"];
    const errs: Partial<Record<keyof FormState, boolean>> = {};
    req.forEach((k) => { if (!data[k].trim()) errs[k] = true; });
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const L = t.form.waLabels;
    const lines = [
      t.form.waIntro, "",
      `${L.name}: ${data.name}`,
      `${L.store}: ${data.store}`,
      `${L.link}: ${data.link}`,
      `${L.phone}: ${data.phone}`,
      `${L.email}: ${data.email}`,
      `${L.stage}: ${data.stage}`,
      `${L.challenge}: ${data.challenge}`,
      `${L.team}: ${data.team}`,
      `${L.orders}: ${data.orders}`,
      `${L.message}: ${data.message}`,
    ];
    window.open(waLink(lines.join("\n")), "_blank");
  };

  const fieldCls = (k: keyof FormState) =>
    `peer w-full rounded-xl border bg-white/5 px-3.5 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/50 focus:outline-none focus:bg-white/[0.07] focus:ring-2 focus:ring-primary/40 ${
      errors[k] ? "border-destructive/60" : "border-white/10 focus:border-primary/60"
    }`;

  return (
    <Section id="contact">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl hairline" />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Reveal><SectionTag>10 · Contact</SectionTag></Reveal>
          <Reveal delay={120}><SectionTitle>{t.form.title}</SectionTitle></Reveal>
          <Reveal delay={240}><p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.form.desc}</p></Reveal>

          <Reveal delay={340}>
            <div className="mt-7 glass rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 shadow-[0_0_18px_-4px_#25D366]">
                  <Icon d={I.whatsapp} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</div>
                  <div className="text-sm font-medium text-foreground" dir="ltr">+{WHATSAPP_NUMBER}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={200}>
          <form onSubmit={onSubmit} className="rounded-3xl glass-strong p-6 lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t.form.labels.name} required>
                <input className={fieldCls("name")} value={data.name} onChange={set("name")} />
              </Field>
              <Field label={t.form.labels.store} required>
                <input className={fieldCls("store")} value={data.store} onChange={set("store")} />
              </Field>
              <Field label={t.form.labels.link}>
                <input dir="ltr" className={fieldCls("link")} value={data.link} onChange={set("link")} placeholder="https://" />
              </Field>
              <Field label={t.form.labels.phone} required>
                <input dir="ltr" className={fieldCls("phone")} value={data.phone} onChange={set("phone")} />
              </Field>
              <Field label={t.form.labels.email}>
                <input type="email" dir="ltr" className={fieldCls("email")} value={data.email} onChange={set("email")} />
              </Field>
              <Field label={t.form.labels.stage} required>
                <select className={fieldCls("stage")} value={data.stage} onChange={set("stage")}>
                  <option value="" className="bg-background">{t.form.select}</option>
                  {t.form.stages.map((s) => <option key={s} value={s} className="bg-background">{s}</option>)}
                </select>
              </Field>
              <Field label={t.form.labels.challenge} required>
                <select className={fieldCls("challenge")} value={data.challenge} onChange={set("challenge")}>
                  <option value="" className="bg-background">{t.form.select}</option>
                  {t.form.challenges.map((s) => <option key={s} value={s} className="bg-background">{s}</option>)}
                </select>
              </Field>
              <Field label={t.form.labels.team}>
                <select className={fieldCls("team")} value={data.team} onChange={set("team")}>
                  <option value="" className="bg-background">{t.form.select}</option>
                  {t.form.yesNo.map((s) => <option key={s} value={s} className="bg-background">{s}</option>)}
                </select>
              </Field>
              <Field label={t.form.labels.orders}>
                <input className={fieldCls("orders")} value={data.orders} onChange={set("orders")} />
              </Field>
              <div className="sm:col-span-2">
                <Field label={t.form.labels.message}>
                  <textarea rows={4} className={fieldCls("message")} value={data.message} onChange={set("message")} />
                </Field>
              </div>
            </div>

            <button type="submit" className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-primary to-[oklch(0.58_0.18_28)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-4px_oklch(0.65_0.18_28_/_0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_-4px_oklch(0.72_0.2_28_/_0.9)] sm:w-auto">
              <Icon d={I.whatsapp} className="h-4 w-4" />
              {t.form.submit}
              <Icon d={I.arrow} className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              {lang === "ar" ? "سيتم فتح واتساب مع رسالة جاهزة." : "WhatsApp will open with a pre-filled message."}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

// ============================================================
// FINAL CTA
// ============================================================
function FinalCta({ t }: { t: TT }) {
  return (
    <Section>
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-3xl glass-strong px-6 py-16 lg:px-14 lg:py-24">
          <div className="pointer-events-none absolute inset-0 dot-bg opacity-[0.06]" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.2_28_/_0.4),transparent_70%)] blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-gradient">{t.finalCta.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.finalCta.desc}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-primary to-[oklch(0.58_0.18_28)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-4px_oklch(0.65_0.18_28_/_0.7)] transition hover:-translate-y-0.5">
                {t.cta.book}
                <Icon d={I.arrow} className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </a>
              <a href={waLink(t.form.waIntro)} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition hover:bg-white/10 hover:-translate-y-0.5">
                <Icon d={I.whatsapp} className="h-4 w-4" />
                {t.cta.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer({ t }: { t: TT }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl hairline" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark />
            <span className="text-lg font-semibold text-gradient">{t.brand}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.slogan}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#about" className="text-muted-foreground transition hover:text-foreground">{t.nav.about}</a>
          <a href="#program" className="text-muted-foreground transition hover:text-foreground">{t.nav.program}</a>
          <a href="#pillars" className="text-muted-foreground transition hover:text-foreground">{t.nav.pillars}</a>
          <a href="#process" className="text-muted-foreground transition hover:text-foreground">{t.nav.process}</a>
          <a href="#faq" className="text-muted-foreground transition hover:text-foreground">{t.nav.faq}</a>
          <a href="#contact" className="text-muted-foreground transition hover:text-foreground">{t.nav.contact}</a>
        </div>
        <div className="lg:text-end">
          <a href={waLink(t.form.waIntro)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground transition hover:bg-white/10">
            <Icon d={I.whatsapp} className="h-4 w-4" />
            {t.cta.whatsapp}
          </a>
          <p className="mt-4 text-xs text-muted-foreground">© {year} {t.brand} · {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// FLOATING WHATSAPP
// ============================================================
function FloatingWa({ t }: { t: TT }) {
  return (
    <a
      href={waLink(t.form.waIntro)}
      aria-label="WhatsApp"
      className="fixed bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_0_24px_-2px_#25D366] transition hover:scale-110 lg:hidden"
      style={t.dir === "rtl" ? { left: "1.25rem" } : { right: "1.25rem" }}
    >
      <Icon d={I.whatsapp} className="h-6 w-6" />
    </a>
  );
}
