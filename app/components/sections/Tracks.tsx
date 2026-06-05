const tracks = [
  {
    level: 'Beginner',
    title: 'AWS Foundations',
    description: 'Explore core AWS services like EC2, S3, IAM, and basic cloud best practices.',
    topics: [
      'AWS console fundamentals',
      'Launch EC2 instances',
      'Store data with S3',
      'Secure resources with IAM',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    level: 'Intermediate',
    title: 'Cloud & AI Workshops',
    description: 'Hands-on sessions for serverless stacks, AI/ML with Bedrock, and modern infrastructure patterns.',
    topics: [
      'Serverless application design',
      'AI/ML with Amazon Bedrock',
      'Infrastructure as code',
      'Monitoring and observability',
    ],
    color: 'from-sky-500 to-cyan-500',
  },
  {
    level: 'Career',
    title: 'Career Growth',
    description: 'Build professional skills, prepare for AWS certifications, and connect with recruiters.',
    topics: [
      'Resume and portfolio tips',
      'LinkedIn and GitHub best practices',
      'Interview prep for cloud roles',
      'Certification pathways',
    ],
    color: 'from-violet-500 to-pink-500',
  },
]

export default function Tracks() {
  return (
    <section id="tracks" className="py-20 bg-[#020713]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="feature-pill mb-4 inline-block">Tracks</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Choose your learning path</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Tracks are designed for every experience level, from beginners to career-ready cloud builders.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tracks.map((track, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <div className={`bg-gradient-to-r ${track.color} p-6`}>
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                  {track.level}
                </span>
                <h3 className="mt-6 text-2xl font-bold text-white">{track.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">{track.description}</p>
                <ul className="space-y-3">
                  {track.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="mt-1 text-[#FF9900]">▹</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
