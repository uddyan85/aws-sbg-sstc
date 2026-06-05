const partners = [
  { name: 'AWS Educate', logo: 'https://via.placeholder.com/100x50?text=AWS+Educate' },
  { name: 'AWS User Group', logo: 'https://via.placeholder.com/100x50?text=AWS+User+Group' },
  { name: 'Student Clubs', logo: 'https://via.placeholder.com/100x50?text=Student+Clubs' },
  { name: 'Tech Community', logo: 'https://via.placeholder.com/100x50?text=Tech+Community' },
]

export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partners</h2>
          <p className="text-xl text-gray-600">Collaborating to make this event a success</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}