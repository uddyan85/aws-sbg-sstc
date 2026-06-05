'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Is the event really free?',
    answer: 'Yes, AWS Student Community Day Bhilai is completely free for all students and attendees. Registration is required to secure your spot.',
  },
  {
    question: 'Who can attend?',
    answer: 'The event is open to all students, professionals, and anyone interested in cloud computing and AWS technologies. No prior cloud experience is required!',
  },
  {
    question: 'Do I need to bring my laptop?',
    answer: 'While not mandatory, we highly recommend bringing your laptop to participate in hands-on workshops and labs.',
  },
  {
    question: 'Will there be certificates?',
    answer: 'Yes, all attendees will receive participation certificates. Additional certificates may be provided for completing specific workshops.',
  },
  {
    question: 'How can I become a speaker or volunteer?',
    answer: 'Please reach out to us via the contact section or email us at bhilai@awsstudentcommunity.day with your interest and qualifications.',
  },
  {
    question: 'Is the venue accessible?',
    answer: 'Yes, the venue is wheelchair accessible with ramps and elevators. Please contact us if you have specific accessibility needs.',
  },
  {
    question: 'What is the dress code?',
    answer: 'Business casual or smart casual is recommended. Feel free to wear your college or company merchandise!',
  },
  {
    question: 'Will food be provided?',
    answer: 'Yes, we will provide breakfast, lunch, and refreshments throughout the day for all registered attendees.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#FF9900]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#FF9900]" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}