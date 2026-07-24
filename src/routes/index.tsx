import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/trading-hero.jpg.asset.json";
import chartImg from "@/assets/trading-chart.jpg.asset.json";
import logoImg from "@/assets/mithitrader-logo.png.asset.json";
import { ReviewsSection, LiveJoinTicker } from "@/components/ReviewsSection";

const TELEGRAM_URL = "https://t.me/Mithitrader07";
const AUTO_REDIRECT_SECONDS = 50;
const SITE_URL = "https://mithitrader.com";

const FAQ_ITEMS = [
  {
    q: "Group এ Join করতে কি টাকা লাগবে?",
    a: "না। আমাদের Public Group সম্পূর্ণ ফ্রি। কোনো ফি বা hidden charge নেই।",
  },
  {
    q: "প্রতিদিন কতটি Signal পাবো?",
    a: "প্রতিদিন ২টি Free Live Signal (দুপুর ২টা ও রাত ৮টায়) এবং News Signal event অনুযায়ী পাবেন।",
  },
  {
    q: "Signal এর accuracy কেমন?",
    a: "আমাদের গড় win rate ৮৫-৯০%। তবে ট্রেডিং এ risk থাকে, তাই proper money management follow করবেন।",
  },
  {
    q: "নতুন হলে কি বুঝতে পারবো?",
    a: "অবশ্যই। আমরা Bengali তে সহজভাবে guideline দেই। নতুনদের জন্য step-by-step tutorial ও থাকে।",
  },
];

const PAGE_TITLE = "Mithitrader — Free Quotex Live Signal Group (Daily 2 Signals)";
const PAGE_DESC =
  "Quotex Trading এ লসে আছেন? Mithitrader Public Group এ ফ্রি জয়েন করুন — প্রতিদিন দুপুর ২টা ও রাত ৮টায় Free Live Signal, News Signal, Market Update ও Bangla Trading Guideline।";

// Facebook/Telegram share preview (boost-friendly Bangla copy)
const OG_TITLE = "🔥 ফ্রি Live Signal — Mithitrader Public Group এ Join করুন";
const OG_DESC =
  "প্রতিদিন দুপুর ২টা ও রাত ৮টায় ফ্রি Live Signal, News Signal, Market Update এবং Bangla Trading Guideline — ১০০% ফ্রি, এখনি Telegram Group এ Join করুন।";
const OG_IMAGE = `${SITE_URL}/assets/og-cover.jpg`;



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "quotex signal, free trading signal, bangla trading signal, quotex bangladesh, live signal telegram, binary trading guideline, mithitrader",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { property: "og:site_name", content: "Mithitrader" },
      { property: "og:locale", content: "bn_BD" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Mithitrader — Free Live Quotex Signal, Daily 2 Signals on Telegram",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESC },
      { name: "twitter:image", content: OG_IMAGE },
      {
        name: "twitter:image:alt",
        content: "Mithitrader — Free Live Quotex Signal Telegram Group",
      },

    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Mithitrader",
              url: `${SITE_URL}/`,
              logo: `${SITE_URL}${logoImg.url}`,
              description: PAGE_DESC,
              sameAs: [TELEGRAM_URL],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: `${SITE_URL}/`,
              name: "Mithitrader",
              inLanguage: "bn-BD",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});


function Index() {
  const [countdown, setCountdown] = useState(AUTO_REDIRECT_SECONDS);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip if user already came back from Telegram
    if (sessionStorage.getItem("tg_redirected") === "1") {
      setRedirected(true);
      return;
    }
    const tick = setInterval(() => {
      setCountdown((c) => (c > 0 ? c - 1 : 0));
    }, 1000);
    const timer = setTimeout(() => {
      sessionStorage.setItem("tg_redirected", "1");
      setRedirected(true);
      window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
      // fallback for popup blockers — same-tab redirect
      window.location.href = TELEGRAM_URL;
    }, AUTO_REDIRECT_SECONDS * 1000);
    return () => {
      clearInterval(tick);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen font-body text-foreground selection:bg-primary/30 overflow-x-hidden">

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@400;500;600&family=Hind+Siliguri:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap"
      />

      {/* Ambient background glows — colorful aurora */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] size-[800px] bg-primary/30 rounded-full blur-[160px] opacity-70 animate-glow-drift" />
        <div
          className="absolute top-[35%] -right-[10%] size-[700px] bg-accent/30 rounded-full blur-[150px] opacity-60 animate-glow-drift"
          style={{ animationDirection: "reverse", animationDuration: "25s" }}
        />
        <div className="absolute bottom-[5%] left-1/4 size-[600px] bg-neon/30 rounded-full blur-[140px] opacity-50" />
        <div className="absolute top-[60%] left-[5%] size-[500px] bg-neon-purple/25 rounded-full blur-[130px] opacity-50" />
      </div>


      {/* Auto-redirect banner */}
      {!redirected && (
        <div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] px-4 sm:px-6 py-3 rounded-full text-primary-foreground text-xs sm:text-sm font-semibold shadow-2xl shadow-primary/40 flex items-center gap-3 backdrop-blur-xl max-w-[92vw]"
          style={{ backgroundImage: "var(--gradient-brand)", fontFamily: "'Hind Siliguri', sans-serif" }}
        >
          <span className="size-2 bg-white rounded-full animate-pulse shrink-0" />
          <span className="truncate">
            {countdown > 0
              ? `${countdown} সেকেন্ড এ Telegram এ redirect হবে...`
              : "Telegram এ redirect হচ্ছে..."}
          </span>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 shrink-0 px-3 py-1 bg-white/25 hover:bg-white/40 rounded-full text-[11px] font-bold transition"
          >
            এখনি Join
          </a>
        </div>
      )}


      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 backdrop-blur-xl px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-3 bg-white/60">
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src={logoImg.url}
            alt="Mithitrader logo"
            width={40}
            height={40}
            className="size-9 sm:size-10 shrink-0 object-contain drop-shadow-[0_4px_12px_rgba(168,85,247,0.35)]"
          />
          <span className="font-display font-bold text-base sm:text-lg tracking-tight truncate">MITHITRADER</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#features" className="hover:text-primary transition-colors">
            Features
          </a>
          <a href="#schedule" className="hover:text-primary transition-colors">
            Signal Time
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
        </div>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-4 sm:px-5 py-2 text-primary-foreground font-semibold hover:scale-105 transition-transform rounded-full text-xs sm:text-sm shadow-lg shadow-primary/30"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          Join Free
        </a>
      </nav>


      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 px-4 sm:px-6 max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          <h1
            className="animate-reveal font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance mb-6 sm:mb-8"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            Quotex Trading এ{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-brand)" }}>
              লস
            </span>{" "}
            হচ্ছে?
          </h1>

          <p
            className="animate-reveal text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl text-pretty mb-4 px-2"

            style={{
              animationDelay: "200ms",
              fontFamily: "'Hind Siliguri', sans-serif",
              lineHeight: 1.7,
            }}
          >
            আমাদের <span className="text-primary font-semibold">Public Group</span> এ একদম{" "}
            <span className="text-accent font-semibold">ফ্রি</span> জয়েন হয়ে প্রতিদিন
            পান <span className="text-foreground font-semibold">Live Signal</span>, Market Update
            এবং Trading Guideline।
          </p>

          <div
            className="animate-reveal flex flex-col sm:flex-row gap-4 mt-8"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform text-base tracking-wide flex items-center gap-3 shadow-2xl shadow-primary/40"
              style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundImage: "var(--gradient-brand)" }}
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
              Public Group এ Join করুন
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white/70 ring-1 ring-primary/20 rounded-full hover:ring-primary/60 transition-all text-base backdrop-blur-xl"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              কী কী পাবেন দেখুন →
            </a>
          </div>


          {/* Stats row */}
          <div
            className="animate-reveal grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mt-12 w-full max-w-2xl"
            style={{ animationDelay: "400ms" }}
          >
            {[
              { n: "50K+", l: "Active Members" },
              { n: "87%", l: "Win Rate" },
              { n: "2×", l: "Daily Signals" },
            ].map((s) => (
              <div key={s.l} className="p-3 sm:p-4 bg-white/70 ring-1 ring-primary/20 rounded-2xl backdrop-blur-xl shadow-lg shadow-primary/10">
                <div className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-primary">
                  {s.n}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <div
            className="animate-reveal w-full max-w-5xl mt-16"
            style={{ animationDelay: "500ms" }}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden ring-1 ring-primary/25 bg-white/50 backdrop-blur-2xl shadow-2xl shadow-primary/25">
              <img
                src={heroImg.url}
                alt="Live trading signal dashboard"
                width={1920}
                height={1088}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 px-4 py-2.5 bg-slate-950/85 backdrop-blur-xl ring-1 ring-emerald-400/50 rounded-xl animate-float shadow-2xl shadow-emerald-500/30">
                <div className="flex items-center gap-2.5">
                  <span className="size-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                  <span className="font-mono text-[11px] text-emerald-300 uppercase tracking-[0.2em] font-semibold">
                    Live · EUR/USD
                  </span>
                </div>
              </div>
              <div
                className="absolute bottom-6 right-6 px-5 py-3 bg-slate-950/90 backdrop-blur-xl ring-1 ring-emerald-400/60 rounded-xl animate-float shadow-2xl shadow-emerald-500/40"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-0.5">
                  Signal
                </div>
                <div className="font-display text-xl font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="text-2xl">↑</span> UP · 1M
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Marquee */}
      <section className="py-8 border-y border-primary/20 overflow-hidden bg-white/50 backdrop-blur-xl relative z-10">
        <div className="flex gap-8 sm:gap-16 animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-8 sm:gap-16 shrink-0">
              <span>◆ Free Signal</span>
              <span>◆ Daily 2 Signals</span>
              <span>◆ Live Market Update</span>
              <span>◆ News Signal</span>
              <span>◆ Trading Guideline</span>
              <span>◆ 24/7 Support</span>
              <span>◆ 100% Free Join</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto z-10 relative">
        <div className="mb-16 max-w-2xl">
          <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-primary-foreground font-mono text-[10px] uppercase tracking-[0.25em] font-semibold shadow-lg shadow-primary/30" style={{ backgroundImage: "var(--gradient-brand)" }}>
            <span className="size-1.5 bg-white/90 rounded-full" />
            Group Perks
          </span>

          <h2
            className="font-display text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-balance"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            সবকিছু <span className="text-primary">ফ্রি</span>, সব সময়।
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "01 · SIGNAL",
              title: "Daily Live Signal",
              desc: "প্রতিদিন ২টায় ও রাত ৮টায় Free Live Signal সরাসরি Public Group এ।",
              icon: "📡",
            },
            {
              tag: "02 · NEWS",
              title: "News Signal",
              desc: "মার্কেট মুভ করার আগেই News Signal এবং economic event alert একদম ফ্রি।",
              icon: "📰",
            },
            {
              tag: "03 · GUIDE",
              title: "Trading Guideline",
              desc: "ট্রেডিং সমস্যার সমাধান, স্ট্র্যাটেজি এবং step-by-step guideline পাবেন।",
              icon: "🎯",
            },
            {
              tag: "04 · SUPPORT",
              title: "Live Support",
              desc: "যেকোনো সমস্যা? Public Group এ post করুন, দ্রুত reply পাবেন admin থেকে।",
              icon: "💬",
            },
            {
              tag: "05 · UPDATE",
              title: "Market Update",
              desc: "প্রতিদিনের market analysis, trend update এবং high-probability pair alerts।",
              icon: "📊",
            },
            {
              tag: "06 · FREE",
              title: "১০০% ফ্রি Access",
              desc: "কোনো ফি নেই, কোনো লুকানো চার্জ নেই। শুধু Join করুন — বাকিটা আমাদের কাজ।",
              icon: "🔓",
            },
          ].map((f) => (
            <div
              key={f.tag}
              className="p-6 sm:p-8 bg-white/70 ring-1 ring-primary/15 rounded-[2rem] hover:ring-primary/50 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-5 group backdrop-blur-xl shadow-lg shadow-primary/5 hover:shadow-primary/20"

            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] font-semibold text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-brand)" }}>{f.tag}</span>
                <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">
                  {f.icon}
                </div>
              </div>
              <h3
                className="font-display text-xl sm:text-2xl font-semibold tracking-tight"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {f.title}
              </h3>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Signal Schedule */}
      <section
        id="schedule"
        className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-neon/10 border-y border-primary/20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-primary-foreground font-mono text-[10px] uppercase tracking-[0.25em] font-semibold shadow-lg shadow-primary/30 w-fit" style={{ backgroundImage: "var(--gradient-brand)" }}>
              <span className="size-1.5 bg-white/90 rounded-full animate-pulse" />
              Signal Schedule
            </span>

            <h2
              className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance leading-tight"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              প্রতিদিন{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-brand)" }}>
                ২ বার
              </span>{" "}

              Free Signal।
            </h2>
            <p
              className="text-muted-foreground text-lg max-w-md"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              আমরা প্রতিদিন ২ বার Free Signal দিয়ে থাকি — দুপুর ২টা ও রাত ৮টায়। পাশাপাশি News
              Signal ও পাবেন সম্পূর্ণ ফ্রি।
            </p>
            <div className="space-y-3 pt-4">
              {[
                { time: "০২:০০ PM", label: "Afternoon Signal", tag: "Daily" },
                { time: "০৮:০০ PM", label: "Night Signal", tag: "Daily" },
                { time: "যেকোনো সময়", label: "News Signal", tag: "Event Based" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between p-4 bg-white/70 ring-1 ring-primary/15 rounded-2xl backdrop-blur-xl shadow-md shadow-primary/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="font-display text-lg sm:text-2xl font-bold text-primary">{s.time}</div>
                    <div
                      className="text-sm text-foreground"
                      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    >
                      {s.label}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-1 bg-primary/10 text-primary uppercase tracking-widest rounded-full">
                    {s.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-accent/25 blur-[100px] rounded-full" />
            <div className="relative w-full aspect-square bg-white/60 backdrop-blur-3xl ring-1 ring-primary/25 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">

              <img
                src={chartImg.url}
                alt="Live trading chart"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Join — dedicated prominent block */}
      <section id="telegram" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-2xl shadow-primary/30 ring-1 ring-primary/30" style={{ backgroundImage: "var(--gradient-brand)" }}>
          <div className="absolute -top-24 -right-24 size-80 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-white/15 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-primary-foreground">
              <span className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/30 font-mono text-[10px] uppercase tracking-[0.25em] font-semibold">
                <span className="size-1.5 bg-white rounded-full animate-pulse" />
                Telegram Group
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                এক ক্লিকে Telegram Public Group এ Join করুন
              </h2>
              <p className="text-primary-foreground/90 text-lg max-w-xl mb-8" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                Daily Free Live Signal, News Signal, Market Update ও Trading Guideline — সব কিছু একদম ফ্রি, সরাসরি Telegram এ।
              </p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform text-base shadow-2xl"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
                Telegram এ Join করুন — ফ্রি
              </a>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-primary-foreground/80 font-mono uppercase tracking-widest">
                <span className="flex items-center gap-2"><span className="size-1.5 bg-white rounded-full" /> Instant Join</span>
                <span className="flex items-center gap-2"><span className="size-1.5 bg-white rounded-full" /> No Fee</span>
                <span className="flex items-center gap-2"><span className="size-1.5 bg-white rounded-full" /> 50K+ Members</span>
              </div>
            </div>
            <div className="w-full md:w-80 shrink-0">
              <div className="rounded-3xl bg-white/95 backdrop-blur-xl p-8 shadow-2xl ring-1 ring-white/50 text-center">
                <div className="mx-auto size-24 rounded-2xl flex items-center justify-center mb-5 bg-white ring-1 ring-primary/20 shadow-lg shadow-primary/30">
                  <img
                    src={logoImg.url}
                    alt="Mithitrader logo"
                    width={96}
                    height={96}
                    loading="lazy"
                    className="size-20 object-contain"
                  />
                </div>
                <div className="font-display font-bold text-lg text-foreground" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>Mithitrader Public</div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Free Signal Channel</div>
                <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-600">
                  <span className="size-2 bg-emerald-500 rounded-full animate-pulse" />
                  Live · Signal Chalu Ache
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-primary-foreground font-mono text-[10px] uppercase tracking-[0.25em] font-semibold shadow-lg shadow-primary/30" style={{ backgroundImage: "var(--gradient-brand)" }}>
            <span className="size-1.5 bg-white/90 rounded-full" />
            Real Feedback
          </span>

          <blockquote
            className="font-display text-xl sm:text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-balance mb-12"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            "আগে দিনে ৫-৬ টা লস দিতাম। এই Group এ Join করার পর signal follow করে এখন প্রতিদিন
            profit এ থাকি। ভাই সত্যি অসাধারণ কাজ করছেন।"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="size-12 rounded-full shadow-lg shadow-primary/30" style={{ backgroundImage: "var(--gradient-brand)" }} />
            <div className="text-left">
              <p
                className="text-sm font-bold"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                Rahim Ahmed
              </p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Group Member · 4 Months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto p-6 sm:p-8 md:p-16 bg-white/70 ring-1 ring-primary/30 rounded-[3rem] backdrop-blur-xl text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute -top-20 -right-20 size-64 bg-accent/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-64 bg-primary/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-neon/20 rounded-full blur-3xl" />

          <div className="relative">
            <h2
              className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              Daily Free Live Signal, Market Update এবং Trading Guideline পেতে এখনি Join করুন।
            </h2>
            <p
              className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              এক ক্লিকেই Public Group এ চলে যান। ১০০% ফ্রি — কোনো চার্জ নেই।
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform text-lg shadow-2xl shadow-primary/50"
              style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundImage: "var(--gradient-brand)" }}

            >
              <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
              Public Group এ Join করুন
            </a>
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground font-mono uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="size-1.5 bg-emerald-400 rounded-full" />
                No Fee
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 bg-emerald-400 rounded-full" />
                Instant Access
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 bg-emerald-400 rounded-full" />
                24/7 Live
              </span>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <LiveJoinTicker />

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-primary-foreground font-mono text-[10px] uppercase tracking-[0.25em] font-semibold shadow-lg shadow-primary/30" style={{ backgroundImage: "var(--gradient-brand)" }}>
            <span className="size-1.5 bg-white/90 rounded-full" />
            Common Questions
          </span>

          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            আপনার প্রশ্নের উত্তর।
          </h2>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group p-5 sm:p-6 bg-white/70 ring-1 ring-primary/15 rounded-2xl backdrop-blur-xl hover:ring-primary/50 transition-all shadow-md shadow-primary/5"
            >
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer font-semibold text-base sm:text-lg"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {item.q}
                <span className="text-primary text-2xl shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>

              <p
                className="mt-4 text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={logoImg.url}
                alt="Mithitrader logo"
                width={28}
                height={28}
                loading="lazy"
                className="size-7 object-contain"
              />

              <span className="font-display font-bold text-sm text-foreground normal-case tracking-tight">
                MITHITRADER
              </span>
            </div>
            <p>© 2026 Mithitrader. All rights reserved.</p>
            <p
              className="opacity-60 normal-case tracking-normal"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              Trading এ risk আছে। নিজ দায়িত্বে trade করবেন।
            </p>
          </div>
          <div className="flex gap-8 items-start">
            <a href={TELEGRAM_URL} className="hover:text-primary">
              Telegram
            </a>
            <a href="#faq" className="hover:text-primary">
              FAQ
            </a>
            <a href="#features" className="hover:text-primary">
              Features
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
