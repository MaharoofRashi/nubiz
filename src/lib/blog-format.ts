const CATEGORY_LABELS: Record<string, string> = {
  'free-zones': 'Free Zones',
  'business-setup': 'Business Setup',
  tax: 'Tax',
  banking: 'Banking',
}

export function categoryLabel(category: string): string {
  return (
    CATEGORY_LABELS[category] ??
    category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  )
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
