import type { ReactNode } from 'react'

const eyebrowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-space-grotesk), monospace',
  fontSize: 13,
  letterSpacing: '0.2em',
  color: 'var(--pink)',
  fontWeight: 700,
  textTransform: 'uppercase',
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section
      style={{
        background: '#111',
        padding: 'clamp(56px, 9vw, 120px) clamp(20px, 5vw, 56px) clamp(40px, 7vw, 90px)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
        }}
      >
        {eyebrow ? <span style={eyebrowStyle}>{eyebrow}</span> : null}
        <h1
          style={{
            fontSize: 'clamp(32px, 5.6vw, 70px)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: 0,
          }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: 1.6,
              color: '#b9b9c0',
              maxWidth: 760,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        ) : null}
        {children ? (
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 10 }}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}
