"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Camera, ClipboardCheck, Info, Shirt, Sparkles } from "lucide-react";

const STEPS: Array<{
  number: string;
  title: string;
  description: string;
  detail: string;
  Icon: LucideIcon;
}> = [
  {
    number: "01",
    title: "Capture Your Face",
    description:
      "Open Luvia and let the smart camera scan your face. Our on-device AI validates the frame, ensuring proper lighting and face positioning before analysis begins.",
    detail: "Powered by Google ML Kit Face Detection — 100% on-device, zero data upload.",
    Icon: Camera,
  },
  {
    number: "02",
    title: "AI Analyzes & Recommends",
    description:
      "Luvia reads your facial structure, proportions, and feature placement to surface three strong hairstyle directions tailored to you — with clear reasoning you can trust.",
    detail: "Each pick includes context, face metrics, and insights so you know why it suits you.",
    Icon: Sparkles,
  },
  {
    number: "03",
    title: "Save & Track Your Looks",
    description:
      "Save your favourite style to the Grooming tab. Mark when you get a haircut, and Luvia will remind you when it's time for the next one — plus finds nearby salons.",
    detail: "Post-haircut: explore product recommendations and pro tips curated for your style.",
    Icon: ClipboardCheck,
  },
];

const TRENDING_CHIPS = ["Browse Trending", "Tap Try Now", "AI Preview", "Save Look"];

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="section-x section-y relative overflow-x-hidden bg-bg"
    >
      {/* Soft background depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.65]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgb(8 145 178 / 0.09), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 50%, rgb(8 145 178 / 0.04), transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Header — pipeline preview + title */}
        <div
          className={`mx-auto mb-10 max-w-[680px] px-1 text-center transition-all duration-700 sm:mb-12 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="section-label justify-center">How It Works</span>

          {/* Mini horizontal pipeline */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            {STEPS.map((s, i) => (
              <div key={s.number} className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`flex h-10 min-w-[2.5rem] items-center justify-center rounded-full border-2 border-primary/25 bg-surface-lowest px-3 font-brand text-[13px] font-extrabold text-primary shadow-sm sm:h-11 sm:min-w-[2.75rem] sm:text-sm ${
                    i === 0 ? "animate-pipeline-node" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  {s.number}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="relative hidden h-[3px] w-10 overflow-hidden rounded-full bg-slate-200/90 sm:block sm:w-14 md:w-24">
                    <div
                      className="animate-how-connector absolute inset-0 origin-left rounded-full bg-gradient-to-r from-primary/70 via-primary/40 to-primary/15"
                      style={{ animationDelay: `${i * 0.35}s` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2 className="section-title mt-8 sm:mt-10">
            Three steps to your{" "}
            <span className="gradient-text">ideal look</span>
          </h2>
          <p className="section-lede mt-4 max-w-[520px]">
            A clear pipeline from capture to routine — Luvia gets you there in under a minute.
          </p>
        </div>

        {/* Step cards */}
        <div className="relative mx-auto max-w-[880px]">
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          {STEPS.map((step, i) => (
              <article
              key={step.number}
              id={`step-${i + 1}`}
                className={`relative flex flex-col gap-5 pl-0 transition-all duration-700 ease-out sm:flex-row sm:gap-8 sm:pl-0 md:gap-10 ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
                style={{ transitionDelay: visible ? `${120 + i * 100}ms` : "0ms" }}
            >
                {/* Node / icon column */}
                <div className="relative z-[1] flex shrink-0 flex-row items-start gap-4 sm:w-[120px] sm:flex-col sm:items-center sm:gap-3 md:w-[132px]">
                <div
                    className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/25 bg-surface-lowest shadow-[0_8px_28px_rgb(8_145_178_/_0.12)] sm:h-16 sm:w-16"
                  style={{
                      background: "linear-gradient(145deg, rgb(255 255 255), rgb(248 250 252))",
                  }}
                >
                    <step.Icon className="h-7 w-7 text-primary sm:h-8 sm:w-8" strokeWidth={1.75} aria-hidden />
                    <span className="absolute -bottom-1 -right-1 flex h-6 min-w-[1.5rem] items-center justify-center rounded-lg border border-primary/20 bg-primary px-1.5 font-brand text-[10px] font-bold text-on-primary shadow-sm">
                    {step.number}
                    </span>
                  </div>
                  <span className="font-brand text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-muted sm:hidden">
                    Step {i + 1}
                  </span>
                </div>

                {/* Card */}
                <div className="min-w-0 flex-1">
                  <div
                    className="group relative overflow-hidden rounded-[22px] border border-outline-variant bg-surface-lowest p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_20px_50px_-12px_rgb(15_23_42_/_0.1)] sm:p-7"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgb(255 255 255) 0%, rgb(248 250 252) 48%, rgb(255 255 255) 100%)",
                    }}
                  >
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                      style={{
                        background: "radial-gradient(circle, rgb(8 145 178 / 0.12) 0%, transparent 70%)",
                      }}
                      aria-hidden
                    />
                    <div className="relative">
                      <div className="mb-1 hidden items-center gap-2 sm:flex">
                        <span className="rounded-md bg-primary/10 px-2 py-0.5 font-brand text-[10px] font-bold uppercase tracking-wider text-primary">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="card-title">{step.title}</h3>
                      <p className="mt-3 text-[15px] leading-[1.75] text-on-surface-muted">{step.description}</p>
                      <div className="mt-4 flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/[0.04] px-3.5 py-3 text-[13px] leading-relaxed text-on-surface-muted sm:px-4">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden />
                        <span>{step.detail}</span>
              </div>
                </div>
              </div>
            </div>
              </article>
          ))}
          </div>
        </div>

        {/* Trending looks */}
        <div
          className={`relative mt-16 overflow-hidden rounded-[22px] border border-outline-variant bg-surface-lowest/90 p-6 shadow-sm transition-all duration-700 sm:mt-20 lg:mt-24 sm:p-9 lg:p-10 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: visible ? "420ms" : "0ms" }}
        >
          <div
            className="pointer-events-none absolute right-0 top-0 h-56 w-56"
            style={{ background: "radial-gradient(circle, rgb(8 145 178 / 0.08) 0%, transparent 70%)" }}
            aria-hidden
          />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="flex flex-col gap-3">
              <span className="section-label">Trending looks</span>
              <h3 className="subsection-title">
                Also love what&apos;s hot right now?
            </h3>
              <p className="text-[14px] leading-[1.7] text-on-surface-muted">
                Browse trending cuts, tap <strong className="text-on-surface">Try Now</strong>, and see an AI-generated
                preview of you with that hairstyle — then save it to your grooming tab.
            </p>
          </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:flex lg:flex-wrap lg:justify-end lg:gap-x-2 lg:gap-y-2">
              {TRENDING_CHIPS.map((label, i) => (
                <div
                  key={label}
                  className="flex min-h-[44px] items-center gap-2 rounded-xl border border-outline-variant bg-surface-lowest px-2.5 py-2.5 transition-colors hover:border-primary/25 sm:min-h-0 sm:px-3.5"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-primary"
                    style={{
                      background: "rgb(8 145 178 / 0.1)",
                      border: "1px solid rgb(8 145 178 / 0.28)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0 text-[12px] font-medium leading-tight text-on-surface sm:text-[13px]">{label}</span>
                </div>
              ))}
              </div>
          </div>
        </div>

        {/* Wardrobe */}
        <div
          className={`mt-10 flex flex-col items-center gap-3 rounded-[22px] border border-dashed border-primary/25 bg-surface-low/90 px-5 py-9 text-center transition-all duration-700 sm:mt-12 sm:px-8 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: visible ? "520ms" : "0ms" }}
          role="status"
          aria-live="polite"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/8">
            <Shirt className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden />
          </div>
          <h3 className="subsection-title">Wardrobe</h3>
          <p className="max-w-md text-[14px] leading-relaxed text-on-surface-muted">
            Outfit planning and coordination are on the way — <strong className="text-on-surface">coming soon</strong>{" "}
            in a future update. Stay tuned inside the app.
          </p>
        </div>
      </div>
    </section>
  );
}
