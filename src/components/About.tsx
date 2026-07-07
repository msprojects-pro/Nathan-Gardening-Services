import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2, MapPin, Landmark, HeartHandshake } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      title: "Award Winning",
      description: "Recognized as Norfolk's leading gardening craft practitioners, award-winning attention to detail."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "DBS Checked & Secure",
      description: "Fully DBS checked and verified, giving you ultimate peace of mind while on your property."
    },
    {
      icon: <Landmark className="w-6 h-6 text-emerald-600" />,
      title: "Licensed Waste Carrier",
      description: "Official waste management licence holder. All green waste is disposed of legally and composted."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
      title: "100% Reliable",
      description: "Friendly, dependable, local business serving Sheringham and the surrounding villages."
    }
  ];

  return (
    <section id="about" className="py-20 bg-emerald-50/30 overflow-hidden relative">
      {/* Decorative vector background accents */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-green-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Accents & Trust Cards */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-emerald-950/5 border border-emerald-100 relative">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-green-400 text-emerald-950 text-xs font-bold uppercase tracking-wider rounded-md">
                Norfolk Pride
              </span>
              <h3 className="text-xl font-bold text-emerald-950 mb-3 font-sans mt-2">Award Winning Service standards</h3>
              <p className="text-emerald-800 text-sm leading-relaxed">
                "Our goal isn't just to cut grass or trim hedges — it's to transform outdoor spaces into beautiful sanctuaries where local families can relax. We do it with passion, cleanliness, and friendly Sheringham charm."
              </p>
              <div className="mt-4 pt-4 border-t border-emerald-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-sm">
                  NB
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-emerald-950">Nathan Bayle</h4>
                  <p className="text-xs text-emerald-600 font-medium">Founder & Head Gardener</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-emerald-100/50 text-center shadow-md shadow-emerald-950/5">
                <span className="block text-3xl font-extrabold text-emerald-800">100%</span>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mt-1 block">Satisfaction</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-emerald-100/50 text-center shadow-md shadow-emerald-950/5">
                <span className="block text-3xl font-extrabold text-emerald-800">DBS</span>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mt-1 block">Checked & Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-0.5 bg-emerald-600"></span>
                <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">About Our Company</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight font-sans">
                Professional Garden Care by <span className="text-emerald-700">Nathan's Gardening Services</span>
              </h2>
            </div>

            <p className="text-emerald-800 leading-relaxed font-sans">
              Based in beautiful <strong className="text-emerald-950">Sheringham</strong>, we cover Cromer, Holt, Weybourne, and surrounding North Norfolk locations. Our multi-award-winning service is built on passion, immaculate standards, and complete reliability. 
            </p>
            
            <p className="text-emerald-800 leading-relaxed font-sans">
              Whether your garden has gotten out of hand and requires a thorough, top-to-bottom tidy up, or you are looking for dependable, friendly gardeners to look after your lawns and hedges on a regular basis, we have you covered.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-950 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-emerald-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-2 text-emerald-800 text-sm">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Proudly serving <strong>Sheringham, Cromer, Holt, Weybourne, Beeston Regis, Runton</strong> & surrounding Norfolk villages.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
