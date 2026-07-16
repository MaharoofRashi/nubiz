'use client'

import { trackWhatsAppClick, trackPhoneClick } from '@/lib/gtm'

export function WhatsAppCardLink({
  href,
  className,
  style,
  children,
}: {
  href: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={() => trackWhatsAppClick()}
    >
      {children}
    </a>
  )
}

export function PhoneCardLink({
  href,
  className,
  style,
  children,
}: {
  href: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  return (
    <a href={href} className={className} style={style} onClick={() => trackPhoneClick()}>
      {children}
    </a>
  )
}
