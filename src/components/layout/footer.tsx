import Image from 'next/image'
import Link from 'next/link'

const COLUMNS = [
  {
    title: 'Business Setup',
    links: [
      { href: '/business-setup', label: 'Mainland' },
      { href: '/business-setup/freezone', label: 'Free Zones' },
      { href: '/business-setup', label: 'Offshore' },
      { href: '/#calculator', label: 'Cost Calculator' },
    ],
  },
  {
    title: 'Corporate Services',
    links: [
      { href: '/corporate-services', label: 'Employment Visa' },
      { href: '/corporate-services', label: 'Golden Visa' },
      { href: '/corporate-services', label: 'Bank Account' },
      { href: '/corporate-services', label: 'VAT & Tax' },
      { href: '/corporate-services', label: 'Document Services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms & Conditions' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="nz-footer">
      <div className="nz-footer__grid">
        <div className="nz-footer__brand">
          <Image
            src="/brand/nubiz-wordmark-white.svg"
            alt="NUBIZ"
            width={130}
            height={30}
            className="nz-footer__logo"
          />
          <span className="nz-footer__tag">Business Setup. Done Right.</span>
          <span className="nz-footer__disc">
            NUBIZ is an independent private consultancy. Not affiliated with any
            UAE government entity. A Supreme Services Company.
          </span>
          <div className="nz-footer__social">
            <a href="#" className="nz-footer__soc" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9c9cf"><path d="M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM2 9h4v12H2zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z" /></svg>
            </a>
            <a href="#" className="nz-footer__soc" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9c9cf"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.6.2 2 .4.5.2.9.4 1.3.8s.6.8.8 1.3c.2.4.3 1 .4 2 .1 1.1.1 1.4.1 4.4s0 3.3-.1 4.4c0 1-.2 1.6-.4 2a3.6 3.6 0 0 1-2.1 2.1c-.4.2-1 .3-2 .4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.6-.2-2-.4a3.6 3.6 0 0 1-2.1-2.1c-.2-.4-.3-1-.4-2C3 15.3 3 15 3 12s0-3.3.1-4.4c0-1 .2-1.6.4-2 .2-.5.4-.9.8-1.3s.8-.6 1.3-.8c.4-.2 1-.3 2-.4C8.7 3 9 3 12 3zm0 3.8a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8zm6.6-8.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" /></svg>
            </a>
            <a href="#" className="nz-footer__soc" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9c9cf"><path d="M18.9 2h3.7l-8.1 9.3L24 22h-7.5l-5.9-7.7L3.9 22H.2l8.6-9.9L0 2h7.7l5.3 7 5.9-7zm-1.3 17.8h2L6.6 4H4.4l13.2 15.8z" /></svg>
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title} className="nz-footer__col">
            <span className="nz-footer__col-title">{col.title}</span>
            {col.links.map((l, i) => (
              <Link key={`${l.label}-${i}`} href={l.href} className="nz-footer__link">
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="nz-footer__bar">
        <span>© 2026 NUBIZ</span>
        <span>nubiz.ae · Dubai, UAE</span>
      </div>
    </footer>
  )
}
