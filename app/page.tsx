import Link from 'next/link'
import { getPages, getCategories } from '@/lib/cosmic'
import PageCard from '@/components/PageCard'
import CategoryBadge from '@/components/CategoryBadge'

export default async function HomePage() {
  const [pages, categories] = await Promise.all([getPages(), getCategories()])

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            RJ Chand's Project
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 max-w-2xl mb-8">
            A modern website experience powered by Cosmic CMS. Explore pages and categories curated for you.
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.slice(0, 5).map(cat => (
              <Link key={cat.id} href={`/categories/${cat.slug}`}>
                <CategoryBadge category={cat} variant="light" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pages */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Pages</h2>
            <p className="text-gray-600">Discover all our content</p>
          </div>
        </div>

        {pages.length === 0 ? (
          <p className="text-gray-500">No pages available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pages.map(page => (
              <PageCard key={page.id} page={page} />
            ))}
          </div>
        )}
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Browse by Category</h2>
            <p className="text-gray-600 mb-10">Explore content by topic</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(cat => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-brand-500 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {cat.metadata?.name || cat.title}
                  </h3>
                  {cat.metadata?.description && (
                    <p className="text-gray-600 text-sm">{cat.metadata.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}