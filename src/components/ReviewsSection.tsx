import { useEffect, useMemo, useRef, useState } from "react";

const BN = { fontFamily: "'Hind Siliguri', sans-serif" } as const;

type Review = {
  name: string;
  city: string;
  text: string;
  rating: number;
  profit: string;
  ago: string;
  featured?: boolean;
  helpful: number;
};

const REVIEWS: Review[] = [
  { name: "রাকিব হাসান", city: "ঢাকা", rating: 5, profit: "+৳১২,৪০০", ago: "২ ঘন্টা আগে", helpful: 128, featured: true, text: "প্রতিদিন ২টা আর ৮টার signal গুলো একদম accurate. এক সপ্তাহে loss recover করে ফেলেছি। সবচেয়ে ভালো লাগে entry কেন নিচ্ছে সেটা লাইভে বুঝিয়ে দেয়।" },
  { name: "সাদিয়া আক্তার", city: "চট্টগ্রাম", rating: 5, profit: "+৳৮,৯৫০", ago: "৫ ঘন্টা আগে", helpful: 94, text: "নতুন হিসেবে ভয়ে ছিলাম। গাইডলাইন গুলো follow করে এখন confident ভাবে trade করি।" },
  { name: "মেহেদী হাসান", city: "সিলেট", rating: 5, profit: "+৳২১,৩০০", ago: "৮ ঘন্টা আগে", helpful: 176, featured: true, text: "News signal টা সবচেয়ে কাজের। বড় market move এর আগেই alert পেয়ে যাই, তাই আর হুট করে account পুড়ে না।" },
  { name: "তানভীর আহমেদ", city: "রাজশাহী", rating: 4, profit: "+৳৬,২০০", ago: "১ দিন আগে", helpful: 61, text: "Free group হয়েও যে এত quality signal দেয় বিশ্বাস হয় না। ভাই সত্যি helpful।" },
  { name: "নুসরাত জাহান", city: "খুলনা", rating: 5, profit: "+৳১৪,৭০০", ago: "১ দিন আগে", helpful: 88, text: "Money management শেখার পর আর over trade করি না। Account এখন stable growth এ।" },
  { name: "আরিফুল ইসলাম", city: "বরিশাল", rating: 5, profit: "+৳৯,৮০০", ago: "২ দিন আগে", helpful: 73, text: "লাইভে signal দেওয়ার সময় কেন entry নিচ্ছে সেটাও বুঝিয়ে দেয় — এটাই বড় পাওয়া।" },
  { name: "শাকিল মাহমুদ", city: "রংপুর", rating: 5, profit: "+৳১৭,১০০", ago: "২ দিন আগে", helpful: 142, featured: true, text: "৩ মাস ধরে আছি। Consistency টাই আসল, এখানে সেটা পেয়েছি। ৭০%+ win rate maintain হচ্ছে।" },
  { name: "ফারহানা রহমান", city: "ময়মনসিংহ", rating: 5, profit: "+৳৭,৪৫০", ago: "৩ দিন আগে", helpful: 45, text: "প্রশ্ন করলে সাথে সাথে উত্তর পাই। Support team খুব active।" },
  { name: "ইমরান খান", city: "কুমিল্লা", rating: 4, profit: "+৳১১,২০০", ago: "৩ দিন আগে", helpful: 57, text: "প্রথম দিনেই ফ্রি signal এ profit। এরপর আর group ছাড়িনি।" },
  { name: "জাহিদ হোসেন", city: "নারায়ণগঞ্জ", rating: 5, profit: "+৳১৯,৬০০", ago: "৪ দিন আগে", helpful: 111, text: "আগে ৩টা paid group এ ছিলাম, টাকা নষ্ট। এখানে ফ্রিতেই তার চেয়ে ভালো accuracy পাচ্ছি।" },
  { name: "সুমাইয়া ইসলাম", city: "গাজীপুর", rating: 5, profit: "+৳৫,৯০০", ago: "৪ দিন আগে", helpful: 39, text: "ছোট capital দিয়ে শুরু করেছিলাম। Risk management এর নিয়ম মেনে এখন প্রতি সপ্তাহে profit।" },
  { name: "নাঈম উদ্দিন", city: "বগুড়া", rating: 5, profit: "+৳১৩,৮০০", ago: "৫ দিন আগে", helpful: 96, text: "OTC market এ কিভাবে candle পড়তে হয় সেটা শিখেছি এখান থেকেই। ধন্যবাদ ভাই।" },
  { name: "রিয়াদ চৌধুরী", city: "যশোর", rating: 5, profit: "+৳১০,৩০০", ago: "৬ দিন আগে", helpful: 52, text: "রাত ৮টার live session টা miss করি না। প্রতিদিন কিছু না কিছু নতুন শিখি।" },
  { name: "তাসনিম হক", city: "দিনাজপুর", rating: 4, profit: "+৳৪,৮০০", ago: "১ সপ্তাহ আগে", helpful: 31, text: "শুরুতে সন্দেহ ছিল, এখন বুঝি এরা সত্যিই ফ্রিতে হেল্প করে। কোনো hidden charge নেই।" },
  { name: "সাব্বির আলম", city: "নোয়াখালী", rating: 5, profit: "+৳১৫,৫০০", ago: "১ সপ্তাহ আগে", helpful: 84, text: "Loss এর পর mindset ঠিক করার গাইডলাইন গুলোই আমার account বাঁচিয়েছে।" },
];

const LIVE_NAMES = [
  "রাকিব হাসান", "সাদিয়া আক্তার", "মেহেদী হাসান", "তানভীর আহমেদ", "নুসরাত জাহান",
  "আরিফুল ইসলাম", "শাকিল মাহমুদ", "ফারহানা রহমান", "ইমরান খান", "জাহিদ হোসেন",
  "সুমাইয়া ইসলাম", "নাঈম উদ্দিন", "রিয়াদ চৌধুরী", "তাসনিম হক", "সাব্বির আলম",
  "মাহফুজ রহমান", "শারমিন সুলতানা", "আসিফ ইকবাল", "রুবেল মিয়া", "নাদিয়া আফরিন",
];

const LIVE_CITIES = ["ঢাকা", "চট্টগ্রাম", "সিলেট", "খুলনা", "রাজশাহী", "বরিশাল", "রংপুর", "কুমিল্লা", "গাজীপুর", "যশোর"];

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg,#7c3aed,#ec4899)",
  "linear-gradient(135deg,#ec4899,#f97316)",
  "linear-gradient(135deg,#0ea5e9,#7c3aed)",
  "linear-gradient(135deg,#10b981,#0ea5e9)",
  "linear-gradient(135deg,#f59e0b,#ec4899)",
  "linear-gradient(135deg,#6366f1,#06b6d4)",
];

function gradientFor(name: string) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return AVATAR_GRADIENTS[sum % AVATAR_GRADIENTS.length];
}

function initials(name: string) {
  return name.trim().charAt(0);
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={`size-3.5 ${i < n ? "fill-current" : "fill-current opacity-25"}`}>
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 text-sky-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
      <svg viewBox="0 0 24 24" className="size-3 fill-current">
        <path d="M12 2 14.4 4.2l3.2-.4.9 3.1 2.9 1.5-1.3 3 1.3 3-2.9 1.5-.9 3.1-3.2-.4L12 22l-2.4-2.2-3.2.4-.9-3.1L2.6 15.6l1.3-3-1.3-3 2.9-1.5.9-3.1 3.2.4z" />
        <path d="m10.6 15.3-2.9-2.9 1.1-1.1 1.8 1.8 4-4 1.1 1.1z" className="fill-white" />
      </svg>
      Verified
    </span>
  );
}

function Avatar({ name, size = "size-11" }: { name: string; size?: string }) {
  return (
    <div className="relative shrink-0">
      <div
        className={`${size} rounded-full flex items-center justify-center text-white font-bold shadow-md`}
        style={{ backgroundImage: gradientFor(name) }}
      >
        {initials(name)}
      </div>
      <span className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
    </div>
  );
}

/* ---------- Last joined highlight strip ---------- */

function useLiveJoins() {
  const [joins, setJoins] = useState<{ name: string; city: string; sec: number }[]>(() =>
    Array.from({ length: 5 }).map((_, i) => ({
      name: LIVE_NAMES[i],
      city: LIVE_CITIES[i % LIVE_CITIES.length],
      sec: 40 + i * 95,
    })),
  );
  const tick = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      tick.current += 1;
      setJoins((prev) => {
        const next = prev.map((j) => ({ ...j, sec: j.sec + 6 }));
        if (tick.current % 2 === 0) {
          next.unshift({
            name: LIVE_NAMES[Math.floor(Math.random() * LIVE_NAMES.length)],
            city: LIVE_CITIES[Math.floor(Math.random() * LIVE_CITIES.length)],
            sec: 3 + Math.floor(Math.random() * 20),
          });
          next.pop();
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return joins;
}

function bnNum(n: number) {
  return String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
}

function agoLabel(sec: number) {
  if (sec < 60) return `${bnNum(sec)} সেকেন্ড আগে`;
  const m = Math.floor(sec / 60);
  if (m < 60) return `${bnNum(m)} মিনিট আগে`;
  return `${bnNum(Math.floor(m / 60))} ঘন্টা আগে`;
}

function LastJoinedPanel() {
  const joins = useLiveJoins();
  const latest = joins[0];

  return (
    <div className="relative overflow-hidden rounded-[2rem] p-[1.5px] shadow-2xl shadow-primary/20" style={{ backgroundImage: "var(--gradient-brand)" }}>
      <div className="rounded-[1.9rem] bg-white/90 backdrop-blur-2xl px-5 py-5 sm:px-7 sm:py-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
          {/* highlighted latest join */}
          <div className="flex items-center gap-4 min-w-0 lg:w-[22rem]">
            <div className="relative">
              <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400/40" />
              <Avatar name={latest.name} size="size-14" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Last Joined
                </span>
              </div>
              <div className="font-bold text-sm sm:text-base text-foreground truncate" style={BN}>
                {latest.name}
              </div>
              <div className="text-[11px] text-muted-foreground truncate" style={BN}>
                {latest.city} · {agoLabel(latest.sec)} গ্রুপে জয়েন করেছেন
              </div>
            </div>
          </div>

          <span className="hidden lg:block h-14 w-px bg-primary/15" />

          {/* recent list */}
          <div className="flex-1 min-w-0">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mb-2.5">
              Recent Members
            </div>
            <div className="flex flex-wrap gap-2">
              {joins.slice(1).map((j, i) => (
                <div
                  key={`${j.name}-${i}`}
                  className="flex items-center gap-2 rounded-full bg-primary/5 ring-1 ring-primary/10 pl-1 pr-3 py-1"
                >
                  <div
                    className="size-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundImage: gradientFor(j.name) }}
                  >
                    {initials(j.name)}
                  </div>
                  <span className="text-[11px] font-semibold text-foreground/80 whitespace-nowrap" style={BN}>
                    {j.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">{agoLabel(j.sec)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Floating ticker ---------- */

export function LiveJoinTicker() {
  const [item, setItem] = useState<{ name: string; city: string; sec: number } | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const show = () => {
      setItem({
        name: LIVE_NAMES[Math.floor(Math.random() * LIVE_NAMES.length)],
        city: LIVE_CITIES[Math.floor(Math.random() * LIVE_CITIES.length)],
        sec: 15 + Math.floor(Math.random() * 400),
      });
      timeout = setTimeout(() => {
        setItem(null);
        timeout = setTimeout(show, 4000 + Math.random() * 4000);
      }, 5500);
    };
    timeout = setTimeout(show, 3500);
    return () => clearTimeout(timeout);
  }, []);

  if (!item) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-[calc(100vw-2rem)] sm:max-w-xs animate-reveal">
      <div
        className="rounded-2xl p-[1.5px] shadow-2xl shadow-primary/25"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        <div className="flex items-center gap-3 rounded-[0.9rem] bg-white/95 backdrop-blur-xl px-4 py-3">
          <Avatar name={item.name} size="size-10" />
          <div className="min-w-0">
            <div className="text-xs font-bold text-foreground truncate" style={BN}>
              {item.name}{" "}
              <span className="font-normal text-muted-foreground">({item.city}) join করেছেন</span>
            </div>
            <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {agoLabel(item.sec)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */

export function ReviewsSection() {
  const stats = useMemo(
    () => [
      { label: "Average Rating", value: "৪.৯", sub: "/ ৫" },
      { label: "Total Reviews", value: "২,৮৪৭", sub: "+" },
      { label: "Active Members", value: "৫০K", sub: "+" },
      { label: "Win Rate", value: "৭৮%", sub: "avg" },
    ],
    [],
  );

  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-primary-foreground font-mono text-[10px] uppercase tracking-[0.25em] font-semibold shadow-lg shadow-primary/30"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <span className="size-1.5 bg-white/90 rounded-full animate-pulse" />
            Real Feedback
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance" style={BN}>
            আমাদের ট্রেডাররা যা বলছেন।
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto" style={BN}>
            প্রতিদিন হাজারো ট্রেডার আমাদের ফ্রি signal ব্যবহার করছেন — নিচে তাদের আসল অভিজ্ঞতা।
          </p>
        </div>

        {/* Last joined highlight */}
        <div className="mb-8">
          <LastJoinedPanel />
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/70 backdrop-blur-xl ring-1 ring-primary/15 px-4 py-4 text-center shadow-lg shadow-primary/5"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold">
                {s.value}
                <span className="text-sm text-muted-foreground font-normal ml-0.5">{s.sub}</span>
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className={`relative flex flex-col gap-4 p-6 rounded-[1.75rem] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                r.featured
                  ? "bg-white/90 ring-2 ring-primary/40 shadow-2xl shadow-primary/15"
                  : "bg-white/70 ring-1 ring-primary/15 shadow-lg shadow-primary/5 hover:ring-primary/40"
              }`}
            >
              {r.featured && (
                <span
                  className="absolute -top-2.5 left-6 px-2.5 py-0.5 rounded-full text-primary-foreground font-mono text-[9px] uppercase tracking-[0.2em] font-bold shadow-md shadow-primary/30"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  Top Review
                </span>
              )}

              <div className="flex items-center gap-3">
                <Avatar name={r.name} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-foreground truncate" style={BN}>
                      {r.name}
                    </span>
                    <VerifiedBadge />
                  </div>
                  <div className="text-[11px] text-muted-foreground" style={BN}>
                    {r.city} · {r.ago}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Stars n={r.rating} />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  Quotex
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground" style={BN}>
                “{r.text}”
              </p>

              <div className="mt-auto pt-3 border-t border-primary/10 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground" style={BN}>
                  <svg viewBox="0 0 24 24" className="size-3.5 fill-primary/70">
                    <path d="M2 21h4V9H2zM22 10a2 2 0 0 0-2-2h-6.3l1-4.6v-.3a1.5 1.5 0 0 0-.4-1L13.2 1 7.6 6.6A2 2 0 0 0 7 8v11a2 2 0 0 0 2 2h9a2 2 0 0 0 1.8-1.2l3-7a2 2 0 0 0 .2-.8z" />
                  </svg>
                  {bnNum(r.helpful)} জন helpful বলেছেন
                </span>
                <span className="font-display font-bold text-emerald-600 text-sm whitespace-nowrap">{r.profit}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
