// Libraries
import {Helmet} from 'react-helmet'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'; // include bootstrap css before all others to let tailwind take precedence
import './styles/App.css'
import './styles/booking.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Components
import About from './components/About';
import Book from './components/Book';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar'
import Rooms from './components/Rooms';
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <Helmet>
          <title>{import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <NavBar />
      <Hero />
      <About />
      <Rooms />
      <Testimonials />
      <FAQ />
      <Book />
      <Footer />
    </>
  )
}

export default App
