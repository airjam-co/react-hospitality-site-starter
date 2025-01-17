import tripAdvisor from '/tripadvisor_logo.svg'

function Testimonials() {

  return (
    <section className="relative isolate overflow-hidden px-6 pt-16 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt="See more reviews on TripAdvisor"
          src={tripAdvisor}
          className="mx-auto h-6"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-gray-600/90 sm:text-xl/9">
            <p>
              "There are vacations, and then there are experiences that transcend into an once in a life experience. Our stay at {import.meta.env.VITE_SITE_TITLE} did just that"
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Ellen O</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Carmel Valley, California</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Testimonials
