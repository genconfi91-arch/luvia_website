"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import GooglePlayIcon from "@/components/icons/GooglePlayIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-outline-variant shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-10 lg:px-16 flex items-center gap-3 sm:gap-6 md:gap-8 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="Luvia logo"
            width={36}
            height={36}
            className="rounded-xl"
            style={{ boxShadow: "0 4px 14px rgb(8 145 178 / 0.2)" }}
            priority
          />
          <span className="font-brand font-extrabold text-xl tracking-[3px] gradient-text">
            LUVIA
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 ml-auto">
          {[
            { label: "Features", href: "/#features" },
            { label: "How it works", href: "/#how-it-works" },
            { label: "About", href: "/about" },
            { label: "Privacy", href: "/privacy-policy" },
            { label: "Terms", href: "/terms" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-on-surface-muted px-3.5 py-2 rounded-lg hover:text-on-surface hover:bg-surface transition-all duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          id="navbar-download-btn"
          className="hidden md:inline-flex items-center gap-2 shrink-0 rounded-full bg-[#0f172a] px-5 py-2.5 font-brand text-[13px] font-bold text-white shadow-md transition-all duration-200 hover:bg-black hover:shadow-lg hover:scale-[1.02]"
        >
          <GooglePlayIcon size={18} className="shrink-0 text-white" />
          Get on Play Store
        </a>

        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden ml-auto flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 rounded-lg bg-transparent p-2 border-none cursor-pointer touch-manipulation"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          id="hamburger-btn"
        >
          <span
            className={`block w-6 h-0.5 bg-on-surface rounded-sm transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-surface rounded-sm transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-surface rounded-sm transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col bg-white/98 border-t border-outline-variant overflow-y-auto overscroll-contain transition-[max-height] duration-300 ease-out ${
          menuOpen ? "max-h-[min(85dvh,28rem)]" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col py-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {[
            { label: "Features", href: "/#features" },
            { label: "How it works", href: "/#how-it-works" },
            { label: "About the app", href: "/about" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms", href: "/terms" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium text-on-surface-muted min-h-[48px] flex items-center px-5 sm:px-6 py-3 border-b border-outline-variant/80 active:bg-surface transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 sm:mx-6 mt-3 flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#0f172a] px-6 py-3.5 font-brand text-sm font-bold text-white shadow-md touch-manipulation transition-all hover:bg-black"
          >
            <GooglePlayIcon size={22} className="shrink-0 text-white" />
            Get on Play Store
          </a>
        </div>
      </div>
    </nav>
  );
}
