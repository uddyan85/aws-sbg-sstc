import { Code, Users, Award } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Learn by Doing',
    description: 'Hands-on workshops and labs with real AWS services. From basic concepts to advanced architectures.',
  },
  {
    icon: Users,
    title: 'Connect & Network',
    description: 'Meet students, professionals, and AWS experts. Build relationships that boost your cloud career.',
  },
  {
    icon: Award,
    title: 'Earn Recognition',
    description: 'Participation certificates, AWS certification info, and professional growth opportunities.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="feature-pill mb-4 inline-block">What is it?</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Student Community Day explained</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Student Community Days are free, one-day events led by students and supported by AWS. Learn cloud technologies, network with leaders, and grow your skills in a collaborative environment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 text-center">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#FF9900]/10 text-[#FF9900]">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="section-card p-6 text-center">
            <div className="text-4xl font-bold text-[#FF9900]">4+</div>
            <p className="mt-2 text-sm text-gray-400">Tracks</p>
          </div>
          <div className="section-card p-6 text-center">
            <div className="text-4xl font-bold text-[#FF9900]">15+</div>
            <p className="mt-2 text-sm text-gray-400">Speakers</p>
          </div>
          <div className="section-card p-6 text-center">
            <div className="text-4xl font-bold text-[#FF9900]">300+</div>
            <p className="mt-2 text-sm text-gray-400">Attendees</p>
          </div>
          <div className="section-card p-6 text-center">
            <div className="text-4xl font-bold text-[#FF9900]">Free</div>
            <p className="mt-2 text-sm text-gray-400">Registration</p>
          </div>
        </div>
      </div>
    </section>
  )
}
