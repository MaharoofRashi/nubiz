import type { ReactNode } from 'react'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'
import type { OffshoreJurisdiction } from '@/data/offshore-jurisdictions'

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
const heroBadge: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  border: '1px solid rgba(255,255,255,0.25)',
  color: '#fff',
  fontSize: 14,
  fontWeight: 600,
  padding: '12px 20px',
  borderRadius: 999,
}

export interface OffshoreFeature {
  title: string
  desc: string
  icon: ReactNode
}

export function OffshoreJurisdictionPage({
  jurisdiction: j,
  features,
  process,
}: {
  jurisdiction: OffshoreJurisdiction
  features: OffshoreFeature[]
  process: string[]
}) {
  return (
    <main>
      <PageHero
        eyebrow="UAE Offshore"
        title={
          <>
            {j.name} <span style={{ color: 'var(--pink)' }}>Company Formation</span>
          </>
        }
        subtitle={j.tagline}
      >
        <span style={heroBadge}>📍 {j.location}</span>
        <span style={{ ...heroBadge, background: 'var(--pink)', border: '1px solid var(--pink)' }}>
          Setup in {j.setupTime}
        </span>
      </PageHero>

      {/* What Is */}
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
            <span style={EYEBROW}>What is {j.name}</span>
            <h2 style={H2}>{j.tagline}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: '#444', margin: 0 }}>{j.description}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
            {j.highlights.map((h) => (
              <div
                key={h.label}
                style={{
                  border: '1px solid #e5e5e5',
                  borderTop: '4px solid var(--pink)',
                  padding: '24px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  background: 'var(--grey-100)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk), monospace',
                    fontSize: 26,
                    fontWeight: 700,
                    color: 'var(--pink)',
                    lineHeight: 1.05,
                  }}
                >
                  {h.value}
                </span>
                <span style={{ fontSize: 12.5, color: '#555', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Key Features</span>
            <h2 style={H2}>What Sets {j.name} Apart</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {features.map((f) => (
              <div
                key={f.title}
                className="nz-card-hover"
                style={{ background: '#fff', border: '1px solid #e5e5e5', padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}
              >
                <span style={{ color: 'var(--pink)' }}>{f.icon}</span>
                <span style={{ fontSize: 19, fontWeight: 800, color: '#111' }}>{f.title}</span>
                <span style={{ fontSize: 15.5, lineHeight: 1.65, color: '#555' }}>{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Use Cases</span>
            <h2 style={H2}>What {j.name} Is Used For</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
            {j.useCases.map((u) => (
              <div
                key={u}
                style={{ display: 'flex', gap: 12, alignItems: 'flex-start', border: '1px solid #e5e5e5', padding: '18px 20px', background: 'var(--grey-100)' }}
              >
                <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none' }}>›</span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: '#333' }}>{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cannot Do */}
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
            <span style={{ ...EYEBROW, color: 'var(--pink)' }}>Be clear on the limits</span>
            <h2 style={{ ...H2, fontSize: 'clamp(24px, 3vw, 32px)' }}>What {j.name} Cannot Do</h2>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
              {j.cannotDo.map((c) => (
                <li key={c} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none', lineHeight: 1.55 }}>✗</span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.55, color: '#444' }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who should choose */}
      <section style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>Is {j.name} right for you?</span>
            <h2 style={H2}>Who Should — and Shouldn&apos;t — Choose {j.name}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div style={{ border: '1px solid #e5e5e5', borderTop: '4px solid #25d366', padding: 'clamp(24px, 3vw, 34px)', display: 'flex', flexDirection: 'column', gap: 16, background: '#fff' }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>Choose {j.name} if you are…</span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {j.bestFor.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: '#25d366', fontWeight: 800, flex: 'none', lineHeight: 1.6 }}>✓</span>
                    <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#444' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: '1px solid #e5e5e5', borderTop: '4px solid var(--pink)', padding: 'clamp(24px, 3vw, 34px)', display: 'flex', flexDirection: 'column', gap: 16, background: '#fff' }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>Look at the alternative if…</span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {j.notFor.map((item) => (
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
            <h2 style={{ ...H2, color: '#fff' }}>How We Incorporate Your {j.name} Company</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {process.map((step, i) => (
              <div
                key={step}
                style={{ display: 'flex', gap: 16, alignItems: 'flex-start', border: '1px solid rgba(255,255,255,0.1)', padding: '20px 22px', background: '#161618' }}
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
        </div>
      </section>

      <CtaSection
        title="RAK ICC or JAFZA?"
        subtitle="See both jurisdictions side by side, then let a NUBIZ advisor confirm the right structure for you."
        primaryLabel="Compare RAK ICC vs JAFZA →"
        primaryHref="/business-setup/offshore#comparison"
      />
    </main>
  )
}
