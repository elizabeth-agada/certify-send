
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import FlowSection from './pages/FlowSection';
import Hero from './pages/Hero';
import Feature from './pages/Feature'
import WhyChoose from './pages/WhyChoose';
import HowItWorks from './pages/HowItWorks';
import Testimonial from './pages/Testimonial';
import CTA from './pages/CTA';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Banner />
      <Navbar />
      <Hero />
      <FlowSection />
      <Feature />
      <WhyChoose />
      <HowItWorks />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </div>

  );
}

export default App;
