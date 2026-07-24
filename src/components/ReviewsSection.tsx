import { useEffect, useState } from "react";

const BN = { fontFamily: "'Hind Siliguri', sans-serif" } as const;

type Review = {
  name: string;
  city: string;
  text: string;
  rating: number;
  profit: string;
};

const REVIEWS: Review[] = [
  { name: "রাকিব হাসান", city: "ঢাকা", rating: 5, profit: "+৳১২,৪০০", text: "প্রতিদিন ২টা আর ৮টার signal গুলো একদম accurate. এক সপ্তাহে loss recover করে ফেলেছি।" },
  { name: "সাদিয়া আক্তার", city: "চট্টগ্রাম", rating: 5, profit: "+৳৮,৯৫০", text: "নতুন হিসেবে ভয়ে ছিলাম। গাইডলাইন গুলো follow করে এখন confident ভাবে trade করি।" },
  { name: "মেহেদী হাসান", city: "সিলেট", rating: 5, profit: "+৳২১,৩০০", text: "News signal টা সবচেয়ে কাজের। বড় market move এর আগেই alert পেয়ে যাই।" },
  { name: "তানভীর আহমেদ", city: "রাজশাহী", rating: 4, profit: "+৳৬,২০০", text: "Free group হয়েও যে এত quality signal দেয় বিশ্বাস হয় না। ভাই সত্যি helpful।" },
  { name: "নুসরাত জাহান", city: "খুলনা", rating: 5, profit: "+৳১৪,৭০০", text: "Money management শেখার পর আর over trade করি না। Account এখন stable growth এ।" },
  { name: "আরিফুল ইসলাম", city: "বরিশাল", rating: 5, profit: "+৳৯,৮০০", text: "লাইভে signal দেওয়ার সময় কেন entry নিচ্ছে সেটাও বুঝিয়ে দেয় — এটাই বড় পাওয়া।" },
  { name: "শাকিল মাহমুদ", city: "রংপুর", rating: 5, profit: "+৳১৭,১০০", text: "৩ মাস ধরে আছি। Consistency টাই আসল, এখানে সেটা পেয়েছি।" },
  { name: "ফারহানা রহমান", city: "ময়মনসিংহ", rating: 5, profit: "+৳৭,৪৫০", text: "প্রশ্ন করলে সাথে সাথে উত্তর পাই। Support team খুব active।" },
  { name: "ইমরান খান", city: "কুমিল্লা", rating: 4, profit: "+৳১১,২০০", text: "প্রথম দিনেই ফ্রি signal এ profit। এরপর আর group ছাড়িনি।" },
];

const LIVE_NAMES = [
  "রাকিব হাসান", "সাদিয়া আক্তার", "মেহেদী হাসান", "তানভীর আহমেদ", "নুসরাত জাহান",
  "আরিফুল ইসলাম", "শাকিল মাহমুদ", "ফারহানা রহমান", "ইমরান খান", "জাহিদ হোসেন",
  "সুমাইয়া ইসলাম", "নাঈম উদ্দিন", "রিয়াদ চৌধুরী", "তাসনিম হক", "সাব্বির আলম",
];

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

function initials(name: string) {
  return name.trim().charAt(0);
}

export function LiveJoinTicker() {
  const [item, setItem] = useState<{ name: string; mins: number } | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const show = () => {
      setItem({
        name: LIVE_NAMES[Math.floor(Math.random() * LIVE_NAMES.length)],
        mins: 1 + Math.floor(Math.random() * 9),
      });
      timeout = setTimeout(() => {
        setItem(null);
        timeout = setTimeout(show, 4000 + Math.random() * 4000);
      }, 5000);
    };
    timeout = setTimeout(show, 4000);
    return () => clearTimeout(timeout);
  }, []);

  if (!item) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-[calc(100vw-2rem)] sm:max-w-xs animate-reveal">
      <div className="flex items-center gap-3 rounded-2xl bg-white/85 backdrop-blur-xl ring-1 ring-primary/20 shadow-2xl shadow-primary/20 px-4 py-3">
        <div
          className="size-9 shrink-0 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          {initials(item.name)}
        </div>
        <div className="min-w-0">
          <div className="text-xs font-bold text-foreground truncate" style={BN}>
            {item.name} <span className="font-normal text-muted-foreground">group এ join করেছেন</span>
          </div>
          <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {item.mins} মিনিট আগে
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-primary-foreground font-mono text-[10px] uppercase tracking-[0.25em] font-semibold shadow-lg shadow-primary/30"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <span className="size-1.5 bg-white/90 rounded-full animate-pulse" />
            Member Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance" style={BN}>
            আমাদের ট্রেডাররা যা বলছেন।
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto" style={BN}>
            প্রতিদিন হাজারো ট্রেডার আমাদের ফ্রি signal ব্যবহার করছেন — এখানে তাদের কিছু রিভিউ।
          </p>

          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl bg-white/70 backdrop-blur-xl ring-1 ring-primary/15 px-6 py-3 shadow-lg shadow-primary/5">
            <div className="flex items-center gap-2">
              <Stars n={5} />
              <span className="font-display font-bold text-lg">4.9</span>
              <span className="text-xs text-muted-foreground">/ 5</span>
            </div>
            <span className="hidden sm:block h-5 w-px bg-primary/15" />
            <span className="text-xs font-semibold text-muted-foreground" style={BN}>
              ২,৮০০+ রিভিউ
            </span>
            <span className="hidden sm:block h-5 w-px bg-primary/15" />
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> 50K+ Members
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="flex flex-col gap-4 p-6 rounded-[1.75rem] bg-white/70 backdrop-blur-xl ring-1 ring-primary/15 shadow-lg shadow-primary/5 hover:ring-primary/45 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                <div
                  className="size-11 shrink-0 rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-md shadow-primary/25"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  {initials(r.name)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-foreground truncate" style={BN}>
                    {r.name}
                  </div>
                  <div className="text-[11px] text-muted-foreground" style={BN}>
                    {r.city} · Verified Member
                  </div>
                </div>
              </div>

              <Stars n={r.rating} />

              <p className="text-sm leading-relaxed text-muted-foreground" style={BN}>
                {r.text}
              </p>

              <div className="mt-auto pt-3 border-t border-primary/10 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Monthly Profit
                </span>
                <span className="font-display font-bold text-emerald-600 text-sm">{r.profit}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
