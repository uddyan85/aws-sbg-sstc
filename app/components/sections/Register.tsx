'use client'

import { useState } from 'react'
import { User, Mail, Building, GraduationCap, ChevronRight } from 'lucide-react'

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: '',
    course: '',
    year: '',
    heardAbout: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({
      fullName: '',
      email: '',
      college: '',
      course: '',
      year: '',
      heardAbout: '',
    })
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-[#232F3E] to-[#1a2532]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Register Now</h2>
          <p className="text-xl text-gray-300">Secure your spot for AWS Student Community Day Bhilai 2026</p>
          <p className="text-[#FF9900] mt-2 font-semibold">Limited seats available!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-[#FF9900] px-6 py-4">
            <h3 className="text-xl font-bold text-white">Registration Form</h3>
          </div>
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                  College/University *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="college"
                    name="college"
                    required
                    value={formData.college}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                    placeholder="Your College Name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                  Course/Program *
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                    placeholder="B.Tech CSE"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                  Year of Study *
                </label>
                <select
                  id="year"
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>
              <div>
                <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  id="heardAbout"
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Social Media, Friend, College Notice, etc."
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#FF9900] to-[#FF9900]/80 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Registering...' : 'Register Now'}
              <ChevronRight className="w-4 h-4" />
            </button>
            {submitStatus === 'success' && (
              <div className="text-green-600 text-center text-sm bg-green-50 p-3 rounded-lg">
                ✓ Registration successful! Check your email for confirmation.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-600 text-center text-sm bg-red-50 p-3 rounded-lg">
                Registration failed. Please try again or contact us.
              </div>
            )}
            <p className="text-xs text-gray-500 text-center">
              By registering, you agree to receive event updates and confirm that you understand the event is free.
              We respect your privacy and will not share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}