"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  Check,
  Flame,
  ScanLine,
  ScanFace,
  Shirt,
  Sparkles,
  Star,
} from "lucide-react";
import GooglePlayIcon from "@/components/icons/GooglePlayIcon";

const PILLS: { Icon: LucideIcon; label: string }[] = [
  { Icon: ScanFace, label: "AI face scan" },
  { Icon: Sparkles, label: "Looks picked for you" },
  { Icon: CalendarDays, label: "Grooming reminders" },
  { Icon: Flame, label: "Trending styles" },
];

const APP_PRIMARY = "#00E5FF";
const APP_ON_PRIMARY = "#001F24";
const APP_BG = "#131313";
const APP_MUTED = "#BAC9CC";

/** In-app home preview — scales inside responsive frame */
function PhoneFrame({ className = "" }: Readonly<{ className?: string }>) {
  const benefits = [
    "AI picks tailored to your face",
    "Preview trending cuts on you",
    "Save looks & build your routine",
  ];

  return (
    <div className={`relative ${className}`}>
      <div
        className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[2.35rem] p-[3px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.45)] max-lg:rounded-[2.15rem] lg:rounded-[2.85rem] lg:p-[4px]"
        style={{
          background:
            "linear-gradient(145deg, #52525b 0%, #3f3f46 18%, #27272a 45%, #18181b 78%, #0a0a0a 100%)",
          boxShadow:
            "inset 0 1px 0 rgb(255 255 255 / 0.12), inset 0 -1px 0 rgb(0 0 0 / 0.4), 0 0 0 1px rgb(0 0 0 / 0.35)",
        }}
      >
        <div
          className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[2.2rem] max-lg:rounded-[2rem] lg:rounded-[2.65rem]"
          style={{
            background: APP_BG,
            boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.06)",
          }}
        >
          <div className="relative z-20 flex shrink-0 justify-center pt-3 max-lg:pt-2.5 lg:pt-3.5">
            <div
              className="flex h-[25px] w-[88px] items-center justify-center rounded-full sm:h-[26px] sm:w-[92px] lg:h-[28px] lg:w-[100px]"
              style={{
                background: "linear-gradient(180deg, #0a0a0a 0%, #000 100%)",
                boxShadow:
                  "inset 0 1px 0 rgb(255 255 255 / 0.08), 0 4px 12px rgb(0 0 0 / 0.5), 0 0 0 1px rgb(255 255 255 / 0.04)",
              }}
              aria-hidden
            >
              <span className="font-brand text-[9px] font-bold tracking-[0.2em] text-[#00E5FF]/90 lg:text-[10px]">
                LUVIA
              </span>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-contain px-2.5 pb-3 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] max-lg:overflow-y-hidden max-lg:px-2.5 max-lg:pb-3 sm:px-3 sm:pb-4 [&::-webkit-scrollbar]:hidden">
            <div
              className="flex min-h-0 flex-1 flex-col justify-center rounded-[15px] border border-[#3B494C]/35 p-3 sm:rounded-[20px] sm:p-3.5 lg:rounded-[22px] lg:p-4"
              style={{
                background:
                  "linear-gradient(155deg, rgba(0,229,255,0.14) 0%, rgba(28,27,27,0.97) 38%, rgba(19,19,19,0.995) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 12px 40px rgba(0,0,0,0.35)",
              }}
            >
              <p
                className="text-center text-[clamp(1.35rem,5vw,1.65rem)] font-bold leading-[1.05] sm:text-[1.55rem] lg:text-[1.65rem]"
                style={{ fontFamily: "var(--font-crafted), cursive", color: "#E5E2E1" }}
              >
                Crafted
              </p>
              <p
                className="font-brand mt-1 text-center text-[clamp(1rem,3.6vw,1.35rem)] font-bold leading-none tracking-[0.12em] lg:mt-1.5 lg:tracking-tight"
                style={{ color: APP_PRIMARY }}
              >
                FOR YOU
              </p>
              <p
                className="mt-2 text-center text-[10px] leading-relaxed lg:mt-3 lg:text-[11px]"
                style={{ color: APP_MUTED, fontFamily: "var(--font-inter), sans-serif" }}
              >
                Your face. Your style.
              </p>

              <div className="mt-3 flex justify-center lg:mt-4">
                <div
                  className="inline-flex min-h-[38px] select-none items-center justify-center gap-2 rounded-full px-4 py-2.5 sm:min-h-0 sm:px-3.5 sm:py-2 lg:gap-2.5 lg:px-4 lg:py-2.5"
                  style={{
                    background: `linear-gradient(135deg, ${APP_PRIMARY}, #00DAF3)`,
                    boxShadow: "0 8px 28px rgba(0,229,255,0.28), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                  aria-hidden
                >
                  <ScanLine className="h-3.5 w-3.5 shrink-0 lg:h-4 lg:w-4" style={{ color: APP_ON_PRIMARY }} strokeWidth={2.2} aria-hidden />
                  <span className="font-brand text-[9px] font-bold tracking-[0.06em] lg:text-[10px]" style={{ color: APP_ON_PRIMARY }}>
                    ANALYZE MY FACE
                  </span>
                </div>
              </div>

              <ul className="mt-3 space-y-2 sm:space-y-1.5 lg:mt-4 lg:space-y-2">
                {benefits.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-[9px] leading-[1.45] lg:text-[10px]" style={{ color: APP_MUTED }}>
                    <Check className="mt-0.5 h-3 w-3 shrink-0 lg:h-3.5 lg:w-3.5" style={{ color: APP_PRIMARY }} strokeWidth={2.5} aria-hidden />
                    <span style={{ fontFamily: "var(--font-inter), sans-serif" }}>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="mt-2 flex shrink-0 items-center justify-center gap-2 rounded-[11px] border border-dashed px-2.5 py-2 sm:mt-2.5 sm:rounded-xl lg:mt-3 lg:px-3"
              style={{ borderColor: "rgba(0,229,255,0.28)", background: "rgba(22,22,22,0.95)" }}
            >
              <Shirt className="h-3.5 w-3.5 shrink-0" style={{ color: APP_PRIMARY }} strokeWidth={2} aria-hidden />
              <span className="text-center text-[9px] font-medium leading-snug lg:text-[10px]" style={{ color: APP_MUTED }}>
                Wardrobe — <span style={{ color: "#E5E2E1" }}>coming soon</span>
              </span>
            </div>
          </div>

          <div className="flex shrink-0 justify-center pb-2.5 pt-1 max-lg:pb-2 lg:pb-2.5">
            <div className="h-[3px] w-[36%] max-w-[104px] rounded-full bg-white/22 lg:h-1 lg:w-[32%] lg:max-w-[112px]" aria-hidden />
          </div>
        </div>
      </div>

      <div className="animation-delay-500 absolute right-[-3.5rem] top-[52px] hidden animate-float items-center gap-2 rounded-full border border-white/20 bg-white px-3.5 py-2 text-[12px] font-semibold text-on-surface shadow-lg lg:flex">
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
        On-device AI
      </div>
      <div className="animation-delay-1000 absolute bottom-36 left-[-3.5rem] hidden animate-float items-center gap-2 rounded-full border border-white/20 bg-white px-3.5 py-2 text-[12px] font-semibold text-on-surface shadow-lg lg:flex">
        <Flame className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
        New looks weekly
      </div>
    </div>
  );
}

const PLAY_STORE_BTN_CLASS =
  "group relative inline-flex w-full min-h-[52px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-[#0f172a] px-5 py-3.5 text-white shadow-[0_6px_20px_rgba(15,23,42,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_10px_28px_rgba(15,23,42,0.38)] active:translate-y-0 active:scale-[0.99] touch-manipulation sm:w-auto";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  /** Defer entrance animation until after mount so SSR HTML matches first client render (avoids hydration mismatch). */
  const [heroMotionReady, setHeroMotionReady] = useState(false);

  useEffect(() => {
    setHeroMotionReady(true);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const t = window.setTimeout(() => el.classList.remove("opacity-0"), 50);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-0 w-full overflow-x-clip bg-bg opacity-0 transition-opacity duration-700"
    >
      <div
        className="pointer-events-none absolute -left-1/4 -top-1/4 h-[60vw] w-[60vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgb(8 145 178 / 0.08) 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[50vw] w-[50vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgb(217 119 6 / 0.06) 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgb(148 163 184 / 0.1) 1px,transparent 1px),linear-gradient(90deg,rgb(148 163 184 / 0.1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 28%, transparent 78%)",
        }}
      />

      <div
        className="mx-auto flex w-full min-w-0 max-w-[1200px] flex-col gap-7 px-4 pb-10 pt-[max(4.75rem,calc(4.25rem+env(safe-area-inset-top,0px)))] sm:gap-8 sm:px-5 sm:pb-16 md:px-10 md:pb-20 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10 lg:px-16 lg:pb-20 lg:pt-[max(6.5rem,calc(5.75rem+env(safe-area-inset-top,0px)))] lg:items-start"
      >
        {/* Heading — same max width as body column on lg for one clean left edge */}
        <div
          className={`flex w-full max-w-full flex-col items-center gap-4 text-center sm:gap-5 lg:col-start-1 lg:row-start-1 lg:max-w-[min(100%,36rem)] lg:items-start lg:gap-5 lg:text-left${heroMotionReady ? " animate-fade-in-up" : ""}`}
        >
          <span className="hero-eyebrow">Powered by AI</span>

          <h1 className="hero-title w-full max-w-[min(100%,19ch)] sm:max-w-[min(100%,22ch)] lg:max-w-none">
            <span className="block text-on-surface">AI Grooming,</span>
            <span className="mt-2 block sm:mt-2.5">
              <span className="gradient-text">Crafted</span>
              <span className="text-on-surface"> for You</span>
            </span>
          </h1>

          <p className="hidden w-full max-w-[28rem] text-on-surface-muted text-[clamp(0.9375rem,2.8vw,1.0625rem)] leading-[1.65] lg:block">
            Get hairstyle ideas made for <strong className="font-semibold text-on-surface">your</strong> face, try trending
            cuts in a tap, and keep every look organized — the same experience as the Luvia app.
          </p>
        </div>

        {/* Phone — centered on small screens, right column on lg */}
        <div className="relative mx-auto flex w-full max-w-[min(300px,92vw)] flex-col items-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:w-[290px] lg:max-w-none lg:justify-self-end lg:self-center">
          <div className="relative w-full max-w-[300px] lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-3 rounded-[3rem] opacity-90 blur-2xl max-lg:-inset-2 max-lg:rounded-[2.5rem] lg:-inset-8"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 35%, rgb(8 145 178 / 0.22), transparent 62%)",
              }}
              aria-hidden
            />
            <div className="relative mx-auto w-full max-lg:aspect-[9/19.6] max-lg:max-h-[min(560px,70svh)] max-lg:w-[min(300px,92vw)] lg:h-[580px] lg:w-[290px] lg:max-h-none lg:aspect-auto">
              <PhoneFrame className="flex h-full min-h-0 w-full flex-col" />
            </div>
          </div>

          <div className="mt-6 flex w-full max-w-sm flex-wrap justify-center gap-2.5 px-0.5 sm:gap-3 lg:hidden">
            <span className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-outline-variant bg-white/95 px-4 py-2 text-[11px] font-semibold text-on-surface shadow-[0_4px_14px_rgba(15,23,42,0.06)] backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
              On-device AI
            </span>
            <span className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-outline-variant bg-white/95 px-4 py-2 text-[11px] font-semibold text-on-surface shadow-[0_4px_14px_rgba(15,23,42,0.06)] backdrop-blur-sm">
              <Flame className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
              New looks weekly
            </span>
          </div>
          <p className="mt-2.5 max-w-[22rem] text-center text-[11px] leading-relaxed text-on-surface-muted sm:text-xs lg:hidden">
            Matches the in-app home screen — download for the full analysis flow.
          </p>
        </div>

        {/* Subcopy, pills, CTAs — aligned with heading column on lg */}
        <div className="flex w-full max-w-full flex-col items-center gap-5 sm:gap-6 lg:col-start-1 lg:row-start-2 lg:max-w-[min(100%,36rem)] lg:items-stretch lg:text-left">
          <p className="w-full max-w-[28rem] text-center text-on-surface-muted text-[clamp(0.9375rem,2.9vw,1.0625rem)] leading-[1.65] lg:hidden">
            Get hairstyle ideas made for <strong className="font-semibold text-on-surface">your</strong> face, try trending
            cuts in a tap, and keep every look organized — the same experience as the Luvia app.
          </p>

          <div className="flex w-full flex-wrap justify-center gap-2 lg:justify-start lg:gap-2.5">
            {PILLS.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-surface-low px-3 py-1.5 text-[12px] font-medium text-on-surface-muted transition-all duration-200 hover:border-primary hover:text-primary sm:px-3.5 sm:text-[13px]"
              >
                <p.Icon className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" strokeWidth={2} aria-hidden />
                {p.label}
              </span>
            ))}
          </div>

          <div className="flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-full sm:flex-row sm:items-center sm:justify-start sm:gap-3.5">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-playstore-btn"
              className={PLAY_STORE_BTN_CLASS}
            >
              <GooglePlayIcon size={30} className="shrink-0 text-white" />
              <span className="flex min-w-0 flex-col items-start leading-none">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80">Get it on</span>
                <span className="font-brand text-[17px] font-bold tracking-wide">Google Play</span>
              </span>
            </a>
            <Link
              href="/#features"
              id="hero-features-btn"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-200/95 bg-white px-7 py-3.5 font-brand text-sm font-bold text-on-surface shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface-low hover:shadow-md active:scale-[0.99] touch-manipulation sm:w-auto"
            >
              See what&apos;s inside
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex w-full items-center justify-center gap-2 lg:justify-start">
            <div className="flex gap-0.5" aria-hidden>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-tertiary text-tertiary" strokeWidth={0} />
              ))}
            </div>
            <span className="ml-1 text-[13px] text-on-surface-muted">Loved by early users</span>
          </div>
        </div>
      </div>
    </section>
  );
}
