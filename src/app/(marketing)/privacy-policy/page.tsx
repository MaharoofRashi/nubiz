import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/page-hero'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'Privacy Policy | NUBIZ' },
    description:
      'NUBIZ privacy policy — how we collect, use, and protect your personal data. UAE PDPL compliant.',
  }
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero title="Privacy Policy" subtitle="Last updated: July 2026" />

      <section style={{ background: '#fff' }}>
        <div className="legal-prose">
          <h2>1. Who We Are</h2>
          <p>
            NUBIZ (nubiz.ae) is operated by Supreme Digital Business Services, an
            independent private business setup consultancy registered in Dubai, UAE. We
            are not affiliated with any UAE government entity or authority.
          </p>
          <p>
            Contact: info@nubiz.ae · +971 56 489 9004
            <br />
            Address: Inside Max Metro Station, Al Jafiliya, Al Kifaf, Dubai, UAE
          </p>

          <h2>2. Information We Collect</h2>
          <p>When you use our website or contact us, we may collect:</p>
          <ul>
            <li>
              Name, email address, phone number submitted through contact forms or the
              cost calculator
            </li>
            <li>
              Business information you share during consultations (company type,
              jurisdiction preferences, visa requirements)
            </li>
            <li>
              Technical information including IP address, browser type, pages visited, and
              time spent on pages (collected automatically via analytics tools)
            </li>
            <li>Communications you send us via WhatsApp, email, or phone</li>
          </ul>
          <p>We do not collect payment card information through this website.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to your enquiries and provide business setup consultations</li>
            <li>Prepare cost estimates and written quotes</li>
            <li>Process your company formation and related service applications</li>
            <li>
              Send you information relevant to your business setup (you may opt out at any
              time)
            </li>
            <li>Improve our website and services</li>
            <li>Comply with UAE legal and regulatory requirements</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>
            Under the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of
            2021), we process your personal data on the basis of:
          </p>
          <ul>
            <li>Your consent (when you submit a form or contact us)</li>
            <li>Contractual necessity (to deliver services you have requested)</li>
            <li>
              Legitimate interests (improving our services and communicating with
              prospective clients)
            </li>
            <li>Legal obligation (regulatory compliance requirements)</li>
          </ul>

          <h2>5. Cookies and Tracking</h2>
          <p>
            Our website uses cookies and similar technologies to understand how visitors
            use the site. We use:
          </p>
          <ul>
            <li>Analytics cookies (Google Analytics) to understand visitor behaviour</li>
            <li>
              Advertising cookies (Google Ads) to measure ad performance and enable
              remarketing
            </li>
          </ul>
          <p>
            You can control cookie preferences through your browser settings. Disabling
            cookies may affect website functionality. By continuing to use this website,
            you consent to our use of cookies as described above.
          </p>
          <p>
            We use Google Ads remarketing. This means you may see NUBIZ advertisements on
            other websites after visiting nubiz.ae. Google&apos;s use of advertising
            cookies enables it to serve ads based on your prior visits to our site. You
            may opt out via Google&apos;s Ad Settings at adssettings.google.com.
          </p>

          <h2>6. Data Sharing</h2>
          <p>We do not sell your personal data. We may share your information with:</p>
          <ul>
            <li>
              Freezone authorities and UAE government portals as required to deliver
              services you have instructed us to perform
            </li>
            <li>
              Our parent company Supreme Digital Business Services for operational purposes
            </li>
            <li>
              Technology service providers (email, CRM, analytics) who process data on our
              behalf under appropriate agreements
            </li>
            <li>
              Regulatory or law enforcement authorities where required by UAE law
            </li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>
            We retain personal data for as long as necessary to deliver the services
            requested and to comply with UAE legal requirements. Business formation
            records are typically retained for 7 years in line with UAE corporate
            record-keeping requirements.
          </p>

          <h2>8. Your Rights</h2>
          <p>Under the UAE PDPL, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>
              Request deletion of your data (subject to legal retention requirements)
            </li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the UAE data protection authority</li>
          </ul>
          <p>To exercise any of these rights, contact us at info@nubiz.ae</p>

          <h2>9. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your
            personal data against unauthorised access, loss, or disclosure. Our website
            uses HTTPS encryption for all data transmission.
          </p>

          <h2>10. Third-Party Links</h2>
          <p>
            Our website contains links to freezone authority websites and other third
            parties. We are not responsible for their privacy practices and encourage you
            to review their privacy policies.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will
            be posted on this page with a revised date. Continued use of the website after
            changes constitutes acceptance of the updated policy.
          </p>

          <h2>12. Contact</h2>
          <p>For privacy-related questions: info@nubiz.ae</p>
        </div>
      </section>
    </main>
  )
}
