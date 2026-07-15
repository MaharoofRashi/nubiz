import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'
import { freezones } from '@/data/freezones'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'UAE Freezone Company Setup | NUBIZ' },
    description:
      'Compare 40+ UAE freezones and find the right one for your business. Channel partners with IFZA, Meydan, DMCC, ADGM, JAFZA and more.',
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

const BASELINE = [
  '100% foreign ownership — no local partner or sponsor',
  '0% personal income tax on salary and dividends',
  '100% profit repatriation out of the UAE',
  'Potential 0% corporate tax via the QFZP regime',
  'No import/export duties within the freezone',
  'Streamlined, mostly remote digital setup',
  'Flexible office options — flexi-desks and virtual offices accepted',
]

const COMPARISON: { label: string; mainland: string; freezone: string; offshore: string }[] = [
  { label: 'Trade in UAE', mainland: '✓ Anywhere', freezone: 'Limited', offshore: '✗ Not permitted' },
  { label: '100% foreign ownership', mainland: '✓ Most sectors', freezone: '✓ Always', offshore: '✓ Always' },
  { label: 'UAE residency visa', mainland: '✓ Yes', freezone: '✓ Yes', offshore: '✗ No' },
  { label: 'Physical office required', mainland: '✓ Mandatory', freezone: 'Flexi-desk OK', offshore: '✗ Not needed' },
  { label: 'Government contracts', mainland: '✓ Eligible', freezone: '✗ Not eligible', offshore: '✗ Not eligible' },
  { label: 'Corporate tax', mainland: '9% on profit', freezone: '0% qualifying', offshore: '0% foreign income' },
  { label: 'Setup speed', mainland: '10–15 days', freezone: '1–7 days', offshore: '3–10 days' },
  { label: 'Best for', mainland: 'UAE market access', freezone: 'International business', offshore: 'Holding & assets' },
]

export default function FreezoneOverviewPage() {
  return (
    <main>
      <PageHero
        eyebrow="UAE Freezones"
        title={
          <>
            40+ Freezones.{' '}
            <span style={{ color: 'var(--pink)' }}>One Team That Knows Them All.</span>
          </>
        }
        subtitle="NUBIZ holds direct channel partnerships with leading UAE freezone authorities — IFZA, Meydan, DMCC, ADGM, JAFZA and more. We don't just advise on which freezone fits your business — we submit directly into their portals."
      >
        <a
          href="#freezones"
          style={{ background: 'var(--pink)', color: '#fff', fontWeight: 800, fontSize: 16, padding: '16px 30px' }}
        >
          Compare freezones →
        </a>
        <Link
          href="/#calculator"
          style={{
            background: 'transparent',
            color: '#fff',
            fontWeight: 700,
            fontSize: 16,
            padding: '16px 30px',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          Talk to an advisor →
        </Link>
      </PageHero>

      {/* What is a Freezone */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 820 }}>
            <span style={EYEBROW}>What is a Freezone</span>
            <h2 style={H2}>Your own regulatory zone — built for foreign investment</h2>
            <p style={BODY}>
              A freezone is a designated economic area that operates under its own independent
              regulatory authority, separate from the mainland licensing system. The UAE has 45+
              freezones across all seven emirates — each issues its own licenses, sets its own
              fees, and maintains its own activity list.
            </p>
            <p style={BODY}>
              Freezones were created to attract foreign investment with 100% foreign ownership.
              The mainland has since largely caught up on ownership — but freezones still hold
              real advantages in cost, speed, tax, and flexibility.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 14,
            }}
          >
            {BASELINE.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                  border: '1px solid #e5e5e5',
                  padding: '18px 20px',
                  background: 'var(--grey-100)',
                }}
              >
                <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none' }}>✓</span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: '#333' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QFZP box */}
      <section style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={CONTAINER}>
          <div
            style={{
              background: '#111',
              padding: 'clamp(32px, 4vw, 56px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              borderTop: '6px solid var(--pink)',
            }}
          >
            <span style={{ ...EYEBROW, color: 'var(--pink)' }}>The QFZP Tax Advantage</span>
            <h2 style={{ ...H2, color: '#fff', maxWidth: 760 }}>
              A path to <span style={{ color: 'var(--pink)' }}>0% corporate tax</span> on
              qualifying income
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#b9b9c0', maxWidth: 820, margin: 0 }}>
              The UAE introduced 9% corporate tax in 2023 — but freezone companies can access a
              0% rate on qualifying income by meeting the Qualifying Free Zone Person conditions:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
              {[
                'Registered in a UAE freezone',
                'Earns qualifying income (international / other freezone trade)',
                'Maintains adequate economic substance in the UAE',
                'Non-qualifying income stays below 5% of total income',
              ].map((c) => (
                <li key={c} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none' }}>✓</span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#d4d4d8' }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Freezone vs Mainland vs Offshore</span>
            <h2 style={H2}>The Core Decision — Where Are Your Customers?</h2>
          </div>
          <div style={{ overflowX: 'auto', border: '1px solid #e5e5e5' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr style={{ background: '#111' }}>
                  {['', 'Mainland', 'Freezone', 'Offshore'].map((h, i) => (
                    <th
                      key={h || 'blank'}
                      style={{
                        textAlign: 'left',
                        padding: '18px 20px',
                        color: i === 2 ? 'var(--pink)' : '#fff',
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
                    <td style={{ padding: '16px 20px', color: '#555', fontSize: 14.5, borderTop: '1px solid #e5e5e5' }}>
                      {row.mainland}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#111', fontSize: 14.5, fontWeight: 600, borderTop: '1px solid #e5e5e5', background: 'rgba(238,0,93,0.04)' }}>
                      {row.freezone}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#555', fontSize: 14.5, borderTop: '1px solid #e5e5e5' }}>
                      {row.offshore}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Freezone cards */}
      <section id="freezones" style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Our Channel Partners</span>
            <h2 style={H2}>Explore the Freezones We Work With</h2>
            <p style={BODY}>
              Not all freezones are equal — location credibility, activity specialisation, cost,
              and physical infrastructure vary widely. Here are the eight we know inside out.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {freezones.map((fz) => (
              <Link
                key={fz.slug}
                href={`/business-setup/freezone/${fz.slug}`}
                className="nz-card-hover"
                style={{
                  background: '#fff',
                  border: '1px solid #e5e5e5',
                  padding: '30px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{ fontSize: 24, fontWeight: 900, color: '#111', letterSpacing: '-0.01em' }}>
                    {fz.name}
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.5, color: '#666' }}>{fz.tagline}</span>
                </div>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 'auto' }}>
                  {fz.highlights.slice(0, 2).map((h) => (
                    <div key={h.label} style={{ display: 'flex', flexDirection: 'column' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-space-grotesk), monospace',
                          fontSize: 22,
                          fontWeight: 700,
                          color: 'var(--pink)',
                          lineHeight: 1.1,
                        }}
                      >
                        {h.value}
                      </span>
                      <span style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {h.label}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="nz-inline-link" style={{ fontSize: 15 }}>
                  View {fz.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Not Sure Which Freezone?"
        subtitle="Our consultants map your business model to the right freezone in a free 30-minute call."
        primaryLabel="Book a consultation →"
      />
    </main>
  )
}
