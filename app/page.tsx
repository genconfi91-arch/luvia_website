import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import PrivacyBanner from "@/components/PrivacyBanner";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PrivacyBanner />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
