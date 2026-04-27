import Link from 'next/link'
import { Page } from '@/types'
import CategoryBadge from './CategoryBadge'

export default function PageCard({ page }: { page: Page }) {
  const heroImage = page.metadata?.hero_image
  const category = page.metadata?.category
  const title = page.metadata?.title || page.title

  return (
    <Link href={`/pages/${page.slug}`} className="group block">
      <article className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-brand-300 transition-all duration-300 h-full flex flex-col">
        {heroImage ? (
          <div className="aspect-[16/10] overflow-hidden bg-gray-100">
            <img
              src={`${heroImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="aspect-[16/10] bg-gradient-to-br from-brand-500 to-brand-700" />
        )}
        <div className="p-6 flex-1 flex flex-col">
          {category && (
            <div className="mb-3">
              <CategoryBadge category={category} />
            </div>
          )}
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
            {title}
          </h3>
          <span className="text-sm text-brand-600 font-medium mt-auto">Read more →</span>
        </div>
      </article>
    </Link>
  )
}