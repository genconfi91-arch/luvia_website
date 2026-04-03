import type { Metadata } from "next";
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
} from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Service — Luvia",
  description: "Luvia's Terms of Service — the rules governing your use of our AI-powered grooming application.",
};

const APP_NAME = "Luvia";
const CONTACT_EMAIL = "legal@luvia-app.com";
const LAST_UPDATED = "April 3, 2026";

const TERMS = [
  {
    id: "t1",
    title: "1. Acceptance of Terms",
    content: `By accessing or using ${APP_NAME}, you confirm that you are at least 13 years of age and agree to these Terms of Service.`,
    list: [] as string[],
  },
  {
    id: "t2",
    title: "2. Description of Service",
    content: `${APP_NAME} provides an AI-powered grooming recommendation service that includes:`,
    list: [
      "On-device facial analysis for personalized hairstyle recommendations",
      "Multiple curated hairstyle suggestions tailored to your analysis",
      "Trending hairstyle preview via AI-generated images",
      "Grooming schedule tracking and reminder notifications",
      "Integration with Google Maps for nearby salon discovery",
    ],
  },
  {
    id: "t3",
    title: "3. User Accounts",
    content: "To use personalized features, you must create an account. You agree to:",
    list: [
      "Provide accurate and current information during registration",
      "Maintain the security of your password and account",
      "Notify us immediately of any unauthorized use of your account",
      "Accept responsibility for all activities under your account",
    ],
  },
  {
    id: "t4",
    title: "4. Permitted Use",
    content: `You may use ${APP_NAME} for personal, non-commercial purposes only. You agree not to:`,
    list: [
      "Reverse engineer, decompile, or disassemble the App",
      "Use the App for any unlawful purpose",
      "Attempt to gain unauthorized access to the App's systems",
      "Use automated tools to access the App without our consent",
      "Resell or redistribute the App or its outputs commercially",
    ],
  },
  {
    id: "t5",
    title: "5. Camera & Permissions",
    content: `${APP_NAME} requires camera access to function. By granting camera permission, you acknowledge that:`,
    list: [
      "Face detection processing occurs entirely on your device",
      "Camera images are not stored or transmitted by our systems",
      "You can revoke camera permission at any time via device settings",
      "Revoking camera access will restrict core app functionality",
    ],
  },
  {
    id: "t6",
    title: "6. Intellectual Property",
    content: `All content, features, and functionality of ${APP_NAME} are owned by ${APP_NAME} and protected by intellectual property laws. AI-generated recommendations are for personal grooming guidance only.`,
    list: [],
  },
  {
    id: "t7",
    title: "7. Disclaimers",
    content: `${APP_NAME} is provided "as is" without warranties. We do not guarantee:`,
    list: [
      "That AI recommendations will suit every individual's personal taste",
      "The accuracy of face shape detection in all lighting conditions",
      "That nearby salon information is always current or accurate",
      "Uninterrupted or error-free operation of the App",
    ],
  },
  {
    id: "t8",
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, ${APP_NAME} and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.`,
    list: [],
  },
  {
    id: "t9",
    title: "9. Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. Continued use of ${APP_NAME} after changes constitutes acceptance of the revised Terms.`,
    list: [],
  },
  {
    id: "t10",
    title: "10. Governing Law",
    content: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
    list: [],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden pt-[max(5rem,calc(4.5rem+env(safe-area-inset-top,0px)))]">
        <LegalDocumentHero
          title="Terms of Service"
          meta={
            <LegalMetaRow>
              <span>
                Last updated: <strong className="text-on-surface">{LAST_UPDATED}</strong>
              </span>
              <LegalMetaSeparator />
              <span>Binding when you use the app</span>
            </LegalMetaRow>
          }
        />

        <LegalDocumentBody>
          <LegalCallout
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            }
          >
            <p>
              Please read these Terms carefully before using <strong className="text-on-surface">{APP_NAME}</strong>. By downloading or using
              the App, you agree to be bound by these terms.
            </p>
          </LegalCallout>

          {TERMS.map((t, i) => (
            <LegalSection key={t.id} id={t.id} title={t.title} last={i === TERMS.length - 1}>
              <LegalProse>{t.content}</LegalProse>
              {t.list.length > 0 && <LegalList items={t.list} />}
            </LegalSection>
          ))}

          <LegalSection id="t11" title="11. Contact" last>
            <LegalProse>
              For any questions about these Terms, reach us using the details below.
            </LegalProse>
            <LegalContactCard
              rows={[
                {
                  label: "Email",
                  value: (
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-medium text-primary underline underline-offset-2 decoration-primary/30 hover:decoration-primary"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  ),
                },
                { label: "App", value: <span className="text-on-surface-muted">{APP_NAME}</span> },
              ]}
            />
          </LegalSection>
        </LegalDocumentBody>
      </main>
      <Footer />
    </>
  );
}
