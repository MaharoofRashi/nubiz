import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'About NUBIZ | UAE Business Setup Consultancy' },
    description:
      'NUBIZ is a freezone-specialist business setup consultancy in Dubai, UAE. ' +
      'Founded by the Supreme Services team with 10+ years experience and 4.9★ Google rating.',
  }
}

const SECTION_PAD = 'clamp(64px, 8vw, 104px) clamp(20px, 5vw, 56px)'
const CONTAINER: React.CSSProperties = { maxWidth: 1200, margin: '0 auto' }

const eyebrowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-space-grotesk), monospace',
  fontSize: 13,
  letterSpacing: '0.2em',
  color: 'var(--pink)',
  fontWeight: 700,
  textTransform: 'uppercase',
}

const STATS = [
  { num: '10+', label: 'Years of Experience' },
  { num: '500+', label: 'Companies Formed' },
  { num: '4.9★', label: 'Google Rating (363 reviews)' },
  { num: '15+', label: 'Freezone Partnerships' },
]

const FREEZONE_LOGOS = [
  'IFZA',
  'RAKEZ',
  'Meydan FZ',
  'DMCC',
  'ADGM',
  'JAFZA',
  'ANC FZ',
  'SPC FZ',
  '+ more',
]

function PriceTagIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EE005D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 2.8 12V4a1.2 1.2 0 0 1 1.2-1.2h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.8Z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EE005D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
    </svg>
  )
}

function HandshakeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EE005D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8l-4.6-4.6a2 2 0 0 0-1.4-.6H8.5a2 2 0 0 0-1.4.6L3 11" />
      <path d="m8 12 2.5 2.5" />
      <path d="M3 11 1.5 12.5" />
      <path d="M22.5 12.5 21 11" />
    </svg>
  )
}

const FEATURES = [
  {
    icon: <PriceTagIcon />,
    title: 'Transparent Pricing',
    body:
      'We publish our starting costs. You get a written line-item breakdown before you sign anything. No quote-first theatrics.',
  },
  {
    icon: <PersonIcon />,
    title: 'Named Advisor',
    body:
      'You get one named consultant on your file. Direct WhatsApp. Direct email. Not a support ticket queue or a rotating team.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Channel Partners',
    body:
      "We're channel partners with 15+ freezone authorities — IFZA, RAKEZ, Meydan, DMCC, ADGM and more. We submit directly into their portals.",
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title={
          <>
            Business Setup <span style={{ color: 'var(--pink)' }}>Done Right.</span>
          </>
        }
        subtitle="NUBIZ is the freezone-specialist division of Supreme Services — Dubai's business setup consultancy with 10+ years of experience and a 4.9★ reputation from 363 verified reviews."
      />

      {/* ================= OUR STORY ================= */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div
          style={{
            ...CONTAINER,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}
        >
          <div>
            <span style={eyebrowStyle}>Who We Are</span>
            <h2
              style={{
                fontSize: 'clamp(30px, 3.6vw, 44px)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: '#0a0a0a',
                margin: '16px 0 24px',
                lineHeight: 1.1,
              }}
            >
              New Name. Same Expert Team.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: '#374151', margin: 0 }}>
                NUBIZ was founded in 2026 as a focused, freezone-specialist brand by the
                team behind Supreme Services — one of Dubai&apos;s most reviewed business
                setup consultancies.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: '#374151', margin: 0 }}>
                For over a decade, our consultants have guided 500+ entrepreneurs through
                company formation, visa processing, and corporate compliance in the UAE.
                We&apos;ve handled freezone setups, mainland registrations, golden visas,
                bank account introductions, and corporate tax compliance — across more
                than 40 UAE jurisdictions.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: '#374151', margin: 0 }}>
                NUBIZ exists because we saw a gap: founders wanted a consultancy that was
                transparent about cost, honest about timelines, and direct in their
                communication. No vague quotes. No corporate theatre. Just expert advice
                and clean execution.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  background: '#fff',
                  padding: 24,
                  borderRadius: 12,
                  border: '1px solid #e5e7eb',
                  borderTop: '3px solid #EE005D',
                }}
              >
                <div style={{ fontSize: 36, fontWeight: 800, color: '#EE005D', lineHeight: 1 }}>
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginTop: 10,
                    fontWeight: 600,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE NUBIZ DIFFERENCE ================= */}
      <section style={{ background: '#f7f7f9', padding: SECTION_PAD }}>
        <div style={{ ...CONTAINER, textAlign: 'center' }}>
          <span style={eyebrowStyle}>The NUBIZ Difference</span>
          <h2
            style={{
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#0a0a0a',
              margin: '16px 0 48px',
              lineHeight: 1.1,
            }}
          >
            We Advise First. Then We Execute.
          </h2>
        </div>
        <div
          style={{
            ...CONTAINER,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: 32,
                border: '1px solid #e5e7eb',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: 'rgba(238,0,93,0.1)',
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0a0a0a', margin: '0 0 12px' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#374151', margin: 0 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PARENT COMPANY ================= */}
      <section style={{ background: '#111', padding: SECTION_PAD }}>
        <div style={{ ...CONTAINER, maxWidth: 820 }}>
          <span style={eyebrowStyle}>Our Heritage</span>
          <h2
            style={{
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#fff',
              margin: '16px 0 24px',
              lineHeight: 1.1,
            }}
          >
            A Supreme Services Company
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#b9b9c0', margin: '0 0 16px' }}>
            NUBIZ operates under Supreme Services — established in Dubai in 2015, located
            inside Max Metro Station, Al Jafiliya, opposite Dubai Immigration.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#b9b9c0', margin: '0 0 28px' }}>
            Supreme Services holds a 4.9★ rating from 363 verified Google reviews and has
            completed 500+ company formations across mainland and freezone jurisdictions.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 999,
                padding: '10px 18px',
                fontSize: 14.5,
                fontWeight: 600,
                color: '#fff',
              }}
            >
              ⭐ 4.9 Google Rating
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 999,
                padding: '10px 18px',
                fontSize: 14.5,
                fontWeight: 600,
                color: '#fff',
              }}
            >
              ✓ 363 Verified Reviews
            </span>
          </div>

          <a
            href="https://www.google.com/maps/place/Supreme+Digital+Business+Services/@25.233478,55.292228,17.25z"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              color: 'var(--pink)',
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              marginBottom: 28,
            }}
          >
            View Supreme Services on Google Maps →
          </a>

          <p
            style={{
              fontSize: 13.5,
              lineHeight: 1.6,
              color: '#7a7a83',
              fontStyle: 'italic',
              margin: 0,
              maxWidth: 640,
            }}
          >
            NUBIZ is an independent private consultancy. We are not affiliated with,
            endorsed by, or an official representative of any UAE government authority.
          </p>
        </div>
      </section>

      {/* ================= FREEZONE PARTNERSHIPS ================= */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ ...CONTAINER, maxWidth: 900, textAlign: 'center' }}>
          <span style={eyebrowStyle}>Channel Partnerships</span>
          <h2
            style={{
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#0a0a0a',
              margin: '16px 0 20px',
              lineHeight: 1.1,
            }}
          >
            Direct Access to 15+ Freezone Authorities
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#374151', margin: '0 auto 40px', maxWidth: 700 }}>
            As channel partners, we submit your application directly into freezone
            authority portals — no middleman markup, faster approvals, and escalated
            support when edge cases arise.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(16px, 3vw, 32px)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {FREEZONE_LOGOS.map((logo) => (
              <span
                key={logo}
                style={{
                  fontFamily: 'var(--font-space-grotesk), monospace',
                  fontSize: 'clamp(16px, 2vw, 22px)',
                  fontWeight: 700,
                  color: '#111',
                  letterSpacing: '-0.01em',
                }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
