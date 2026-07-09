import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const client = getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title
  const role = getMetafieldValue(testimonial.metadata?.role)
  const company = getMetafieldValue(testimonial.metadata?.company)
  const photo = testimonial.metadata?.photo

  return (
    <figure className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col h-full">
      <div className="text-brand-500 text-4xl leading-none mb-4">“</div>
      <blockquote className="text-gray-700 text-base leading-relaxed flex-grow">
        {quote}
      </blockquote>
      <figcaption className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=112&h=112&fit=crop&auto=format,compress`}
            alt={client}
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-xl text-gray-400">
            💬
          </div>
        )}
        <div>
          <div className="font-bold text-gray-900">{client}</div>
          {(role || company) && (
            <div className="text-sm text-gray-500">
              {role}
              {role && company && ' · '}
              {company}
            </div>
          )}
        </div>
      </figcaption>
    </figure>
  )
}