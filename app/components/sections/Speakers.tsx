'use client'

import { useState } from 'react'
import { AtSign, Link2, Mail } from 'lucide-react'

// This would come from an API or CMS in production
const speakers = [
  {
    name: 'Coming Soon',
    role: 'Speaker',
    company: 'AWS Community',
    bio: 'We\'re confirming amazing speakers from the industry. Stay tuned for updates!',
    image: 'https://via.placeholder.com/200?text=Speaker',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
]

export default function Speakers() {
  const [isComingSoon] = useState(true)

  if (isComingSoon) {
    return (
      <section id="speakers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Speakers</h2>
            <p className="text-xl text-gray-600">Learn from experts in cloud computing, AI, DevOps, and more</p>
          </div>

          <div className="bg-gradient-to-r from-[#FF9900]/10 to-[#232F3E]/10 rounded-2xl p-12 text-center">
            <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
              <svg className="w-12 h-12 text-[#FF9900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Speakers Lineup Coming Soon!</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're confirming the best industry experts from AWS, leading tech companies, and the community.
              Get ready for an incredible lineup of speakers sharing their knowledge and experiences.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Speakers</h2>
          <p className="text-xl text-gray-600">Learn from experts in cloud computing, AI, DevOps, and more</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img src={speaker.image} alt={speaker.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={speaker.social.linkedin} className="p-2 bg-white rounded-full hover:bg-[#0077b5] hover:text-white transition-colors">
                    <Link2 className="w-5 h-5" />
                  </a>
                  <a href={speaker.social.twitter} className="p-2 bg-white rounded-full hover:bg-[#1DA1F2] hover:text-white transition-colors">
                    <AtSign className="w-5 h-5" />
                  </a>
                  <a href={speaker.social.email} className="p-2 bg-white rounded-full hover:bg-gray-700 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-[#FF9900] font-semibold mb-2">{speaker.role}</p>
                <p className="text-gray-600 text-sm mb-3">{speaker.company}</p>
                <p className="text-gray-600 text-sm">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}