
function LandingHeroContent() {

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 w-full hero-content">
        <div className="mx-auto max-w-2xl sm:py-24 lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="text-white relative rounded-full px-3 py-1 text-sm/6 ring-1 ring-white hover:ring-gray">
              Book now and save 50% on your next stays.{' '}
              <a href="#" className="font-semibold text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-3xl tracking-tight text-slate-100 sm:text-3xl md:text-4xl lg:text-5xl">
              Discover serenity at {import.meta.env.VITE_SITE_TITLE}
            </h1>
            <p className="mt-8 text-pretty text-xs text-slate-200 sm:text-sm md:text-lg lg:text-xl">
              Discover the essence of Morocco at {import.meta.env.VITE_SITE_TITLE}—where luxury meets serenity for an unforgettable escape.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md ring-1 ring-white px-3.5 py-2.5 text-sm font-semibold text-white xs:shadow-sm hover:bg-slate-100/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingHeroContent
