export interface OffshoreJurisdiction {
  name: string
  slug: string
  tagline: string
  location: string
  setupTime: string
  directors: string
  physicalVisit: string
  bankingEase: string
  prestige: string
  bestFor: string[]
  notFor: string[]
  highlights: { label: string; value: string }[]
  description: string
  useCases: string[]
  cannotDo: string[]
}

export const offshoreJurisdictions: OffshoreJurisdiction[] = [
  {
    name: 'RAK ICC',
    slug: 'rak-icc',
    tagline: "The World's Most Versatile Offshore Registry",
    location: 'Ras Al Khaimah, UAE',
    setupTime: '2–7 days',
    directors: '1 minimum',
    physicalVisit: 'Not required',
    bankingEase: 'Good',
    prestige: 'Strong',
    bestFor: [
      'Individual investors, entrepreneurs, and SMEs wanting the most cost-effective UAE offshore structure',
      'Founders needing a holding company above their UAE freezone entity',
      'Businesses managing international IP, trading, or investments',
      'Anyone wanting to hold Dubai or RAK real estate under a corporate structure',
      'Family offices structuring wealth across generations',
      'Companies re-domiciling from BVI, Cayman, or similar jurisdictions to the UAE',
    ],
    notFor: [
      'Institutional credibility is paramount (European banks, large investors) — choose JAFZA',
      'You specifically need a "Dubai" registered address for contractual reasons',
      "You are structuring significant real estate where JAFZA's DLD relationship helps",
      'Your counterparties are conservative banks that favour 40-year established jurisdictions',
    ],
    highlights: [
      { value: '2–7 days', label: 'Setup time' },
      { value: '1', label: 'Director minimum' },
      { value: 'Remote', label: 'Physical visit not required' },
      { value: 'Good', label: 'Banking ease' },
    ],
    description:
      'RAK International Corporate Centre is a government-owned offshore registry in Ras Al Khaimah. With 40,000+ incorporations from 160+ nationalities, it operates at a scale comparable to the BVI or Cayman — but with UAE jurisdiction, UAE banking access, and growing Dubai Land Department recognition for property ownership. It is the most popular UAE offshore jurisdiction by volume, with the fastest setup and the most cost-effective structure.',
    useCases: [
      'International holding companies owning shares in other entities',
      'Asset protection vehicles separating personal assets from business risk',
      'Intellectual property holding — trademarks, patents, software',
      'Family wealth structures and succession planning',
      'International trading invoicing between parties outside the UAE',
      'Investment holding — shares, securities, real estate',
      'Special Purpose Vehicles (SPVs) for project finance or joint ventures',
      'Foundation planning alongside ADGM or DIFC structures',
    ],
    cannotDo: [
      'Trade directly within the UAE domestic market',
      'Sponsor UAE residency or employment visas for shareholders/directors',
      'Hire employees in the UAE',
      'Lease commercial office space for operations',
      'Bid for UAE government contracts',
    ],
  },
  {
    name: 'JAFZA Offshore',
    slug: 'jafza-offshore',
    tagline: "Dubai's Most Prestigious Offshore Jurisdiction",
    location: 'Dubai (Jebel Ali)',
    setupTime: '7–10 days',
    directors: '2 minimum',
    physicalVisit: 'Required or POA',
    bankingEase: 'Excellent',
    prestige: 'Premium',
    bestFor: [
      'High-net-worth individuals and family offices with significant assets',
      'Investors requiring the strongest UAE banking relationships',
      'Companies specifically holding Dubai freehold real estate',
      'Corporate groups where counterparties recognise and prefer JAFZA',
      'Structures where the "Dubai" jurisdiction name adds commercial value',
      'Investors dealing with European or institutional partners who prefer established jurisdictions',
    ],
    notFor: [
      'You want the fastest setup and lowest cost — choose RAK ICC',
      "You don't need to hold Dubai property specifically",
      'Your banking needs are standard (Mashreq, RAKBANK, mid-tier banks work fine)',
      'You want fully remote incorporation with no travel or POA',
    ],
    highlights: [
      { value: '7–10 days', label: 'Setup time' },
      { value: '2', label: 'Directors minimum' },
      { value: 'Required / POA', label: 'Physical signing' },
      { value: 'Excellent', label: 'Banking ease' },
    ],
    description:
      "JAFZA Offshore operates under the Jebel Ali Free Zone Authority — established in 1985 and contributing 36% of Dubai's GDP. Its offshore vehicle has existed since 2003, giving it 20+ years of established banking relationships, institutional recognition, and a track record most offshore jurisdictions cannot match. It is the premium choice for investors and corporate groups needing a Dubai address, the strongest banking, and maximum institutional credibility.",
    useCases: [
      'Premium holding structures for institutional or large-scale investors',
      'Dubai real estate holding — the defining use case',
      'International corporate groups establishing a UAE presence',
      'Businesses dealing with European or US institutional investors who recognise JAFZA',
      'Companies where the "Dubai" address and JAFZA brand adds commercial value',
      'Multi-asset structures combining UAE property, UAE company shares, and investments',
    ],
    cannotDo: [
      'Trade directly within the UAE domestic market',
      'Sponsor UAE residency or employment visas',
      'Hire employees in the UAE',
      'Lease commercial office space for operations',
    ],
  },
]

export function getOffshoreJurisdiction(slug: string): OffshoreJurisdiction | undefined {
  return offshoreJurisdictions.find((j) => j.slug === slug)
}
