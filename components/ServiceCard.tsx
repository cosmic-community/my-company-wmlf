import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const summary = getMetafieldValue(service.metadata?.summary)
  const icon = getMetafieldValue(service.metadata?.icon)
  const image = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
    >
      {image && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-2">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
            {name}
          </h3>
        </div>
        {summary && <p className="text-sm text-gray-600 line-clamp-3">{summary}</p>}
      </div>
    </Link>
  )
}