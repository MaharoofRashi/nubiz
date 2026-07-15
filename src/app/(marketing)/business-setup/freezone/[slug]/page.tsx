import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'
import { freezones, getFreezone } from '@/data/freezones'

const WA_LINK = 'https://wa.me/971564899004'

export function generateStaticParams() {
  return freezones.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const fz = getFreezone(slug)
  if (!fz) return { title: { absolute: 'Freezone Not Found | NUBIZ' } }
  return {
    title: { absolute: `${fz.name} Company Setup UAE | NUBIZ` },
    description: fz.description,
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
  fontSize: 'clamp(28px, 3.6vw, 40px)',
  fontWeight: 900,
  letterSpacing: '-0.025em',
  color: '#111',
  lineHeight: 1.12,
  margin: 0,
}

const PROCESS = [
  'Free consultation & freezone match to your business model',
  'Activity selection and trade name reservation',
  'Application submitted directly into the freezone portal',
  'Initial approval and document collection',
  'License issuance',
  'Establishment card and visa allocation',
  'Medical, Emirates ID and residence visa',
  'Corporate bank account introduction',
]

export default async function FreezonePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const fz = getFreezone(slug)
  if (!fz) notFound()

  return (
    <main>
      <PageHero
        eyebrow={`UAE Freezone · ${fz.location}`}
        title={
          <>
            {fz.name} <span style={{ color: 'var(--pink)' }}>Company Setup</span>
          </>
        }
        subtitle={fz.tagline}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            padding: '12px 20px',
            borderRadius: 999,
          }}
        >
          {fz.speciality}
        </span>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: 'var(--pink)', color: '#fff', fontWeight: 800, fontSize: 15, padding: '12px 26px', borderRadius: 999 }}
        >
          Ask about {fz.name} →
        </a>
      </PageHero>

      {/* Highlight cards */}
      <section style={{ ...SECTION, background: '#fff', paddingTop: 'clamp(48px, 6vw, 72px)', paddingBottom: 'clamp(48px, 6vw, 72px)' }}>
        <div
          style={{
            ...CONTAINER,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: 20,
          }}
        >
          {fz.highlights.map((h) => (
            <div
              key={h.label}
              style={{
                border: '1px solid #e5e5e5',
                borderTop: '4px solid var(--pink)',
                padding: '28px 26px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                background: 'var(--grey-100)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk), monospace',
                  fontSize: 34,
                  fontWeight: 700,
                  color: 'var(--pink)',
                  lineHeight: 1,
                }}
              >
                {h.value}
              </span>
              <span style={{ fontSize: 13.5, color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                {h.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What makes special */}
      <section style={{ ...SECTION, background: '#fff', paddingTop: 0 }}>
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
            <span style={EYEBROW}>What makes {fz.name} special</span>
            <h2 style={H2}>Built for {fz.speciality.toLowerCase()}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: '#444', margin: 0 }}>{fz.description}</p>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 6 }}>
              <span style={{ fontSize: 13, color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                Typical setup
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk), monospace',
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#111',
                  background: 'var(--grey-200)',
                  padding: '6px 12px',
                }}
              >
                {fz.setupTime}
              </span>
            </div>
          </div>

          <div
            style={{
              border: '1px solid #e5e5e5',
              padding: 'clamp(24px, 3vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              background: 'var(--grey-100)',
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 800, color: '#111' }}>Key advantages</span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {fz.keyAdvantages.map((adv) => (
                <li key={adv} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none', lineHeight: 1.55 }}>✓</span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.55, color: '#333' }}>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Best For / Not For */}
      <section style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Is {fz.name} right for you?</span>
            <h2 style={H2}>Who Should — and Shouldn&apos;t — Choose {fz.name}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div
              style={{
                border: '1px solid #e5e5e5',
                borderTop: '4px solid #25d366',
                padding: 'clamp(24px, 3vw, 34px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                background: '#fff',
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>Best for</span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {fz.bestFor.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: '#25d366', fontWeight: 800, flex: 'none', lineHeight: 1.6 }}>✓</span>
                    <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#444' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                border: '1px solid #e5e5e5',
                borderTop: '4px solid var(--pink)',
                padding: 'clamp(24px, 3vw, 34px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                background: '#fff',
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>Who should not choose {fz.name}</span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {fz.notFor.map((item) => (
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

      {/* Setup Process */}
      <section style={{ ...SECTION, background: '#111' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Setup Process</span>
            <h2 style={{ ...H2, color: '#fff' }}>Our 8-Step Process for {fz.name}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {PROCESS.map((step, i) => (
              <div
                key={step}
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
                  {i + 1}
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.55, color: '#d4d4d8', paddingTop: 8 }}>{step}</span>
              </div>
            ))}
          </div>
          <Link href="/business-setup/freezone" className="nz-inline-link" style={{ fontSize: 15, color: 'var(--pink)' }}>
            ← Back to all freezones
          </Link>
        </div>
      </section>

      <CtaSection
        title={`Start Your ${fz.name} Company`}
        subtitle="A named advisor will guide you end to end — license, visas, and bank account. WhatsApp us for a fast answer."
        primaryLabel="Get a free consultation →"
      />
    </main>
  )
}
