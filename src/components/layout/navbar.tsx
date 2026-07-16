'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { trackWhatsAppClick } from '@/lib/gtm'

const WA_LINK = 'https://wa.me/971564899004'

const FREEZONES: { label: string; slug: string; badge?: string }[] = [
  { label: 'IFZA', slug: 'ifza' },
  { label: 'Meydan FZ', slug: 'meydan' },
  { label: 'DMCC', slug: 'dmcc' },
  { label: 'ADGM', slug: 'adgm' },
  { label: 'JAFZA', slug: 'jafza' },
  { label: 'ANC FZ', slug: 'anc-fz', badge: 'Best Value' },
  { label: 'RAKEZ', slug: 'rakez' },
  { label: 'SPC FZ', slug: 'spc-fz' },
]

const CORP_SERVICES: { href: string; title: string; desc: string; icon: ReactNode }[] = [
  {
    href: '/corporate-services/pro-services',
    title: 'PRO Services',
    desc: 'License renewals, attestation, government submissions',
    icon: <DocIcon />,
  },
  {
    href: '/corporate-services/residency',
    title: 'Residency Services',
    desc: 'Employment, family, investor & Golden Visa',
    icon: <PassportIcon />,
  },
  {
    href: '/corporate-services/accounting',
    title: 'Accounting & Bookkeeping',
    desc: 'VAT returns, corporate tax, IFRS-compliant books',
    icon: <CalcIcon />,
  },
  {
    href: '/corporate-services/bank-account',
    title: 'Bank Account Opening',
    desc: 'Corporate banking for UAE companies — done right',
    icon: <BankIcon />,
  },
]

type Menu = 'biz' | 'corp' | null

export function Navbar() {
  const pathname = usePathname()
  const [menu, setMenu] = useState<Menu>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<Menu>(null)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMenu = (m: Exclude<Menu, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMenu(m)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMenu(null), 150)
  }
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const closeEverything = () => {
    setMenu(null)
    setMobileOpen(false)
    setMobileSection(null)
  }

  // scroll glow past 80px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close on route change
  useEffect(() => {
    setMenu(null)
    setMobileOpen(false)
    setMobileSection(null)
  }, [pathname])

  // Escape closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeEverything()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // lock body scroll when mobile overlay open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const bizActive = pathname.startsWith('/business-setup')
  const corpActive = pathname.startsWith('/corporate-services')

  return (
    <>
      <nav className="nz-nav" data-scrolled={scrolled}>
        <div className="nz-nav__bar">
          <Link href="/" className="nz-nav__brand" onClick={closeEverything}>
            <Image
              src="/brand/nubiz-wordmark-white.svg"
              alt="NUBIZ"
              width={130}
              height={30}
              priority
              className="nz-nav__logo"
            />
            <span className="nz-nav__tagline">A Supreme Services Company</span>
          </Link>

          <div className="nz-nav__links">
            <div
              className="nm-item"
              onMouseEnter={() => openMenu('biz')}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className="nm-trigger"
                data-active={bizActive}
                aria-haspopup="true"
                aria-expanded={menu === 'biz'}
                onClick={() => setMenu(menu === 'biz' ? null : 'biz')}
              >
                Business Setup
                <Chevron className="nm-caret" />
              </button>
            </div>

            <div
              className="nm-item"
              onMouseEnter={() => openMenu('corp')}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className="nm-trigger"
                data-active={corpActive}
                aria-haspopup="true"
                aria-expanded={menu === 'corp'}
                onClick={() => setMenu(menu === 'corp' ? null : 'corp')}
              >
                Corporate Services
                <Chevron className="nm-caret" />
              </button>
            </div>

            <Link href="/about" className="nz-nav__link" data-active={pathname === '/about'}>
              About
            </Link>
            <Link href="/blog" className="nz-nav__link" data-active={pathname.startsWith('/blog')}>
              Blog
            </Link>
            <Link href="/contact" className="nz-nav__link" data-active={pathname === '/contact'}>
              Contact
            </Link>
          </div>

          <div className="nz-nav__actions">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="nz-btn-wa"
              onClick={() => trackWhatsAppClick()}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <Link href="/#calculator" className="nz-btn-primary" onClick={closeEverything}>
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className="nz-nav__burger"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>

        {/* Business Setup mega menu */}
        <div
          className="nm-panel"
          data-open={menu === 'biz'}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="nm-inner">
            <div className="nm-col nm-col--mainland">
              <span className="nm-eyebrow">Mainland</span>
              <MegaLink
                href="/business-setup/mainland"
                title="Dubai Mainland"
                desc="Trade freely across all UAE"
                pathname={pathname}
              />
              <div className="nm-divider" />
              <span className="nm-eyebrow">Offshore</span>
              <MegaLink
                href="/business-setup/offshore/rak-icc"
                title="RAK ICC"
                desc="Most cost-effective"
                pathname={pathname}
              />
              <MegaLink
                href="/business-setup/offshore/jafza-offshore"
                title="JAFZA Offshore"
                desc="Dubai prestige & property"
                pathname={pathname}
              />
            </div>

            <div className="nm-col nm-col--freezone">
              <span className="nm-eyebrow">Freezone</span>
              <Link
                href="/business-setup/freezone"
                className="nm-link nm-link--head"
                data-active={pathname === '/business-setup/freezone'}
              >
                <span className="nm-link__title">Freezone Overview</span>
              </Link>
              <div className="nm-fz-grid">
                {FREEZONES.map((fz) => {
                  const href = `/business-setup/freezone/${fz.slug}`
                  return (
                    <Link key={fz.slug} href={href} className="nm-fz" data-active={pathname === href}>
                      {fz.label}
                      {fz.badge ? <span className="nm-pill">{fz.badge}</span> : null}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="nm-col nm-col--cta">
              <div className="nm-cta-box">
                <span className="nm-cta-box__icon">
                  <CompassIcon />
                </span>
                <span className="nm-cta-box__title">Not sure which setup fits?</span>
                <span className="nm-cta-box__body">
                  Tell us about your business. We&apos;ll recommend the right structure in a free
                  15-minute call.
                </span>
                <Link href="/contact" className="nm-cta-box__btn">
                  Talk to an Advisor →
                </Link>
                <span className="nm-cta-box__note">Free consultation · No obligation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Services mega menu */}
        <div
          className="nm-panel"
          data-open={menu === 'corp'}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="nm-inner">
            <div className="nm-col nm-col--services">
              <span className="nm-eyebrow">Our Services</span>
              {CORP_SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="nm-link-card"
                  data-active={pathname === s.href}
                >
                  <span className="nm-link-card__icon">{s.icon}</span>
                  <span className="nm-link-card__text">
                    <span className="nm-link-card__title">{s.title}</span>
                    <span className="nm-link-card__desc">{s.desc}</span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="nm-col nm-col--contact">
              <span className="nm-eyebrow">Get in Touch</span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="nm-contact-card nm-contact-card--wa"
                onClick={() => trackWhatsAppClick()}
              >
                <span className="nm-contact-card__icon">
                  <WhatsAppIcon size={18} />
                </span>
                <span className="nm-contact-card__text">
                  <span className="nm-contact-card__title">WhatsApp Us</span>
                  <span className="nm-contact-card__desc">Fastest response · Usually &lt; 1hr</span>
                </span>
              </a>
              <Link href="/contact" className="nm-contact-card nm-contact-card--call">
                <span className="nm-contact-card__icon">
                  <CalendarIcon />
                </span>
                <span className="nm-contact-card__text">
                  <span className="nm-contact-card__title">Book a Free Call</span>
                  <span className="nm-contact-card__desc">15 min · No obligation · Real advisor</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className="nm-mobile" data-open={mobileOpen} aria-hidden={!mobileOpen}>
        <div className="nm-mobile__head">
          <Image
            src="/brand/nubiz-wordmark-white.svg"
            alt="NUBIZ"
            width={120}
            height={28}
            className="nz-nav__logo"
          />
          <button
            type="button"
            className="nm-mobile__close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="nm-mobile__body">
          <button
            type="button"
            className="nm-acc__trigger"
            aria-expanded={mobileSection === 'biz'}
            onClick={() => setMobileSection((s) => (s === 'biz' ? null : 'biz'))}
          >
            Business Setup
            <Chevron className="nm-acc__chev" />
          </button>
          {mobileSection === 'biz' ? (
            <div className="nm-acc__body">
              <Link
                href="/business-setup/mainland"
                className="nm-link nm-link--head"
                data-active={pathname === '/business-setup/mainland'}
                onClick={closeEverything}
              >
                <span className="nm-link__title">Dubai Mainland</span>
              </Link>

              <span className="nm-eyebrow">Freezone</span>
              <Link
                href="/business-setup/freezone"
                className="nm-link"
                data-active={pathname === '/business-setup/freezone'}
                onClick={closeEverything}
              >
                <span className="nm-link__title">Freezone Overview</span>
              </Link>
              <div className="nm-fz-grid">
                {FREEZONES.map((fz) => {
                  const href = `/business-setup/freezone/${fz.slug}`
                  return (
                    <Link
                      key={fz.slug}
                      href={href}
                      className="nm-fz"
                      data-active={pathname === href}
                      onClick={closeEverything}
                    >
                      {fz.label}
                      {fz.badge ? <span className="nm-pill">{fz.badge}</span> : null}
                    </Link>
                  )
                })}
              </div>

              <span className="nm-eyebrow">Offshore</span>
              <Link
                href="/business-setup/offshore/rak-icc"
                className="nm-link"
                data-active={pathname === '/business-setup/offshore/rak-icc'}
                onClick={closeEverything}
              >
                <span className="nm-link__title">RAK ICC</span>
              </Link>
              <Link
                href="/business-setup/offshore/jafza-offshore"
                className="nm-link"
                data-active={pathname === '/business-setup/offshore/jafza-offshore'}
                onClick={closeEverything}
              >
                <span className="nm-link__title">JAFZA Offshore</span>
              </Link>
            </div>
          ) : null}

          <button
            type="button"
            className="nm-acc__trigger"
            aria-expanded={mobileSection === 'corp'}
            onClick={() => setMobileSection((s) => (s === 'corp' ? null : 'corp'))}
          >
            Corporate Services
            <Chevron className="nm-acc__chev" />
          </button>
          {mobileSection === 'corp' ? (
            <div className="nm-acc__body">
              {CORP_SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="nm-link-card"
                  data-active={pathname === s.href}
                  onClick={closeEverything}
                >
                  <span className="nm-link-card__icon">{s.icon}</span>
                  <span className="nm-link-card__text">
                    <span className="nm-link-card__title">{s.title}</span>
                    <span className="nm-link-card__desc">{s.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          ) : null}

          <Link
            href="/about"
            className="nm-mobile__link"
            data-active={pathname === '/about'}
            onClick={closeEverything}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="nm-mobile__link"
            data-active={pathname.startsWith('/blog')}
            onClick={closeEverything}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="nm-mobile__link"
            data-active={pathname === '/contact'}
            onClick={closeEverything}
          >
            Contact
          </Link>
        </div>

        <div className="nm-mobile__foot">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="nz-btn-wa"
            onClick={() => trackWhatsAppClick()}
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <Link href="/#calculator" className="nz-btn-primary" onClick={closeEverything}>
            Get Started
          </Link>
        </div>
      </div>
    </>
  )
}

function MegaLink({
  href,
  title,
  desc,
  pathname,
}: {
  href: string
  title: string
  desc: string
  pathname: string
}) {
  return (
    <Link href={href} className="nm-link" data-active={pathname === href}>
      <span className="nm-link__title">{title}</span>
      <span className="nm-link__desc">{desc}</span>
    </Link>
  )
}

/* ---- icons ---- */
function Chevron({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 1.4 5.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.6 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .1 0 .6-.2 1.2z" />
    </svg>
  )
}

const ico = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7 } as const

function DocIcon() {
  return (
    <svg {...ico}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg>
  )
}
function PassportIcon() {
  return (
    <svg {...ico}><rect x="4" y="2" width="16" height="20" rx="2" /><circle cx="12" cy="10" r="3" /><path d="M8.5 17.5c.7-1.8 2-2.7 3.5-2.7s2.8.9 3.5 2.7" /></svg>
  )
}
function CalcIcon() {
  return (
    <svg {...ico}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8M8 10h2M8 14h2M8 18h2M14 10h2M14 14h2M14 18h2" /></svg>
  )
}
function BankIcon() {
  return (
    <svg {...ico}><path d="M3 10 12 4l9 6M4 10v9h16v-9M9 19v-5h6v5" /></svg>
  )
}
function CompassIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m16 8-2.4 5.6L8 16l2.4-5.6L16 8z" /></svg>
  )
}
function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
  )
}
