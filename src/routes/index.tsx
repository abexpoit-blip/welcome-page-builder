import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/trading-hero.jpg.asset.json";
import chartImg from "@/assets/trading-chart.jpg.asset.json";

const TELEGRAM_URL = "https://t.me/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Free Quotex Signals — Daily Live Trading Signal Group" },
      {
        name: "description",
        content:
          "Quotex এবং Trading এ লসে থাকলে আমাদের Public Group এ ফ্রি জয়েন করুন। প্রতিদিন ২টা ও রাত ৮টায় Free Live Signal, News Signal, Market Update ও Trading Guideline।",
      },
      { property: "og:title", content: "Free Quotex Signals — Daily Live Signal Group" },
      {
        property: "og:description",
        content:
          "প্রতিদিন Free Live Signal, Market Update ও Trading Guideline পেতে এখনি Public Group এ Join করুন।",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/30 overflow-x-hidden dark">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@400;500;600&family=Hind+Siliguri:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap"
      />

      {/* Ambient background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] size-[800px] bg-primary/20 rounded-full blur-[160px] opacity-40 animate-glow-drift" />
        <div
          className="absolute top-[40%] -right-[10%] size-[600px] bg-neon-purple/20 rounded-full blur-[140px] opacity-30 animate-glow-drift"
          style={{ animationDirection: "reverse", animationDuration: "25s" }}
        />
        <div className="absolute bottom-0 left-1/3 size-[500px] bg-emerald-500/10 rounded-full blur-[120px] opacity-40" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 backdrop-blur-md px-6 py-4 flex justify-between items-center bg-background/40">
        <div className="flex items-center gap-2">
          <div className="size-9 bg-gradient-to-br from-primary to-neon-purple rounded-lg flex items-center justify-center font-display font-bold text-background">
            S
          </div>
          <span className="font-display font-bold text-lg tracking-tight">SIGNAL PRO</span>
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
          className="px-5 py-2 bg-primary text-background font-semibold hover:scale-105 transition-transform rounded-full text-sm"
        >
          Join Free
        </a>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 px-6 max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-reveal mb-6 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center gap-2">
            <span className="size-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
              Live Signal Chalu Ache
            </span>
          </div>
          <h1
            className="animate-reveal font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance mb-8"
            style={{ animationDelay: "100ms", fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            Quotex Trading এ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-purple to-primary">
              লস
            </span>{" "}
            হচ্ছে?
          </h1>
          <p
            className="animate-reveal text-muted-foreground text-lg md:text-xl max-w-2xl text-pretty mb-4"
            style={{
              animationDelay: "200ms",
              fontFamily: "'Hind Siliguri', sans-serif",
              lineHeight: 1.7,
            }}
          >
            আমাদের <span className="text-primary font-semibold">Public Group</span> এ একদম{" "}
            <span className="text-emerald-400 font-semibold">ফ্রি</span> জয়েন হয়ে প্রতিদিন
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
              className="group px-8 py-4 bg-gradient-to-r from-primary to-neon-purple text-background font-bold rounded-full hover:scale-105 transition-transform text-base tracking-wide flex items-center gap-3 shadow-2xl shadow-primary/30"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
              Public Group এ Join করুন
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-glass ring-1 ring-border rounded-full hover:ring-primary/50 transition-all text-base backdrop-blur-xl"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              কী কী পাবেন দেখুন →
            </a>
          </div>

          {/* Stats row */}
          <div
            className="animate-reveal grid grid-cols-3 gap-4 md:gap-8 mt-12 w-full max-w-2xl"
            style={{ animationDelay: "400ms" }}
          >
            {[
              { n: "50K+", l: "Active Members" },
              { n: "87%", l: "Win Rate" },
              { n: "2×", l: "Daily Signals" },
            ].map((s) => (
              <div key={s.l} className="p-4 bg-glass ring-1 ring-border rounded-2xl backdrop-blur-xl">
                <div className="font-display text-2xl md:text-4xl font-bold text-primary">
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
            <div className="relative aspect-video rounded-3xl overflow-hidden ring-1 ring-white/20 bg-glass backdrop-blur-2xl shadow-2xl shadow-primary/20">
              <img
                src={heroImg.url}
                alt="Live trading signal dashboard"
                width={1920}
                height={1088}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 px-3 py-2 bg-background/70 backdrop-blur-xl ring-1 ring-white/10 rounded-xl animate-float">
                <div className="flex items-center gap-2">
                  <span className="size-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                    Live · EUR/USD
                  </span>
                </div>
              </div>
              <div
                className="absolute bottom-6 right-6 px-4 py-3 bg-background/70 backdrop-blur-xl ring-1 ring-emerald-400/40 rounded-xl animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  Signal
                </div>
                <div className="font-display text-xl font-bold text-emerald-400">↑ UP · 1M</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-8 border-y border-border/30 overflow-hidden bg-background/40">
        <div className="flex gap-16 animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
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
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="mb-16 max-w-2xl">
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            // Group এ কী কী পাবেন
          </div>
          <h2
            className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            সবকিছু <span className="text-primary">ফ্রি</span>, সব সময়।
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "01 // SIGNAL",
              title: "Daily Live Signal",
              desc: "প্রতিদিন ২টায় ও রাত ৮টায় Free Live Signal সরাসরি Public Group এ।",
              icon: "📡",
            },
            {
              tag: "02 // NEWS",
              title: "News Signal",
              desc: "মার্কেট মুভ করার আগেই News Signal এবং economic event alert একদম ফ্রি।",
              icon: "📰",
            },
            {
              tag: "03 // GUIDE",
              title: "Trading Guideline",
              desc: "ট্রেডিং সমস্যার সমাধান, স্ট্র্যাটেজি এবং step-by-step guideline পাবেন।",
              icon: "🎯",
            },
            {
              tag: "04 // SUPPORT",
              title: "Live Support",
              desc: "যেকোনো সমস্যা? Public Group এ post করুন, দ্রুত reply পাবেন admin থেকে।",
              icon: "💬",
            },
            {
              tag: "05 // UPDATE",
              title: "Market Update",
              desc: "প্রতিদিনের market analysis, trend update এবং high-probability pair alerts।",
              icon: "📊",
            },
            {
              tag: "06 // FREE",
              title: "১০০% ফ্রি Access",
              desc: "কোনো ফি নেই, কোনো লুকানো চার্জ নেই। শুধু Join করুন — বাকিটা আমাদের কাজ।",
              icon: "🔓",
            },
          ].map((f) => (
            <div
              key={f.tag}
              className="p-8 bg-glass ring-1 ring-border rounded-[2rem] hover:ring-primary/50 transition-all duration-500 flex flex-col gap-5 group backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-primary text-xs">{f.tag}</div>
                <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">
                  {f.icon}
                </div>
              </div>
              <h3
                className="font-display text-2xl font-semibold tracking-tight"
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
        className="py-24 bg-primary/5 border-y border-border/20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <div className="font-mono text-xs text-primary uppercase tracking-widest">
              // Signal Schedule
            </div>
            <h2
              className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance leading-tight"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              প্রতিদিন{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon-purple">
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
                  className="flex items-center justify-between p-4 bg-glass ring-1 ring-border rounded-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="font-display text-2xl font-bold text-primary">{s.time}</div>
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
            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
            <div className="relative w-full aspect-square bg-glass backdrop-blur-3xl ring-1 ring-white/10 rounded-3xl overflow-hidden">
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

      {/* Testimonial */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-6">
            // Real Feedback
          </div>
          <blockquote
            className="font-display text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-balance mb-12"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            "আগে দিনে ৫-৬ টা লস দিতাম। এই Group এ Join করার পর signal follow করে এখন প্রতিদিন
            profit এ থাকি। ভাই সত্যি অসাধারণ কাজ করছেন।"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="size-12 rounded-full bg-gradient-to-br from-primary to-neon-purple" />
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
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto p-8 md:p-16 bg-gradient-to-br from-primary/10 via-neon-purple/10 to-transparent ring-1 ring-primary/30 rounded-[3rem] backdrop-blur-xl text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-64 bg-neon-purple/30 rounded-full blur-3xl" />
          <div className="relative">
            <h2
              className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance"
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
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-neon-purple text-background font-bold rounded-full hover:scale-105 transition-transform text-lg shadow-2xl shadow-primary/40"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
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

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            // Common Questions
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            আপনার প্রশ্নের উত্তর।
          </h2>
        </div>
        <div className="space-y-4">
          {[
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
          ].map((item) => (
            <details
              key={item.q}
              className="group p-6 bg-glass ring-1 ring-border rounded-2xl backdrop-blur-xl hover:ring-primary/40 transition-all"
            >
              <summary
                className="flex items-center justify-between cursor-pointer font-semibold text-lg"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {item.q}
                <span className="text-primary text-2xl group-open:rotate-45 transition-transform">
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
              <div className="size-7 bg-gradient-to-br from-primary to-neon-purple rounded-md flex items-center justify-center font-display font-bold text-background text-xs">
                S
              </div>
              <span className="font-display font-bold text-sm text-foreground normal-case tracking-tight">
                SIGNAL PRO
              </span>
            </div>
            <p>© 2026 Signal Pro. All rights reserved.</p>
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
