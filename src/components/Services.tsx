import { motion } from 'motion/react';
import { Sparkles, Calendar, Scissors, Hammer, Trash2, Sun, Sprout, Check } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenQuote: () => void;
}

export default function Services({ onOpenQuote }: ServicesProps) {
  const servicesList: ServiceItem[] = [
    {
      id: 'tidy-up',
      title: 'Full Garden Tidy Ups',
      description: 'Is your garden looking overgrown? We specialise in complete restorations, getting your outdoor space back to pristine condition.',
      icon: 'Sparkles',
      details: ['Overgrowth clearance', 'Border weeding & mulching', 'Shrub pruning & shaping', 'Leaf clearance & path sweep']
    },
    {
      id: 'lawn-maintenance',
      title: 'Regular Lawn Maintenance',
      description: 'Keep your grass healthy, neat, and beautifully green with our dependable scheduled mowing and care packages.',
      icon: 'Calendar',
      details: ['Crisp lawn stripes', 'Professional border edging', 'Fertilising & weed treatment', 'Regular fortnightly visits']
    },
    {
      id: 'hedge-cutting',
      title: 'Hedge Cutting & Trimming',
      description: 'Perfectly straight, neat, and healthy hedges. We trim all hedge types including conifers, privet, beech, and box hedges.',
      icon: 'Scissors',
      details: ['Formal box trimming', 'Reduction and reshaping', 'Conifer topping & pruning', 'Full waste bagging & clean-up']
    },
    {
      id: 'fencing',
      title: 'Fencing & Garden Structures',
      description: 'Durable and beautiful fencing to secure your property. From custom timber gates to panel replacements and raised garden beds.',
      icon: 'Hammer',
      details: ['Featheredge & overlap panels', 'Timber & concrete posts', 'Custom wooden gates', 'Heavy-duty raised vegetable beds']
    },
    {
      id: 'waste-removal',
      title: 'Garden Waste Removal',
      description: 'We hold a formal Environment Agency Waste Licence. Rest assured your green waste is disposed of legally and recycled.',
      icon: 'Trash2',
      details: ['Licensed waste carrier', 'Full loading & sweeping included', '100% legal green composting', 'Hassle-free alternative to skips']
    },
    {
      id: 'seasonal-care',
      title: 'Seasonal Garden Care',
      description: 'Every season brings unique garden demands. We prepare your soil, prune appropriately, and clear leaves to keep gardens safe.',
      icon: 'Sun',
      details: ['Autumn leaf collection', 'Winter frost mulching', 'Spring soil prep & aeration', 'Summer irrigation & feeding']
    },
    {
      id: 'general-gardening',
      title: 'General Gardening & Care',
      description: 'Need general assistance with your borders, weeding, planting, or pressure washing? Nathan is here to keep things immaculate.',
      icon: 'Sprout',
      details: ['Border weeding & spraying', 'Shovel digging & planting', 'Patio & path pressure washing', 'General garden handyman jobs']
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'Calendar': return <Calendar className="w-6 h-6 text-emerald-600" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-emerald-600" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-emerald-600" />;
      case 'Trash2': return <Trash2 className="w-6 h-6 text-emerald-600" />;
      case 'Sun': return <Sun className="w-6 h-6 text-emerald-600" />;
      case 'Sprout': return <Sprout className="w-6 h-6 text-emerald-600" />;
      default: return <Sprout className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-0.5 bg-emerald-600"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">What We Do</span>
            <span className="w-8 h-0.5 bg-emerald-600"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight font-sans">
            Our Professional Gardening Services
          </h2>
          <p className="text-emerald-800 text-base font-normal">
            From regular garden upkeep to single deep clean-ups, we deliver outstanding award-winning service in Sheringham and nearby North Norfolk towns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col justify-between bg-emerald-50/20 hover:bg-emerald-50/50 rounded-2xl p-6.5 border border-emerald-100/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/5 relative"
            >
              {/* Card Design details */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-green-100/70 text-emerald-700 flex items-center justify-center border border-emerald-100 group-hover:border-green-200 transition-all duration-300">
                  {getIcon(service.icon)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-emerald-950 font-sans group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-emerald-800 text-xs leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-emerald-100/40">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-emerald-900">
                      <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-100/40">
                <button
                  onClick={onOpenQuote}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  Request quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote Badge */}
        <div className="mt-12 text-center p-6 bg-emerald-900 text-white rounded-2xl shadow-xl shadow-emerald-900/10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto border border-emerald-800">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-green-400 text-emerald-950 flex items-center justify-center font-extrabold shrink-0">
              ✓
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-tight text-white">Need a custom garden care package?</h4>
              <p className="text-xs text-emerald-200 mt-0.5">We design customized periodic plans for holiday homes, domestic houses and estates.</p>
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="bg-white hover:bg-green-400 hover:text-emerald-950 text-emerald-900 font-bold px-5 py-2.5 rounded-lg text-xs transition-colors tracking-wide shrink-0"
          >
            Ask Nathan for details
          </button>
        </div>

      </div>
    </section>
  );
}
