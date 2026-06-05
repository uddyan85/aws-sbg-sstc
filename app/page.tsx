import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Speakers from './components/sections/Speakers'
import Agenda from './components/sections/Agenda'
import Tracks from './components/sections/Tracks'
import Venue from './components/sections/Venue'
import Partners from './components/sections/Partners'
import Sponsors from './components/sections/Sponsors'
import Team from './components/sections/Team'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Register from './components/sections/Register'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tracks />
      <Speakers />
      <Agenda />
      <Venue />
      <Sponsors />
      <Partners />
      <Team />
      <FAQ />
      <Contact />
      <Register />
    </>
  )
}