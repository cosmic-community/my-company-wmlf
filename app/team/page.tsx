import { getTeamMembers } from '@/lib/cosmic'
import TeamCard from '@/components/TeamCard'

export const metadata = {
  title: 'Team — My Company',
  description: 'Meet the talented team behind My Company.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="container-page py-16">
      <header className="mb-14 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Team</h1>
        <p className="mt-4 text-gray-600">
          Meet the passionate professionals dedicated to your success.
        </p>
      </header>

      {team.length === 0 ? (
        <p className="text-center text-gray-500">No team members available yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  )
}