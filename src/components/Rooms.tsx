
import b11 from '/rooms/b11.jpg'
import b12 from '/rooms/b12.jpg'
import b13 from '/rooms/b13.jpg'
import b14 from '/rooms/b14.jpg'

import b22 from '/rooms/b22.jpg'
import b23 from '/rooms/b23.jpg'
import b24 from '/rooms/b24.jpg'
import b25 from '/rooms/b25.jpg'
import b26 from '/rooms/b26.jpg'

function Rooms() {

  return (
    <>
      <div id="rooms" className="py-5" />
      <div className="grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-8 pb-10 lg:gap-8 lg:pr-0 lg:text-left text-left text-black">
        <div className="">
          <h2 className="text-4xl decorative">Rooms &amp; Suites</h2>
          <p className='py-10'>

            Enjoy luxury accommodations, secluded guest suites, and exclusive private lounge access at {import.meta.env.VITE_SITE_TITLE}. This Forbes Five-Star resort focuses on the guest experience and delivers true Moroccan hospitality experiences that creates guests for life.
          </p>
        </div>

        <div className='col-span-2'>
          <div className="grid grid-cols-1 gap-1 w-full">
            <div>
              <h4 className='text-2xl decorative'>City View Suite</h4>
              <p className='py-6'>
                Embrace the elements of the coast in the City View suite, where sophistication meets the city at every turn. With its secluded vibes and traditional Moroccan interior design, this one-bedroom suite is a perfect Medina escape. Unwind with a luxurious private jacuzzi while gazing out at the city lights or gather with cherished company in the expansive living area. Every aspect of The City View Suite promises an unforgettable stay.
              </p>
              <div className="flex overflow-x-auto h-52 gap-x-4">
                  <img src={b12} className="h-full lg:rounded-lg"/>
                  <img src={b11} className="h-full lg:rounded-lg"/>
                  <img src={b13} className="h-full lg:rounded-lg"/>
                  <img src={b14} className="h-full lg:rounded-lg"/>
              </div>
            </div>
          </div>

          <div className="py-10 grid grid-cols-1 gap-1 w-full">
            <div>
              <h4 className='text-2xl decorative'>Executive suite</h4>
              <p className='py-6'>
                Luxury intertwines with Marrakech's grandeur in the Luxury Executive Suite, offering panoramic views of the Bahia Palace. This penthouse-level suite is designed for intimate stays, providing ample space to immerse oneself in the Moroccan atmosphere. Roast s'mores by your private fire pit or relax by the tranquil tea room in the bedroom. At sunset, witness the captivating spectacle of the sun sinking beyond the city line.
              </p>
              <div className="flex overflow-x-auto h-52 gap-x-4">
                  <img src={b22} className="h-full lg:rounded-lg"/>
                  <img src={b24} className="h-full lg:rounded-lg"/>
                  <img src={b23} className="h-full lg:rounded-lg"/>
                  <img src={b25} className="h-full lg:rounded-lg"/>
                  <img src={b26} className="h-full lg:rounded-lg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rooms
