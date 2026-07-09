// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'
import type { TeamMember } from '@/types'

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const overview = getMetafieldValue(caseStudy.metadata?.overview)
  const details = getMetafieldValue(caseStudy.metadata?.details)
  const image = caseStudy.metadata?.featured_image
  const relatedService = caseStudy.metadata?.related_service
  const team = caseStudy.metadata?.team

  return (
    <div>
      {image && (
        <div className="w-full aspect-[21/9] max-h-[460px] overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=1600&h=685&fit=crop&auto=format,compress`}
            alt={title}
            width={1600}
            height={685}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="container-page py-12 max-w-3xl">
        <Link
          href="/case-studies"
          className="text-brand-600 text-sm font-medium hover:underline"
        >
          ← Back to Case Studies
        </Link>

        {client && (
          <span className="inline-block mt-6 text-sm font-semibold uppercase tracking-wide text-brand-600">
            {client}
          </span>
        )}
        <h1 className="text-4xl font-extrabold text-gray-900 mt-2">{title}</h1>

        {overview && <p className="text-lg text-gray-600 mt-6">{overview}</p>}

        {details && (
          <div
            className="prose prose-lg max-w-none mt-8 prose-headings:text-gray-900 prose-a:text-brand-600"
            dangerouslySetInnerHTML={{ __html: details }}
          />
        )}

        {relatedService && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Related Service
            </h2>
            <Link
              href={`/services/${relatedService.slug}`}
              className="inline-flex items-center gap-2 text-brand-600 font-medium hover:underline"
            >
              {getMetafieldValue(relatedService.metadata?.service_name) ||
                relatedService.title}
              →
            </Link>
          </div>
        )}

        {team && team.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
              Team Involved
            </h2>
            <div className="flex flex-wrap gap-6">
              {team.map((member: TeamMember) => {
                const photo = member.metadata?.photo
                const name = getMetafieldValue(member.metadata?.name) || member.title
                return (
                  <Link
                    key={member.id}
                    href={`/team/${member.slug}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                      {photo ? (
                        <img
                          src={`${photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                          alt={name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-lg text-gray-400">
                          👤
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-brand-600">
                      {name}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}