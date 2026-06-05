'use client'

import { useState } from 'react'
import { Clock, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

const agendaData = [
  {
    time: '08:00 AM - 09:00 AM',
    title: 'Registration & Networking Breakfast',
    description: 'Check-in, coffee, and networking with fellow attendees',
    track: 'All',
    location: 'Registration Desk',
  },
  {
    time: '09:00 AM - 09:30 AM',
    title: 'Opening Keynote',
    description: 'Welcome address and introduction to AWS Student Community Day',
    track: 'All',
    location: 'Main Hall',
  },
  {
    time: '09:30 AM - 10:30 AM',
    title: 'AWS Fundamentals Workshop',
    description: 'Hands-on session covering core AWS services',
    track: 'Beginner',
    location: 'Room A',
  },
  {
    time: '10:30 AM - 11:30 AM',
    title: 'Building with AI/ML on AWS',
    description: 'Learn about Bedrock, SageMaker, and AI services',
    track: 'Intermediate',
    location: 'Room B',
  },
  {
    time: '11:30 AM - 12:30 PM',
    title: 'Career Development Panel',
    description: 'Industry experts share insights on cloud careers',
    track: 'Career',
    location: 'Room C',
  },
  {
    time: '12:30 PM - 01:30 PM',
    title: 'Lunch Break',
    description: 'Networking lunch with sponsors and speakers',
    track: 'All',
    location: 'Dining Area',
  },
  {
    time: '01:30 PM - 03:00 PM',
    title: 'Technical Deep Dives',
    description: 'Choose from multiple advanced sessions',
    track: 'All',
    location: 'Various Rooms',
  },
  {
    time: '03:00 PM - 04:00 PM',
    title: 'AWS Certification Info Session',
    description: 'Learn about AWS certification paths and preparation',
    track: 'Career',
    location: 'Room A',
  },
  {
    time: '04:00 PM - 05:00 PM',
    title: 'Closing Ceremony & Networking',
    description: 'Wrap-up, certificate distribution, and final networking',
    track: 'All',
    location: 'Main Hall',
  },
]

export default function Agenda() {
  const [selectedTrack, setSelectedTrack] = useState('All')
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const filteredAgenda = agendaData.filter(item => selectedTrack === 'All' || item.track === selectedTrack)

  const toggleExpand = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  const tracks = ['All', 'Beginner', 'Intermediate', 'Career']

  return (
    <section id="agenda" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agenda</h2>
          <p className="text-xl text-gray-600">A full day of learning and networking</p>
        </div>

        {/* Track filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tracks.map((track) => (
            <button
              key={track}
              onClick={() => setSelectedTrack(track)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                selectedTrack === track
                  ? 'bg-[#FF9900] text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {track}
            </button>
          ))}
        </div>

        {/* Agenda timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#FF9900] to-[#232F3E]"></div>

          {filteredAgenda.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-4 mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#FF9900] rounded-full border-4 border-white shadow-lg"></div>

              {/* Time and content container */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2 text-[#FF9900]">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">{item.time}</span>
                    </div>
                    <span className="bg-[#FF9900]/10 text-[#FF9900] px-3 py-1 rounded-full text-xs font-semibold">
                      {item.track}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-[#FF9900] text-sm font-semibold hover:underline flex items-center gap-1"
                  >
                    {expandedItems.includes(index) ? (
                      <>View Less <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>View Details <ChevronDown className="w-4 h-4" /></>
                    )}
                  </button>
                  {expandedItems.includes(index) && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-sm">
                        Additional details about this session, including prerequisites, learning objectives,
                        and speaker information will be shared closer to the event date.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}