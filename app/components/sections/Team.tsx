import { AtSign, GitBranch, Link2 } from 'lucide-react'

const teamMembers = [
  {
    name: 'Your Name',
    role: 'Community Lead',
    bio: 'AWS Community Builder passionate about cloud education',
    image: 'https://via.placeholder.com/150?text=Team',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Team Member 2',
    role: 'Technical Lead',
    bio: 'Solutions Architect helping others learn AWS',
    image: 'https://via.placeholder.com/150?text=Team',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Team Member 3',
    role: 'Events Lead',
    bio: 'Organizing tech events for student communities',
    image: 'https://via.placeholder.com/150?text=Team',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Team Member 4',
    role: 'Marketing Lead',
    bio: 'Building community connections and partnerships',
    image: 'https://via.placeholder.com/150?text=Team',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Team</h2>
          <p className="text-xl text-gray-600">The passionate team behind AWS Student Community Day Bhilai</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#FF9900] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-[#0077b5] transition-colors">
                    <Link2 className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
                    <AtSign className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <GitBranch className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}