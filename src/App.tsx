import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-emerald-950 font-sans selection:bg-green-100 selection:text-emerald-900 scroll-smooth">
      {/* Navigation Header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Sections */}
      <main>
        {/* Hero Banner with video-overlay look */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* About Section */}
        <About />

        {/* Services Grid with Custom inclusions */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* Completed Projects Photo Gallery */}
        <Gallery />

        {/* Verified Norfolk Client Reviews */}
        <Testimonials />

        {/* Comprehensive Contact Details & Map Placeholder */}
        <Contact />
      </main>

      {/* Comprehensive Footer details */}
      <Footer />

      {/* Floating Call & WhatsApp shortcuts for mobile visitors */}
      <FloatingCTA />

      {/* Interactive Free Quote Request Form Drawer */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </div>
  );
}
