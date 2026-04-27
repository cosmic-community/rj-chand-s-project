import { Category } from '@/types'

interface Props {
  category: Category
  variant?: 'default' | 'light'
}

export default function CategoryBadge({ category, variant = 'default' }: Props) {
  const name = category.metadata?.name || category.title
  const classes = variant === 'light'
    ? 'bg-white/20 text-white border-white/30 hover:bg-white/30'
    : 'bg-brand-50 text-brand-700 border-brand-200 hover:bg-brand-100'

  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${classes}`}>
      {name}
    </span>
  )
}