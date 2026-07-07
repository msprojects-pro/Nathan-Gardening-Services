import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Sprout, Send, Phone, MessageSquare } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Full Garden Tidy Up',
    location: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      console.log('Quote Request Submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Full Garden Tidy Up',
      location: '',
      message: '',
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl z-10 border border-emerald-100"
          >
            {/* Header pattern banner */}
            <div className="bg-gradient-to-r from-emerald-800 to-green-700 p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-emerald-100 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                id="close-quote-modal"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2 mb-1">
                <Sprout className="h-6 w-6 text-emerald-400" />
                <span className="text-xs font-semibold tracking-wider uppercase text-emerald-200">Nathan's Gardening Services</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight font-sans">Request Your Free Quote</h3>
              <p className="text-emerald-100 text-sm mt-1">Professional complete garden care in Norfolk</p>
            </div>

            <div className="p-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-emerald-900 uppercase tracking-wider mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Nathan Bayle"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/20 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-emerald-900 uppercase tracking-wider mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 07957 383264"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/20 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-emerald-900 uppercase tracking-wider mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="yourname@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/20 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-emerald-900 uppercase tracking-wider mb-1">Service Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/20 text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm"
                      >
                        <option value="Full Garden Tidy Up">Full Garden Tidy Up</option>
                        <option value="Regular Lawn Maintenance">Regular Lawn Maintenance</option>
                        <option value="Hedge Cutting & Trimming">Hedge Cutting & Trimming</option>
                        <option value="Fencing & Structures">Fencing & Garden Structures</option>
                        <option value="Garden Waste Removal">Garden Waste Removal</option>
                        <option value="Seasonal Garden Care">Seasonal Garden Care</option>
                        <option value="General Landscaping">General Gardening</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-emerald-900 uppercase tracking-wider mb-1">Location in Norfolk *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sheringham, Cromer"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/20 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-900 uppercase tracking-wider mb-1">Brief Description of the Job</label>
                    <textarea
                      rows={3}
                      placeholder="Please tell us a bit about your garden (e.g. lawn size, hedge height, required frequency)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/20 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-emerald-700/70 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    No obligation, completely free site survey & quote. We typically reply within 2 hours.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md shadow-emerald-900/10 transition-all duration-200 flex items-center justify-center space-x-2 text-sm cursor-pointer hover:shadow-emerald-900/20 active:translate-y-[1px]"
                      id="submit-quote-request"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                          <span>Sending request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-emerald-300" />
                          <span>Send Quote Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-4 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-inner">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-950 tracking-tight">Quote Request Sent!</h4>
                  <p className="text-emerald-700 mt-2 text-sm max-w-sm mx-auto">
                    Thank you, <strong className="text-emerald-900">{formData.name}</strong>. Nathan will review your request for <strong className="text-emerald-900">{formData.service}</strong> in <strong className="text-emerald-900">{formData.location}</strong> and contact you shortly.
                  </p>
                  
                  <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-100/50 max-w-xs mx-auto text-left">
                    <p className="text-xs text-emerald-800 font-semibold mb-2 uppercase tracking-wide text-center">Need an Urgent Quote?</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+447957383264"
                        className="flex items-center justify-center gap-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 py-2 px-3 rounded-lg transition-all"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call: 07957 383264
                      </a>
                      <a
                        href="https://wa.me/447957383264"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 py-2 px-3 rounded-lg transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Nathan
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="mt-8 text-emerald-600 hover:text-emerald-800 text-sm font-semibold hover:underline"
                    id="close-quote-success"
                  >
                    Back to Website
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
