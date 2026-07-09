// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService, getMetafieldValue } from '@/lib/cosmic'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const icon = getMetafieldValue(service.metadata?.icon)
  const summary = getMetafieldValue(service.metadata?.summary)
  const description = getMetafieldValue(service.metadata?.description)
  const image = service.metadata?.featured_image

  return (
    <div>
      {image && (
        <div className="w-full aspect-[21/9] max-h-[420px] overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=1600&h=685&fit=crop&auto=format,compress`}
            alt={name}
            width={1600}
            height={685}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="container-page py-12 max-w-3xl">
        <Link href="/services" className="text-brand-600 text-sm font-medium hover:underline">
          ← Back to Services
        </Link>

        <div className="flex items-center gap-3 mt-6 mb-4">
          {icon && <span className="text-4xl">{icon}</span>}
          <h1 className="text-4xl font-extrabold text-gray-900">{name}</h1>
        </div>

        {summary && <p className="text-lg text-gray-600 mb-8">{summary}</p>}

        {description && (
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand-600"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </div>
  )
}