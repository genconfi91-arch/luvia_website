import Link from "next/link";

const PRIVACY_POINTS = [
  "Camera access: only during active use",
  "Face images: processed locally, never uploaded",
  "Location: only for nearby salon discovery (optional)",
  "Full data deletion available at any time",
];

export default function PrivacyBanner() {
  return (
    <section id="privacy" className="section-x section-y overflow-x-hidden bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white border border-outline-variant rounded-[20px] p-5 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[80px_1fr_auto] gap-6 sm:gap-8 items-start relative overflow-hidden shadow-sm">
          {/* Ambient glow */}
          <div
            className="absolute top-0 right-0 w-60 h-60 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgb(8 145 178 / 0.06) 0%, transparent 70%)" }}
          />

          {/* Lock icon */}
          <div
            className="w-[72px] h-[72px] rounded-[22px] flex items-center justify-center text-primary shrink-0"
            style={{
              background: "linear-gradient(135deg, rgb(8 145 178 / 0.1), rgb(8 145 178 / 0.03))",
              border: "1.5px solid rgb(8 145 178 / 0.22)",
              boxShadow: "0 4px 20px rgb(8 145 178 / 0.08)",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
            </svg>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 relative z-10">
            <span className="section-label">Privacy First</span>
            <h2 className="subsection-title text-left">
              Your face data stays on your device
            </h2>
            <p className="max-w-[560px] text-[15px] leading-[1.7] text-on-surface-muted">
              Luvia uses{" "}
              <strong className="text-on-surface">Google ML Kit</strong> for 100% on-device
              face detection — your camera images never leave your phone. We do not store,
              sell, or share your biometric data with third parties.
            </p>
            <div className="flex flex-col gap-2.5">
              {PRIVACY_POINTS.map((p) => (
                <div key={p} className="flex items-center gap-2.5 text-[14px] text-on-surface-muted">
                  <span
                    className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-primary shrink-0"
                    style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.3)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </span>
                  {p}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-1 w-full sm:w-auto">
              <Link
                href="/privacy-policy"
                id="privacy-policy-link"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-primary text-on-primary font-brand font-bold text-[15px] px-6 sm:px-7 py-3.5 rounded-full glow-btn hover:bg-primary-dim hover:-translate-y-0.5 transition-all duration-200 touch-manipulation w-full sm:w-auto"
              >
                Read Full Privacy Policy
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link
                href="/terms"
                id="terms-link"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-transparent text-on-surface font-brand font-bold text-[15px] px-6 sm:px-7 py-3.5 rounded-full border border-outline-variant hover:border-primary hover:text-primary transition-all duration-200 touch-manipulation w-full sm:w-auto"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Shield graphic */}
          <div className="hidden lg:flex items-center justify-center shrink-0 relative z-10">
            <div
              className="w-[120px] h-[120px] rounded-full flex items-center justify-center animate-pulse-glow"
              style={{ border: "1.5px solid rgb(8 145 178 / 0.2)" }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "rgb(8 145 178 / 0.06)", border: "1.5px solid rgb(8 145 178 / 0.2)" }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
