import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'NUBIZ — UAE Business Setup'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Pink accent line */}
        <div
          style={{
            width: 80,
            height: 4,
            background: '#EE005D',
            marginBottom: 32,
            borderRadius: 2,
          }}
        />

        {/* NUBIZ wordmark */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          <span style={{ color: '#EE005D' }}>N</span>
          UBIZ
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.75)',
            fontWeight: 500,
            marginBottom: 48,
          }}
        >
          UAE Business Setup. Done Right.
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 48 }}>
          {[
            { num: '500+', label: 'Companies Formed' },
            { num: '4.9★', label: 'Google Rating' },
            { num: '5 Days', label: 'Avg Setup Time' },
          ].map((stat) => (
            <div key={stat.num} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 32, fontWeight: 800, color: '#EE005D' }}>{stat.num}</span>
              <span
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: 4,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            right: 80,
            fontSize: 18,
            color: 'rgba(255,255,255,0.35)',
            fontWeight: 500,
          }}
        >
          nubiz.ae
        </div>
      </div>
    ),
    { ...size },
  )
}
