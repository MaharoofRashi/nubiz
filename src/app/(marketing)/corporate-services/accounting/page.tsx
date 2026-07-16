import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/page-hero'
import { CtaSection } from '@/components/marketing/cta-section'
import { ServiceSchema, BreadcrumbSchema } from '@/components/structured-data'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'Accounting & Bookkeeping UAE | VAT & Corporate Tax | NUBIZ' },
    description:
      'IFRS-compliant bookkeeping, VAT returns, and UAE Corporate Tax filing. We keep your books accurate and file every return before the deadline — so you never pay a penalty for a process error.',
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
  fontSize: 'clamp(28px, 3.6vw, 42px)',
  fontWeight: 900,
  letterSpacing: '-0.025em',
  color: '#111',
  lineHeight: 1.12,
  margin: 0,
}
const BODY: React.CSSProperties = { fontSize: 17, lineHeight: 1.75, color: '#444', margin: 0 }

const SERVICES = [
  { title: 'Monthly Bookkeeping', desc: 'Every transaction recorded, categorized, and reconciled against your bank statements on cloud platforms (Xero, QuickBooks, Zoho) — real-time visibility from anywhere.' },
  { title: 'VAT Returns & Registration', desc: 'FTA VAT registration, quarterly return preparation and EmaraTax submission, and year-round input-tax optimization so you claim everything you are entitled to.' },
  { title: 'Corporate Tax Filing', desc: 'Eligibility assessment (including QFZP for freezones), compliance structured to maximize available relief, and your annual return filed within nine months of year-end.' },
  { title: 'Financial Statements (IFRS)', desc: 'IFRS-compliant profit & loss, balance sheet, and cash-flow statements — monthly and annual — for license renewal, banking, investors, and audit readiness.' },
  { title: 'Payroll & WPS', desc: 'Full payroll cycle including salary calculations, leave and end-of-service accruals, and Wages Protection System submission for MOHRE compliance.' },
  { title: 'Audit Preparation', desc: 'Audit-ready books and coordination with FTA-registered approved auditors, completed with minimal disruption where your freezone requires audited statements.' },
]

const CONSEQUENCES = [
  'Late VAT filing triggers fixed penalties, plus escalating late-payment penalties',
  'Corporate Tax returns built on inaccurate books mean inaccurate — and penalised — filings',
  'Records must be kept IFRS-compliant for a minimum of 7 years by law',
  'Errors and non-compliance are penalised by the FTA, from minor slips to serious breaches',
]

export default function AccountingPage() {
  return (
    <main>
      <ServiceSchema
        name="Accounting & Bookkeeping UAE"
        description="IFRS-compliant bookkeeping, VAT returns, and UAE Corporate Tax filing. We keep your books accurate and file every return before the deadline — so you never pay a penalty for a process error."
        url="https://nubiz.ae/corporate-services/accounting"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://nubiz.ae' },
          { name: 'Corporate Services', url: 'https://nubiz.ae/corporate-services' },
          { name: 'Accounting & Bookkeeping', url: 'https://nubiz.ae/corporate-services/accounting' },
        ]}
      />
      <PageHero
        eyebrow="Accounting & Bookkeeping"
        title={
          <>
            Compliant Books. <span style={{ color: 'var(--pink)' }}>Zero FTA Penalties.</span>
          </>
        }
        subtitle="UAE Corporate Tax requires IFRS-compliant records. VAT requires accurate filings. We handle your monthly bookkeeping, VAT returns, and corporate tax compliance — so you never pay a penalty for a process error."
      />

      {/* Why it matters 2026 */}
      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 860 }}>
          <span style={EYEBROW}>Why it matters in 2026</span>
          <h2 style={H2}>Accounting is no longer a once-a-year task</h2>
          <p style={BODY}>
            Before 2023, many UAE businesses treated accounting as an annual admin chore. UAE
            Corporate Tax changed that permanently. Your tax return is built directly from your
            accounting records, and your VAT return depends on accurate transaction recording. If
            your books are wrong, your filings are wrong — and the FTA penalises errors.
          </p>
          <p style={BODY}>
            Under UAE Corporate Tax Law, every business must maintain IFRS-compliant financial
            records for a minimum of seven years — this is a legal requirement, not optional. And
            Small Business Relief (0% tax for smaller businesses) expires December 2026, so if your
            revenue is approaching the threshold, structured accounting becomes urgent.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ ...SECTION, background: 'var(--grey-100)' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
            <span style={EYEBROW}>What we handle</span>
            <h2 style={H2}>Six Services, One Named Accountant</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="nz-card-hover"
                style={{ background: '#fff', border: '1px solid #e5e5e5', padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <span style={{ fontSize: 20, fontWeight: 800, color: '#111' }}>{s.title}</span>
                <span style={{ fontSize: 15.5, lineHeight: 1.65, color: '#555' }}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences box */}
      <section style={{ ...SECTION, background: '#fff' }}>
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
            <span style={{ ...EYEBROW, color: 'var(--pink)' }}>The honest reality</span>
            <h2 style={{ ...H2, fontSize: 'clamp(24px, 3vw, 32px)' }}>What Happens Without Proper Accounting</h2>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
              {CONSEQUENCES.map((c) => (
                <li key={c} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--pink)', fontWeight: 800, flex: 'none', lineHeight: 1.55 }}>!</span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.55, color: '#444' }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why outsource */}
      <section style={{ ...SECTION, background: '#fff', paddingTop: 0 }}>
        <div style={{ ...CONTAINER, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          <div style={{ border: '1px solid #e5e5e5', borderTop: '4px solid #25d366', padding: 'clamp(24px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={EYEBROW}>Why outsource</span>
            <h2 style={{ ...H2, fontSize: 'clamp(22px, 2.6vw, 28px)' }}>Expert books, without the headcount</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#555', margin: 0 }}>
              A full-time in-house accountant is a significant monthly commitment. An outsourced
              package covers bookkeeping, VAT, and Corporate Tax for a fraction of that — and the
              fees are fully deductible as a business expense for Corporate Tax, reducing your net
              cost further.
            </p>
          </div>
          <div style={{ border: '1px solid #e5e5e5', borderTop: '4px solid var(--pink)', padding: 'clamp(24px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={EYEBROW}>Our service</span>
            <h2 style={{ ...H2, fontSize: 'clamp(22px, 2.6vw, 28px)' }}>One accountant. Every deadline met.</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#555', margin: 0 }}>
              One named accountant on your file. Monthly reports within the first week of the
              following month. Always-on access to your own data through your cloud platform. We
              file every return before the deadline — you never pay an FTA late-filing penalty.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Get Your Books FTA-Ready"
        subtitle="Hand over the numbers. We'll keep them accurate, compliant, and filed on time."
        primaryLabel="Get a free consultation →"
      />
    </main>
  )
}
