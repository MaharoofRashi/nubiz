'use client'

import { useMemo, useState } from 'react'
import { submitContact } from '@/app/actions/contact'
import { trackCalculatorComplete } from '@/lib/gtm'

const WA_LINK = 'https://wa.me/971564899004'

const BUSINESS_TYPES = [
  'Consulting & services',
  'E-commerce',
  'Trading & import',
  'Tech & media',
] as const

const JURISDICTIONS = ['Mainland', 'Freezone', 'Offshore'] as const

const FREEZONES = [
  { name: 'IFZA', base: 12500 },
  { name: 'RAKEZ', base: 11000 },
  { name: 'Shams', base: 8500 },
  { name: 'Meydan', base: 12500 },
  { name: 'DMCC', base: 20000 },
  { name: 'Ajman FZ', base: 9000 },
] as const

const VISA_OPTIONS = [
  { label: 'Just me', count: 1 },
  { label: '2–3', count: 3 },
  { label: '4–6', count: 6 },
  { label: '7+', count: 8 },
] as const

const STEP_LABELS = ['Business', 'Jurisdiction', 'Visas', 'Contact'] as const

type Jurisdiction = (typeof JURISDICTIONS)[number]

const AED = (n: number) =>
  'AED ' + (Math.round(n / 500) * 500).toLocaleString('en-US')

function estimateRange(opts: {
  jurisdiction: Jurisdiction | null
  freezone: string
  visaCount: number
}): { low: number; high: number } {
  const { jurisdiction, freezone, visaCount } = opts

  let base = 15000
  if (jurisdiction === 'Freezone') {
    base = FREEZONES.find((f) => f.name === freezone)?.base ?? 8500
  } else if (jurisdiction === 'Mainland') {
    base = 18500
  } else if (jurisdiction === 'Offshore') {
    base = 10000
  }

  const visaCost = visaCount * 4200

  const low = base + visaCost
  const high = Math.round((base + visaCost) * 1.35)
  return { low, high }
}

export function MultiStepCalculator() {
  const [step, setStep] = useState(0)
  const [businessType, setBusinessType] = useState<string | null>(null)
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction | null>(null)
  const [freezone, setFreezone] = useState<string>('')
  const [visaCount, setVisaCount] = useState<number | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const range = useMemo(
    () =>
      estimateRange({
        jurisdiction,
        freezone,
        visaCount: visaCount ?? 1,
      }),
    [jurisdiction, freezone, visaCount],
  )

  const canAdvance = (() => {
    if (step === 0) return businessType !== null
    if (step === 1)
      return jurisdiction !== null && (jurisdiction !== 'Freezone' || freezone !== '')
    if (step === 2) return visaCount !== null
    if (step === 3) return name.trim() !== '' && phone.trim() !== '' && email.trim() !== ''
    return false
  })()

  const reset = () => {
    setStep(0)
    setBusinessType(null)
    setJurisdiction(null)
    setFreezone('')
    setVisaCount(null)
    setName('')
    setPhone('')
    setEmail('')
    setDone(false)
    setIsSubmitting(false)
    setSubmitError('')
  }

  const handleNext = async () => {
    if (!canAdvance || isSubmitting) return
    if (step === 3) {
      setIsSubmitting(true)
      setSubmitError('')

      const fd = new FormData()
      fd.append('name', name)
      fd.append('email', email)
      fd.append('phone', phone)
      fd.append(
        'inquiryType',
        `Calculator Lead — ${businessType} · ${jurisdiction}` +
          (freezone ? ` (${freezone})` : '') +
          ` · ${visaCount ?? 1} visas`,
      )
      fd.append(
        'message',
        `Business Type: ${businessType}\n` +
          `Jurisdiction: ${jurisdiction}\n` +
          (freezone ? `Freezone: ${freezone}\n` : '') +
          `Visa Count: ${visaCount ?? 1}\n` +
          `Estimated setup cost: ${AED(range.low)} – ${AED(range.high)}`,
      )

      const result = await submitContact(null, fd)

      setIsSubmitting(false)

      if (result.ok) {
        setDone(true)
        trackCalculatorComplete()
      } else {
        setSubmitError('Failed to send. Please WhatsApp us directly.')
      }
      return
    }
    setStep((s) => s + 1)
  }

  if (done) {
    return (
      <div className="nz-calc">
        <div className="nz-calc__top">
          <span className="nz-calc__title">Your estimate</span>
          <span className="nz-calc__step">DONE ✓</span>
        </div>
        <div className="nz-calc__result">
          <span className="nz-calc__result-label">Estimated setup cost</span>
          <span className="nz-calc__result-range">
            {AED(range.low)} – {AED(range.high)}
          </span>
        </div>
        <p className="nz-calc__result-note">
          Thanks {name.split(' ')[0] || 'there'} — your advisor will WhatsApp you
          within one business hour with a full line-item breakdown. Government fees
          are itemised separately, no hidden costs.
        </p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="nz-calc__next" style={{ textDecoration: 'none' }}>
          CHAT ON WHATSAPP NOW →
        </a>
        <button type="button" className="nz-calc__back" onClick={reset}>
          ← Start over
        </button>
      </div>
    )
  }

  return (
    <div className="nz-calc" id="calculator-card">
      <div className="nz-calc__top">
        <span className="nz-calc__title">Cost calculator</span>
        <span className="nz-calc__step">{step + 1} → 4 · {STEP_LABELS[step]}</span>
      </div>

      <div className="nz-calc__progress" aria-hidden="true">
        {STEP_LABELS.map((_, i) => (
          <span key={i} className={i <= step ? 'is-on' : ''} />
        ))}
      </div>

      {step === 0 && (
        <>
          <div className="nz-calc__q">What will your company do?</div>
          <div className="nz-calc__options">
            {BUSINESS_TYPES.map((opt) => {
              const sel = businessType === opt
              return (
                <button
                  key={opt}
                  type="button"
                  className={`nz-calc__opt${sel ? ' is-selected' : ''}`}
                  onClick={() => setBusinessType(opt)}
                >
                  {opt} <span className="nz-check">{sel ? '✓' : ''}</span>
                </button>
              )
            })}
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <div className="nz-calc__q">Where do you want to set up?</div>
          <div className="nz-calc__options">
            {JURISDICTIONS.map((opt) => {
              const sel = jurisdiction === opt
              return (
                <button
                  key={opt}
                  type="button"
                  className={`nz-calc__opt${sel ? ' is-selected' : ''}`}
                  onClick={() => {
                    setJurisdiction(opt)
                    if (opt !== 'Freezone') setFreezone('')
                  }}
                >
                  {opt} <span className="nz-check">{sel ? '✓' : ''}</span>
                </button>
              )
            })}
          </div>
          {jurisdiction === 'Freezone' && (
            <select
              className="nz-calc__field"
              value={freezone}
              onChange={(e) => setFreezone(e.target.value)}
              aria-label="Select a free zone"
            >
              <option value="">Select a free zone…</option>
              {FREEZONES.map((f) => (
                <option key={f.name} value={f.name}>
                  {f.name}
                </option>
              ))}
            </select>
          )}
        </>
      )}

      {step === 2 && (
        <>
          <div className="nz-calc__q">How many visas do you need?</div>
          <div className="nz-calc__options">
            {VISA_OPTIONS.map((opt) => {
              const sel = visaCount === opt.count
              return (
                <button
                  key={opt.label}
                  type="button"
                  className={`nz-calc__opt${sel ? ' is-selected' : ''}`}
                  onClick={() => setVisaCount(opt.count)}
                >
                  {opt.label} <span className="nz-check">{sel ? '✓' : ''}</span>
                </button>
              )
            })}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="nz-calc__q">Where should we send your quote?</div>
          <div className="nz-calc__options">
            <input
              className="nz-calc__field"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
            <input
              className="nz-calc__field"
              placeholder="Phone (WhatsApp)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              inputMode="tel"
              autoComplete="tel"
            />
            <input
              className="nz-calc__field"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="email"
            />
          </div>
        </>
      )}

      {submitError && (
        <p style={{ color: '#ef4444', fontSize: 13, marginBottom: 12, textAlign: 'center' }}>
          {submitError}
        </p>
      )}

      <button
        type="button"
        className="nz-calc__next"
        onClick={handleNext}
        disabled={!canAdvance || isSubmitting}
      >
        {step === 3 ? (isSubmitting ? 'SENDING…' : 'GET MY QUOTE →') : 'NEXT →'}
      </button>

      {step > 0 && (
        <button type="button" className="nz-calc__back" onClick={() => setStep((s) => s - 1)}>
          ← Back
        </button>
      )}
    </div>
  )
}
