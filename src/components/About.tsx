import about1 from '/about1.jpg'
import about2 from '/about2.jpg'
import about3 from '/about3.jpg'
import g1 from '/gallery/g1.jpg'
import g3 from '/gallery/g3.jpg'
import g5 from '/gallery/g5.jpg'
import g6 from '/gallery/g6.jpg'
import g7 from '/gallery/g7.jpg'
import g8 from '/gallery/g8.jpg'
import g9 from '/gallery/g9.jpg'

function About() {
  const stats = [
    { id: 1, name: 'Bahia Palace', value: '2 minutes' },
    { id: 2, name: 'Marrakesh Menara Airport', value: '25 minutes' },
    { id: 3, name: 'Koutoubia', value: '8 minutes' },
  ]

  return (
    <>
      <div id="about" className="py-5" />
      <div className="grid grid-cols-1 lg:grid-cols-3 p-6 lg:px-8 pb-0 lg:gap-8 lg:pr-0 lg:text-left text-left pt-0 text-black">
        <div className="pt-2 pb-10">
          <h2 className="text-4xl decorative">Make your stay at Medina unforgettable</h2>
        </div>
        <div className="col-span-2 py-10 pr-0 lg:pr-8">
          <p>
            At {import.meta.env.VITE_SITE_TITLE}, we pride ourselves on offering an exceptional experience in the heart of historic Marrakesh. Nestled within the vibrant Medina, our riad combines traditional Moroccan charm with modern luxury to create a haven of tranquility. Guests are immersed in the rich cultural heritage of Marrakesh, with stunning architecture, handcrafted décor, and personalized hospitality that reflects the warmth of Moroccan tradition. From savoring authentic cuisine in our courtyard to relaxing in our serene rooftop oasis with breathtaking views of the Atlas Mountains, every moment at {import.meta.env.VITE_SITE_TITLE} is designed to inspire and delight. Let us elevate your journey with unforgettable memories and unparalleled comfort.
          </p>
          <div className="mx-auto max-w-7xl pt-20">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-5">
              {stats.map((stat) => (
                <div key={stat.id} className="flex max-w-xs flex-col gap-y-2">
                  <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>

      <div className="pl-8 py-10">
        <div className="flex overflow-x-auto h-80 gap-x-8">
            <img src={g1} className="h-full lg:rounded-lg"/>
            <img src={g8} className="h-full lg:rounded-lg"/>
            <img src={g7} className="h-full lg:rounded-lg"/>
            <img src={g6} className="h-full lg:rounded-lg"/>
            <img src={g3} className="h-full lg:rounded-lg"/>
            <img src={g5} className="h-full lg:rounded-lg"/>
            <img src={g9} className="h-full lg:rounded-lg"/>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 p-6 lg:px-8 py-4 lg:gap-8 lg:pr-0 lg:text-left text-left text-black">
        <div className="py-10">
        </div>
        <div className="col-span-2 py-10">
          <div className='py-4'>
            <h4 className='text-2xl decorative'>Unparalleled proximity to attractions</h4>
            <p className='py-6'>
              Located in the heart of historic Marrakesh, {import.meta.env.VITE_SITE_TITLE} is just a stone's throw from the city's most iconic attractions, including the bustling Jemaa el-Fnaa square, the enchanting Majorelle Garden, and the stunning Koutoubia Mosque. Immerse yourself in the vibrant culture and rich history of Marrakesh, all within easy reach of your luxurious retreat.
            </p>
          </div>
          <div className='py-4'>
            <h4 className='text-2xl decorative'>Authentic Moroccan experience</h4>
            <p className='py-6'>
              Immerse yourself with an elevated cultural experiences at {import.meta.env.VITE_SITE_TITLE}. {import.meta.env.VITE_SITE_TITLE} brings you the true spirit of Morocco to life with immersive cultural experiences, including authentic Moroccan cuisine prepared with locally grown ingredients, curated excursions to historic landmarks, and traditional events showcasing the rich heritage of Marrakesh. From savoring the flavors of a Moroccan feast to exploring the city's hidden gems, every moment is designed to connect you with the essence of this vibrant culture.
            </p>
          </div>
          <div className='py-4'>
            <h4 className='text-2xl decorative'>Experience exceptional Moroccan hospitality</h4>
            <p className='py-6'>
              {import.meta.env.VITE_SITE_TITLE} sets a new bar for exceptional Moroccan hospitality with 24/7 concierge services, a luxurious traditional Moroccan spa, and exceptional in-room dining. Guests can unwind in our tranquil Moroccan pool, enjoy rooftop tea service with stunning views of Koutoubia Mosque, and immerse themselves in the culture through enchanting daily music rituals.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 p-6 lg:px-8 pt-0 pb-0 lg:gap-8 lg:pr-0 lg:text-left text-left text-black">
        <div className="pb-10">
          <h2 className="text-4xl decorative">A rare gem in the heart of Marrakech</h2>
          <p className='py-10'>
            {import.meta.env.VITE_SITE_TITLE} is a rare gem nestled in the heart of Marrakesh, offering a unique blend of luxury, tradition, and authenticity that sets it apart from other accommodations. Here, guests are immersed in unparalleled cultural experiences, from savoring exquisite Moroccan cuisine to exploring the city's rich heritage through curated excursions. Our exceptional hospitality is second to none, with personalized services like 24/7 concierge, a traditional Moroccan spa, and rooftop tea service that create an unforgettable stay. With daily music rituals, a serene traditional pool, and intimate events that showcase the soul of Marrakesh, {import.meta.env.VITE_SITE_TITLE} delivers an experience unlike any other, making it the perfect retreat for those seeking a true connection to Morocco.
          </p>
          <img src={about3} className="h-auto w-full lg:rounded-xl" style={{justifySelf: "left"}} />
        </div>

        <div className="col-span-2 py-10">
          <img src={about1} className="lg:rounded-l-xl" style={{justifySelf: "right"}} />
          <div className='pt-6'>
            <img src={about2} className="h-auto w-full lg:w-2/3 lg:rounded-xl" style={{justifySelf: "left"}} />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
