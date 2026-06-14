import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";

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
// Translations
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
        {
          name: "الطلبات",
          desc: "نحلل دورة الطلب من الشراء حتى التسليم، ونحدد نقاط التأخير والأخطاء التشغيلية.",
          what: "دورة الطلب الكاملة، خطوات التنفيذ، نقاط التأخير.",
          ind: "زمن التنفيذ، نسبة الإلغاء، دقة الشحن.",
          imp: "تسريع التسليم وتقليل الأخطاء.",
        },
        {
          name: "العملاء",
          desc: "نراجع تجربة العميل، جودة الخدمة، سرعة الاستجابة، ومستوى الرضا.",
          what: "نقاط الاتصال، رحلة العميل، جودة الردود.",
          ind: "زمن الرد، CSAT، معدل التكرار.",
          imp: "ولاء أعلى وحياة عميل أطول.",
        },
        {
          name: "العمليات",
          desc: "نقيّم الإجراءات الداخلية، توزيع المسؤوليات، وضوح المهام، ونقاط الهدر.",
          what: "الإجراءات، الأدوار، البروتوكولات الداخلية.",
          ind: "إنتاجية الفريق، نقاط الازدواجية، الهدر.",
          imp: "تشغيل أنظف وكفاءة أعلى.",
        },
        {
          name: "المرتجعات",
          desc: "نحلل أسباب المرتجعات والاستبدال وأثرها على الربحية وتجربة العميل.",
          what: "أسباب الإرجاع، الأنماط، التكاليف.",
          ind: "نسبة المرتجعات، تكلفة الاستبدال.",
          imp: "ربحية أكثر استقراراً.",
        },
        {
          name: "التسويق",
          desc: "نربط النمو التسويقي بالجاهزية التشغيلية لضمان توسع متوازن.",
          what: "العلاقة بين الحملات والقدرة التشغيلية.",
          ind: "CAC، ROAS، جاهزية التنفيذ.",
          imp: "توسع متوازن دون انهيار التشغيل.",
        },
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
            "Current store analysis",
            "Operational structure review",
            "Customer journey study",
            "Order and fulfillment analysis",
            "Customer service review",
            "Returns and exchanges analysis",
            "KPI review",
            "Key challenge identification",
            "Improvement opportunities",
          ],
          out: ["Diagnostic report", "Gap map", "Strengths analysis", "Execution priorities", "Initial operating plan"],
        },
        {
          n: "02",
          name: "Follow-up & Development",
          period: "Months 2 & 3",
          inc: [
            "Recommendation follow-up",
            "Periodic progress review",
            "Results analysis",
            "Decision support",
            "New challenge handling",
            "Operational process improvement",
            "Overall performance development",
          ],
          out: ["Periodic recommendations", "Progress tracking", "Operational improvements", "Measurable indicators"],
        },
      ],
    },
    outputs: {
      title: "What will you receive?",
      items: [
        "Comprehensive diagnostic report",
        "Strengths analysis",
        "Improvement opportunities",
        "Main operational challenges",
        "Development and operating plan",
        "Execution priorities",
        "Follow-up and guidance during the program",
        "Measurable recommendations",
      ],
    },
    pillars: {
      title: "We read the store through five operational pillars",
      labels: { what: "What we analyze", indicators: "Related indicators", impact: "Impact on growth" },
      items: [
        {
          name: "Orders",
          desc: "We analyze the order cycle from purchase to delivery and identify delays and operational errors.",
          what: "Complete order cycle, fulfillment steps, delay points.",
          ind: "Fulfillment time, cancellation rate, shipping accuracy.",
          imp: "Faster delivery, fewer errors.",
        },
        {
          name: "Customers",
          desc: "We review customer experience, service quality, response speed, and satisfaction.",
          what: "Touchpoints, customer journey, response quality.",
          ind: "Response time, CSAT, repeat rate.",
          imp: "Higher loyalty and longer customer lifetime.",
        },
        {
          name: "Operations",
          desc: "We assess internal procedures, role clarity, responsibilities, and operational waste.",
          what: "Procedures, roles, internal protocols.",
          ind: "Team productivity, overlap, waste.",
          imp: "Cleaner ops, higher efficiency.",
        },
        {
          name: "Returns",
          desc: "We analyze return and exchange causes and their impact on profitability and CX.",
          what: "Return causes, patterns, costs.",
          ind: "Return rate, exchange cost.",
          imp: "More stable profitability.",
        },
        {
          name: "Marketing",
          desc: "We align marketing growth with operational readiness to ensure balanced expansion.",
          what: "Relationship between campaigns and operational capacity.",
          ind: "CAC, ROAS, fulfillment readiness.",
          imp: "Balanced scale without operational breakdown.",
        },
      ],
    },
    fit: {
      title: "Is Aamida Program right for you?",
      items: [
        "Your store sells but fulfillment is unorganized.",
        "Returns or complaints keep repeating.",
        "Your team works without clear procedures.",
        "You want to scale but don't know if your store is ready.",
        "Decisions rely more on impressions than indicators.",
        "You want a clear operating plan instead of repeated trial and error.",
      ],
    },
    why: {
      title: "Because the right operational decision starts with understanding what happens inside the store",
      items: [
        "We do not rely on impressions.",
        "We read challenges from within the operations.",
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
        "Introductory meeting",
        "Understanding store needs",
        "Agreement signing",
        "Data collection",
        "Analysis and diagnosis",
        "Plan building",
        "Follow-up and development",
        "Results measurement",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Do you work with all stores?", a: "We work with ecommerce stores at different stages of growth, especially stores that want to improve operational performance, organize processes, and prepare their internal structure for growth and expansion." },
        { q: "Do you provide execution?", a: "The program focuses on analysis, guidance, and operational follow-up. The execution scope can be defined based on each store's needs." },
        { q: "How long is the program?", a: "Three months: one month for diagnosis and foundation, and two months for follow-up and development." },
        { q: "Can follow-up be extended?", a: "Yes, additional follow-up programs can be agreed upon after the main program ends." },
        { q: "When do results appear?", a: "It depends on the store's current situation and challenges. The goal is to achieve measurable operational improvements during the engagement." },
      ],
    },
    form: {
      title: "Book your initial consultation",
      desc: "Send us your store details and we'll review them to understand your needs and identify the right next step.",
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
      stages: ["New store", "Existing store", "Growing store", "Needs restructuring"],
      challenges: ["Orders", "Customer service", "Returns", "Operations", "Marketing", "Other"],
      yesNo: ["Yes", "No"],
      submit: "Send Consultation Request",
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
    <div dir={t.dir} className="min-h-screen bg-background text-foreground antialiased">
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
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
function Header({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: typeof T.ar }) {
  const [open, setOpen] = useState(false);
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
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="text-lg font-semibold tracking-tight text-primary">{t.brand}</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {l.l}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button onClick={toggleLang} className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-secondary">
            {t.langSwitch}
          </button>
          <a href={waLink(lang === "ar" ? "مرحباً أعمدة، أرغب بالاستفسار." : "Hello Aamida, I'd like to know more.")} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-primary transition hover:bg-secondary">
            <Icon d={I.whatsapp} className="h-3.5 w-3.5" /> {t.cta.whatsapp}
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition hover:opacity-90">
            {t.cta.book}
          </a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="rounded-md border border-border p-2 lg:hidden" aria-label="menu">
          <Icon d={open ? I.close : I.menu} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm text-foreground hover:bg-secondary">
                {l.l}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <button onClick={toggleLang} className="rounded-full border border-border px-3 py-1.5 text-xs">
                {t.langSwitch}
              </button>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-primary px-3 py-1.5 text-xs text-primary-foreground">
                {t.cta.book}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function BrandMark() {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M5 20V8M12 20V4M19 20v-9" />
        <path d="M3 20h18" />
      </svg>
    </div>
  );
}

// ============================================================
// Sections
// ============================================================
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal-soft)]" />
      {children}
    </span>
  );
}

// ---- Hero ----
function Hero({ t }: { t: typeof T.ar }) {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <SectionTag>{t.hero.tag}</SectionTag>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--teal-soft)]">{t.hero.slogan}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{t.hero.desc}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              {t.hero.ctaBook}
              <Icon d={I.arrow} className="h-4 w-4 rtl:rotate-180" />
            </a>
            <a href={waLink(t.form.waIntro)} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-secondary">
              <Icon d={I.whatsapp} className="h-4 w-4" />
              {t.hero.ctaWa}
            </a>
          </div>
        </div>

        <DashboardMock t={t} />
      </div>
    </section>
  );
}

function DashboardMock({ t }: { t: typeof T.ar }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-[var(--teal-soft)]/15 to-transparent blur-2xl" />
      <div className="rounded-2xl border border-border bg-card p-5 shadow-[0_10px_40px_-15px_rgba(20,40,50,0.25)]">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground">Aamida · Operations Overview</span>
          </div>
          <span className="text-[10px] text-muted-foreground">LIVE</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {t.hero.kpis.map((k, i) => (
            <div key={i} className="animate-rise rounded-xl border border-border bg-background p-3" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k.l}</div>
              <div className="mt-1 text-xl font-semibold text-primary">{k.v}</div>
              <Spark />
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-border bg-background p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Pillars</span>
            <span className="text-[10px] text-muted-foreground">5/5</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {t.hero.pillarsMini.map((p, i) => (
              <div key={i} className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card p-2 text-center">
                <Icon d={pillarIcons[i]} className="h-4 w-4 text-[var(--teal-soft)]" />
                <span className="text-[10px] text-muted-foreground">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 100 24" className="mt-2 h-6 w-full text-[var(--teal-soft)]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M0 18 L15 14 L30 16 L45 9 L60 11 L75 5 L100 7" />
    </svg>
  );
}

// ---- Problem ----
function Problem({ t }: { t: typeof T.ar }) {
  return (
    <Section>
      <div className="max-w-3xl">
        <SectionTag>01 · Context</SectionTag>
        <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.problem.title}</h2>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.problem.items.map((it, i) => (
          <div key={i} className="group rounded-xl border border-border bg-card p-5 transition hover:border-[var(--teal-soft)]/60 hover:shadow-sm">
            <div className="flex items-start gap-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border bg-secondary text-muted-foreground transition group-hover:text-primary">
                <span className="text-xs">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="text-sm leading-relaxed text-foreground">{it}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---- Diagnosis ----
function Diagnosis({ t }: { t: typeof T.ar }) {
  const icons = [I.search, I.chart, I.doc];
  return (
    <Section className="border-y border-border bg-muted/40">
      <div className="max-w-3xl">
        <SectionTag>02 · Approach</SectionTag>
        <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.diag.title}</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.diag.desc}</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {t.diag.cards.map((c, i) => (
          <div key={i} className="relative rounded-2xl border border-border bg-card p-6">
            <div className="absolute -top-3 inline-flex items-center gap-2 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] text-muted-foreground">
              STEP 0{i + 1}
            </div>
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Icon d={icons[i]} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-primary">{c.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---- About ----
function About({ t }: { t: typeof T.ar }) {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-3">
          <SectionTag>{t.nav.about}</SectionTag>
          <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.about.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.about.text}</p>
          <p className="mt-5 border-s-2 border-[var(--teal-soft)] ps-4 text-base font-medium text-primary">{t.about.close}</p>
        </div>

        <div className="grid gap-4 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <Icon d={I.target} className="h-4 w-4 text-[var(--teal-soft)]" />
              {t.about.visionLabel}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground">{t.about.vision}</p>
          </div>
          <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-80">
              <Icon d={I.bolt} className="h-4 w-4" />
              {t.about.missionLabel}
            </div>
            <p className="mt-3 text-sm leading-relaxed">{t.about.mission}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---- Program ----
function Program({ t }: { t: typeof T.ar }) {
  return (
    <Section id="program" className="border-y border-border bg-muted/40">
      <div className="grid items-end gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionTag>{t.nav.program}</SectionTag>
          <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.program.title}</h2>
          <p className="mt-3 text-lg text-[var(--teal-soft)]">{t.program.sub}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{t.program.desc}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Duration</span>
            <Icon d={I.layers} className="h-4 w-4 text-[var(--teal-soft)]" />
          </div>
          <div className="mt-2 flex items-end gap-2">
            <span className="text-5xl font-bold text-primary">3</span>
            <span className="pb-2 text-sm text-muted-foreground">{t.dir === "rtl" ? "أشهر" : "months"}</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-1/3 rounded-full bg-primary" />
            <div className="mt-[-8px] h-full w-2/3 rounded-full bg-[var(--teal-soft)] opacity-40" />
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---- Timeline ----
function Timeline({ t }: { t: typeof T.ar }) {
  return (
    <Section>
      <div className="max-w-3xl">
        <SectionTag>03 · {t.timeline.title}</SectionTag>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {t.timeline.phases.map((p) => (
          <div key={p.n} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 lg:p-8">
            <div className="absolute top-0 inline-flex h-1 w-24 bg-primary" style={t.dir === "rtl" ? { right: 0 } : { left: 0 }} />
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-[var(--teal-soft)]/40">{p.n}</span>
              <div>
                <h3 className="text-xl font-semibold text-primary">{p.name}</h3>
                <span className="text-xs text-muted-foreground">{p.period}</span>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.timeline.includes}</div>
                <ul className="mt-3 space-y-2">
                  {p.inc.map((x, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Icon d={I.check} className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal-soft)]" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-muted/40 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.timeline.outputs}</div>
                <ul className="mt-3 space-y-2">
                  {p.out.map((x, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-primary">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---- Outputs ----
function Outputs({ t }: { t: typeof T.ar }) {
  return (
    <Section className="border-y border-border bg-muted/40">
      <div className="max-w-3xl">
        <SectionTag>04 · Deliverables</SectionTag>
        <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.outputs.title}</h2>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {t.outputs.items.map((it, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
              <Icon d={I.doc} className="h-4 w-4" />
            </div>
            <span className="text-sm text-foreground">{it}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---- Pillars ----
function Pillars({ t }: { t: typeof T.ar }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <Section id="pillars">
      <div className="max-w-3xl">
        <SectionTag>05 · Five Pillars</SectionTag>
        <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.pillars.title}</h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {t.pillars.items.map((p, i) => {
          const open = active === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(open ? null : i)}
              className={`group relative cursor-pointer rounded-2xl border bg-card p-5 transition ${
                open ? "border-primary shadow-md" : "border-border hover:border-[var(--teal-soft)]/70"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
                  <Icon d={pillarIcons[i]} />
                </div>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-primary">{p.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>

              <div className={`grid overflow-hidden transition-all duration-300 ${open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="min-h-0 space-y-2 border-t border-border pt-3 text-[11px]">
                  <Detail label={t.pillars.labels.what} value={p.what} />
                  <Detail label={t.pillars.labels.indicators} value={p.ind} />
                  <Detail label={t.pillars.labels.impact} value={p.imp} />
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
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <p className="text-foreground">{value}</p>
    </div>
  );
}

// ---- Fit ----
function Fit({ t }: { t: typeof T.ar }) {
  return (
    <Section className="border-y border-border bg-muted/40">
      <div className="max-w-3xl">
        <SectionTag>06 · Fit</SectionTag>
        <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.fit.title}</h2>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {t.fit.items.map((it, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--teal-soft)]/40 text-[var(--teal-soft)]">
              <Icon d={I.check} className="h-4 w-4" />
            </div>
            <p className="text-sm leading-relaxed text-foreground">{it}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---- Why ----
function Why({ t }: { t: typeof T.ar }) {
  const icons = [I.search, I.layers, I.chart, I.target, I.bolt, I.shield];
  return (
    <Section>
      <div className="max-w-3xl">
        <SectionTag>07 · Why Aamida</SectionTag>
        <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.why.title}</h2>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.why.items.map((it, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5">
            <Icon d={icons[i]} className="h-5 w-5 text-[var(--teal-soft)]" />
            <p className="mt-4 text-sm leading-relaxed text-foreground">{it}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---- Process ----
function Process({ t }: { t: typeof T.ar }) {
  return (
    <Section id="process" className="border-y border-border bg-muted/40">
      <div className="max-w-3xl">
        <SectionTag>08 · Process</SectionTag>
        <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.process.title}</h2>
      </div>

      <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {t.process.steps.map((s, i) => (
          <li key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-foreground">{s}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

// ---- FAQ ----
function FAQ({ t }: { t: typeof T.ar }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionTag>09 · FAQ</SectionTag>
          <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.faq.title}</h2>
        </div>
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {t.faq.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-start">
                  <span className="text-sm font-medium text-primary sm:text-base">{it.q}</span>
                  <Icon d={I.chevron} className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="min-h-0">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ---- Booking Form ----
type FormState = {
  name: string; store: string; link: string; phone: string; email: string;
  stage: string; challenge: string; team: string; orders: string; message: string;
};

function BookingForm({ t, lang }: { t: typeof T.ar; lang: Lang }) {
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
      t.form.waIntro,
      "",
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
    `w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground transition placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[var(--teal-soft)]/30 ${
      errors[k] ? "border-destructive" : "border-border focus:border-[var(--teal-soft)]"
    }`;

  return (
    <Section id="contact" className="border-y border-border bg-muted/40">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionTag>10 · Contact</SectionTag>
          <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{t.form.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.form.desc}</p>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                <Icon d={I.whatsapp} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="text-sm font-medium text-primary" dir="ltr">+{WHATSAPP_NUMBER}</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 lg:p-8">
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
                <option value="">{t.form.select}</option>
                {t.form.stages.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
            <Field label={t.form.labels.challenge} required>
              <select className={fieldCls("challenge")} value={data.challenge} onChange={set("challenge")}>
                <option value="">{t.form.select}</option>
                {t.form.challenges.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
            <Field label={t.form.labels.team}>
              <select className={fieldCls("team")} value={data.team} onChange={set("team")}>
                <option value="">{t.form.select}</option>
                {t.form.yesNo.map((s) => <option key={s} value={s}>{s}</option>)}
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

          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:w-auto">
            <Icon d={I.whatsapp} className="h-4 w-4" />
            {t.form.submit}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            {lang === "ar" ? "سيتم فتح واتساب مع رسالة جاهزة." : "WhatsApp will open with a pre-filled message."}
          </p>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}

// ---- Final CTA ----
function FinalCta({ t }: { t: typeof T.ar }) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-14 text-primary-foreground lg:px-14 lg:py-20">
        <div className="absolute inset-0 dot-bg opacity-[0.08]" />
        <div className="relative max-w-3xl">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{t.finalCta.title}</h2>
          <p className="mt-4 text-base leading-relaxed opacity-85">{t.finalCta.desc}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-primary transition hover:opacity-90">
              {t.cta.book}
              <Icon d={I.arrow} className="h-4 w-4 rtl:rotate-180" />
            </a>
            <a href={waLink(t.form.waIntro)} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10">
              <Icon d={I.whatsapp} className="h-4 w-4" />
              {t.cta.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---- Footer ----
function Footer({ t }: { t: typeof T.ar }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark />
            <span className="text-lg font-semibold text-primary">{t.brand}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t.footer.slogan}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#about" className="text-muted-foreground hover:text-primary">{t.nav.about}</a>
          <a href="#program" className="text-muted-foreground hover:text-primary">{t.nav.program}</a>
          <a href="#pillars" className="text-muted-foreground hover:text-primary">{t.nav.pillars}</a>
          <a href="#process" className="text-muted-foreground hover:text-primary">{t.nav.process}</a>
          <a href="#faq" className="text-muted-foreground hover:text-primary">{t.nav.faq}</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary">{t.nav.contact}</a>
        </div>
        <div className="lg:text-end">
          <a href={waLink(t.form.waIntro)} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-primary hover:bg-secondary">
            <Icon d={I.whatsapp} className="h-4 w-4" />
            {t.cta.whatsapp}
          </a>
          <p className="mt-4 text-xs text-muted-foreground">© {year} {t.brand} · {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

// ---- Floating WhatsApp ----
function FloatingWa({ t }: { t: typeof T.ar }) {
  return (
    <a
      href={waLink(t.form.waIntro)}
      aria-label="WhatsApp"
      className="fixed bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 lg:hidden"
      style={t.dir === "rtl" ? { left: "1.25rem" } : { right: "1.25rem" }}
    >
      <Icon d={I.whatsapp} className="h-6 w-6" />
    </a>
  );
}
