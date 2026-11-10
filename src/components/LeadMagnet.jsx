import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Download, Sparkles } from 'lucide-react';

export default function LeadMagnet({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      if (onShowToast) {
        onShowToast(`"The Executive Visibility Playbook" was dispatched to ${email}! Download initiated.`);
      }
    }, 700);
  };

  return (
    <section className="py-20 bg-dark-900 text-white relative overflow-hidden" id="lead-magnet">
      <div className="absolute top-0 right-10 -z-10 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Form Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-brand-300 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" /> Free Executive Guide
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              Download &ldquo;The Executive Visibility Playbook&rdquo;
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Stop waiting to be noticed. Discover the exact 5 scripts senior women leaders use to command the room, redirect meeting interruptions, and turn everyday work into executive promotion momentum.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>The &ldquo;First 90 Seconds&rdquo; meeting framing script that grabs C-suite attention</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>How to assertively reclaim credit when a peer echoes your idea</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>The graceful decline: saying NO to non-promotable office housework</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-4 max-w-lg">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email address"
                className="flex-grow px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 backdrop-blur-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-3.5 rounded-full font-bold text-sm bg-brand-600 hover:bg-brand-500 text-white shadow-glow transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Get Instant Access'}
              </button>
            </form>
            <span className="block text-xs text-slate-400">Instant PDF download • 100% spam-free privacy guarantee</span>
          </div>

          {/* Right 3D Book Graphic Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="w-72 sm:w-80 aspect-[1/1.38] rounded-2xl bg-gradient-to-br from-brand-700 via-brand-600 to-amber-700 p-8 shadow-2xl border border-white/20 flex flex-col justify-between -rotate-3 select-none"
            >
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-200">
                  Executive Briefing
                </span>
                <div className="font-heading font-extrabold text-2xl text-white mt-4 leading-tight">
                  The Executive Visibility Playbook
                </div>
                <p className="text-xs text-brand-100 mt-2 font-medium">
                  5 Scripts for Women to Command the Room &amp; Win Promotion
                </p>
              </div>

              <div>
                <div className="w-10 h-0.5 bg-brand-200 mb-3" />
                <span className="text-xs font-semibold text-white/90">
                  By Priya Sharma, PCC
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

