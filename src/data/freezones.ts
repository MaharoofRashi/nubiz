export interface Freezone {
  name: string
  slug: string
  tagline: string
  location: string
  speciality: string
  bestFor: string[]
  notFor: string[]
  keyAdvantages: string[]
  description: string
  setupTime: string
  highlights: { label: string; value: string }[]
}

export const freezones: Freezone[] = [
  {
    name: 'IFZA',
    slug: 'ifza',
    tagline: 'Multiple activities. One Dubai license.',
    location: 'Dubai Silicon Oasis, Dubai',
    speciality: 'Multi-activity licenses & fully remote setup',
    bestFor: [
      'Freelancers and solo consultants entering the UAE',
      'Tech startups wanting a Dubai address at accessible cost',
      'Entrepreneurs with diversified, multi-activity business models',
      'Cost-conscious SMEs needing a solid Dubai presence',
      'E-commerce businesses and digital agencies',
      'Anyone forming their first, flexible UAE company',
    ],
    notFor: [
      'Companies needing port access for physical goods (choose JAFZA)',
      'Businesses needing commodities trading credibility (choose DMCC)',
      'Regulated financial services (choose ADGM or DIFC)',
      'Large-scale manufacturing (choose RAKEZ)',
    ],
    keyAdvantages: [
      'Up to 6 unrelated business activities under a single license',
      'Fully digital setup — no physical presence required to register',
      '1,500+ approved activities across services, trading and tech',
      'No minimum share capital requirement',
      'No guarantee deposit required for employment visas',
      'Co-branded credibility with Dubai Silicon Oasis',
      'Scalable packages — start with zero visas and add as you grow',
    ],
    description:
      'IFZA sits inside Dubai Silicon Oasis, giving companies a genuine Dubai address without the premium cost of central zones. Home to 15,000+ companies, its biggest edge is activity flexibility — up to six unrelated activities under one license, with a fully remote setup process.',
    setupTime: '3–5 days',
    highlights: [
      { value: '15,000+', label: 'Companies registered' },
      { value: '6', label: 'Activities per license' },
      { value: '100%', label: 'Remote setup' },
      { value: '3–5 days', label: 'License issued' },
    ],
  },
  {
    name: 'Meydan FZ',
    slug: 'meydan',
    tagline: 'A prestige Dubai address, issued in hours.',
    location: 'Meydan District, Dubai (12 min from Burj Khalifa)',
    speciality: 'Prestige Dubai address & fastest digital setup',
    bestFor: [
      'Digital-first businesses wanting a prestigious Dubai address',
      'Consultants and agencies working remotely or internationally',
      'E-commerce entrepreneurs and tech startups',
      'International founders setting up remotely from abroad',
      'Anyone needing several visas with a lean setup',
    ],
    notFor: [
      'Businesses needing large physical warehousing (RAKEZ or JAFZA)',
      'Commodities or gold traders (DMCC)',
      'Regulated financial services (ADGM or DIFC)',
      'Industrial manufacturers',
    ],
    keyAdvantages: [
      'Premium Dubai address at The Meydan Hotel, near Downtown & DIFC',
      'Fawri digital pathway can issue a license within hours',
      '2,500+ business activities — one of the widest lists in the UAE',
      'Up to 6 visas included in standard packages',
      'No paid-up share capital requirement',
      'No mandatory physical office — flexi-desk satisfies requirements',
      'QFZP qualified — eligible for 0% tax on qualifying income',
    ],
    description:
      "Meydan's address is its headline feature — registered at The Meydan Hotel complex, minutes from Downtown Dubai. Built digital-first, its Fawri pathway can issue a license in as little as 60 minutes, with 2,500+ activities available under one license.",
    setupTime: 'Same-day to a few days',
    highlights: [
      { value: '2,500+', label: 'Business activities' },
      { value: '6', label: 'Visas included' },
      { value: 'Downtown', label: 'Dubai address' },
      { value: 'Same-day', label: 'License possible' },
    ],
  },
  {
    name: 'DMCC',
    slug: 'dmcc',
    tagline: "The world's #1 freezone for commodities & crypto.",
    location: 'Jumeirah Lakes Towers (JLT), Dubai',
    speciality: 'Commodities, crypto & global trade credibility',
    bestFor: [
      'Commodity traders — gold, diamonds, precious metals, energy',
      'Fintech and cryptocurrency businesses',
      'Companies needing the strongest UAE brand for banking',
      'Businesses building global trading operations',
      'Professional services firms wanting a premium district',
    ],
    notFor: [
      "Solo founders or small startups where the cost isn't justified",
      "Companies that don't need port access or commodity networks",
      'Businesses primarily serving UAE mainland customers',
      'Budget-sensitive setups better served by IFZA or Meydan',
    ],
    keyAdvantages: [
      "World's #1 ranked freezone — nine consecutive FT awards",
      '26,000+ companies from 180 countries — the largest community',
      'Internationally recognized JLT business address',
      'Home to the Dubai Diamond Exchange and DMCC Crypto Centre',
      'One of the most established jurisdictions for virtual assets',
      'Strongest banking relationships with top UAE banks',
      'QFZP qualified — eligible for 0% tax on qualifying income',
    ],
    description:
      'DMCC has been named Global Free Zone of the Year by the FT for nine consecutive years and is the world\u2019s largest freezone by companies — over 26,000 from 180 countries. It leads globally in commodities and has evolved into a full-spectrum hub for fintech, crypto and trade.',
    setupTime: '5–10 days',
    highlights: [
      { value: '26,000+', label: 'Companies' },
      { value: '#1', label: 'Ranked 9 years' },
      { value: 'Crypto', label: 'Licenses available' },
      { value: 'JLT', label: 'Dubai address' },
    ],
  },
  {
    name: 'ADGM',
    slug: 'adgm',
    tagline: 'English Common Law in the UAE capital.',
    location: 'Al Maryah Island & Al Reem Island, Abu Dhabi',
    speciality: 'Financial services, fintech & SPV structures',
    bestFor: [
      'Financial services — banks, asset & wealth managers',
      'Fintech and crypto businesses wanting a global regulator',
      'Fund managers, private equity and venture capital',
      'Holding companies and SPVs for asset structuring',
      'AI and tech companies seeking a capital-city ecosystem',
    ],
    notFor: [
      "Simple trading or consulting where the overhead isn't justified",
      "Companies focused on Dubai's mainland market",
      'Budget-sensitive startups (costs are among the highest)',
      "Businesses that don't need financial regulatory oversight",
    ],
    keyAdvantages: [
      'English Common Law applied directly — unique in the region',
      'International financial centre credibility (peer to DIFC, Singapore)',
      'FSRA regulation recognized globally as robust and innovation-friendly',
      'RegLab sandbox to test financial products in a controlled setting',
      'SPV and Foundation structures for asset protection & funds',
      'Strategic proximity to Abu Dhabi sovereign wealth',
      'Dual license option to operate on the Abu Dhabi mainland',
    ],
    description:
      "ADGM is the UAE capital's international financial centre, and the only regional jurisdiction that applies English Common Law directly — with independent registration, FSRA regulation and its own courts. It offers global institutional credibility on par with DIFC, Singapore and London.",
    setupTime: '2–4 weeks',
    highlights: [
      { value: 'Common Law', label: 'English legal system' },
      { value: 'Abu Dhabi', label: 'UAE capital' },
      { value: 'RegLab', label: 'FinTech sandbox' },
      { value: 'FSRA', label: 'Regulated' },
    ],
  },
  {
    name: 'JAFZA',
    slug: 'jafza',
    tagline: 'Port access and global supply-chain power.',
    location: 'Jebel Ali, Dubai (adjacent to Jebel Ali Port)',
    speciality: 'Logistics, manufacturing & import/export',
    bestFor: [
      'Import/export businesses with significant physical goods volumes',
      'Logistics and distribution companies',
      'Manufacturers needing warehouse or industrial space',
      'Businesses moving cargo through Jebel Ali Port',
      'Multinationals establishing a Middle East distribution hub',
    ],
    notFor: [
      'Service, consulting and digital companies (IFZA or Meydan)',
      'Solo founders and startups without physical premises',
      "Companies where port access isn't central to the model",
      'Budget-sensitive setups',
    ],
    keyAdvantages: [
      "Direct access to the Middle East's largest container terminal",
      'DP World integration — 150+ ports and 80+ weekly services',
      'Sea-air freight via Al Maktoum Airport in under 4 hours',
      '9,500+ companies including Fortune 500 multinationals',
      'Specialized zones for automotive, F&B, electronics & petrochemicals',
      'World-class warehousing and large industrial plots',
      '0% corporate tax on qualifying income (Qualifying Free Zone)',
    ],
    description:
      "JAFZA is the UAE's first freezone, established in 1985, and the world's largest customs-bonded zone. As the flagship of DP World, it offers unmatched adjacency to Jebel Ali Port and a 57 sq km base for warehousing, manufacturing and logistics.",
    setupTime: '1–3 weeks',
    highlights: [
      { value: '9,500+', label: 'Companies' },
      { value: '36%', label: 'Of Dubai GDP' },
      { value: '150+', label: 'Global ports' },
      { value: '1985', label: 'Established' },
    ],
  },
  {
    name: 'ANC FZ',
    slug: 'anc-fz',
    tagline: "The UAE's most affordable entry point.",
    location: 'Ajman, UAE (approx. 25 minutes from Dubai)',
    speciality: 'Budget entry & fast, fully digital setup',
    bestFor: [
      'First-time UAE founders testing the market',
      'Solo professionals, freelancers and independent consultants',
      'Bootstrapped startups with limited capital',
      'Entrepreneurs working online or internationally',
      'Digital nomads and small trading or e-commerce businesses',
    ],
    notFor: [
      'Businesses needing top-tier Dubai bank relationships day one',
      'Companies requiring a specific Dubai address',
      'Regulated financial services',
      'Heavy manufacturing or port-dependent operations',
    ],
    keyAdvantages: [
      'Lowest entry cost of any UAE freezone we work with',
      'Fully remote setup — no visit to the UAE required',
      'License issued in as little as 15 minutes to 48 hours',
      'No minimum share capital and flexible shareholder structures',
      'Up to 10 activities per license — unusual for a budget zone',
      'UAE residency visa eligibility despite the low cost',
      'Installment payment plans available',
    ],
    description:
      'ANC FZ (Ajman NuVentures Centre) is currently the most affordable entry point into UAE business setup, with some of the lowest license costs in the country. Designed digital-first, it offers fast issuance, no minimum share capital and full foreign ownership — our top recommendation for budget-conscious founders.',
    setupTime: '15 minutes to 48 hours',
    highlights: [
      { value: 'Most', label: 'Affordable' },
      { value: '48hr', label: 'License issuance' },
      { value: '10', label: 'Activities' },
      { value: '100%', label: 'Digital setup' },
    ],
  },
  {
    name: 'RAKEZ',
    slug: 'rakez',
    tagline: 'Affordable setup with real physical infrastructure.',
    location: 'Ras Al Khaimah, UAE (approx. 45 min north of Dubai)',
    speciality: 'Industrial, warehousing & product businesses',
    bestFor: [
      'Product-based businesses needing warehousing or storage',
      'Light manufacturers and assemblers',
      'Trading companies that import and store inventory',
      'Businesses needing UAE credibility at lower cost than Dubai',
      'Industrial and education-sector companies',
    ],
    notFor: [
      'Businesses needing top-tier Dubai banking from day one',
      'Companies requiring a specific Dubai address',
      'Regulated financial services',
      'Businesses that never touch physical product',
    ],
    keyAdvantages: [
      'Infrastructure for every stage — flexi-desks to industrial plots',
      'The rare startup-accessible zone that supports real manufacturing',
      '40–60% lower operating costs than Dubai',
      '18,000+ companies across 100+ countries and 50+ sectors',
      'License issued within 3–5 working days',
      'UAE residency — live anywhere in the UAE including Dubai',
      '100% foreign ownership with no local sponsor',
    ],
    description:
      'RAKEZ spans 33 million sqm and is home to 18,000+ businesses. Its edge over budget-only zones is physical infrastructure — flexi-desks for solo founders through to 50,000 sqm manufacturing facilities — at operating costs 40–60% below Dubai.',
    setupTime: '3–5 days',
    highlights: [
      { value: '18,000+', label: 'Companies' },
      { value: '33M', label: 'sqm zone' },
      { value: 'Warehouses', label: 'Available on-site' },
      { value: 'Industrial', label: 'Plots available' },
    ],
  },
  {
    name: 'SPC FZ',
    slug: 'spc-fz',
    tagline: 'Freezone plus mainland access, issued in 24 hours.',
    location: 'Sharjah (near Sharjah International Airport)',
    speciality: 'Media, publishing & dual licensing',
    bestFor: [
      'Publishing houses, media companies and content creators',
      'Entrepreneurs wanting dual freezone + mainland capability',
      'Service businesses needing mainland access affordably',
      'E-commerce and creative businesses',
      'Budget-conscious founders wanting mainland reach',
    ],
    notFor: [
      'Companies that need a Dubai address specifically',
      'Businesses with complex financial-services requirements',
      'Companies needing port access for heavy goods',
      'Regulated financial services',
    ],
    keyAdvantages: [
      'Dual license — freezone AND Sharjah mainland under one structure',
      '24-hour license issuance — one of the fastest in the UAE',
      '1,500+ activities across publishing, media, trading and IT',
      'Combine up to 5 activities from different sectors',
      'No minimum share capital and 100% foreign ownership',
      'Modern co-working, retail, storage and office facilities',
      'Minutes from Dubai via Sheikh Mohammed Bin Zayed Road',
    ],
    description:
      "SPC FZ is the world's first freezone dedicated to publishing, now a broad hub of 1,500+ activities. Its standout features are speed — a trade license in as little as 24 hours — and a rare dual-license option that lets your company operate on the UAE mainland too.",
    setupTime: '24 hours',
    highlights: [
      { value: 'Dual', label: 'License option' },
      { value: '24hr', label: 'License issuance' },
      { value: '1,500+', label: 'Business activities' },
      { value: 'Mainland', label: 'Access included' },
    ],
  },
]

export function getFreezone(slug: string): Freezone | undefined {
  return freezones.find((f) => f.slug === slug)
}
