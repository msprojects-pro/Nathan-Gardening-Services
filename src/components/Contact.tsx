import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle2, MessageSquare, Send, Calendar, Clock, Navigation } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Full Garden Tidy Up',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      console.log('Contact Form Submitted:', formData);
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
      message: '',
    });
    setIsSuccess(false);
  };

  const servedTowns = [
    'Sheringham', 'Cromer', 'Holt', 'Weybourne', 'Beeston Regis', 
    'West Runton', 'East Runton', 'High Kelling', 'Salthouse', 'Cley'
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-0.5 bg-emerald-600"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">Contact Us</span>
            <span className="w-8 h-0.5 bg-emerald-600"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight font-sans">
            Get in Touch for a Free Quote
          </h2>
          <p className="text-emerald-800 text-base font-normal">
            No job is too big or too small. Contact Nathan directly by phone, WhatsApp, or send a request using our secure form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-emerald-50/40 border border-emerald-100 rounded-2xl p-6.5 space-y-6">
              <h3 className="text-xl font-bold text-emerald-950 font-sans tracking-tight pb-3 border-b border-emerald-100">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 leading-none mb-1">Phone Number</p>
                    <a href="tel:+447957383264" className="text-base font-bold text-emerald-950 hover:text-emerald-700 transition-colors">
                      +44 7957 383264
                    </a>
                    <p className="text-xs text-emerald-800/80 mt-0.5">Available for direct calls & SMS</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 fill-green-700 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-600 leading-none mb-1">WhatsApp Chat</p>
                    <a href="https://wa.me/447957383264" target="_blank" rel="noreferrer" className="text-base font-bold text-green-700 hover:text-green-800 transition-colors">
                      Chat with Nathan
                    </a>
                    <p className="text-xs text-emerald-800/80 mt-0.5">Send garden photos for instant estimates</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 leading-none mb-1">Email Address</p>
                    <a href="mailto:Nathan.bayle12@hotmail.com" className="text-base font-bold text-emerald-950 hover:text-emerald-700 transition-colors break-all">
                      Nathan.bayle12@hotmail.com
                    </a>
                    <p className="text-xs text-emerald-800/80 mt-0.5">Typically replied to within 2 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 leading-none mb-1">Operating Hours</p>
                    <p className="text-base font-bold text-emerald-950">
                      Mon – Sat: 08:00 – 18:00
                    </p>
                    <p className="text-xs text-emerald-800/80 mt-0.5">Sundays by emergency request only</p>
                  </div>
                </div>
              </div>

              {/* Norfolk coverage map info */}
              <div className="pt-6 border-t border-emerald-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
                  Norfolk Service Coverage Area
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {servedTowns.map((town) => (
                    <span key={town} className="text-[11px] font-semibold text-emerald-800 bg-white px-2.5 py-1 rounded-md border border-emerald-100">
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Emergency note banner */}
            <div className="bg-emerald-900 text-white rounded-2xl p-5 border border-emerald-800 shadow-lg shadow-emerald-950/10">
              <h4 className="font-bold text-sm mb-1 text-green-300">Storm Damage & Urgent Fence Repairs?</h4>
              <p className="text-xs text-emerald-200 leading-relaxed">
                If a storm has brought down your garden fence or blocked your pathway with heavy tree debris, call or WhatsApp Nathan on <strong>07957 383264</strong> for priority local emergency callouts.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6.5 sm:p-8 border border-emerald-100/80 shadow-xl shadow-emerald-950/5 relative">
            <h3 className="text-xl font-bold text-emerald-950 font-sans tracking-tight mb-6">
              Send an Online Enquiry
            </h3>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Margaret Bayle"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/10 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07957 383264"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/10 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/10 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/10 text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm"
                    >
                      <option value="Full Garden Tidy Up">Full Garden Tidy Up</option>
                      <option value="Regular Lawn Maintenance">Regular Lawn Maintenance</option>
                      <option value="Hedge Cutting & Trimming">Hedge Cutting & Trimming</option>
                      <option value="Fencing & Structures">Fencing & Structures</option>
                      <option value="Garden Waste Removal">Garden Waste Removal</option>
                      <option value="Seasonal Garden Care">Seasonal Garden Care</option>
                      <option value="General Gardening">General Gardening</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">Your Message / Job Details *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your garden (e.g. size, last tidied date, or length of fencing panels required)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-emerald-100 bg-emerald-50/10 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-emerald-950/10 transition-all duration-200 flex items-center justify-center space-x-2 text-sm cursor-pointer"
                  id="submit-contact-form"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 text-emerald-300" />
                      <span>Submit Secure Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h4 className="text-2xl font-bold text-emerald-950 tracking-tight">Enquiry Received!</h4>
                <p className="text-emerald-700 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-emerald-900">{formData.name}</strong>. Nathan has received your message regarding <strong className="text-emerald-900">{formData.service}</strong> and will get back to you shortly.
                </p>
                <button
                  onClick={resetForm}
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold py-2 px-6 rounded-lg text-xs transition-colors border border-emerald-100"
                  id="reset-contact-form-btn"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
