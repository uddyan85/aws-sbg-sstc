'use client'

import { useState } from 'react'
import { AtSign, Link2, Mail, MapPin, Send } from 'lucide-react'
import { LiaLinkedinIn } from 'react-icons/lia'
import { RiInstagramLine } from 'react-icons/ri'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] =
    useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })

    setTimeout(() => setSubmitStatus(null), 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#050816] text-white"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[550px] w-[550px] rounded-full bg-[#A45AFA]/15 blur-[150px]" />

        <div className="absolute -right-32 bottom-0 h-[650px] w-[650px] rounded-full bg-[#A45AFA]/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
          linear-gradient(rgba(164,90,250,.35) 1px, transparent 1px),
          linear-gradient(90deg, rgba(164,90,250,.35) 1px, transparent 1px)
        `,
            backgroundSize: "70px 70px",
          }}
        />

        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#A45AFA]/40 animate-pulse"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
            Contact Us
          </span>

          <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
             Get in touch
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              with our team
            </span>
          </h2>
        </div>

        <div className="grid mt-8 md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold mb-6">
                Get in Touch
              </h3>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#A45AFA]" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:bhilai@awsstudentcommunity.day"
                      className="text-white/70 hover:text-white"
                    >
                      aws.sbg.sstc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#A45AFA]" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-white/70">
                  <p>Junwani Road, Bhilai, Chhattisgarh 490020</p>
                  <p>India</p>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Connect With Us
              </h3>

              <div className="flex gap-4">
                <a className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <LiaLinkedinIn className="w-5 h-5 text-white" />
                </a>

                <a className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <RiInstagramLine className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 space-y-4">

            <h3 className="text-2xl font-bold mb-4">
              Send us a Message
            </h3>

            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#A45AFA]"
            />

            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#A45AFA]"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#A45AFA]"
            />

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#A45AFA] to-[#7C3AED] font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4" />
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-400 text-center text-sm">
                Message sent successfully!
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="text-red-400 text-center text-sm">
                Failed to send message.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}