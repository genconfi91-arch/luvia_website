import Link from "next/link";
import GooglePlayIcon from "@/components/icons/GooglePlayIcon";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About the App", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-outline-variant">
      {/* Top */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2.5 w-fit">
              <Image
                src="/logo.png"
                alt="Luvia"
                width={40}
                height={40}
                className="rounded-xl"
                style={{ boxShadow: "0 4px 12px rgb(8 145 178 / 0.15)" }}
              />
              <span className="font-brand font-extrabold text-[18px] tracking-[3px] gradient-text">
                LUVIA
              </span>
            </Link>
            <p className="text-on-surface-muted text-[14px] leading-[1.7] max-w-[300px]">
              AI-Powered Grooming, Crafted for You. Personalized hairstyle recommendations
              powered by on-device face detection.
            </p>
            <div
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-primary rounded-full px-3 py-1.5 w-fit"
              style={{ background: "rgb(8 145 178 / 0.06)", border: "1px solid rgb(8 145 178 / 0.18)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5z"/>
              </svg>
              100% On-Device Face Processing
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-brand text-[13px] font-bold tracking-[1.5px] uppercase text-on-surface-muted">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-on-surface-muted hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-brand text-[13px] font-bold tracking-[1.5px] uppercase text-on-surface-muted">
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "About the App", href: "/about" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Contact Support", href: "mailto:support@luvia-app.com" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-on-surface-muted hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div className="flex flex-col gap-4">
            <h4 className="font-brand text-[13px] font-bold tracking-[1.5px] uppercase text-on-surface-muted">
              Download
            </h4>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-download-btn"
              className="inline-flex w-fit items-center gap-3 rounded-2xl border border-outline-variant bg-surface-low px-4 py-3.5 text-on-surface transition-all duration-200 hover:border-primary hover:shadow-md"
            >
              <GooglePlayIcon size={22} className="shrink-0 text-[#0f172a]" />
              <span className="flex flex-col">
                <small className="text-[11px] text-on-surface-muted">Get it on</small>
                <strong className="font-brand text-[15px]">Google Play</strong>
              </span>
            </a>
            <p className="text-[13px] text-on-surface-muted leading-[1.6]">
              Available for Android.<br />Free to download.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-5 md:px-10 lg:px-16 py-5"
        style={{ borderColor: "var(--color-outline-variant)" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-[13px] text-on-surface-muted">
            © {year} Luvia. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { label: "About", href: "/about" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] text-on-surface-muted hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
