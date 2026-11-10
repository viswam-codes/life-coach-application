import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, TrendingUp, Star, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onOpenBooking, onExplorePrograms }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-brand-100 text-brand-800 border border-brand-200/80">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Executive Leadership Acceleration for High-Achieving Women
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-dark-900 tracking-tight leading-[1.12]">
              Step into the leadership role <span className="text-gradient">you've earned.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-dark-600 leading-relaxed max-w-2xl">
              Executive coaching and strategic career acceleration for ambitious women ready to shatter the director-to-VP ceiling, command boardroom authority, and lead high-performing teams without burning out.
            </p>

            {/* Who it's for & Result Box */}
            <div className="bg-white rounded-2xl border border-warm-border p-5 sm:p-6 shadow-sm border-l-4 border-l-brand-600 space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm sm:text-base">
                <span className="font-bold text-dark-900 whitespace-nowrap">Who it's for:</span>
                <span className="text-dark-600">Senior Managers, Directors &amp; Emerging VPs in Tech, Finance, Consulting &amp; Scale-Ups.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm sm:text-base">
                <span className="font-bold text-dark-900 whitespace-nowrap">The Result:</span>
                <span className="text-dark-600">Strategic executive promotion, 25&ndash;40% compensation growth, and boardroom authority without burnout.</span>
              </div>
            </div>

            {/* CTAs Above the Fold */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-dark-800 bg-white hover:bg-warm-subtle border border-warm-border shadow-xs transition-all"
              >
                Explore Signature Programs
              </button>
            </div>

            {/* Microcopy reassurance */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Free 15-minute 1:1 strategy session • 100% confidential • Zero sales pitch, pure clarity</span>
            </div>
          </motion.div>

          {/* Right Hero Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-dark-900 aspect-[4/5] border border-white/40">
                <img
                  src="/assets/images/coach-priya.jpg"
                  alt="Priya Sharma, Executive Women's Leadership Coach"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Bottom Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3.5 z-10"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block font-heading font-extrabold text-dark-900 text-base sm:text-lg">89% Promoted</strong>
                  <span className="text-xs text-slate-500 font-medium">Within 9 months of coaching</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Top Right */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/80 items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 fill-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-heading font-bold text-dark-900 text-sm">
                    4.98 / 5.0 Rating
                  </div>
                  <span className="text-xs text-slate-500">240+ Women Leaders Coached</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

