// app/team/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTeamMember, getMetafieldValue } from '@/lib/cosmic'

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = await getTeamMember(slug)

  if (!member) {
    notFound()
  }

  const name = getMetafieldValue(member.metadata?.name) || member.title
  const jobTitle = getMetafieldValue(member.metadata?.job_title)
  const bio = getMetafieldValue(member.metadata?.bio)
  const email = getMetafieldValue(member.metadata?.email)
  const photo = member.metadata?.photo

  return (
    <div className="container-page py-16 max-w-4xl">
      <Link href="/team" className="text-brand-600 text-sm font-medium hover:underline">
        ← Back to Team
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
        <div className="md:col-span-1">
          <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-md">
            {photo ? (
              <img
                src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                alt={name}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                👤
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold text-gray-900">{name}</h1>
          {jobTitle && <p className="text-lg text-brand-600 font-medium mt-1">{jobTitle}</p>}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-block mt-3 text-sm text-gray-600 hover:text-brand-600"
            >
              ✉️ {email}
            </a>
          )}

          {bio && (
            <div
              className="prose prose-lg max-w-none mt-6 prose-a:text-brand-600"
              dangerouslySetInnerHTML={{ __html: bio }}
            />
          )}
        </div>
      </div>
    </div>
  )
}