import type { Metadata, Viewport } from "next";
import { Dancing_Script, Inter, Outfit } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F0F4F8",
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/** Matches Flutter home “Crafted” script (AnalyzeMyFaceWidgets) */
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-crafted",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luvia — AI-Powered Grooming, Crafted for You",
  description:
    "Luvia uses advanced AI and face detection to recommend personalized hairstyles and grooming looks. Discover your ideal style, track your grooming, and browse trending cuts.",
  keywords: [
    "Luvia",
    "AI grooming",
    "hairstyle recommendation",
    "face analysis",
    "personalized haircut",
    "trending hairstyles",
    "grooming app",
    "privacy policy",
  ],
  openGraph: {
    title: "Luvia — AI-Powered Grooming",
    description:
      "AI-powered hairstyle recommendations tailored to your face shape. Download Luvia on Google Play.",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://luvia-app.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${dancingScript.variable}`}>
      <body className="min-h-[100dvh] antialiased pb-[max(0px,env(safe-area-inset-bottom))]">
        {children}
      </body>
    </html>
  );
}
