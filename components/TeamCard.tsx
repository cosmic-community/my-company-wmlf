import Link from 'next/link'
import type { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const jobTitle = getMetafieldValue(member.metadata?.job_title)
  const photo = member.metadata?.photo

  return (
    <Link
      href={`/team/${member.slug}`}
      className="group block text-center"
    >
      <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 ring-4 ring-white shadow-md">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=320&h=320&fit=crop&auto=format,compress`}
            alt={name}
            width={160}
            height={160}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
            👤
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
        {name}
      </h3>
      {jobTitle && <p className="text-sm text-brand-600 font-medium">{jobTitle}</p>}
    </Link>
  )
}