import { Sprout, Phone, Mail, MapPin, Award, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-8 border-t border-emerald-900 relative z-10 overflow-hidden">
      {/* Subtle bottom glows */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-7xl h-32 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Narrative */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer"
              id="footer-logo-btn"
            >
              <div className="w-9 h-9 rounded-lg bg-green-400 flex items-center justify-center text-emerald-950 shadow-md">
                <Sprout className="w-5 h-5 text-emerald-950" />
              </div>
              <h2 className="text-lg font-bold tracking-tight text-white leading-tight">
                Nathan's <span className="text-green-400">Gardening</span>
              </h2>
            </button>
            
            <p className="text-emerald-200 text-xs leading-relaxed max-w-sm">
              We provide award-winning professional garden care, pristine lawn striping, meticulous hedge trimming, fencing, and waste clearance services in Sheringham and nearby Norfolk towns.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <ShieldCheck className="w-4.5 h-4.5 text-green-400 shrink-0" />
                <span>DBS Checked Practitioner</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <Award className="w-4.5 h-4.5 text-green-400 shrink-0" />
                <span>Licensed Environment Agency Waste Carrier</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-green-400">Quick Navigation</h3>
            <ul className="space-y-2.5">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => scrollToSection(sec.toLowerCase())}
                    className="text-emerald-200 hover:text-green-400 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-green-400">Our Services</h3>
            <ul className="space-y-2.5 text-xs text-emerald-200 font-medium">
              <li>Garden Tidy Ups</li>
              <li>Lawn Striping & Mowing</li>
              <li>Hedge Reshaping</li>
              <li>Fencing & Gates</li>
              <li>Licensed Waste Carrier</li>
              <li>Seasonal Soil Care</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-green-400">Get In Touch</h3>
            <ul className="space-y-3.5">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <span className="text-xs text-emerald-200 leading-normal">
                  Sheringham, Norfolk, United Kingdom
                </span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Phone className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <a href="tel:+447957383264" className="text-xs text-emerald-200 hover:text-white transition-colors">
                  +44 7957 383264
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <Mail className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <a href="mailto:Nathan.bayle12@hotmail.com" className="text-xs text-emerald-200 hover:text-white transition-colors break-all">
                  Nathan.bayle12@hotmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-emerald-300">
          <p className="text-center">
            &copy; {currentYear} <strong>Nathan's Gardening Services</strong>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
