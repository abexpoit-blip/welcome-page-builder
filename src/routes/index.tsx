import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-interface.jpg.asset.json";
import hardwareImg from "@/assets/hardware-detail.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYNAPSE — Think in Dimensions" },
      {
        name: "description",
        content:
          "A spatial compute engine designed for the architectural mind. Precision tools built into a seamless glass interface.",
      },
      { property: "og:title", content: "SYNAPSE — Think in Dimensions" },
      {
        property: "og:description",
        content: "A spatial compute engine for the architectural mind.",
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
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap"
      />

      {/* Ambient background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] size-[800px] bg-primary/20 rounded-full blur-[160px] opacity-40 animate-glow-drift" />
        <div
          className="absolute top-[40%] -right-[10%] size-[600px] bg-neon-purple/20 rounded-full blur-[140px] opacity-30 animate-glow-drift"
          style={{ animationDirection: "reverse", animationDuration: "25s" }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 backdrop-blur-md px-6 py-4 flex justify-between items-center bg-background/40">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded-sm flex items-center justify-center">
            <div className="size-4 bg-background rounded-full" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">SYNAPSE</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#interface" className="hover:text-primary transition-colors">Interface</a>
          <a href="#hardware" className="hover:text-primary transition-colors">Hardware</a>
          <a href="#security" className="hover:text-primary transition-colors">Security</a>
          <button className="px-5 py-2 ring-1 ring-primary text-primary hover:bg-primary hover:text-background transition-all rounded-full">
            Initialize
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-reveal mb-6 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
            <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
              v4.0.2 Stable Release
            </span>
          </div>
          <h1
            className="animate-reveal font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-balance mb-8"
            style={{ animationDelay: "100ms" }}
          >
            THINK IN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon-purple">
              DIMENSIONS
            </span>
          </h1>
          <p
            className="animate-reveal text-muted-foreground text-lg md:text-xl max-w-2xl text-pretty mb-12"
            style={{ animationDelay: "200ms" }}
          >
            A spatial compute engine designed for the architectural mind. Precision tools built into a seamless glass interface.
          </p>

          <div className="animate-reveal w-full max-w-5xl" style={{ animationDelay: "300ms" }}>
            <div className="relative aspect-video rounded-3xl overflow-hidden ring-1 ring-white/20 bg-glass backdrop-blur-2xl shadow-2xl shadow-primary/10">
              <img
                src={heroImg.url}
                alt="Synapse spatial compute interface"
                width={1920}
                height={1088}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 left-8 p-4 bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-xl animate-float hidden md:block">
                <div className="size-12 bg-primary/20 rounded-lg border border-primary/40 mb-3" />
                <div className="h-1 w-24 bg-white/20 rounded-full mb-1" />
                <div className="h-1 w-16 bg-white/10 rounded-full" />
              </div>
              <div
                className="absolute bottom-8 right-8 p-4 bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-xl animate-float hidden md:block"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                  Signal: 98.7%
                </div>
                <div className="h-1 w-20 bg-primary/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-8 border-y border-border/30 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              <span>◆ Featured in Wired</span>
              <span>◆ TechCrunch Disrupt Winner</span>
              <span>◆ Fast Company Innovation</span>
              <span>◆ CES Innovation Award 2026</span>
              <span>◆ Product Hunt #1</span>
              <span>◆ A16Z Backed</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="interface" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="mb-16 max-w-2xl">
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            // Capabilities
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Precision instruments, one interface.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "01 // SENSORY",
              title: "Neural Mapping",
              desc: "Translate abstract thoughts into geometric primitives instantly with zero-latency response.",
            },
            {
              tag: "02 // COMPUTE",
              title: "Edge Rendering",
              desc: "Local-first architecture ensuring your most sensitive data never touches the open cloud.",
            },
            {
              tag: "03 // FLOW",
              title: "Spatial Logic",
              desc: "Organize your environment using depth-based hierarchy that matches human cognitive patterns.",
            },
          ].map((f) => (
            <div
              key={f.tag}
              className="p-8 bg-glass ring-1 ring-border rounded-[2rem] hover:ring-primary/50 transition-all duration-500 flex flex-col gap-6 group backdrop-blur-xl"
            >
              <div className="font-mono text-primary text-xs">{f.tag}</div>
              <h3 className="font-display text-3xl font-medium tracking-tight">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="mt-auto">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware showcase */}
      <section id="hardware" className="py-24 bg-primary/5 border-y border-border/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="font-mono text-xs text-primary uppercase tracking-widest">
              // Hardware
            </div>
            <h2 className="font-display text-5xl font-bold tracking-tight text-balance leading-tight">
              Evolved from the silicon up.
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Our custom silicon enables light-speed transparency and real-time volumetric rendering across all glass surfaces.
            </p>
            <ul className="space-y-4 font-mono text-sm tracking-tight">
              <li className="flex items-center gap-4 text-primary">[+] TITANIUM CORE HOUSING</li>
              <li className="flex items-center gap-4 text-muted-foreground">
                [+] LIQUID-COOLED THERMALS
              </li>
              <li className="flex items-center gap-4 text-muted-foreground">
                [+] BIOMETRIC SYNC LAYER
              </li>
              <li className="flex items-center gap-4 text-muted-foreground">
                [+] QUANTUM ENTANGLEMENT BRIDGE
              </li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative w-full aspect-square bg-glass backdrop-blur-3xl ring-1 ring-white/10 rounded-full overflow-hidden">
              <img
                src={hardwareImg.url}
                alt="Synapse hardware detail"
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
      <section id="security" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary text-6xl mb-6 opacity-50 font-display">"</div>
          <blockquote className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight text-balance mb-12">
            Synapse is the first interface that respects the way a designer's mind actually moves through space.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="size-12 rounded-full bg-primary/20 ring-2 ring-primary/40" />
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-widest">Elena Marchetti</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Principal, Studio Marchetti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance">
            Request access to the future of compute.
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Limited devices ship each quarter. Reserve your neural ID.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-2 bg-glass ring-1 ring-border rounded-full flex gap-2 max-w-md mx-auto focus-within:ring-primary transition-all backdrop-blur-xl"
          >
            <input
              type="text"
              placeholder="Enter neural ID..."
              className="bg-transparent border-none outline-none flex-1 px-6 font-mono text-sm text-foreground placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-background font-bold rounded-full hover:scale-105 transition-transform text-sm tracking-wide"
            >
              CONNECT
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <div className="flex flex-col gap-2">
            <p>© 2026 SYNAPSE SYSTEMS</p>
            <p className="opacity-60">RE-CODING REALITY SINCE V1.0</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Logbook</a>
            <a href="#" className="hover:text-primary">Terminal</a>
            <a href="#" className="hover:text-primary">Decrypt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
