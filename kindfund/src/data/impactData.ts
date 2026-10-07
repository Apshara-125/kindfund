// Illustrative demo estimates only. NOT actual fund allocation.
export type ImpactKey = 'learning' | 'nutrition' | 'healthcare' | 'supplies' | 'community'
export interface ImpactItem { key: ImpactKey; label: string; amount: number }

export const impactData: Record<number, ImpactItem[]> = {
  500: [
    { key: 'learning', label: 'Learning materials', amount: 200 },
    { key: 'nutrition', label: 'Nutrition support', amount: 150 },
    { key: 'supplies', label: 'Essential supplies', amount: 100 },
    { key: 'community', label: 'Community programs', amount: 50 },
  ],
  1000: [
    { key: 'learning', label: 'Learning materials', amount: 400 },
    { key: 'nutrition', label: 'Nutrition support', amount: 300 },
    { key: 'healthcare', label: 'Healthcare support', amount: 200 },
    { key: 'supplies', label: 'Essential supplies', amount: 100 },
  ],
  2500: [
    { key: 'learning', label: 'Learning materials', amount: 1000 },
    { key: 'nutrition', label: 'Nutrition support', amount: 750 },
    { key: 'healthcare', label: 'Healthcare support', amount: 500 },
    { key: 'supplies', label: 'Essential supplies', amount: 250 },
  ],
  5000: [
    { key: 'learning', label: 'Learning materials', amount: 2000 },
    { key: 'nutrition', label: 'Nutrition support', amount: 1500 },
    { key: 'healthcare', label: 'Healthcare support', amount: 1000 },
    { key: 'community', label: 'Community programs', amount: 500 },
  ],
}

// Custom amounts reuse the ₹1,000 split (40/30/20/10) proportionally.
const customSplit = impactData[1000].map(i => ({ ...i, share: i.amount / 1000 }))
export function getImpactItems(amount: number): ImpactItem[] {
  if (impactData[amount]) return impactData[amount]
  if (!(amount > 0)) return []
  const items = customSplit.map(i => ({ key: i.key, label: i.label, amount: Math.round(amount * i.share) }))
  const diff = amount - items.reduce((s, i) => s + i.amount, 0) // keep the total exact
  items[items.length - 1].amount += diff
  return items.filter(i => i.amount > 0)
}
