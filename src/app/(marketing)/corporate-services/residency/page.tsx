import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'
import { ServiceSchema, BreadcrumbSchema } from '@/components/structured-data'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'UAE Residency Visa Services | Employment, Golden, Family | NUBIZ' },
    description:
      'End-to-end UAE residency visa services — employment, family, investor, Golden and Green visas. We manage every step from entry permit to Emirates ID.',
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

const VISAS = [
  {
    name: 'Employment Visa',
    who: 'Company-sponsored staff',
    validity: '2 years',
    requirement: 'Employer sponsorship — by law the employer covers all visa costs',
    handle: ['MOHRE work permit', 'Entry permit (ICP/GDRFA)', 'Medical & Emirates ID', 'Visa stamping & renewals'],
  },
  {
    name: 'Family Visa',
    who: 'Spouse, children, and in some cases parents',
    validity: "Matches the sponsor's visa",
    requirement: 'Minimum salary & housing, with attested marriage/birth certificates',
    handle: ['Document attestation', 'Application submission', 'Medical coordination', 'Emirates ID applications'],
  },
  {
    name: 'Investor / Partner Visa',
    who: 'Company owners and shareholders',
    validity: '2–3 years by structure',
    requirement: 'Trade license and establishment card, or MOA showing ownership',
    handle: ['Investor visa processing', 'Medical coordination', 'Emirates ID', 'Full residency stamping'],
  },
  {
    name: 'Golden Visa',
    who: 'Investors, entrepreneurs, and top talent',
    validity: '10 years, renewable',
    requirement: 'Qualifying property/public investment, approved project, or exceptional talent',
    handle: ['Eligibility assessment', 'Document preparation & attestation', 'DLD / ICP submission', 'Follow-up through issuance'],
  },
  {
    name: 'Green Visa',
    who: 'Skilled professionals, freelancers, investors',
    validity: '5 years, self-sponsored',
    requirement: "Skilled role with a bachelor's degree, or a licensed freelancer",
    handle: ['Eligibility check', 'ICP submission', 'Medical coordination', 'Emirates ID & activation'],
  },
  {
    name: 'Renewals & Cancellations',
    who: 'Existing visa holders and leavers',
    validity: 'Handled before expiry',
    requirement: 'Timely action to avoid overstay fines and settlement issues',
    handle: ['Proactive visa renewals', 'Correct cancellations', 'Linked family-visa handling', 'Final settlement coordination'],
  },
]

const INCLUDES = [
  { title: 'Medical Fitness Test', desc: 'Scheduling and coordination at DHA-approved centres.' },
  { title: 'Emirates ID', desc: 'Biometrics enrollment and the full application.' },
  { title: 'Health Insurance', desc: 'Coordination of mandatory cover (required in Dubai).' },
  { title: 'Status Change', desc: 'Processing if the applicant is already inside the UAE.' },
]

export default function ResidencyPage() {
  return (
    <main>
      <ServiceSchema
        name="UAE Residency Visa Services"
        description="End-to-end UAE residency visa services — employment, family, investor, Golden and Green visas. We manage every step from entry permit to Emirates ID."
        url="https://nubiz.ae/corporate-services/residency"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://nubiz.ae' },
          { name: 'Corporate Services', url: 'https://nubiz.ae/corporate-services' },
          { name: 'Residency Services', url: 'https://nubiz.ae/corporate-services/residency' },
        ]}
      />
      <PageHero
        eyebrow="Residency Services"
        title={
          <>
            UAE Residency for You, Your Team, and{' '}
            <span style={{ color: 'var(--pink)' }}>Your Family.</span>
          </>
        }
        subtitle="Employment visas, investor visas, Golden Visa, family sponsorship — we manage every step from entry permit to Emirates ID. You focus on your business. We handle the paperwork."
      />

      {/* Intro */}
      <section style={{ ...SECTION, background: '#fff', paddingBottom: 'clamp(40px, 5vw, 56px)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 820 }}>
          <span style={EYEBROW}>What we handle</span>
          <h2 style={H2}>Every step, across every department</h2>
          <p style={BODY}>
            A UAE residency visa involves multiple steps across multiple government departments —
            entry permit, medical fitness test, biometric enrollment, Emirates ID, and visa
            stamping. We manage the entire process end to end for every visa type below.
          </p>
        </div>
      </section>

      {/* Visa grid */}
      <section style={{ ...SECTION, background: '#fff', paddingTop: 0 }}>
        <div style={{ ...CONTAINER, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {VISAS.map((v) => (
            <div
              key={v.name}
              className="nz-card-hover"
              style={{ background: '#fff', border: '1px solid #e5e5e5', padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <span style={{ fontSize: 21, fontWeight: 800, color: '#111' }}>{v.name}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Row k="Who it's for" v={v.who} />
                <Row k="Validity" v={v.validity} />
                <Row k="Key requirement" v={v.requirement} />
              </div>
              <div style={{ borderTop: '1px solid #eee', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--pink)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  We handle
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {v.handle.map((h) => (
                    <span key={h} style={{ fontSize: 13, color: '#555', border: '1px solid #e5e5e5', borderRadius: 999, padding: '5px 12px' }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All residency includes */}
      <section style={{ ...SECTION, background: '#111' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Always included</span>
            <h2 style={{ ...H2, color: '#fff' }}>Every Visa Process Includes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {INCLUDES.map((it) => (
              <div key={it.title} style={{ border: '1px solid rgba(255,255,255,0.1)', background: '#161618', padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{it.title}</span>
                <span style={{ fontSize: 14.5, lineHeight: 1.6, color: '#b9b9c0' }}>{it.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Get Your Team Residency-Ready"
        subtitle="Whether it's one investor visa or fifty employment visas, we run the whole process for you."
        primaryLabel="Get a free consultation →"
      />
    </main>
  )
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ fontSize: 11.5, color: '#999', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>{k}</span>
      <span style={{ fontSize: 14.5, lineHeight: 1.5, color: '#333' }}>{v}</span>
    </div>
  )
}
