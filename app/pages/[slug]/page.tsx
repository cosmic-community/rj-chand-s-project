// app/pages/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPage } from '@/lib/cosmic'
import CategoryBadge from '@/components/CategoryBadge'

export default async function PageDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPage(slug)

  if (!page) notFound()

  const heroImage = page.metadata?.hero_image
  const category = page.metadata?.category
  const body = page.metadata?.body || ''

  return (
    <article>
      {heroImage && (
        <div className="w-full h-64 md:h-96 lg:h-[500px] relative overflow-hidden">
          <img
            src={`${heroImage.imgix_url}?w=2400&h=1000&fit=crop&auto=format,compress`}
            alt={page.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-6">
          <Link href="/" className="text-brand-600 hover:text-brand-700 text-sm font-medium">
            ← Back to Home
          </Link>
        </div>

        {category && (
          <div className="mb-4">
            <Link href={`/categories/${category.slug}`}>
              <CategoryBadge category={category} />
            </Link>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight">
          {page.metadata?.title || page.title}
        </h1>

        {body && (
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand-600"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        )}
      </div>
    </article>
  )
}