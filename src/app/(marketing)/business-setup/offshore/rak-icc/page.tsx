import type { Metadata } from 'next'
import { OffshoreJurisdictionPage, type OffshoreFeature } from '@/components/marketing/offshore-jurisdiction-page'
import { getOffshoreJurisdiction } from '@/data/offshore-jurisdictions'

export function generateMetadata(): Metadata {
  const j = getOffshoreJurisdiction('rak-icc')
  return {
    title: { absolute: 'RAK ICC Offshore Company Formation UAE | NUBIZ' },
    description: j?.description,
  }
}

const S = { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7 } as const

const FEATURES: OffshoreFeature[] = [
  {
    title: 'Fastest Setup',
    desc: 'Certificate of incorporation in 2–7 business days, fully digital — the quickest offshore route in the UAE.',
    icon: (<svg {...S}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>),
  },
  {
    title: 'Fully Remote',
    desc: 'No visit to Ras Al Khaimah required. The entire incorporation is managed by your registered agent.',
    icon: (<svg {...S}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c3 3.3 3 16.7 0 20-3-3.3-3-16.7 0-20z" /></svg>),
  },
  {
    title: 'Single Director',
    desc: 'Only one director is required — simpler governance than JAFZA’s two-director minimum.',
    icon: (<svg {...S}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></svg>),
  },
  {
    title: 'Privacy Protected',
    desc: 'Shareholder and director details are not on a public register — UBO disclosure to authorities only.',
    icon: (<svg {...S}><path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z" /></svg>),
  },
  {
    title: 'Property & Shares',
    desc: 'Hold Dubai/RAK freehold property (with NOC) and shares in UAE mainland and freezone companies.',
    icon: (<svg {...S}><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg>),
  },
  {
    title: 'Re-domiciliation',
    desc: 'Migrate an existing BVI, Cayman, or similar company to RAK ICC without losing its corporate history.',
    icon: (<svg {...S}><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" /></svg>),
  },
]

const PROCESS = [
  'Registered agent appointment (mandatory — you cannot apply directly)',
  'Company name reservation',
  'Document preparation (passport, proof of address, source of funds, business purpose)',
  'Notarization / attestation where required (varies by country)',
  'Submission by registered agent to RAK ICC',
  'Certificate of Incorporation issued (2–7 days)',
  'Corporate documents package (MOA, share certificates, appointment letters)',
  'Bank account opening support',
]

export default function RakIccPage() {
  const jurisdiction = getOffshoreJurisdiction('rak-icc')!
  return <OffshoreJurisdictionPage jurisdiction={jurisdiction} features={FEATURES} process={PROCESS} />
}
