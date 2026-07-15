import Link from 'next/link'

const WA_LINK = 'https://wa.me/971564899004'

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366" aria-hidden="true">
      <path d="M12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 1.4 5.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.6 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .1 0 .6-.2 1.2z" />
    </svg>
  )
}

export function CtaSection({
  title = 'Ready to Launch?',
  subtitle = 'Free consultation. Real advisor. No obligation.',
  primaryLabel = 'Calculate Your Cost →',
  primaryHref = '/#calculator',
}: {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
}) {
  return (
    <section
      style={{
        background: 'var(--pink)',
        padding: 'clamp(72px, 9vw, 120px) clamp(20px, 5vw, 56px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 26,
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: '#fff',
          lineHeight: 1.02,
          margin: 0,
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: 21, color: 'rgba(255,255,255,0.92)', margin: 0, maxWidth: 640 }}>
        {subtitle}
      </p>
      <div style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href={primaryHref}
          style={{ background: '#fff', color: '#111', fontWeight: 800, fontSize: 17, padding: '18px 36px' }}
        >
          {primaryLabel}
        </Link>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#0a0a0a',
            color: '#fff',
            fontWeight: 800,
            fontSize: 17,
            padding: '18px 36px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <WhatsAppIcon />
          WhatsApp Us
        </a>
      </div>
      <span
        style={{
          fontSize: 14,
          color: 'rgba(255,255,255,0.8)',
          fontFamily: 'var(--font-space-grotesk), monospace',
          letterSpacing: '0.06em',
        }}
      >
        Mon–Fri 8AM–8PM · Sat–Sun 9AM–8PM · Dubai, UAE
      </span>
    </section>
  )
}
