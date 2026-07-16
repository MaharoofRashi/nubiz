import Image from 'next/image'
import Link from 'next/link'
import { MultiStepCalculator } from '@/components/marketing/multi-step-calculator'
import { FAQSchema } from '@/components/structured-data'

const WA_LINK = 'https://wa.me/971564899004'

const FAQS = [
  {
    question: 'How much does it cost to set up a company in Dubai?',
    answer:
      'Freezone company setup in Dubai starts from AED 12,500 for the most affordable options. The total cost depends on the freezone, number of visas, and activity type. NUBIZ provides written line-item cost breakdowns with no hidden fees.',
  },
  {
    question: 'How long does it take to set up a company in UAE?',
    answer:
      'Freezone company formation in UAE can take as little as 3-5 business days for digital freezones like IFZA and Meydan. Dubai mainland setup typically takes 10-15 business days. NUBIZ manages the entire process on your behalf.',
  },
  {
    question: 'Can a foreigner own 100% of a company in UAE?',
    answer:
      'Yes. Since the 2021 UAE Commercial Companies Law amendments, 100% foreign ownership is permitted for most business activities on the mainland and in all UAE freezones.',
  },
  {
    question: 'Do I need to be in Dubai to set up a UAE company?',
    answer:
      'No. Most freezone company setups can be completed entirely remotely. The UAE residency visa process requires a physical visit for the medical fitness test and Emirates ID biometrics.',
  },
  {
    question: 'What is the difference between mainland and freezone in UAE?',
    answer:
      'Mainland companies can trade anywhere in the UAE including with government entities. Freezone companies can access 0% corporate tax on qualifying international income. The right choice depends on who your customers are.',
  },
]

const HERO_STATS = [
  { num: '500', accent: '+', label: 'Companies formed' },
  { num: '4.9', accent: '★', label: 'Google rating' },
  { num: '5', accent: ' Days', label: 'Average setup' },
]

const MARQUEE_ITEMS = [
  'Investor visa',
  'Bank account',
  'Mainland & free zone',
  'Corporate tax',
  'Trade license',
  'Golden visa',
  'Company renewal',
]

const STEPS = [
  { n: '1', title: 'Free Consultation', desc: 'Tell us your business. We advise on jurisdiction, structure, and cost. No obligation.' },
  { n: '2', title: 'Choose Your Setup', desc: 'Mainland or freezone. We present options with full cost breakdown upfront.' },
  { n: '3', title: 'We Handle Everything', desc: 'Documents, submissions, approvals — through official channels and freezone portals.' },
  { n: '4', title: "You're Open for Business", desc: 'License issued. Visas processed. Bank intro made.' },
]

const STATS = [
  { num: '500+', label: 'Companies Formed' },
  { num: '4.9★', label: 'Google Rating (363 reviews)' },
  { num: '5 Days', label: 'Average Setup' },
  { num: '15+', label: 'Freezone Partners' },
  { num: '99%', label: 'Success Rate' },
]

const FREEZONES = [
  { name: 'IFZA', cost: 'AED 12,500', time: '3–5 days', best: 'Consultants & startups' },
  { name: 'RAKEZ', cost: 'AED 11,000', time: '5–7 days', best: 'Trading & industrial' },
  { name: 'Shams', cost: 'AED 8,500', time: '3–5 days', best: 'Media & creative' },
  { name: 'Meydan', cost: 'AED 12,500', time: '2–4 days', best: 'E-commerce & digital' },
  { name: 'DMCC', cost: 'AED 20,000', time: '7–10 days', best: 'Commodities & finance' },
  { name: 'Ajman FZ', cost: 'AED 9,000', time: '3–5 days', best: 'Budget-conscious SMEs' },
]

const TESTIMONIALS = [
  { quote: "NUBIZ told me my first jurisdiction choice was wrong for my business and saved me AED 18,000 over three years. That's a consultant, not a portal.", name: 'Priya M.', flag: '🇮🇳', role: 'Founder · Lighthouse Trading FZE' },
  { quote: 'License in 3 days. Bank account in 2 weeks. Visa done. They delivered exactly what they promised, exactly when they said.', name: 'Ahmed K.', flag: '🇦🇪', role: 'CEO · AK Consulting LLC' },
  { quote: 'Every other consultancy gave me vague quotes. NUBIZ sent me a line-item breakdown in 24 hours. I knew exactly what I was paying before I signed.', name: 'James R.', flag: '🇬🇧', role: 'Director · Orion Digital FZ' },
]

const POSTS = [
  { tag: 'Free Zones', time: '6 min read', title: 'IFZA vs RAKEZ in 2026 — The Honest Comparison', excerpt: 'Costs, visa quotas, office requirements, and which one actually fits your business model.' },
  { tag: 'Tax', time: '8 min read', title: 'UAE Corporate Tax: What 0%, 9% and 15% Actually Mean for Your Business', excerpt: 'Qualifying free zone income, small business relief, and when the 9% rate really applies.' },
  { tag: 'Banking', time: '7 min read', title: 'How to Open a Corporate Bank Account in UAE as a Foreign Founder', excerpt: 'Which banks say yes to new licenses, what documents you need, and realistic timelines.' },
]

export default function HomePage() {
  return (
    <main>
      <FAQSchema faqs={FAQS} />
      {/* ================= HERO ================= */}
      <section className="nz-hero">
        <div className="nz-hero__grid">
          <div className="nz-hero__left">
            <h1 className="nz-hero__title">
              <span className="nz-line-white">Your UAE</span>
              <span className="nz-line-outline">Company.</span>
              <span className="nz-line-white">
                Live in 5 days<span className="nz-dot">.</span>
              </span>
            </h1>

            <div className="nz-hero__sub">
              <span className="nz-hero__bar" />
              <p className="nz-hero__sub-text">
                No hidden fees. No corporate theatre.{' '}
                <strong>Trade license, visa, bank account — handled.</strong>
              </p>
            </div>

            <div className="nz-hero__stats">
              {HERO_STATS.map((s) => (
                <div className="nz-stat" key={s.label}>
                  <span className="nz-stat__num">
                    {s.num}
                    <span>{s.accent}</span>
                  </span>
                  <span className="nz-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* pink calculator panel */}
          <div className="nz-hero__panel" id="calculator">
            <Image
              src="/brand/nubiz-icon.svg"
              alt=""
              width={44}
              height={44}
              aria-hidden="true"
              className="nz-hero__panel-icon"
            />
            <MultiStepCalculator />
            <div className="nz-calc__foot">FREE · NO SIGNUP · 60 SECONDS</div>
          </div>
        </div>

        {/* marquee */}
        <div className="nz-marquee">
          <div className="nz-marquee__track">
            {[0, 1].map((dup) =>
              MARQUEE_ITEMS.map((item, i) => (
                <span key={`${dup}-${i}`} style={{ display: 'contents' }}>
                  <span>{item}</span>
                  <span>✦</span>
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="nz-section nz-services">
        <div className="nz-section__head">
          <span className="nz-eyebrow">Services</span>
          <h2 className="nz-h2">Everything You Need to Launch in the UAE</h2>
          <span className="nz-lead">One team. License to visa to bank account.</span>
        </div>

        <div className="nz-cards-3">
          <div className="nz-card nz-card--dark">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EE005D" strokeWidth="1.8"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 10h.01M15 10h.01M9 14h.01M15 14h.01" /></svg>
            <span className="nz-card__title">Business Setup</span>
            <span className="nz-card__text">Mainland DED or 15+ freezones. We advise on structure, activity codes, and jurisdiction — then handle every submission.</span>
            <div className="nz-tags">
              <span className="nz-tag">Mainland (DED)</span>
              <span className="nz-tag">Freezone</span>
              <span className="nz-tag">Offshore</span>
            </div>
            <Link href="/business-setup" className="nz-card__link">Explore options →</Link>
          </div>

          <div className="nz-card nz-card--white">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8"><path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
            <span className="nz-card__title">Corporate Services</span>
            <span className="nz-card__text">Post-setup support — visas, banking, tax, attestation. One named advisor, every step.</span>
            <div className="nz-tags">
              <span className="nz-tag">Employment Visa</span>
              <span className="nz-tag">Golden Visa</span>
              <span className="nz-tag">Bank Account</span>
              <span className="nz-tag">VAT & Tax</span>
            </div>
            <Link href="/corporate-services" className="nz-card__link">See all services →</Link>
          </div>

          <div className="nz-card nz-card--pink">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c3 3.3 3 16.7 0 20-3-3.3-3-16.7 0-20z" /></svg>
            <span className="nz-card__title">15+ Free Zones</span>
            <span className="nz-card__text">Channel partner with IFZA, RAKEZ, Shams, Meydan, DMCC and more. Direct submission, preferred pricing.</span>
            <div className="nz-tags">
              <span className="nz-tag">IFZA from AED 12,500</span>
              <span className="nz-tag">RAKEZ</span>
              <span className="nz-tag">Shams</span>
              <span className="nz-tag">Meydan</span>
              <span className="nz-tag">DMCC</span>
              <span className="nz-tag">+more</span>
            </div>
            <Link href="/business-setup/freezone" className="nz-card__link">Compare free zones →</Link>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="nz-section nz-how">
        <div className="nz-section__head">
          <span className="nz-eyebrow">How it works</span>
          <h2 className="nz-h2">From First Call to First Trade — in Days</h2>
        </div>
        <div className="nz-how__grid">
          <div className="nz-how__line" />
          {STEPS.map((step) => (
            <div className="nz-how__step" key={step.n}>
              <span className="nz-how__num">{step.n}</span>
              <div className="nz-how__text">
                <span className="nz-how__title">{step.title}</span>
                <span className="nz-how__desc">{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="nz-stats">
        {STATS.map((s) => (
          <div className="nz-stats__item" key={s.label}>
            <span className="nz-stats__num">{s.num}</span>
            <span className="nz-stats__label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ================= FREE ZONES ================= */}
      <section id="freezones" className="nz-section nz-fz">
        <div className="nz-section__head">
          <span className="nz-eyebrow">Free zones</span>
          <h2 className="nz-h2">Find Your Perfect Free Zone</h2>
          <span className="nz-lead">We&apos;re channel partners with 15+ authorities. Direct submission, no middleman markup.</span>
        </div>
        <div className="nz-fz__grid">
          {FREEZONES.map((fz) => (
            <div className="nz-fz__card" key={fz.name}>
              <span className="nz-fz__name">{fz.name}</span>
              <div className="nz-fz__rows">
                <div className="nz-fz__row">
                  <span className="nz-fz__k">From</span>
                  <span className="nz-fz__cost">{fz.cost}</span>
                </div>
                <div className="nz-fz__row">
                  <span className="nz-fz__k">Setup time</span>
                  <span className="nz-fz__v">{fz.time}</span>
                </div>
                <div className="nz-fz__row">
                  <span className="nz-fz__k">Best for</span>
                  <span className="nz-fz__v">{fz.best}</span>
                </div>
              </div>
              <Link href="/#calculator" className="nz-fz__link">Get quote →</Link>
            </div>
          ))}
        </div>
        <Link href="/business-setup/freezone" className="nz-fz__all">Compare all free zones →</Link>
      </section>

      {/* ================= WHY NUBIZ ================= */}
      <section id="why" className="nz-section nz-why">
        <div className="nz-section__head">
          <span className="nz-eyebrow">Why NUBIZ</span>
          <h2 className="nz-h2">The No-Nonsense Way to Set Up in Dubai</h2>
        </div>
        <div className="nz-why__grid">
          <div className="nz-why__card nz-why__card--dark">
            <span className="nz-why__title">Transparent Pricing</span>
            <span className="nz-why__price">AED 12,500</span>
            <span className="nz-why__text">Published upfront. No quote-first theatrics. What you see is what you pay — government fees itemised separately.</span>
          </div>
          <div className="nz-why__card nz-why__card--white">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EE005D" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></svg>
            <span className="nz-why__title">Named Advisor</span>
            <span className="nz-why__text">You get one consultant on your file. Direct WhatsApp. Direct email. Not a support ticket queue.</span>
          </div>
          <div className="nz-why__card nz-why__card--white">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EE005D" strokeWidth="1.8"><path d="M12 5.5L8.5 9a2.5 2.5 0 0 0 3.5 3.5L15.5 9M2 8l5-4 5 3.5M22 8l-5-4-5 3.5M6 12l-2 2 4 4 2.5-2M18 12l2 2-4 4-2.5-2M10 18l2 1.5L14 18" /></svg>
            <span className="nz-why__title">Channel Partners</span>
            <span className="nz-why__text">We submit directly into freezone portals. Faster approvals, preferred pricing, escalated support on edge cases.</span>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="nz-section nz-testi">
        <div className="nz-section__head">
          <span className="nz-eyebrow">Testimonials</span>
          <h2 className="nz-h2">Founders Who Launched with NUBIZ</h2>
        </div>
        <div className="nz-cards-3">
          {TESTIMONIALS.map((t) => (
            <div className="nz-testi__card" key={t.name}>
              <span className="nz-testi__stars">★★★★★</span>
              <span className="nz-testi__quote">“{t.quote}”</span>
              <div className="nz-testi__who">
                <span className="nz-testi__name">{t.name} {t.flag}</span>
                <span className="nz-testi__role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section id="blog" className="nz-section nz-blog">
        <div className="nz-section__head">
          <span className="nz-eyebrow">Guides</span>
          <h2 className="nz-h2">Guides for Founders</h2>
          <span className="nz-lead">Plain-English answers to the questions every founder asks before launching in UAE.</span>
        </div>
        <div className="nz-cards-3">
          {POSTS.map((post) => (
            <div className="nz-blog__card" key={post.title}>
              <div className="nz-blog__meta">
                <span className="nz-blog__tag">{post.tag}</span>
                <span className="nz-blog__time">{post.time}</span>
              </div>
              <span className="nz-blog__title">{post.title}</span>
              <span className="nz-blog__excerpt">{post.excerpt}</span>
              <Link href="/blog" className="nz-blog__link">Read →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="nz-cta">
        <span className="nz-cta__title">Ready to Launch?</span>
        <span className="nz-cta__sub">Free consultation. Real advisor. No obligation.</span>
        <div className="nz-cta__row">
          <Link href="/#calculator" className="nz-cta__btn-light">Calculate Your Cost →</Link>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="nz-cta__btn-dark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366"><path d="M12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 1.4 5.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.6 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .1 0 .6-.2 1.2z" /></svg>
            WhatsApp Us
          </a>
        </div>
        <span className="nz-cta__hours">Mon–Fri 8AM–8PM · Sat–Sun 9AM–8PM · Dubai, UAE</span>
      </section>
    </main>
  )
}
