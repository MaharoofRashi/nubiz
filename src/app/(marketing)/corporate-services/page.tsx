import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'
import { ServiceSchema, BreadcrumbSchema } from '@/components/structured-data'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'Corporate Services UAE | PRO, Visa, Accounting | NUBIZ' },
    description:
      'Ongoing UAE business support after setup — PRO services, residency visas, accounting & bookkeeping, and corporate bank account opening. One team, end to end.',
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

const svg = { width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--pink)', strokeWidth: 1.7 } as const

const SERVICES = [
  {
    href: '/corporate-services/pro-services',
    title: 'PRO Services',
    desc: 'Your named government liaison — license renewals, document attestation, MOHRE filings, and every government portal, handled.',
    icon: (<svg {...svg}><path d="M3 21h18M6 21V8l6-4 6 4v13M10 21v-5h4v5M9 11h.01M15 11h.01" /></svg>),
  },
  {
    href: '/corporate-services/residency',
    title: 'Residency Services',
    desc: 'Employment, family, investor, Golden and Green visas — managed end to end, from entry permit to Emirates ID.',
    icon: (<svg {...svg}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2.2" /><path d="M5.5 17c.6-2 2-3 3.5-3s2.9 1 3.5 3M15 9h4M15 13h4" /></svg>),
  },
  {
    href: '/corporate-services/accounting',
    title: 'Accounting & Bookkeeping',
    desc: 'IFRS-compliant books, VAT returns, and Corporate Tax filing — so you never pay a penalty for a process error.',
    icon: (<svg {...svg}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h5" /></svg>),
  },
  {
    href: '/corporate-services/bank-account',
    title: 'Bank Account Opening',
    desc: 'The right bank match, a complete KYC file, and application tracking through to approval.',
    icon: (<svg {...svg}><path d="M3 10 12 4l9 6M4 10v9h16v-9M9 19v-5h6v5" /></svg>),
  },
]

export default function CorporateServicesPage() {
  return (
    <main>
      <ServiceSchema
        name="Corporate Services UAE"
        description="Ongoing UAE business support after setup — PRO services, residency visas, accounting & bookkeeping, and corporate bank account opening. One team, end to end."
        url="https://nubiz.ae/corporate-services"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://nubiz.ae' },
          { name: 'Corporate Services', url: 'https://nubiz.ae/corporate-services' },
        ]}
      />
      <PageHero
        eyebrow="Corporate Services"
        title={
          <>
            After Setup, the <span style={{ color: 'var(--pink)' }}>Work Isn&apos;t Over.</span>
          </>
        }
        subtitle="Visas need processing, accounts need managing, the bank needs opening, and the government keeps generating paperwork. NUBIZ handles all of it — so you never deal with government portals, typing centres, or visa queues. One team, end to end."
      />

      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>What we handle</span>
            <h2 style={H2}>Ongoing Support That Keeps You Running</h2>
            <p style={BODY}>
              Four core services cover everything a UAE business needs after incorporation. Each
              is run by a named specialist on your account — not a rotating ticket queue.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="nz-card-hover"
                style={{ background: '#fff', border: '1px solid #e5e5e5', padding: '32px 30px', display: 'flex', flexDirection: 'column', gap: 14 }}
              >
                <span>{s.icon}</span>
                <span style={{ fontSize: 22, fontWeight: 800, color: '#111' }}>{s.title}</span>
                <span style={{ fontSize: 15.5, lineHeight: 1.65, color: '#555' }}>{s.desc}</span>
                <span className="nz-inline-link" style={{ fontSize: 15, marginTop: 'auto' }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Already Set Up? Let's Keep It Running."
        subtitle="Tell us what you need — visas, accounting, PRO, or banking — and we'll take it from here."
        primaryLabel="Get a free consultation →"
      />
    </main>
  )
}
