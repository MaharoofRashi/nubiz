import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/page-hero'
import { ContactForm } from '@/components/marketing/contact-form'
import { WhatsAppCardLink, PhoneCardLink } from '@/components/marketing/contact-trackers'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'Contact NUBIZ | Free Business Setup Consultation' },
    description:
      'Talk to a NUBIZ consultant about setting up your UAE company. WhatsApp, call, or email. Free consultation, no obligation.',
  }
}

const WA_LINK = 'https://wa.me/971564899004'

const CARD_BASE: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: '20px 24px',
  borderRadius: 12,
  marginBottom: 12,
  textAlign: 'left',
  textDecoration: 'none',
  transition: 'transform 0.2s ease',
}

const ICON_BOX: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: '50%',
  flex: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

function WhatsAppIcon({ color = '#fff' }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 1.4 5.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.6 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .1 0 .6-.2 1.2z" />
    </svg>
  )
}

function PhoneIcon({ color = 'var(--pink)' }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" aria-hidden="true">
      <path d="M4 5c0-1 .8-2 2-2h2.5c.4 0 .8.3.9.7l1.2 3.6c.1.4 0 .8-.3 1.1L9 9.7a13 13 0 0 0 5.3 5.3l1.3-1.3c.3-.3.7-.4 1.1-.3l3.6 1.2c.4.1.7.5.7.9V18c0 1.2-1 2-2 2C10.5 20 4 13.5 4 5z" />
    </svg>
  )
}

function EmailIcon({ color = 'var(--pink)' }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span style={{ color: 'var(--pink)' }}>Talk.</span>
          </>
        }
        subtitle="Free consultation. Real advisor. No obligation. We typically respond within 60 minutes during business hours."
      />

      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
          <p style={{ fontSize: 18, color: '#6b7280', marginBottom: 40 }}>
            The fastest way to reach us is WhatsApp. A named consultant responds — not a bot.
          </p>

          <WhatsAppCardLink
            href={WA_LINK}
            className="nz-contact-card"
            style={{ ...CARD_BASE, background: 'var(--pink)', color: '#fff' }}
          >
            <span style={{ ...ICON_BOX, background: 'rgba(255,255,255,0.18)' }}>
              <WhatsAppIcon color="#fff" />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>WhatsApp Us Now</span>
              <span style={{ fontSize: 14, opacity: 0.85 }}>+971 56 489 9004 · Usually responds &lt; 1 hour</span>
            </span>
          </WhatsAppCardLink>

          <PhoneCardLink
            href="tel:+971564899004"
            className="nz-contact-card"
            style={{ ...CARD_BASE, background: '#fff', color: '#111', border: '1px solid var(--pink)' }}
          >
            <span style={{ ...ICON_BOX, background: 'rgba(238,0,93,0.08)' }}>
              <PhoneIcon />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>Call Us</span>
              <span style={{ fontSize: 14, opacity: 0.7 }}>+971 56 489 9004 · Mon–Fri 8AM–8PM</span>
            </span>
          </PhoneCardLink>

          <a
            href="mailto:info@nubiz.ae"
            className="nz-contact-card"
            style={{ ...CARD_BASE, background: '#fff', color: '#111', border: '1px solid var(--pink)' }}
          >
            <span style={{ ...ICON_BOX, background: 'rgba(238,0,93,0.08)' }}>
              <EmailIcon />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>Email Us</span>
              <span style={{ fontSize: 14, opacity: 0.7 }}>info@nubiz.ae</span>
            </span>
          </a>

          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 13.5, color: '#9ca3af' }}>
              📍 Inside Max Metro Station, Al Jafiliya, opposite Dubai Immigration · Dubai, UAE
            </span>
            <span style={{ fontSize: 13.5, color: '#9ca3af' }}>🕐 Mon–Fri 8AM–8:30PM · Sat–Sun 9AM–8PM</span>
          </div>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '80px 0' }}>
        <div className="container">
          <div className="contact-form-grid">
            {/* Left — copy */}
            <div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#EE005D',
                  marginBottom: 8,
                }}
              >
                SEND A MESSAGE
              </p>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: '#0a0a0a',
                  marginBottom: 12,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                We respond within 60 minutes
              </h2>
              <p style={{ fontSize: 16, color: '#6b7280', marginBottom: 40, lineHeight: 1.7 }}>
                During business hours: Mon–Fri 8AM–8PM, Sat–Sun 9AM–8PM Dubai time. Outside
                hours? WhatsApp us — we check messages regularly.
              </p>

              {/* What happens next */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  {
                    num: '01',
                    title: 'We read your message',
                    desc: 'A named consultant reviews your inquiry personally.',
                  },
                  {
                    num: '02',
                    title: 'We call or WhatsApp you',
                    desc: 'Within 60 minutes during business hours.',
                  },
                  {
                    num: '03',
                    title: 'Free consultation',
                    desc: 'We advise on the right structure for your business. No obligation.',
                  },
                ].map((item) => (
                  <div key={item.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: 'rgba(238,0,93,0.08)',
                        border: '1px solid rgba(238,0,93,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        fontWeight: 800,
                        color: '#EE005D',
                        flexShrink: 0,
                      }}
                    >
                      {item.num}
                    </div>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#0a0a0a', margin: '0 0 4px' }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: 14, color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: 40,
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 24px -8px rgba(0,0,0,0.08)',
              }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
