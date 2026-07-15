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
import BadgeGenerator from "./components/sections/BadgeGenerator";
import VenueNew from "./components/layout/VenueNew";
import Register from "./components/sections/Register";

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
        {/* <VenueNew /> */}
        <Tracks />
        <Speakers />
        <Agenda />
        <Register />
        <Venue />
        <Sponsors />
        {/* <BadgeGenerator /> */}
        <Faq />
      </SplashManager>
    </>
  );
}
