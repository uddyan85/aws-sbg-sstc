import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Speakers from "./components/sections/Speakers";
import Agenda from "./components/sections/Agenda";
import Tracks from "./components/sections/Tracks";
import Venue from "./components/sections/Venue";
import Sponsors from "./components/sections/Sponsors";
import Faq from "./components/sections/FAQ";
import ImageMarqueeStrip from "./components/sections/ImageMarqueeStrip";
import SplashManager from "./starter/SplashManager";

const images = [
  { src: "/AWS-logo.png", alt: "AWS" },
  { src: "/AWS_SBG.png", alt: "AWS" },
  { src: "/SSTC_.png", alt: "AWS" },
];

export default function Home() {
  return (
    <>
     <SplashManager> 
      <Hero />
      
      <ImageMarqueeStrip
        images={images}
        speed={100}
        direction="left"
        pauseOnHover
      />

      <About />
      <Tracks />
      <Speakers />
      <Agenda />
      <Venue />
      <Sponsors />
      {/* <Partners /> */}
      {/* <Team /> */}
      <Faq />
      {/* <Contact /> */}
      {/* <Register /> */}
       </SplashManager> 
    </>
  );
}
