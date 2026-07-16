import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'
import { ServiceSchema, BreadcrumbSchema } from '@/components/structured-data'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'PRO Services Dubai UAE 2026 | License Renewal & Visa | NUBIZ' },
    description:
      'Outsource your UAE PRO services — trade license renewals, document attestation, MOHRE and GDRFA filings, and a full compliance calendar managed by a named PRO manager.',
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
const svg = { width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--pink)', strokeWidth: 1.7 } as const

const CATEGORIES = [
  {
    title: 'License & Company Admin',
    icon: (<svg {...svg}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>),
    items: [
      'Trade license renewal with DET, freezone authority, or MOHRE before expiry',
      'Activity amendments — adding or changing business activities',
      'Trade name updates and amendments',
      'MOA/AOA amendments — partner changes, share transfers, restructuring',
      'Establishment card issuance and renewal',
      'Branch opening, closure, and deregistration procedures',
    ],
  },
  {
    title: 'Document Services',
    icon: (<svg {...svg}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 14l2 2 4-4" /></svg>),
    items: [
      'Certificate attestation through MOFA, UAE Embassy, and notary chains',
      'Certified Arabic and English document translation',
      'Power of Attorney drafting and attestation',
      'Good Standing Certificates and company status letters',
    ],
  },
  {
    title: 'Government Portal Management',
    icon: (<svg {...svg}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 22h8M12 18v4" /></svg>),
    items: [
      'MOHRE submissions — labour contracts, work permits, WPS compliance',
      'GDRFA and ICP applications',
      'Freezone authority portal submissions (IFZA, Meydan, DMCC and others)',
      'Medical typing centre coordination for visa applications',
      'Emirates ID application, renewal, and medical fitness scheduling',
    ],
  },
  {
    title: 'Compliance Deadlines',
    icon: (<svg {...svg}><circle cx="12" cy="13" r="8" /><path d="M12 9v4l3 2M9 2h6" /></svg>),
    items: [
      'Every license, visa, Emirates ID, and establishment-card expiry tracked',
      'Proactive renewals handled before the deadline window',
      'A single compliance calendar across all your company paperwork',
      'No missed deadlines — and no avoidable government fines',
    ],
  },
]

export default function ProServicesPage() {
  return (
    <main>
      <ServiceSchema
        name="PRO Services Dubai UAE"
        description="Outsource your UAE PRO services — trade license renewals, document attestation, MOHRE and GDRFA filings, and a full compliance calendar managed by a named PRO manager."
        url="https://nubiz.ae/corporate-services/pro-services"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://nubiz.ae' },
          { name: 'Corporate Services', url: 'https://nubiz.ae/corporate-services' },
          { name: 'PRO Services', url: 'https://nubiz.ae/corporate-services/pro-services' },
        ]}
      />
      <PageHero
        eyebrow="PRO Services"
        title={
          <>
            Every Government Process. <span style={{ color: 'var(--pink)' }}>Handled.</span>
          </>
        }
        subtitle="From license renewals to document attestation, MOHRE filings to visa cancellations — your named PRO manager handles every interaction with UAE government authorities so you never have to queue, chase, or guess."
      />

      {/* What is PRO */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div
          style={{
            ...CONTAINER,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 48,
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={EYEBROW}>What is PRO</span>
            <h2 style={H2}>Your bridge to every UAE authority</h2>
            <p style={BODY}>
              PRO stands for Public Relations Officer — the designated person who acts as the
              bridge between your company and every UAE government authority: MOHRE, GDRFA, ICP,
              DET, and freezone authorities. These departments don&apos;t automatically talk to each
              other — someone has to coordinate, submit the right documents in the right sequence,
              and follow up to keep things moving. That&apos;s your PRO. With NUBIZ, that&apos;s us.
            </p>
          </div>
          <div
            style={{
              borderLeft: '4px solid var(--pink)',
              background: 'rgba(238,0,93,0.04)',
              padding: 'clamp(24px, 3vw, 34px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>Why outsource PRO?</span>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: '#444', margin: 0 }}>
              An in-house PRO is a full-time salaried hire — plus visa, insurance, and office
              costs — for a role with an inconsistent workload. Outsourcing gives you experienced,
              connected professionals who know exactly which department handles what, how long each
              step takes, and how to resolve complications — at a fraction of the in-house cost.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>What we handle</span>
            <h2 style={H2}>Four Categories, Fully Covered</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {CATEGORIES.map((c) => (
              <div
                key={c.title}
                className="nz-card-hover"
                style={{ background: '#fff', border: '1px solid #e5e5e5', padding: '32px 30px', display: 'flex', flexDirection: 'column', gap: 16 }}
              >
                <span>{c.icon}</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>{c.title}</span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {c.items.map((it) => (
                    <li key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none', lineHeight: 1.55 }}>›</span>
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: '#555' }}>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs PRO + approach */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          <div style={{ border: '1px solid #e5e5e5', borderTop: '4px solid var(--pink)', padding: 'clamp(24px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={EYEBROW}>Who needs it</span>
            <h2 style={{ ...H2, fontSize: 'clamp(22px, 2.6vw, 28px)' }}>Every UAE business with employees</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#555', margin: 0 }}>
              The moment you hire your first staff member you generate a chain of government
              processes — entry permit, work permit, medical fitness test, Emirates ID, labour
              card — then renewals, then more employees, then family visas, then license renewal.
              PRO support isn&apos;t a luxury for large companies; it&apos;s operational infrastructure for
              any business running in the UAE.
            </p>
          </div>
          <div style={{ border: '1px solid #e5e5e5', borderTop: '4px solid #25d366', padding: 'clamp(24px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={EYEBROW}>Our approach</span>
            <h2 style={{ ...H2, fontSize: 'clamp(22px, 2.6vw, 28px)' }}>One named PRO manager</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#555', margin: 0 }}>
              We don&apos;t just submit forms. We maintain a full compliance calendar for every client —
              tracking every expiry date, renewal window, and document status — so nothing slips
              through. You get one named PRO manager for your account, not a rotating team.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Let Us Handle the Government"
        subtitle="Hand us your paperwork and deadlines. Your named PRO manager takes it from here."
        primaryLabel="Get a free consultation →"
      />
    </main>
  )
}
