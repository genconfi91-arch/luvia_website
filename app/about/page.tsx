import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About the App — Luvia",
  description:
    "How Luvia works: sign in, AI recommendations crafted for your face, trending looks you can try, Grooming tab, reminders, and more. Built for Google Play.",
};

const PLAY_URL = "https://play.google.com/store";

export default function AboutAppPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[max(5rem,calc(4.5rem+env(safe-area-inset-top,0px)))] overflow-x-hidden">
        {/* Hero — ubuild-style marketing band */}
        <div className="section-x relative overflow-hidden border-b border-outline-variant bg-surface-lowest py-14 sm:py-20 md:py-24">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,90vw)] h-[400px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgb(8 145 178 / 0.08) 0%, transparent 55%)",
            }}
          />
          <div className="max-w-[1200px] mx-auto relative flex flex-col items-center text-center gap-6">
            <span className="section-label">About Luvia</span>
            <h1 className="page-hero-title max-w-[900px]">
              Grooming,{" "}
              <span className="text-primary">crafted for you</span>
              <br />
              — powered by on-device AI
            </h1>
            <p className="section-lede max-w-[720px] text-[clamp(0.9375rem,1.6vw,1.125rem)]">
              Luvia is an AI grooming companion that analyzes your face with the device camera,
              recommends hairstyles and beard styles tailored to you, and helps you track haircuts
              with reminders and local discovery. This page summarizes how the app works for
              transparency and store listings.
            </p>
            <div className="flex w-full max-w-md sm:max-w-none flex-col sm:flex-row flex-wrap justify-center gap-3 pt-2">
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 bg-primary text-on-primary font-brand font-bold text-sm px-8 py-3.5 rounded-full glow-btn hover:bg-primary-dim hover:-translate-y-0.5 transition-all duration-200 touch-manipulation w-full sm:w-auto"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.18 23.28A2 2 0 0 1 2 21.5V2.5A2 2 0 0 1 3.18.72L14.41 12 3.18 23.28zm14.92-8.72L5.8 21.5l10.54-6.03 1.76-1Zm0-5.12-1.76-1L5.8 2.5l12.3 6.94zM21 10.27c.66.38 1 .9 1 1.73s-.34 1.35-1 1.73l-2.77 1.59-2.06-2.06 2.06-2.06L21 10.27z" />
                </svg>
                Download on Google Play
              </a>
              <Link
                href="/privacy-policy"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-outline-variant text-on-surface font-brand font-bold text-sm px-8 py-3.5 rounded-full hover:border-primary hover:text-primary transition-all duration-200 touch-manipulation w-full sm:w-auto"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Trust stats — similar to ubuild KPI strip */}
        <div className="border-b border-outline-variant bg-bg">
          <div className="section-x mx-auto grid max-w-[1200px] grid-cols-2 gap-6 py-12 md:grid-cols-4 md:gap-4 md:py-14">
            {[
              { value: "2", label: "Main experiences" },
              { value: "3", label: "Curated hairstyle picks" },
              { value: "On-device", label: "Face analysis" },
              { value: "Soon", label: "Wardrobe" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-1 px-1">
                <span className="font-brand font-extrabold text-[clamp(1.25rem,4vw,2.5rem)] text-primary leading-none">
                  {s.value}
                </span>
                <span className="text-[11px] sm:text-[13px] font-medium text-on-surface-muted leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-x mx-auto flex max-w-[900px] flex-col gap-16 py-16 sm:gap-20 sm:py-20 md:gap-24 md:py-24">
          {/* Authentication */}
          <section className="flex flex-col gap-5" aria-labelledby="auth-heading">
            <span className="section-label justify-center sm:justify-start">App flow</span>
            <h2 id="auth-heading" className="section-title text-center sm:text-left">
              1. User authentication
            </h2>
            <div className="luvia-card flex flex-col gap-3">
              <p className="text-on-surface-muted text-[15px] leading-[1.75]">
                New users can create an account to save looks and sync grooming data. Existing users
                can sign in anytime. Authentication keeps your saved looks and preferences tied to
                your profile securely.
              </p>
            </div>
          </section>

          {/* Home — crafted for you & trending */}
          <section className="flex flex-col gap-8" aria-labelledby="home-heading">
            <div className="text-center sm:text-left">
              <h2 id="home-heading" className="section-title">
                2. Home — crafted for you & trending looks
              </h2>
              <p className="text-on-surface-muted text-[15px] leading-[1.7] mt-3 max-w-[640px] mx-auto sm:mx-0">
                The home experience centers on two complementary flows. Both use the SDK camera for
                capture, validate your face, and feed into AI analysis — then save to the Grooming tab
                when you choose.
              </p>
            </div>

            {/* Crafted for you */}
            <div>
              <h3 className="font-brand font-semibold text-[20px] text-primary mb-4">
                Crafted for you
              </h3>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                <AboutCard
                  title="Capture & validate"
                  body="The app uses the SDK camera to capture your face. Images are checked so that face detection succeeds before recommendations run."
                />
                <AboutCard
                  title="Your preferences"
                  body="You can choose what to optimize: hairstyle only, beard style only, both together, or a clean-shaven look where applicable."
                />
                <AboutCard
                  title="AI analysis"
                  body="After validation, AI processes and analyzes facial features to produce personalized results."
                />
                <AboutCard
                  title="Recommendations & insights"
                  body={
                    <>
                      You receive three curated hairstyle suggestions matched to your analysis, plus a
                      clear best pick, face metrics, and additional insights so you can decide what to
                      try next.
                    </>
                  }
                />
                <AboutCard
                  title="Save your looks"
                  body='Below the results you can tap "Save this look" or "Save all looks." Saved items appear in the Grooming tab.'
                />
              </ul>
            </div>

            {/* Grooming tab */}
            <div
              className="rounded-[20px] border border-outline-variant p-6 md:p-8 flex flex-col gap-4"
              style={{ background: "rgb(8 145 178 / 0.04)" }}
            >
              <h3 className="font-brand font-semibold text-[20px] text-on-surface">
                Grooming tab
              </h3>
              <p className="text-on-surface-muted text-[15px] leading-[1.75]">
                View every look you have saved. Each entry can include a{" "}
                <strong className="text-on-surface">“Haircut today?”</strong> prompt: if you answer
                yes, the date is recorded and the app can remind you ahead of your next haircut.
                After you mark a haircut as completed, you may access nearby salons, product
                recommendations, and post-haircut tips — so your routine stays connected end to
                end.
              </p>
            </div>

            {/* Trending hairstyles */}
            <div>
              <h3 className="font-brand font-semibold text-[20px] text-primary mb-4">
                Trending hairstyles
              </h3>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                <AboutCard
                  title="Browse & try"
                  body="Explore trending hairstyles. Select a style and tap “Try Now” to open the SDK camera and capture your face."
                />
                <AboutCard
                  title="Validate & preview"
                  body="The image is validated for proper face detection, then AI processes it and generates a preview showing you with the selected hairstyle."
                />
                <AboutCard
                  title="Save & continue"
                  body="Save the look to send it into the same Grooming journey — tracking, reminders, salons, products, and tips — as personalized recommendations."
                />
              </ul>
            </div>
          </section>

          {/* Roadmap */}
          <section className="flex flex-col gap-4 text-center border border-dashed border-outline-variant rounded-[20px] p-8 md:p-10">
            <h2 className="subsection-title">What’s next</h2>
            <p className="text-on-surface-muted text-[15px] leading-[1.75] max-w-[560px] mx-auto">
              <strong className="text-on-surface">Wardrobe</strong> is <strong className="text-on-surface">coming soon</strong>{" "}
              — a future update focused on planning and coordinating outfits alongside your grooming
              routine.
            </p>
          </section>

          {/* Why Luvia — ubuild “Why choose” style */}
          <section className="flex flex-col gap-8" aria-labelledby="why-heading">
            <div className="text-center max-w-[640px] mx-auto">
              <span className="section-label">Why Luvia</span>
              <h2 id="why-heading" className="section-title mt-3">
                Built for real grooming routines
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Personalized AI", desc: "Recommendations tuned to your face and the styles you want to explore." },
                { title: "Trending discovery", desc: "Try viral cuts with a guided camera and preview flow." },
                { title: "Grooming memory", desc: "Saved looks, haircut dates, and smart reminders." },
                { title: "After the cut", desc: "Salons, products, and tips when you mark a visit complete." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="luvia-card flex flex-col gap-2 p-6"
                >
                  <h3 className="font-brand font-semibold text-[17px] text-on-surface">{item.title}</h3>
                  <p className="text-on-surface-muted text-[14px] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom CTA — ubuild-style closing band */}
        <div className="section-x section-y relative overflow-hidden border-t border-outline-variant bg-surface-lowest">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgb(8 145 178 / 0.1), transparent 50%)",
            }}
          />
          <div className="max-w-[720px] mx-auto relative text-center flex flex-col items-center gap-6">
            <h2 className="section-title leading-tight">
              Start your grooming journey with{" "}
              <span className="text-primary">Luvia</span>
            </h2>
            <p className="text-on-surface-muted text-[15px] leading-[1.7]">
              Download the app on Google Play for the full experience — from AI recommendations to
              reminders and local salon discovery.
            </p>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-on-primary font-brand font-bold text-sm px-10 py-4 rounded-full glow-btn-lg hover:bg-primary-dim transition-all duration-200"
            >
              Get Luvia on Google Play
            </a>
            <div className="flex flex-wrap justify-center gap-4 text-[13px] text-on-surface-muted">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors underline underline-offset-2">
                Privacy Policy
              </Link>
              <span aria-hidden className="text-outline-variant">
                ·
              </span>
              <Link href="/terms" className="hover:text-primary transition-colors underline underline-offset-2">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function AboutCard({
  title,
  body,
}: Readonly<{
  title: string;
  body: React.ReactNode;
}>) {
  return (
    <li className="luvia-card flex flex-col gap-2 list-none !p-5 sm:!p-6">
      <h4 className="font-brand font-semibold text-[16px] text-on-surface">{title}</h4>
      <p className="text-on-surface-muted text-[14px] leading-[1.7]">{body}</p>
    </li>
  );
}
