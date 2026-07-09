import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Testimonials — My Company',
  description: 'Read what our clients have to say about working with us.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="container-page py-16">
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900">Testimonials</h1>
        <p className="mt-4 text-gray-600">
          Don't just take our word for it — hear from the clients we've served.
        </p>
      </header>

      {testimonials.length === 0 ? (
        <p className="text-center text-gray-500">No testimonials available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      )}
    </div>
  )
}