import { motion } from 'motion/react';
import { Sprout, Phone, MessageSquare, ShieldCheck, Award, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="home" className="relative min-h-[90vh] flex items-center bg-emerald-950 overflow-hidden py-16 md:py-24">
      {/* Background Image with Dark Emerald Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gardening_hero_banner.jpg"
          alt="Premium manicured Norfolk garden"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950 via-emerald-950/90 to-emerald-900/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />
      </div>

      {/* Decorative Organic Shapes */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-green-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            {/* Award Ribbon/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Multi Award Winning Gardeners in Norfolk</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans"
              >
                Award-Winning <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                  Garden & Lawn Care
                </span> <br />
                in North Norfolk
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-emerald-100 max-w-2xl leading-relaxed font-sans font-normal"
              >
                We specialise in full garden tidy ups, regular lawn maintenance, precision hedge trimming, fencing and complete year-round garden care based in <strong className="text-white">Sheringham</strong>. DBS Checked & Licensed Waste Carrier.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenQuote}
                className="bg-green-400 hover:bg-green-500 text-emerald-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-green-400/20 hover:shadow-green-400/30 transition-all duration-200 text-base cursor-pointer flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
                id="hero-quote-cta"
              >
                Request Free Quote
                <ArrowRight className="w-5 h-5 text-emerald-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/447957383264"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-500/30 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 text-base flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-green-400 fill-green-400" />
                  WhatsApp Nathan
                </a>
                <a
                  href="tel:+447957383264"
                  className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 text-base flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  07957 383264
                </a>
              </div>
            </motion.div>

            {/* Quick Trust Ribbons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-white/10"
            >
              <div className="flex items-center gap-2 text-emerald-100">
                <ShieldCheck className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">DBS Checked Practitioner</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <Sprout className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">Licensed Waste Carrier</span>
              </div>
              <div className="col-span-2 md:col-span-1 flex items-center gap-2 text-emerald-100">
                <Award className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">Multi Award Winner</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Feature Card / Trust Panel (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6.5 border border-white/15 text-white shadow-2xl relative"
          >
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-green-400 text-emerald-950 flex items-center justify-center shadow-lg font-bold text-sm tracking-tight border-2 border-emerald-950">
              100%
            </div>
            
            <h3 className="text-xl font-bold font-sans tracking-tight mb-4 text-emerald-50">Why Choose Nathan?</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-green-400/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Professional & Reliable</h4>
                  <p className="text-xs text-emerald-200 mt-0.5">We show up on schedule and treat your garden with the utmost respect.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-green-400/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Eco-Friendly & Licensed</h4>
                  <p className="text-xs text-emerald-200 mt-0.5">Licensed Environment Agency waste carrier. We recycle garden waste responsibly.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-green-400/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Multi-Award Winning Standards</h4>
                  <p className="text-xs text-emerald-200 mt-0.5">Quality craft recognized across Norfolk's gardening industry.</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
              <div className="text-left">
                <p className="text-[10px] text-emerald-300 uppercase font-bold tracking-wider">Based In</p>
                <p className="text-sm font-semibold text-white">Sheringham, Norfolk</p>
              </div>
              <button
                onClick={scrollToContact}
                className="text-xs font-bold text-green-400 hover:text-green-300 flex items-center gap-1 group/btn"
              >
                View Service Area
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
