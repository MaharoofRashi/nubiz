import type { Metadata } from 'next'
import { OffshoreJurisdictionPage, type OffshoreFeature } from '@/components/marketing/offshore-jurisdiction-page'
import { getOffshoreJurisdiction } from '@/data/offshore-jurisdictions'

export function generateMetadata(): Metadata {
  const j = getOffshoreJurisdiction('jafza-offshore')
  return {
    title: { absolute: 'JAFZA Offshore Company Formation Dubai | NUBIZ' },
    description: j?.description,
  }
}

const S = { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7 } as const

const FEATURES: OffshoreFeature[] = [
  {
    title: 'Dubai Address',
    desc: 'Registered inside the Jebel Ali Free Zone, Dubai — the UAE’s most globally recognized business jurisdiction.',
    icon: (<svg {...S}><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg>),
  },
  {
    title: '20+ Years of Banking',
    desc: 'Longstanding familiarity with Emirates NBD, HSBC UAE, Dubai Islamic Bank, and Standard Chartered.',
    icon: (<svg {...S}><path d="M3 10 12 4l9 6M4 10v9h16v-9M9 19v-5h6v5" /></svg>),
  },
  {
    title: 'Dubai Property',
    desc: 'Hold freehold property in approved Dubai developments under specific DLD conditions — a defining advantage.',
    icon: (<svg {...S}><path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>),
  },
  {
    title: 'Institutional Recognition',
    desc: 'Widely recognised by European, Asian, and American financial institutions and investors.',
    icon: (<svg {...S}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c3 3.3 3 16.7 0 20-3-3.3-3-16.7 0-20z" /></svg>),
  },
  {
    title: 'Two-Director Governance',
    desc: 'A minimum of two directors provides governance flexibility for complex or institutional structures.',
    icon: (<svg {...S}><circle cx="9" cy="8" r="3.2" /><circle cx="17" cy="9" r="2.6" /><path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5M15 20c0-2.2 1.3-3.6 3.5-3.6S22 17.8 22 20" /></svg>),
  },
  {
    title: '40 Years of Precedent',
    desc: 'Operates under JAFZA’s comprehensive regulatory framework with four decades of legal precedent.',
    icon: (<svg {...S}><path d="M12 3v18M6 7h12M5 7l-2 6a3 3 0 0 0 6 0zM19 7l-2 6a3 3 0 0 0 6 0z" /></svg>),
  },
]

const PROCESS = [
  'Registered agent appointment',
  'Company name reservation',
  'Document preparation (passport, proof of address, source of funds, business plan)',
  'Physical signing in Dubai OR notarised Power of Attorney',
  'Submission to the JAFZA Authority',
  'JAFZA review and approval',
  'Certificate of Incorporation issued (7–10 days)',
  'Corporate documents package',
  'Bank account opening support',
]

export default function JafzaOffshorePage() {
  const jurisdiction = getOffshoreJurisdiction('jafza-offshore')!
  return <OffshoreJurisdictionPage jurisdiction={jurisdiction} features={FEATURES} process={PROCESS} />
}
