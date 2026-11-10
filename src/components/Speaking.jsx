import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Building2, Send, CheckCircle2, Calendar } from 'lucide-react';

export default function Speaking({ onOpenBooking, onShowToast }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    email: '',
    eventType: 'keynote',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('Corporate enquiry received! Priya’s executive office will email you within 24 hours.');
      }
    }, 750);
  };

  return (
    <section className="py-20 bg-warm-bg" id="speaking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Keynotes info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700">
              <Mic className="w-3.5 h-3.5" /> Keynotes &amp; Corporate Training
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-dark-900 tracking-tight">
              Inspiring &amp; Equipping the Next Generation of Female Executives
            </h2>

            <p className="text-base text-dark-600 leading-relaxed">
              Priya delivers high-energy, actionable keynotes and corporate workshops for Fortune 500 summits, global women's ERG networks, and executive offsites.
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-warm-border shadow-xs">
                <h4 className="font-heading font-bold text-lg text-dark-900 mb-1">
                  1. Commanding the Room Without Apology
                </h4>
                <p className="text-xs sm:text-sm text-dark-600 leading-relaxed">
                  The unwritten rules of boardroom authority, eliminating softening speech patterns, and holding ground during high-stakes corporate negotiations.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-warm-border shadow-xs">
                <h4 className="font-heading font-bold text-lg text-dark-900 mb-1">
                  2. From High Performer to High Influence
                </h4>
                <p className="text-xs sm:text-sm text-dark-600 leading-relaxed">
                  Why 120% technical execution doesn't lead to the executive tier, and how to build internal sponsorship networks that accelerate executive promotion.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-warm-border shadow-xs">
                <h4 className="font-heading font-bold text-lg text-dark-900 mb-1">
                  3. Sustainable Executive Ambition
                </h4>
                <p className="text-xs sm:text-sm text-dark-600 leading-relaxed">
                  Navigating senior leadership without sacrificing health or sanity: strategic delegation, boundary management, and high-trust team leadership.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-glow transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Discovery Call
              </button>
            </div>
          </div>

          {/* Right Column: Corporate Workshop Enquiry Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-warm-border shadow-executive">
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="w-6 h-6 text-brand-600" />
              <h3 className="font-heading font-extrabold text-2xl text-dark-900">
                Corporate Enquiry Form
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Complete the details below, and Priya’s executive team will send a tailored corporate syllabus and fee schedule within 24 hours.
            </p>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-xl text-dark-900">Enquiry Received!</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you! We will email the keynote/workshop overview packet to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-brand-600 hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-dark-800 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-dark-800 mb-1">Your Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="VP People / ERG Lead"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-dark-800 mb-1">Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Enterprise"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-dark-800 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@acme.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-dark-800 mb-1">Event / Program Format</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50 text-dark-900"
                  >
                    <option value="keynote">Keynote Address (Virtual or In-Person)</option>
                    <option value="half-day">Half-Day Executive Workshop</option>
                    <option value="multi-session">Multi-Week Women's Leadership Series</option>
                    <option value="offsite">Executive Offsite Facilitation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-dark-800 mb-1">Audience Size &amp; Key Goals</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the audience (e.g. 50 female leaders in engineering) and key challenges you want addressed..."
                    className="w-full px-3.5 py-2 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full text-base font-bold text-white bg-dark-900 hover:bg-dark-800 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending Request...' : 'Submit Corporate Enquiry'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

