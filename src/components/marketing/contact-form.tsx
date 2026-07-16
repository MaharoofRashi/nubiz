'use client'

import { useActionState, useEffect } from 'react'
import { submitContact, type ContactState } from '@/app/actions/contact'
import { trackFormSubmit } from '@/lib/gtm'

const initialState: ContactState = { ok: false, errors: null }

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState)

  useEffect(() => {
    if (state.ok) trackFormSubmit()
  }, [state.ok])

  if (state.ok) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'rgba(238,0,93,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#EE005D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0a0a0a', marginBottom: 8 }}>
          Message sent!
        </h3>
        <p style={{ fontSize: 16, color: '#6b7280', marginBottom: 28, lineHeight: 1.6 }}>
          We&apos;ll respond within 60 minutes during business hours. Or WhatsApp us for
          instant support.
        </p>
        <a
          href="https://wa.me/971564899004"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#25d366',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M11.5 2C6.262 2 2 6.262 2 11.5c0 1.887.518 3.65 1.416 5.163L2 22l5.463-1.397A9.447 9.447 0 0011.5 21c5.238 0 9.5-4.262 9.5-9.5S16.738 2 11.5 2zm0 17.4a7.876 7.876 0 01-4.017-1.1l-.288-.171-2.986.764.792-2.908-.188-.298A7.855 7.855 0 013.6 11.5c0-4.356 3.544-7.9 7.9-7.9s7.9 3.544 7.9 7.9-3.544 7.9-7.9 7.9z" />
          </svg>
          WhatsApp Us Now
        </a>
      </div>
    )
  }

  return (
    <form action={formAction}>
      {/* Form error */}
      {state.errors?.formErrors?.[0] && (
        <div
          style={{
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: 8,
            padding: '12px 16px',
            color: '#dc2626',
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          {state.errors.formErrors[0]}
        </div>
      )}

      {/* Name */}
      <div style={{ marginBottom: 16 }}>
        <label
          style={{
            display: 'block',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#6b7280',
            marginBottom: 6,
          }}
        >
          Full Name *
        </label>
        <input
          name="name"
          type="text"
          required
          placeholder="Your full name"
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: 10,
            border: '1px solid #e5e7eb',
            background: '#fff',
            fontSize: 15,
            color: '#0a0a0a',
            outline: 'none',
            boxSizing: 'border-box',
            fontFamily: 'inherit',
          }}
        />
        {state.errors?.fieldErrors?.name && (
          <p style={{ color: '#ef4444', fontSize: 13, marginTop: 4 }}>
            {state.errors.fieldErrors.name[0]}
          </p>
        )}
      </div>

      {/* Email + Phone row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
        <div>
          <label
            style={{
              display: 'block',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6b7280',
              marginBottom: 6,
            }}
          >
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 10,
              border: '1px solid #e5e7eb',
              background: '#fff',
              fontSize: 15,
              color: '#0a0a0a',
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
            }}
          />
          {state.errors?.fieldErrors?.email && (
            <p style={{ color: '#ef4444', fontSize: 13, marginTop: 4 }}>
              {state.errors.fieldErrors.email[0]}
            </p>
          )}
        </div>
        <div>
          <label
            style={{
              display: 'block',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6b7280',
              marginBottom: 6,
            }}
          >
            Phone *
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+971 56 489 9004"
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 10,
              border: '1px solid #e5e7eb',
              background: '#fff',
              fontSize: 15,
              color: '#0a0a0a',
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
            }}
          />
          {state.errors?.fieldErrors?.phone && (
            <p style={{ color: '#ef4444', fontSize: 13, marginTop: 4 }}>
              {state.errors.fieldErrors.phone[0]}
            </p>
          )}
        </div>
      </div>

      {/* Inquiry Type */}
      <div style={{ marginBottom: 16 }}>
        <label
          style={{
            display: 'block',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#6b7280',
            marginBottom: 6,
          }}
        >
          What do you need help with? *
        </label>
        <select
          name="inquiryType"
          required
          defaultValue=""
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: 10,
            border: '1px solid #e5e7eb',
            background: '#fff',
            fontSize: 15,
            color: '#0a0a0a',
            outline: 'none',
            boxSizing: 'border-box',
            fontFamily: 'inherit',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 14px center',
          }}
        >
          <option value="">Select an option...</option>
          <option>Freezone Company Setup</option>
          <option>Dubai Mainland Setup</option>
          <option>Offshore Company</option>
          <option>Employment Visa</option>
          <option>Golden Visa</option>
          <option>Family Visa</option>
          <option>Bank Account Opening</option>
          <option>PRO Services</option>
          <option>Accounting &amp; Tax</option>
          <option>General Inquiry</option>
        </select>
        {state.errors?.fieldErrors?.inquiryType && (
          <p style={{ color: '#ef4444', fontSize: 13, marginTop: 4 }}>
            {state.errors.fieldErrors.inquiryType[0]}
          </p>
        )}
      </div>

      {/* Message */}
      <div style={{ marginBottom: 24 }}>
        <label
          style={{
            display: 'block',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#6b7280',
            marginBottom: 6,
          }}
        >
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your business and what you need help with..."
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: 10,
            border: '1px solid #e5e7eb',
            background: '#fff',
            fontSize: 15,
            color: '#0a0a0a',
            outline: 'none',
            boxSizing: 'border-box',
            fontFamily: 'inherit',
            resize: 'vertical',
            minHeight: 120,
            lineHeight: 1.5,
          }}
        />
        {state.errors?.fieldErrors?.message && (
          <p style={{ color: '#ef4444', fontSize: 13, marginTop: 4 }}>
            {state.errors.fieldErrors.message[0]}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        style={{
          width: '100%',
          padding: '16px 24px',
          background: isPending ? '#d1d5db' : '#EE005D',
          color: '#fff',
          border: 'none',
          borderRadius: 10,
          fontSize: 16,
          fontWeight: 700,
          cursor: isPending ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease',
          fontFamily: 'inherit',
          letterSpacing: '-0.01em',
        }}
      >
        {isPending ? 'Sending...' : 'Send Message →'}
      </button>

      <p style={{ fontSize: 12, color: '#9ca3af', textAlign: 'center', marginTop: 12 }}>
        🔒 Your information is never shared or sold.
      </p>
    </form>
  )
}
