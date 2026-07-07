import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, MapPin, Tag } from 'lucide-react';

// Custom static image paths
const lawnStripes = '/images/lawn_stripes.jpg';
const hedgeCutting = '/images/hedge_cutting.jpg';
const gardenTidyUp = '/images/garden_tidy_up.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  location: string;
  description: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Precision Lawn Striping',
      category: 'Lawn Care',
      imageUrl: lawnStripes,
      location: 'Sheringham, Norfolk',
      description: 'Full scarification followed by clean, professional striped finish mowing for a private country home.'
    },
    {
      id: '2',
      title: 'Formal Hedge Trimming',
      category: 'Hedge Cutting',
      imageUrl: hedgeCutting,
      location: 'Holt, Norfolk',
      description: 'Detailed shaping and pruning of formal box hedging, maintaining sharp lines and perfect proportions.'
    },
    {
      id: '3',
      title: 'Overgrown Border Tidy Up',
      category: 'Tidy Ups',
      imageUrl: gardenTidyUp,
      location: 'Cromer, Norfolk',
      description: 'Extensive weed extraction, shrub pruning, and slate dressing to breathe life back into an overgrown side garden.'
    },
    {
      id: '4',
      title: 'English Rose Border Planting',
      category: 'Garden Design',
      imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800',
      location: 'Weybourne, Norfolk',
      description: 'Curated cottage garden border consisting of premium David Austin roses, lavender, and perennial plants.'
    },
    {
      id: '5',
      title: 'Durable Featheredge Fencing',
      category: 'Fencing',
      imageUrl: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800',
      location: 'Beeston Regis, Norfolk',
      description: 'Heavy duty pressure-treated timber fencing with concrete posts to withstand harsh North Sea coastal winds.'
    },
    {
      id: '6',
      title: 'Comprehensive Spring Clean-up',
      category: 'Tidy Ups',
      imageUrl: 'https://images.unsplash.com/photo-1534710961216-75c9740290c5?auto=format&fit=crop&q=80&w=800',
      location: 'Sheringham, Norfolk',
      description: 'Complete winter debris removal, soil enrichment, aeration and lawn treatment to prepare the garden for summer.'
    }
  ];

  const categories = ['All', 'Tidy Ups', 'Lawn Care', 'Hedge Cutting', 'Fencing', 'Garden Design'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-emerald-50/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-0.5 bg-emerald-600"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">Our Portfolio</span>
            <span className="w-8 h-0.5 bg-emerald-600"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight font-sans">
            Completed Garden Projects
          </h2>
          <p className="text-emerald-800 text-base font-normal">
            Take a look at some of our actual garden tidy ups, lawn stripes, and hedge transformations around Sheringham and the wider Norfolk area.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === category
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-950/10'
                  : 'bg-white text-emerald-900 border border-emerald-100 hover:bg-emerald-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md shadow-emerald-950/5 border border-emerald-100/50 bg-white"
              >
                {/* Project Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <div className="space-y-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-green-400 text-emerald-950 text-[10px] font-bold uppercase tracking-wider">
                      <Tag className="w-2.5 h-2.5" />
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold font-sans tracking-tight">{item.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-emerald-200">
                      <MapPin className="w-3.5 h-3.5 text-green-400" />
                      <span>{item.location}</span>
                    </div>
                    <p className="text-[11px] text-emerald-100/90 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1 border-t border-white/10 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Enlarge shortcut icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              {/* Box Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Close light box"
                  id="close-lightbox"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-8 bg-black flex items-center justify-center max-h-[70vh]">
                    <img
                      src={selectedImage.imageUrl}
                      alt={selectedImage.title}
                      className="max-w-full max-h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="md:col-span-4 p-6 flex flex-col justify-between bg-white text-emerald-950">
                    <div className="space-y-4">
                      <div>
                        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-bold uppercase tracking-wider">
                          {selectedImage.category}
                        </span>
                        <h3 className="text-xl font-bold font-sans tracking-tight mt-2.5">{selectedImage.title}</h3>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-600 mt-1">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          <span>{selectedImage.location}</span>
                        </div>
                      </div>

                      <p className="text-xs text-emerald-800 leading-relaxed border-t border-emerald-50 pt-4">
                        {selectedImage.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-emerald-50 mt-6 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-emerald-600">Guaranteed Craftsmanship</span>
                      <span className="text-xs font-semibold text-emerald-900">Nathan's Gardening</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
