import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  LegalCallout,
  LegalContactCard,
  LegalDocumentBody,
  LegalDocumentHero,
  LegalList,
  LegalMetaRow,
  LegalMetaSeparator,
  LegalProse,
  LegalSection,
  LegalServiceRow,
  LegalSubSection,
} from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy — Luvia",
  description:
    "Luvia's Privacy Policy — learn how we handle your camera access, face data, location, and personal information. Your privacy is our top priority.",
};

const LAST_UPDATED = "April 3, 2026";
const APP_NAME = "Luvia";
const CONTACT_EMAIL = "genconfi91@gmail.com";
const COMPANY = "Luvia Technologies";

const THIRD_PARTIES = [
  { name: "Google ML Kit", purpose: "On-device face detection (no data leaves your device)", link: "https://developers.google.com/ml-kit/terms" },
  { name: "Google Maps Platform", purpose: "Nearby salon discovery", link: "https://policies.google.com/privacy" },
  { name: "Google Sign-In", purpose: "Optional social authentication", link: "https://policies.google.com/privacy" },
  { name: "Supabase", purpose: "Secure backend database and authentication", link: "https://supabase.com/privacy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden pt-[max(5rem,calc(4.5rem+env(safe-area-inset-top,0px)))]">
        <LegalDocumentHero
          title="Privacy Policy"
          meta={
            <LegalMetaRow>
              <span>
                Last updated: <strong className="text-on-surface">{LAST_UPDATED}</strong>
              </span>
              <LegalMetaSeparator />
              <span>Effective immediately upon download</span>
            </LegalMetaRow>
          }
        />

        <LegalDocumentBody>
          <LegalCallout
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5z" />
              </svg>
            }
          >
            <p>
              <strong className="text-on-surface">{APP_NAME}</strong> is committed to protecting your privacy. Our face detection runs
              entirely <strong className="text-on-surface">on-device</strong> — your face images are{" "}
              <strong className="text-on-surface">never uploaded</strong> to our servers.
            </p>
          </LegalCallout>

          <LegalSection id="s1" title="1. Introduction">
            <LegalProse>
              For a plain-language overview of app features and user flows (including camera use, recommendations, and the Grooming tab),
              see our{" "}
              <Link href="/about" className="font-medium text-primary underline underline-offset-2 decoration-primary/30 hover:decoration-primary">
                About the App
              </Link>{" "}
              page.
            </LegalProse>
            <LegalProse>
              {COMPANY} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the {APP_NAME} mobile application (the &quot;App&quot;). This Privacy Policy
              informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our App and the
              choices you have associated with that information.
            </LegalProse>
            <LegalProse>
              By downloading and using {APP_NAME}, you agree to the collection and use of information in accordance with this policy.
            </LegalProse>
          </LegalSection>

          <LegalSection id="s2" title="2. Information We Collect">
            <LegalSubSection title="2.1 Camera & Face Data">
              <LegalProse>
                {APP_NAME} requires camera access to perform face detection and hairstyle analysis. Here is exactly how this works:
              </LegalProse>
              <LegalList
                items={[
                  <>
                    <strong className="text-on-surface">On-device only:</strong> All face detection is performed using Google ML Kit Face
                    Detection, which runs locally on your device. Your face images are{" "}
                    <strong className="text-on-surface">never transmitted to our servers</strong>.
                  </>,
                  <>
                    <strong className="text-on-surface">Temporary processing:</strong> Camera frames are processed in real-time and discarded
                    immediately after analysis. We do not save raw camera footage.
                  </>,
                  <>
                    <strong className="text-on-surface">Saved looks:</strong> When you choose to &quot;Save a Look&quot;, we store only the
                    recommendation output — not your actual image.
                  </>,
                  <>
                    <strong className="text-on-surface">Trending preview:</strong> When using &quot;Try Now&quot;, an AI-generated preview is
                    created on-device. You can optionally save it to your photo library.
                  </>,
                ]}
              />
            </LegalSubSection>
            <LegalSubSection title="2.2 Account Information">
              <LegalList items={["Email address (for authentication)", "Display name (optional)", "Google Sign-In token (if using Google auth)"]} />
            </LegalSubSection>
            <LegalSubSection title="2.3 Usage Data">
              <LegalList
                items={[
                  "App open/close events and session duration",
                  "Features used (anonymised)",
                  "Crash reports and error logs",
                  "Device type, OS version, and app version",
                ]}
              />
            </LegalSubSection>
            <LegalSubSection title="2.4 Location Data">
              <LegalProse>
                Location access is requested <strong className="text-on-surface">only</strong> when you use &quot;Nearby Salons&quot; after marking a
                haircut. It is entirely optional and not stored beyond the immediate map request.
              </LegalProse>
            </LegalSubSection>
            <LegalSubSection title="2.5 Grooming Data">
              <LegalProse>
                Your saved grooming history (saved looks, haircut dates, preferences) is stored securely in your account and used solely to
                provide the service to you.
              </LegalProse>
            </LegalSubSection>
          </LegalSection>

          <LegalSection id="s3" title="3. How We Use Your Information">
            <LegalList
              items={[
                "Provide, maintain, and improve the service",
                "Deliver personalised hairstyle recommendations",
                "Send grooming schedule reminders",
                "Process authentication and manage your account",
                "Detect and prevent technical issues and fraud",
                "Respond to your support queries",
                "Comply with legal obligations",
              ]}
            />
            <LegalProse>
              <strong className="text-on-surface">We do not use your data for advertising profiling.</strong> We do not sell, rent, or trade
              your Personal Information to third parties.
            </LegalProse>
          </LegalSection>

          <LegalSection id="s4" title="4. Data Storage & Security">
            <LegalList
              items={[
                "End-to-end TLS/HTTPS encryption for all API communications",
                "Encrypted data storage with row-level security",
                "Secure token-based authentication (JWT)",
                "Regular security audits and dependency updates",
              ]}
            />
          </LegalSection>

          <LegalSection id="s5" title="5. Data Retention & Deletion">
            <LegalProse>
              You may request deletion of your data at any time by using &quot;Delete Account&quot; in settings or emailing{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-primary underline underline-offset-2 decoration-primary/30 hover:decoration-primary"
              >
                {CONTACT_EMAIL}
              </a>
              . Deletion is processed within <strong className="text-on-surface">30 days</strong>.
            </LegalProse>
          </LegalSection>

          <LegalSection id="s6" title="6. Third-Party Services">
            <div className="flex flex-col gap-3">
              {THIRD_PARTIES.map((s) => (
                <LegalServiceRow key={s.name} name={s.name} purpose={s.purpose} href={s.link} />
              ))}
            </div>
          </LegalSection>

          <LegalSection id="s7" title={'7. Children\u2019s Privacy'}>
            <LegalProse>
              {APP_NAME} is not directed to individuals under 13. If you believe your child has provided us data, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-primary underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>{" "}
              and we will delete it promptly.
            </LegalProse>
          </LegalSection>

          <LegalSection id="s8" title="8. Your Privacy Rights">
            <LegalList
              items={[
                "Access — Request a copy of data we hold about you",
                "Rectification — Request correction of inaccurate data",
                "Erasure — Request deletion of your personal data",
                "Portability — Request data in machine-readable format",
                "Withdraw consent — Revoke camera or location permissions anytime via device settings",
              ]}
            />
          </LegalSection>

          <LegalSection id="s9" title="9. Push Notifications">
            <LegalProse>
              You can disable haircut reminder notifications anytime via your device settings or within the {APP_NAME} settings screen.
            </LegalProse>
          </LegalSection>

          <LegalSection id="s10" title="10. Changes to This Policy">
            <LegalProse>
              We may update this policy from time to time. We will notify you of significant changes via the App. Continued use after changes
              constitutes acceptance.
            </LegalProse>
          </LegalSection>

          <LegalSection id="s11" title="11. Contact Us" last>
            <LegalContactCard
              rows={[
                { label: "Email", value: <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-primary hover:underline">{CONTACT_EMAIL}</a> },
                { label: "App", value: <span className="text-on-surface-muted">{APP_NAME} — AI Grooming App</span> },
                { label: "Response time", value: <span className="text-on-surface-muted">Within 30 business days</span> },
              ]}
            />
          </LegalSection>
        </LegalDocumentBody>
      </main>
      <Footer />
    </>
  );
}
