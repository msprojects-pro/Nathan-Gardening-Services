import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, Menu, X, Phone, ShieldCheck, Award } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll logic for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Gallery', target: 'gallery' },
    { name: 'Testimonials', target: 'testimonials' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <>
      {/* Top Trust Banner */}
      <div className="bg-emerald-900 text-emerald-100 text-[11px] sm:text-xs py-2 px-4 border-b border-emerald-800/50 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              Multi Award Winning Norfolk Gardeners
            </span>
            <span className="hidden md:inline-block text-emerald-700">|</span>
            <span className="hidden md:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              DBS Checked & Licensed Waste Carrier
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+447957383264" className="flex items-center gap-1 font-medium text-emerald-300 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              Call / WhatsApp: <strong className="text-white">07957 383264</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-emerald-50 py-3'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
            id="navbar-brand-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-green-600 flex items-center justify-center shadow-md shadow-emerald-950/10 group-hover:shadow-emerald-950/20 transition-all duration-300 group-hover:scale-105">
              <Sprout className="w-5.5 h-5.5 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-emerald-950 leading-tight">
                Nathan's <span className="text-emerald-700">Gardening</span>
              </h1>
              <p className="text-[10px] font-semibold text-emerald-600 tracking-wider uppercase leading-none">
                Norfolk Garden Care
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-sm font-medium text-emerald-950 hover:text-emerald-600 transition-colors relative py-1 cursor-pointer group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+447957383264"
              className="text-sm font-semibold text-emerald-900 hover:text-emerald-700 transition-colors px-3 py-2 flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              07957 383264
            </a>
            <button
              onClick={onOpenQuote}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4.5 py-2.5 rounded-xl shadow-md shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all duration-200 text-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              id="nav-quote-btn"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="sm:hidden bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-2 rounded-lg text-xs"
              id="mobile-nav-quote-btn"
            >
              Free Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-emerald-950 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-emerald-50 bg-white overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-3 shadow-inner">
                {navLinks.map((link) => (
                  <button
                    key={link.target}
                    onClick={() => scrollToSection(link.target)}
                    className="block w-full text-left py-2.5 px-3 rounded-lg text-base font-medium text-emerald-950 hover:bg-emerald-50 hover:text-emerald-700 transition-all cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-emerald-50 flex flex-col gap-3">
                  <div className="flex items-center justify-between px-3">
                    <span className="text-xs text-emerald-800">DBS Checked & Waste Licensed</span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Norfolk Area</span>
                  </div>
                  <a
                    href="tel:+447957383264"
                    className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-semibold py-3 rounded-xl transition-all"
                  >
                    <Phone className="w-4 h-4 text-emerald-700" />
                    Call: 07957 383264
                  </a>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenQuote();
                    }}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-900/10 text-center"
                    id="mobile-menu-quote-btn"
                  >
                    Get a Free Quote
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
