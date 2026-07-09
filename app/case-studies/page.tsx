import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies — My Company',
  description: 'Explore real projects and the impact we deliver.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="container-page py-16">
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900">Case Studies</h1>
        <p className="mt-4 text-gray-600">
          A closer look at how we've helped our clients succeed.
        </p>
      </header>

      {caseStudies.length === 0 ? (
        <p className="text-center text-gray-500">No case studies available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>
      )}
    </div>
  )
}