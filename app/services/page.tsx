import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Services — My Company',
  description: 'Explore the professional services we offer.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container-page py-16">
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Services</h1>
        <p className="mt-4 text-gray-600">
          A full range of professional services designed to help your business
          thrive.
        </p>
      </header>

      {services.length === 0 ? (
        <p className="text-center text-gray-500">No services available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}