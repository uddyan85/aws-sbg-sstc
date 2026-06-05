import { Cloud, Heart, MapPin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 xl:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-3xl bg-[#FF9900]/15 p-3 text-[#FF9900]">
                <Cloud className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-white">AWS Bhilai</span>
            </div>
            <p className="text-sm leading-7 text-slate-400">
              Empowering students with cloud knowledge, hands-on learning, and community connections.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#about" className="hover:text-[#FF9900] transition-colors">About</Link></li>
              <li><Link href="#speakers" className="hover:text-[#FF9900] transition-colors">Speakers</Link></li>
              <li><Link href="#agenda" className="hover:text-[#FF9900] transition-colors">Agenda</Link></li>
              <li><Link href="#register" className="hover:text-[#FF9900] transition-colors">Register</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF9900]" />
                <a href="mailto:bhilai@awsstudentcommunity.day" className="hover:text-[#FF9900] transition-colors">
                  bhilai@awsstudentcommunity.day
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF9900]" />
                <span>Bhilai, Chhattisgarh, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay connected</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <Link href="#" className="hover:text-[#FF9900] transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-[#FF9900] transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-[#FF9900] transition-colors">Instagram</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center text-sm text-slate-400">
          <p>© 2026 AWS Student Community Day Bhilai. All rights reserved.</p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-2 text-slate-400">
            Made with <Heart className="w-4 h-4 text-red-500" /> by the AWS Student Community.
          </p>
        </div>
      </div>
    </footer>
  )
}
