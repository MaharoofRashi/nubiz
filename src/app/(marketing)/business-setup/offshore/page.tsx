import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'
import { offshoreJurisdictions } from '@/data/offshore-jurisdictions'

const COMPARISON: { label: string; rak: string; jafza: string }[] = [
  { label: 'Location', rak: 'Ras Al Khaimah', jafza: 'Dubai (Jebel Ali)' },
  { label: 'Setup time', rak: '2–7 days', jafza: '7–10 days' },
  { label: 'Physical visit', rak: 'Not required', jafza: 'Required or POA' },
  { label: 'Directors required', rak: '1 minimum', jafza: '2 minimum' },
  { label: 'Dubai property', rak: 'Yes (2026 MoU)', jafza: 'Yes (primary advantage)' },
  { label: 'Banking ease', rak: 'Good', jafza: 'Excellent (20yr relationships)' },
  { label: 'Institutional prestige', rak: 'Strong', jafza: 'Premium' },
  { label: 'Annual accounts', rak: 'Not mandatory', jafza: 'Required in some cases' },
  { label: 'Best for', rak: 'Most investors, IP, trading', jafza: 'Dubai property, institutional' },
]

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'UAE Offshore Company Formation | NUBIZ' },
    description:
      'Set up a UAE offshore company for international holding, asset protection, and IP ownership. RAK ICC and JAFZA. No UAE presence required.',
  }
}

const SECTION: React.CSSProperties = {
  padding: 'clamp(64px, 8vw, 104px) clamp(20px, 5vw, 56px)',
}
const CONTAINER: React.CSSProperties = { maxWidth: 1160, margin: '0 auto' }
const EYEBROW: React.CSSProperties = {
  fontFamily: 'var(--font-space-grotesk), monospace',
  fontSize: 13,
  letterSpacing: '0.2em',
  color: 'var(--pink)',
  fontWeight: 700,
  textTransform: 'uppercase',
}
const H2: React.CSSProperties = {
  fontSize: 'clamp(30px, 4vw, 44px)',
  fontWeight: 900,
  letterSpacing: '-0.025em',
  color: '#111',
  lineHeight: 1.1,
  margin: 0,
}
const BODY: React.CSSProperties = { fontSize: 17, lineHeight: 1.75, color: '#444', margin: 0 }

const REASONS = [
  { title: 'Asset Protection', desc: 'Ring-fence international property, shares, portfolios, and IP in a dedicated entity — separated from the liabilities of your operating business.' },
  { title: 'International Holding', desc: 'Sit an offshore company at the top of your structure, owning shares in UAE or foreign entities for a clean ownership chain and simpler succession.' },
  { title: 'Intellectual Property', desc: 'Hold trademarks, patents, software and brand assets offshore and license them to operating companies — a legitimate, widely used structure.' },
  { title: 'International Invoicing', desc: 'Invoice overseas clients from a UAE-registered company without needing residency or an office, backed by 100+ double-tax treaties.' },
  { title: 'Privacy', desc: 'UAE offshore jurisdictions limit public access to shareholder and director data while staying compliant with UBO and AML/FATF requirements.' },
  { title: 'Estate & Succession', desc: 'Combined with ADGM foundations or trusts, offshore companies structure multi-generational wealth planning and inheritance.' },
]

const CANNOT = [
  'Conduct business within the UAE domestic market',
  'Lease commercial office space in the UAE for operations',
  'Provide UAE investor or employment visas',
  'Sponsor dependents for UAE residency',
  'Bid for UAE government contracts',
  'JAFZA requires a visit or POA; RAK ICC is fully remote',
]

const CHOOSE = [
  'International entrepreneurs invoicing global clients without needing residency',
  'Investors holding property, shares, or assets internationally',
  'Founders wanting a holding company above their UAE operating entity',
  'Businesses managing IP — trademarks, patents, software',
  'Family offices structuring wealth across generations',
  'Owners restructuring their ownership chain',
]

const AVOID = [
  'Founders who need UAE residency (offshore provides no visas)',
  'Businesses with UAE customers (offshore cannot serve locally)',
  'Companies that need a physical UAE presence',
  'Anyone hiring UAE-based employees under the company',
]

const PROCESS = [
  'Jurisdiction selection (RAK ICC or JAFZA)',
  'Company name reservation',
  'Document preparation (passport, proof of address, UBO, MOA)',
  'Notarization and attestation where required',
  'Registered agent appointment (mandatory for both)',
  'License issuance (3–7 days RAK ICC, 5–10 days JAFZA)',
  'Bank account opening support',
  'Annual compliance setup',
]

export default function OffshorePage() {
  return (
    <main>
      <PageHero
        eyebrow="UAE Offshore"
        title={
          <>
            Hold Assets. Protect Wealth.{' '}
            <span style={{ color: 'var(--pink)' }}>No UAE Presence Required.</span>
          </>
        }
        subtitle="A UAE offshore company is the cleanest structure for international holding, IP ownership, and asset protection — at a fraction of the cost of a freezone or mainland entity. No office. No visas. Just a legitimate, internationally recognized UAE legal entity."
      >
        <Link
          href="/#calculator"
          style={{ background: 'var(--pink)', color: '#fff', fontWeight: 800, fontSize: 16, padding: '16px 30px' }}
        >
          Get offshore advice →
        </Link>
      </PageHero>

      {/* What is offshore */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 820 }}>
            <span style={EYEBROW}>What is Offshore</span>
            <h2 style={H2}>A UAE-registered holding entity — for international business</h2>
            <p style={BODY}>
              A UAE offshore company is a legal entity incorporated in an approved UAE
              jurisdiction, designed for international business rather than operating inside the
              UAE market. Think of it as a clean, cost-effective, internationally recognized
              holding shell — the credibility of a UAE jurisdiction without the operational
              overhead of running a UAE business.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div style={{ border: '1px solid #e5e5e5', borderTop: '4px solid #25d366', padding: 'clamp(24px, 3vw, 34px)', display: 'flex', flexDirection: 'column', gap: 14, background: '#fff' }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>An offshore company CAN</span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Hold international assets, shares, IP and investments', 'Invoice international clients', 'Open UAE bank accounts for international transactions'].map((c) => (
                  <li key={c} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: '#25d366', fontWeight: 800, flex: 'none', lineHeight: 1.6 }}>✓</span>
                    <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#444' }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: '1px solid #e5e5e5', borderTop: '4px solid var(--pink)', padding: 'clamp(24px, 3vw, 34px)', display: 'flex', flexDirection: 'column', gap: 14, background: '#fff' }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>An offshore company does NOT</span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Need a physical office in the UAE', 'Provide UAE residency visas', 'Trade directly within the UAE domestic market'].map((c) => (
                  <li key={c} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none', lineHeight: 1.6 }}>✗</span>
                    <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#444' }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Two jurisdictions — cards linking to sub-pages (BEFORE the comparison table) */}
      <section style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Two Jurisdictions</span>
            <h2 style={H2}>RAK ICC or JAFZA Offshore</h2>
            <p style={BODY}>
              For most individual investors and entrepreneurs, RAK ICC is the right choice. For
              larger structures or Dubai property holding, JAFZA is worth the premium.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {offshoreJurisdictions.map((j, idx) => (
              <Link
                key={j.slug}
                href={`/business-setup/offshore/${j.slug}`}
                className="nz-card-hover"
                style={{
                  background: '#fff',
                  border: '1px solid #e5e5e5',
                  padding: 'clamp(28px, 3vw, 40px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 26, fontWeight: 900, color: '#111' }}>{j.name}</span>
                  {idx === 0 ? (
                    <span
                      style={{
                        background: 'var(--pink)',
                        color: '#fff',
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: 999,
                      }}
                    >
                      Most popular
                    </span>
                  ) : null}
                </div>
                <span style={{ fontSize: 15, lineHeight: 1.5, color: '#666' }}>{j.tagline}</span>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16,
                    borderTop: '1px solid #eee',
                    borderBottom: '1px solid #eee',
                    padding: '18px 0',
                  }}
                >
                  {j.highlights.map((h) => (
                    <div key={h.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-space-grotesk), monospace',
                          fontSize: 17,
                          fontWeight: 700,
                          color: 'var(--pink)',
                          lineHeight: 1.1,
                        }}
                      >
                        {h.value}
                      </span>
                      <span style={{ fontSize: 11.5, color: '#888', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {h.label}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="nz-inline-link" style={{ fontSize: 15, marginTop: 'auto' }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" style={{ ...SECTION, background: '#fff', scrollMarginTop: 90 }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>RAK ICC vs JAFZA</span>
            <h2 style={H2}>Quick Comparison</h2>
            <p style={BODY}>
              The decisive question: do you need maximum institutional credibility and Dubai
              property ownership above all else? JAFZA. Does everything else apply? RAK ICC.
            </p>
          </div>
          <div style={{ overflowX: 'auto', border: '1px solid #e5e5e5' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
              <thead>
                <tr style={{ background: '#111' }}>
                  {['', 'RAK ICC', 'JAFZA Offshore'].map((h, i) => (
                    <th
                      key={h || 'blank'}
                      style={{
                        textAlign: 'left',
                        padding: '18px 20px',
                        color: i === 1 ? 'var(--pink)' : '#fff',
                        fontSize: 14,
                        fontWeight: 800,
                        letterSpacing: '0.02em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, ri) => (
                  <tr key={row.label} style={{ background: ri % 2 ? 'var(--grey-100)' : '#fff' }}>
                    <td style={{ padding: '16px 20px', fontWeight: 700, color: '#111', fontSize: 14.5, borderTop: '1px solid #e5e5e5' }}>
                      {row.label}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#111', fontSize: 14.5, fontWeight: 600, borderTop: '1px solid #e5e5e5', background: 'rgba(238,0,93,0.04)' }}>
                      {row.rak}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#555', fontSize: 14.5, borderTop: '1px solid #e5e5e5' }}>
                      {row.jafza}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/business-setup/offshore/rak-icc" className="nz-inline-link" style={{ fontSize: 15 }}>
              Explore RAK ICC →
            </Link>
            <Link href="/business-setup/offshore/jafza-offshore" className="nz-inline-link" style={{ fontSize: 15 }}>
              Explore JAFZA Offshore →
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose offshore */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Why Choose Offshore</span>
            <h2 style={H2}>Six Reasons Founders Set Up Offshore</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {REASONS.map((r) => (
              <div
                key={r.title}
                className="nz-card-hover"
                style={{ background: '#fff', border: '1px solid #e5e5e5', padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>{r.title}</span>
                <span style={{ fontSize: 15.5, lineHeight: 1.65, color: '#555' }}>{r.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What offshore cannot do */}
      <section style={{ ...SECTION, background: '#111' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Be Clear on the Limits</span>
            <h2 style={{ ...H2, color: '#fff' }}>What an Offshore Company Cannot Do</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }}>
            {CANNOT.map((c) => (
              <div
                key={c}
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '18px 20px',
                  background: '#161618',
                }}
              >
                <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none', lineHeight: 1.55 }}>✗</span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: '#d4d4d8' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who should choose */}
      <section style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Is it right for you?</span>
            <h2 style={H2}>Who Should — and Shouldn&apos;t — Go Offshore</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div style={{ border: '1px solid #e5e5e5', borderTop: '4px solid #25d366', padding: 'clamp(24px, 3vw, 34px)', display: 'flex', flexDirection: 'column', gap: 16, background: '#fff' }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>Choose offshore if you are…</span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {CHOOSE.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: '#25d366', fontWeight: 800, flex: 'none', lineHeight: 1.6 }}>✓</span>
                    <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#444' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: '1px solid #e5e5e5', borderTop: '4px solid var(--pink)', padding: 'clamp(24px, 3vw, 34px)', display: 'flex', flexDirection: 'column', gap: 16, background: '#fff' }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>Look elsewhere if you are…</span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {AVOID.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none', lineHeight: 1.6 }}>✗</span>
                    <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#444' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Setup process */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Setup Process</span>
            <h2 style={H2}>How We Set Up Your Offshore Company</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {PROCESS.map((step, i) => (
              <div
                key={step}
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                  border: '1px solid #e5e5e5',
                  padding: '20px 22px',
                  background: 'var(--grey-100)',
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var(--pink)',
                    color: '#fff',
                    fontFamily: 'var(--font-space-grotesk), monospace',
                    fontWeight: 700,
                    fontSize: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 'none',
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.55, color: '#333', paddingTop: 8 }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Structure It Right"
        subtitle="Tell us what you're holding and where — we'll recommend RAK ICC or JAFZA and handle the incorporation."
        primaryLabel="Get offshore advice →"
      />
    </main>
  )
}
