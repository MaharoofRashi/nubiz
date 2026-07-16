export const GTM_ID = 'GTM-TGZ3TVJK'

export function pushToDataLayer(event: { event: string; [key: string]: unknown }) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(event)
  }
}

// Conversion events we'll use
export const trackFormSubmit = () =>
  pushToDataLayer({
    event: 'form_submit',
    form_name: 'contact_form',
  })

export const trackWhatsAppClick = () =>
  pushToDataLayer({
    event: 'whatsapp_click',
  })

export const trackCalculatorComplete = () =>
  pushToDataLayer({
    event: 'calculator_complete',
  })

export const trackPhoneClick = () =>
  pushToDataLayer({
    event: 'phone_click',
  })
