// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategory, getPagesByCategory } from '@/lib/cosmic'
import PageCard from '@/components/PageCard'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) notFound()

  const pages = await getPagesByCategory(category.id)

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-6">
        <Link href="/" className="text-brand-600 hover:text-brand-700 text-sm font-medium">
          ← Back to Home
        </Link>
      </div>

      <div className="mb-12 pb-8 border-b border-gray-200">
        <p className="text-sm uppercase tracking-wider text-brand-600 font-semibold mb-2">Category</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {category.metadata?.name || category.title}
        </h1>
        {category.metadata?.description && (
          <p className="text-xl text-gray-600 max-w-2xl">{category.metadata.description}</p>
        )}
      </div>

      {pages.length === 0 ? (
        <p className="text-gray-500">No pages in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map(page => (
            <PageCard key={page.id} page={page} />
          ))}
        </div>
      )}
    </div>
  )
}