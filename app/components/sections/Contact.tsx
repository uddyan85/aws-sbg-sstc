'use client'

import { useState } from 'react'
import { AtSign, Link2, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF9900]/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:bhilai@awsstudentcommunity.day" className="text-gray-600 hover:text-[#FF9900]">
                      bhilai@awsstudentcommunity.day
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF9900]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Civic Center Bhilai, Sector 1, Nehru Nagar, Bhilai, Chhattisgarh 490001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-[#FF9900]/10 rounded-full flex items-center justify-center hover:bg-[#FF9900]/20 transition-colors">
                  <Link2 className="w-6 h-6 text-[#FF9900]" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#FF9900]/10 rounded-full flex items-center justify-center hover:bg-[#FF9900]/20 transition-colors">
                  <AtSign className="w-6 h-6 text-[#FF9900]" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF9900] text-white py-3 rounded-lg font-semibold hover:bg-[#FF9900]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
              {submitStatus === 'success' && (
                <div className="text-green-600 text-center text-sm">Message sent successfully!</div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center text-sm">Failed to send message. Please try again.</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}