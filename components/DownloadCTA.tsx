import type { LucideIcon } from "lucide-react";
import { BadgePercent, Ban, Cpu, ShieldCheck } from "lucide-react";
import GooglePlayIcon from "@/components/icons/GooglePlayIcon";

const TRUST_CHIPS: { Icon: LucideIcon; label: string }[] = [
  { Icon: ShieldCheck, label: "Privacy first" },
  { Icon: Cpu, label: "AI powered" },
  { Icon: BadgePercent, label: "Free forever" },
  { Icon: Ban, label: "No data selling" },
];

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="section-x section-y relative overflow-x-hidden border-t border-outline-variant/80 bg-surface-low text-center"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgb(8 145 178 / 0.07) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 mx-auto flex max-w-[680px] flex-col items-center gap-7 px-1 sm:gap-9">
        {/* Text */}
        <div className="flex flex-col items-center gap-4">
          <span className="section-label">Available Now</span>
          <h2 className="section-title text-center">
            Your ideal look is{" "}
            <span className="text-primary">one tap away</span>
          </h2>
          <p className="section-lede max-w-[36ch] sm:max-w-none">
            Download Luvia for free on Android. No subscriptions. No data selling.
            Just AI-powered grooming built around <em>you</em>.
          </p>
        </div>

        {/* Play Store button */}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          id="download-cta-btn"
          className="inline-flex w-full max-w-xs sm:max-w-none sm:w-auto min-h-[52px] items-center justify-center gap-3.5 rounded-2xl bg-[#0f172a] px-6 py-4 font-brand font-bold text-white shadow-[0_8px_24px_rgba(15,23,42,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:shadow-xl touch-manipulation sm:px-8"
        >
          <GooglePlayIcon size={28} className="shrink-0 text-white" />
          <span className="flex flex-col items-start">
            <small className="text-[11px] font-normal opacity-80">Get it on</small>
            <strong className="text-[18px] font-extrabold tracking-wide">Google Play</strong>
          </span>
        </a>

        {/* Trust chips */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-lg mx-auto">
          {TRUST_CHIPS.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-1.5 sm:gap-2 bg-white border border-outline-variant rounded-full px-3 py-2 sm:px-4 text-[12px] sm:text-[13px] font-medium text-on-surface-muted hover:border-primary hover:text-on-surface transition-all duration-200"
            >
              <c.Icon className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
