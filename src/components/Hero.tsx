import { Carousel } from "react-responsive-carousel"
import LandingHeroContent from "./LandingHeroContent"

import splashVideo1 from '/splash.mp4'
import splashVideo2 from '/splash2.mp4'
import splashVideo3 from '/splash3.mp4'

function Hero() {
  return (
    <Carousel autoPlay infiniteLoop transitionTime={500} interval={7000} showStatus={false} showThumbs={false} >
        <div className={`w-screen h-full`}>
          <div className="h-full">
            <div className="h-full overflow-hidden">
              <video autoPlay muted loop className="h-full w-full object-cover">
                <source src={splashVideo1} type="video/mp4" />
              </video>
              <LandingHeroContent />
            </div>
          </div>
        </div>
        <div className={`w-screen h-full`}>
          <div className="h-full">
            <div className="h-full overflow-hidden">
              <video autoPlay muted loop className="h-full w-full object-cover">
                <source src={splashVideo2} type="video/mp4" />
              </video>
              <LandingHeroContent />
            </div>
          </div>
        </div>
        <div className={`w-screen h-full`}>
          <div className="h-full">
            <div className="h-full overflow-hidden">
              <video autoPlay muted loop className="h-full w-full object-cover">
                <source src={splashVideo3} type="video/mp4" />
              </video>
              <LandingHeroContent />
            </div>
          </div>
        </div>
    </Carousel>)
}

export default Hero
