import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
