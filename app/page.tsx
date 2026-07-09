import Link from 'next/link'
import {
  getServices,
  getTeamMembers,
  getCaseStudies,
  getTestimonials,
} from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import TeamCard from '@/components/TeamCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'

export default async function HomePage() {
  const [services, team, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  const featuredServices = services.slice(0, 3)
  const featuredTeam = team.slice(0, 4)
  const featuredCaseStudies = caseStudies.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white">
        <div className="container-page py-24 sm:py-32 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto">
            Professional services that drive real results
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-100 max-w-2xl mx-auto">
            We partner with ambitious businesses to deliver exceptional outcomes
            through expertise, dedication, and a passion for excellence.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      {featuredServices.length > 0 && (
        <section className="container-page py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
              <p className="mt-2 text-gray-600">What we can do for you.</p>
            </div>
            <Link href="/services" className="text-brand-600 font-medium hover:underline hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      )}

      {/* Team */}
      {featuredTeam.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Meet the Team</h2>
              <p className="mt-2 text-gray-600">The talented people behind our success.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {featuredTeam.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/team" className="text-brand-600 font-medium hover:underline">
                Meet the whole team →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="container-page py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Case Studies</h2>
              <p className="mt-2 text-gray-600">Real projects, real impact.</p>
            </div>
            <Link href="/case-studies" className="text-brand-600 font-medium hover:underline hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">
                What Our Clients Say
              </h2>
              <p className="mt-2 text-gray-600">Trusted by businesses everywhere.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}