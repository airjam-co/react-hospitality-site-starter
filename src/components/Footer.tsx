import logo from '/logo.svg'

function Footer() {

  return (
    <footer
      className="xs:text-center text-surface/75 dark:text-gray-800/75 lg:text-left p-6 lg:px-8 text-sm">
      <div className="py-10 xs:text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-6 py-10">
          <div className="col-span-3">
            <h6
              className="mb-4 flex items-center justify-center font-semibold md:justify-start">
              <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                <img src={logo} className="h-5 w-auto logo " alt={import.meta.env.VITE_SITE_TITLE} />
              </span>
            </h6>
            <h5 className='text-sm font-semibold title-content'>
              {import.meta.env.VITE_SITE_TITLE}
            </h5>
            <p className='py-1 text-sm decorative'>
              Medina, Marrakesh
            </p>

            <div className="flex py-6 justify-center md:justify-start">
              <a href="#!" className="me-3 [&>svg]:h-3 [&>svg]:w-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a href="#!" className="me-3 [&>svg]:h-3 [&>svg]:w-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href="#!" className="me-3 [&>svg]:h-3 [&>svg]:w-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512">
                  <path
                    d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h6
              className="mb-4 flex justify-center font-semibold md:justify-start">
              Experiences
            </h6>
            <p className="mb-4">
              <a href="#!">Dining</a>
            </p>
            <p className="mb-4">
              <a href="#!">Spa</a>
            </p>
            <p className="mb-4">
              <a href="#!">Events</a>
            </p>
            <p>
              <a href="#!">Excursions</a>
            </p>
          </div>
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold md:justify-start">
              Information
            </h6>
            <p className="mb-4">
              <a href="#!">Checking In</a>
            </p>
            <p className="mb-4">
              <a href="#!">House Rules</a>
            </p>
            <p className="mb-4">
              <a href="#!">FAQs</a>
            </p>
            <p>
              <a href="#!">Getting Here</a>
            </p>
          </div>
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold md:justify-start">
              About
            </h6>
            <p className="mb-4">
              <a href="#!">About Us</a>
            </p>
            <p className="mb-4">
              <a href="#!">Photo Gallery</a>
            </p>
            <p className="mb-4">
              <a href="#!">Morocco</a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-xs">
        <span>©{(new Date().getFullYear())} </span>
        <a href="https://tw-elements.com/"
          >{import.meta.env.VITE_SITE_TITLE}</a
        >. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
