import Link from 'next/link'
import type { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const overview = getMetafieldValue(caseStudy.metadata?.overview)
  const image = caseStudy.metadata?.featured_image

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
    >
      {image && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        {client && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-brand-600 mb-2">
            {client}
          </span>
        )}
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
          {title}
        </h3>
        {overview && <p className="text-sm text-gray-600 line-clamp-3">{overview}</p>}
      </div>
    </Link>
  )
}