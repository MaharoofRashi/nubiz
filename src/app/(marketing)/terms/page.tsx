import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/page-hero'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'Terms & Conditions | NUBIZ' },
    description:
      'Terms and conditions for using nubiz.ae and NUBIZ business setup consultancy services in UAE.',
  }
}

export default function TermsPage() {
  return (
    <main>
      <PageHero title="Terms & Conditions" subtitle="Last updated: July 2026" />

      <section style={{ background: '#fff' }}>
        <div className="legal-prose">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing nubiz.ae, you agree to these Terms and Conditions. If you do not
            agree, please do not use this website.
          </p>
          <p>
            These terms apply to all visitors, users, and clients of NUBIZ, operated by
            Supreme Digital Business Services, Dubai, UAE.
          </p>

          <h2>2. Services Description</h2>
          <p>
            NUBIZ is an independent private business setup consultancy. We provide:
          </p>
          <ul>
            <li>
              Advisory services for UAE company formation (mainland, freezone, and
              offshore)
            </li>
            <li>Assistance with UAE residency visa applications</li>
            <li>PRO and government liaison services</li>
            <li>Corporate banking introduction services</li>
            <li>Accounting and bookkeeping referrals</li>
          </ul>
          <div className="legal-note">
            <strong>Important:</strong> NUBIZ is not a government authority, freezone
            authority, or licensed immigration authority. We are a private consultancy
            that guides clients through processes and submits applications on their behalf
            through official channels. Government fees, freezone fees, and authority
            charges are separate from and in addition to our consultancy fees.
          </div>

          <h2>3. Not Government Services</h2>
          <p>
            NUBIZ does not issue trade licenses, visas, Emirates IDs, or any government
            documents. These are issued by the relevant UAE government and freezone
            authorities. We facilitate the application process on your behalf as an
            authorised agent or channel partner.
          </p>
          <p>
            This disclaimer is important for clarity: we are advisors and facilitators, not
            government representatives.
          </p>

          <h2>4. Consultancy Fees and Government Fees</h2>
          <p>Our quotations distinguish between:</p>
          <ul>
            <li>
              NUBIZ consultancy and service fees (our charges for advisory and processing)
            </li>
            <li>
              Government and authority fees (freezone registration fees, DET fees, visa
              fees, Emirates ID fees — paid directly to the relevant authority)
            </li>
          </ul>
          <p>
            Government fees are pass-through costs. We do not mark up government fees.
          </p>

          <h2>5. No Guarantee of Approval</h2>
          <p>
            We provide professional assistance to maximise the likelihood of approval for
            visa applications, freezone registrations, and bank account openings. However,
            final decisions rest with the relevant authority or financial institution. We
            cannot guarantee approval of any application.
          </p>

          <h2>6. Accuracy of Information</h2>
          <p>
            Information on this website is provided for general guidance and is updated
            regularly. UAE regulations, freezone requirements, and government fees change
            frequently. Always confirm current requirements with a NUBIZ consultant before
            making decisions based on website content.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on nubiz.ae — including text, design, logos, and blog articles —
            is owned by Supreme Digital Business Services and protected under applicable
            intellectual property laws. You may not reproduce or redistribute content
            without written permission.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            NUBIZ&apos;s liability in connection with any service is limited to the
            consultancy fees paid for that specific service. We are not liable for
            government decisions, delays by authorities, changes in regulations, or banking
            decisions made by financial institutions.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by the laws of the United Arab Emirates and the
            Emirate of Dubai. Any disputes shall be subject to the jurisdiction of the
            Dubai courts.
          </p>

          <h2>10. Contact</h2>
          <p>For questions about these terms: info@nubiz.ae</p>
          <p>
            Supreme Digital Business Services
            <br />
            Inside Max Metro Station, Al Jafiliya, Al Kifaf, Dubai, UAE
          </p>
        </div>
      </section>
    </main>
  )
}
