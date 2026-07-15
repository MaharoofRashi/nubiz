import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'Dubai Mainland Company Setup | NUBIZ' },
    description:
      'Set up a DET-licensed mainland company in Dubai with unrestricted UAE market access. 100% foreign ownership. Government contract eligible.',
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
const CARD: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #e5e5e5',
  padding: '30px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
}
const GRID: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 20,
}

const CHARACTERISTICS = [
  ['Licensing authority', 'Dubai DET (Department of Economy and Tourism)'],
  ['Market access', 'Unrestricted — any UAE customer, any location, government contracts'],
  ['Ownership', '100% foreign ownership for most activities (since 2021)'],
  ['Office requirement', 'Physical office with registered Ejari is mandatory'],
  ['Minimum space', '200 sq ft for most professional and commercial licenses'],
  ['Visa quota', '~1 visa per 80 sq ft — scalable with office size, no hard cap'],
  ['Setup time', 'Typically 10–15 working days'],
]

const BENEFITS = [
  {
    title: 'Unrestricted UAE market access',
    desc: 'Sell directly to any UAE customer — consumers, businesses, and government entities — with no distributor or intermediary in between.',
  },
  {
    title: 'Government tenders & contracts',
    desc: 'Only mainland-licensed companies can bid directly for UAE federal and emirate government contracts across construction, IT, consulting, healthcare and more.',
  },
  {
    title: 'No limits on hiring or location',
    desc: 'Set up an office anywhere in Dubai (subject to zoning). Visa quotas scale with office size — there is no fixed upper limit. As you grow, you hire.',
  },
  {
    title: 'Simpler banking',
    desc: 'A DET license, Ejari and MOA form a clean, familiar package that UAE banks understand well — typically the smoothest account-opening experience.',
  },
  {
    title: 'Broader activity scope',
    desc: 'DET allows a wide spectrum of commercial, professional and industrial activities. A General Trading license covers import, export, wholesale and retail.',
  },
  {
    title: 'Dual presence without complexity',
    desc: 'If you already run a freezone company but need UAE mainland reach, starting mainland avoids the cost and complexity of adding a branch later.',
  },
]

const CHOOSE = [
  'Restaurants, cafes, retail shops and customer-facing businesses',
  'Service businesses whose clients are primarily UAE-based',
  'Companies wanting to bid for government contracts',
  'Construction and contracting companies',
  'Real estate brokerages (with RERA approval)',
  'Healthcare providers (with DHA approval) and education (KHDA)',
  'Any company expecting most revenue from UAE-based clients',
  'Businesses building a large local team needing many visas',
]

const AVOID = [
  'Companies primarily serving international clients',
  'Online or digital businesses with no physical UAE customers',
  'Budget-sensitive founders (a mandatory office adds real cost)',
  'Companies wanting to minimise corporate tax via the QFZP route',
  'Solo founders testing the market (a freezone package is leaner)',
]

const PROCESS = [
  'Trade name reservation with DET',
  'Activity selection (commercial, professional or industrial license)',
  'Initial approval from DET',
  'Office lease and Ejari registration',
  'MOA / LSA documentation (if applicable)',
  'External approvals where required (DHA, RERA, KHDA, etc.)',
  'License issuance',
  'Establishment card',
  'Investor and employee visa processing',
  'Bank account assistance',
]

export default function MainlandPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dubai Mainland"
        title={
          <>
            Trade Freely Across{' '}
            <span style={{ color: 'var(--pink)' }}>All of UAE</span>
          </>
        }
        subtitle="A DET mainland license gives you unrestricted access to every UAE customer — consumers, businesses, and government contracts. No distributor. No intermediary. Just your business, operating anywhere."
      >
        <Link
          href="/#calculator"
          style={{ background: 'var(--pink)', color: '#fff', fontWeight: 800, fontSize: 16, padding: '16px 30px' }}
        >
          Get a free consultation →
        </Link>
      </PageHero>

      {/* What is Mainland */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 820 }}>
            <span style={EYEBROW}>What is Mainland</span>
            <h2 style={H2}>Licensed by Dubai DET — no market restrictions</h2>
            <p style={BODY}>
              A mainland company is licensed by Dubai&apos;s Department of Economy and Tourism
              (DET) — the authority that replaced the old DED in 2021. A DET license gives you
              the right to trade anywhere in the UAE without restriction: any customer, any
              location, across all seven emirates.
            </p>
            <p style={BODY}>
              Since the 2021 amendments to the Commercial Companies Law, most commercial and
              industrial activities allow <strong>100% foreign ownership</strong> — the old 51%
              local sponsor rule is effectively gone for the vast majority of business types.
              Only specific strategic sectors still require a UAE national partner or Local
              Service Agent.
            </p>
          </div>

          <div
            style={{
              border: '1px solid #e5e5e5',
              background: 'var(--grey-100)',
              padding: 'clamp(24px, 3vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {CHARACTERISTICS.map(([k, v], i) => (
              <div
                key={k}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(140px, 220px) 1fr',
                  gap: 16,
                  padding: '14px 0',
                  borderTop: i === 0 ? 'none' : '1px solid #e5e5e5',
                }}
              >
                <span style={{ fontWeight: 700, color: '#111', fontSize: 14.5 }}>{k}</span>
                <span style={{ color: '#555', fontSize: 15 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Key Benefits</span>
            <h2 style={H2}>Why Founders Choose Mainland</h2>
          </div>
          <div style={GRID}>
            {BENEFITS.map((b) => (
              <div key={b.title} className="nz-card-hover" style={CARD}>
                <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>{b.title}</span>
                <span style={{ fontSize: 15.5, lineHeight: 1.65, color: '#555' }}>{b.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Choose */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Is it right for you?</span>
            <h2 style={H2}>Who Should — and Shouldn&apos;t — Go Mainland</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <YesNoColumn kind="yes" title="Choose Mainland if you are…" items={CHOOSE} />
            <YesNoColumn kind="no" title="Look elsewhere if you are…" items={AVOID} />
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section style={{ ...SECTION, background: '#111' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Setup Process</span>
            <h2 style={{ ...H2, color: '#fff' }}>What We Handle, Step by Step</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {PROCESS.map((step, i) => (
              <ProcessStep key={step} n={i + 1} text={step} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Go Mainland?"
        subtitle="Tell us your business — we'll map the fastest route to a DET license and unrestricted UAE access."
        primaryLabel="Get a free consultation →"
      />
    </main>
  )
}

function YesNoColumn({
  kind,
  title,
  items,
}: {
  kind: 'yes' | 'no'
  title: string
  items: string[]
}) {
  const accent = kind === 'yes' ? '#25d366' : 'var(--pink)'
  return (
    <div
      style={{
        border: '1px solid #e5e5e5',
        borderTop: `4px solid ${accent}`,
        padding: 'clamp(24px, 3vw, 34px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        background: '#fff',
      }}
    >
      <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>{title}</span>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((item) => (
          <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ color: accent, fontWeight: 800, flex: 'none', lineHeight: 1.6 }}>
              {kind === 'yes' ? '✓' : '✗'}
            </span>
            <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#444' }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProcessStep({ n, text }: { n: number; text: string }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '20px 22px',
        background: '#161618',
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
        {n}
      </span>
      <span style={{ fontSize: 15.5, lineHeight: 1.55, color: '#d4d4d8', paddingTop: 8 }}>
        {text}
      </span>
    </div>
  )
}
