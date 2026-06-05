import { MapPin, Navigation, Car, Train, Bus } from 'lucide-react'
import Link from 'next/link'

export default function Venue() {
  return (
    <section id="venue" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Venue</h2>
          <p className="text-xl text-gray-600">Bhilai&apos;s premier convention center</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-100 rounded-lg h-64 md:h-full min-h-[300px] relative overflow-hidden">
              {/* Google Maps iframe - Replace with actual Bhilai venue coordinates */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59364.87525941188!2d81.40511334212696!3d21.210534089032802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d1b9b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Civic Center Bhilai</h3>
              <div className="flex items-start gap-2 text-gray-600 mb-4">
                <MapPin className="w-5 h-5 text-[#FF9900] mt-0.5" />
                <div>
                  <p>Sector 1, Nehru Nagar</p>
                  <p>Bhilai, Chhattisgarh 490001</p>
                  <p>India</p>
                </div>
              </div>
              <Link
                href="https://maps.google.com/?q=Civic+Center+Bhilai"
                target="_blank"
                className="inline-flex items-center gap-2 text-[#FF9900] hover:text-[#FF9900]/80 font-semibold"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">How to get there</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FF9900]/10 rounded-full flex items-center justify-center">
                    <Train className="w-4 h-4 text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-semibold">Railway</p>
                    <p className="text-sm text-gray-600">Bhilai Power House & Bhilai Nagar stations nearby</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FF9900]/10 rounded-full flex items-center justify-center">
                    <Bus className="w-4 h-4 text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-semibold">Bus</p>
                    <p className="text-sm text-gray-600">City buses available from all major routes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FF9900]/10 rounded-full flex items-center justify-center">
                    <Car className="w-4 h-4 text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-semibold">Parking</p>
                    <p className="text-sm text-gray-600">Paid parking available at venue</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
              <p className="text-sm text-gray-600">
                The venue is wheelchair accessible with ramps, elevators, and accessible restrooms.
                Please contact us for any specific accessibility requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}