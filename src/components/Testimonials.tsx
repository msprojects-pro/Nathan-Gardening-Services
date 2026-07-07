import { Star, Quote, Award } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      name: 'Margaret H.',
      location: 'Sheringham, Norfolk',
      text: "Nathan is an absolute treasure! He completed a full tidy up of our garden which had become terribly overgrown. He was polite, extremely hard-working, and left the garden looking award-winningly beautiful. We now have him on a regular fortnightly lawn cut. Highly recommended!",
      rating: 5,
      badge: 'Fortnightly Client'
    },
    {
      id: '2',
      name: 'Robert G.',
      location: 'Holt, Norfolk',
      text: "Outstanding hedge cutting and trimming service. Nathan cut back our tall beech hedges perfectly straight, cleared up every single twig and leaf, and bagged all waste. He holds a proper waste licence which is very reassuring. 10/10 gardening craftsman.",
      rating: 5,
      badge: 'Hedge Client'
    },
    {
      id: '3',
      name: 'Sarah & David',
      location: 'Cromer, Norfolk',
      text: "We commissioned Nathan to install heavy duty featheredge fencing and some raised vegetable beds. The craftsmanship is pristine, the price was very fair, and Nathan is exceptionally reliable. It is obvious why he wins awards here in Norfolk!",
      rating: 5,
      badge: 'Fencing Client'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute right-10 top-10 w-96 h-96 bg-emerald-800/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-10 -bottom-10 w-96 h-96 bg-green-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-0.5 bg-green-400"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-green-300">Testimonials</span>
            <span className="w-8 h-0.5 bg-green-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-white">
            What Our Norfolk Customers Say
          </h2>
          <p className="text-emerald-100 text-base font-normal">
            We are proud of our award-winning service standards. Read reviews from local home owners in Sheringham, Holt, and Cromer.
          </p>
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between shadow-xl relative"
            >
              {/* Double quote design icon */}
              <div className="absolute top-6 right-6 text-green-400/20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Stars Rating */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-green-400 text-green-400" />
                  ))}
                </div>

                <p className="text-sm text-emerald-50 leading-relaxed font-sans font-normal italic">
                  "{item.text}"
                </p>
              </div>

              {/* Bottom detail card reviewer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">{item.name}</h4>
                  <p className="text-xs text-emerald-300">{item.location}</p>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-950 bg-green-400 py-1 px-2.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Norfolk Award Emblem Footer Ribbon */}
        <div className="mt-16 text-center border-t border-white/10 pt-10">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-emerald-950/40 px-6 py-4 rounded-full border border-white/5 max-w-2xl mx-auto">
            <div className="w-10 h-10 rounded-full bg-green-400/15 flex items-center justify-center">
              <Award className="w-6 h-6 text-green-400" />
            </div>
            <p className="text-xs text-emerald-200 text-center sm:text-left leading-relaxed">
              Nathan's Gardening Services holds the formal <strong className="text-white">Environment Agency Licensed Waste Carrier badge</strong>, is fully DBS-checked, and is a recognized <strong className="text-white">Multi-Award Winner</strong> for garden care in Norfolk.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
