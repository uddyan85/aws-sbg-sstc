import { Building2, Trophy, Sparkles } from 'lucide-react'
import Link from 'next/link'

const sponsorTiers = [
  {
    name: 'Platinum Sponsors',
    level: 'platinum',
    icon: Trophy,
    sponsors: [
      { name: 'AWS', logo: 'https://via.placeholder.com/120x60?text=AWS' },
      { name: 'Coming Soon', logo: 'https://via.placeholder.com/120x60?text=Coming+Soon' },
    ],
  },
  {
    name: 'Gold Sponsors',
    level: 'gold',
    icon: Sparkles,
    sponsors: [
      { name: 'Coming Soon', logo: 'https://via.placeholder.com/100x50?text=Coming+Soon' },
      { name: 'Coming Soon', logo: 'https://via.placeholder.com/100x50?text=Coming+Soon' },
    ],
  },
  {
    name: 'Silver Sponsors',
    level: 'silver',
    icon: Building2,
    sponsors: [
      { name: 'Coming Soon', logo: 'https://via.placeholder.com/80x40?text=Coming+Soon' },
      { name: 'Coming Soon', logo: 'https://via.placeholder.com/80x40?text=Coming+Soon' },
    ],
  },
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sponsors</h2>
          <p className="text-xl text-gray-600">Companies making this event possible</p>
        </div>

        {sponsorTiers.map((tier, tierIndex) => (
          <div key={tierIndex} className="mb-12 last:mb-0">
            <div className="flex items-center justify-center gap-2 mb-8">
              <tier.icon className="w-6 h-6 text-[#FF9900]" />
              <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {tier.sponsors.map((sponsor, sponsorIndex) => (
                <div
                  key={sponsorIndex}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 text-center bg-gradient-to-r from-[#FF9900]/10 to-[#232F3E]/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to become a sponsor?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Connect your brand with the next generation of cloud professionals in Bhilai.
            Reach 300+ passionate students and tech enthusiasts.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-[#FF9900] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#FF9900]/90 transition-all duration-200"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  )
}