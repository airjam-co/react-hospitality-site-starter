import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import logo from '/logo.svg'

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
    <header className={clsx("navigation-bar w-screen fixed z-50", isScrolled ? "lg:bg-emerald-950 bg-white/90 sm:bg-white/90" : "md:bg-transparent bg-white/50 sm:bg-white/50")}>
      <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 basis-1/3 text-white">
          <a href="#about" className="text-sm/6 font-semibold text-white">
            About Us
          </a>
          <a href="#rooms" className="text-sm/6 font-semibold text-white">
            Rooms
          </a>
          <a href="#faq" className="text-sm/6 font-semibold text-white">
            FAQs
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 justify-center basis-1/3">
          <a href="#top" className="-m-1.5 p-1.5 title">
            <span className="sr-only">{import.meta.env.VITE_SITE_TITLE}</span>
            <img src={logo} className="h-4 w-auto logo" style={{justifySelf: "center"}} alt={import.meta.env.VITE_SITE_TITLE} />
            <span className='text-white'>{import.meta.env.VITE_SITE_TITLE}</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <a href="#top" className="-m-1.5 p-1.5 title text-bold">
            <span className="sr-only">{import.meta.env.VITE_SITE_TITLE}</span>
            <img src={logo} className="h-4 w-auto logo" style={{justifySelf: "center"}} alt={import.meta.env.VITE_SITE_TITLE} />
            <span className='text-black'>{import.meta.env.VITE_SITE_TITLE}</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end basis-1/3 text-white">
          <a href="#reservations" className="text-sm/6 font-semibold text-white">
            Book Now
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#top" className="-m-1.5 p-1.5 title">
                <span className="sr-only">{import.meta.env.VITE_SITE_TITLE}</span>
                <img src={logo} className="h-4 w-auto logo" style={{justifySelf: "center"}} alt={import.meta.env.VITE_SITE_TITLE} />
                <span className='text-black md:hidden lg:flex'>{import.meta.env.VITE_SITE_TITLE}</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 bg-transparent"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 navigation-bar">
              <div className="space-y-2 py-6">
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="#rooms"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Rooms
                </a>
                <a
                  href="#faq"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  FAQs
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#reservations"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    </>
  )
}

export default NavBar
