import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'UAE Corporate Bank Account Opening Assistance | NUBIZ' },
    description:
      'We match your company to the right UAE bank, prepare a complete KYC file, and coordinate your corporate account application through to approval.',
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
  fontSize: 'clamp(28px, 3.6vw, 42px)',
  fontWeight: 900,
  letterSpacing: '-0.025em',
  color: '#111',
  lineHeight: 1.12,
  margin: 0,
}
const BODY: React.CSSProperties = { fontSize: 17, lineHeight: 1.75, color: '#444', margin: 0 }

const STEPS = [
  { title: 'Bank Selection', desc: 'We match your profile — activity, ownership, nationality, transaction volume, resident status — to the bank most likely to approve. Using the wrong bank wastes weeks.' },
  { title: 'Document Preparation', desc: 'We prepare and review your complete KYC package before submission, so every document is current, consistent, and in the format each bank expects.' },
  { title: 'Business Profile', desc: 'A vague business description is a top rejection reason. We help you articulate your model clearly for compliance teams — answering their questions before they ask.' },
  { title: 'Bank Introductions', desc: 'We coordinate appointments and attend meetings with you. Established relationships with relationship managers mean your file is reviewed by someone who understands your business.' },
  { title: 'Application Tracking', desc: 'We follow up proactively to prevent stalls, turn around document requests fast, and — if a bank declines — diagnose why and reapply with another partner at no extra consultation fee.' },
]

const TYPES = [
  { title: 'Consultants & Services', desc: 'Digital banks (Wio) or SME-focused branches at Mashreq or RAKBank are often the fastest route with straightforward documentation.' },
  { title: 'Trading Companies', desc: 'Emirates NBD and FAB have stronger trade-finance desks. Come prepared with supplier information, cargo types, and end-buyer profiles.' },
  { title: 'Freezone Companies', desc: 'All major banks accept freezone-licensed businesses. DMCC, IFZA, and Meydan companies generally have the smoothest KYC experience.' },
  { title: 'Non-residents & Offshore', desc: 'Expect extended due diligence and stronger source-of-funds requirements. One UAE-resident signatory significantly speeds the process.' },
]

const FACTS = [
  'Most UAE corporate accounts open within 20–40 working days with proper preparation',
  'Minimum balance requirements vary by bank and account type',
  'At least one UAE-resident signatory significantly improves approval speed',
  'We do not guarantee approval — banks make the final decision — but our preparation substantially improves the outcome',
]

export default function BankAccountPage() {
  return (
    <main>
      <PageHero
        eyebrow="Bank Account Opening"
        title={
          <>
            Your UAE Business Bank Account. <span style={{ color: 'var(--pink)' }}>Done Right.</span>
          </>
        }
        subtitle="UAE banks are strict. Preparation is everything. We match your company to the right bank, prepare a complete KYC file, and coordinate your application through to approval. We've done this hundreds of times."
      />

      {/* Reality of UAE banking */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 860 }}>
          <span style={EYEBROW}>The reality of UAE banking</span>
          <h2 style={H2}>Strict is a feature, not a bug</h2>
          <p style={BODY}>
            UAE banks are among the most compliant and stringent in the world — which is exactly
            what makes UAE banking internationally credible. For new businesses, it means the
            account-opening process requires careful preparation. A poorly presented application is
            the number-one reason for delays and rejections — not a problematic business model.
          </p>
          <p style={BODY}>
            Banks apply rigorous KYC and AML procedures, assessing clarity of business model,
            source of funds, ownership structure, expected transaction patterns, and activity risk.
            The good news: with proper preparation and the right bank match, most UAE corporate
            accounts can be opened within 20–40 working days.
          </p>
        </div>
      </section>

      {/* What we do — 5 steps */}
      <section style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>What we do</span>
            <h2 style={H2}>Five Steps to Approval</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="nz-card-hover"
                style={{ background: '#fff', border: '1px solid #e5e5e5', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}
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
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 19, fontWeight: 800, color: '#111' }}>{s.title}</span>
                <span style={{ fontSize: 15, lineHeight: 1.6, color: '#555' }}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By business type */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>By business type</span>
            <h2 style={H2}>The Right Bank for Your Profile</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {TYPES.map((t) => (
              <div
                key={t.title}
                className="nz-card-hover"
                style={{ background: '#fff', border: '1px solid #e5e5e5', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <span style={{ fontSize: 19, fontWeight: 800, color: '#111' }}>{t.title}</span>
                <span style={{ fontSize: 15, lineHeight: 1.6, color: '#555' }}>{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key facts box */}
      <section style={{ ...SECTION, background: '#fff', paddingTop: 0 }}>
        <div style={CONTAINER}>
          <div
            style={{
              borderLeft: '4px solid var(--pink)',
              background: 'rgba(238,0,93,0.04)',
              padding: 'clamp(24px, 3vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <span style={{ ...EYEBROW, color: 'var(--pink)' }}>Key facts — the honest version</span>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
              {FACTS.map((f) => (
                <li key={f} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none', lineHeight: 1.55 }}>›</span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.55, color: '#444' }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection
        title="Open Your Account, Done Right"
        subtitle="Tell us your business type and we'll match you to the right bank and prepare a winning application."
        primaryLabel="Get a free consultation →"
      />
    </main>
  )
}
