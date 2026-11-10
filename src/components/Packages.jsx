import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Packages({ onOpenBooking }) {
  const packages = [
    {
      name: '1:1 Executive Advisory',
      desc: 'Bespoke, high-touch strategic partnership for Senior Directors & VPs tackling urgent political, visibility, or promotion crossroads.',
      price: '3,500',
      period: '/ 3-Month Engagement',
      installment: 'Or 3 monthly payments of $1,250',
      featured: false,
      badge: null,
      ctaText: 'Book a Free Discovery Call',
      features: [
        '6x 60-Minute Bi-Weekly 1:1 Strategic Video Deep Dives',
        'Confidential WhatsApp / Voice Hotline Access (Mon–Fri)',
        '360-Degree Stakeholder Perception Audit',
        'Live Rehearsals for C-Suite Presentations & Board Meetings',
        'Executive Compensation & Equity Negotiation Playbook',
        'Unlimited review of executive emails, slide decks & briefs',
      ],
      note: 'Strictly capped at 6 concurrent private clients',
    },
    {
      name: 'The Ascend Accelerator™',
      desc: '12-week group mastermind & coaching cohort for ambitious female leaders accelerating to executive rank.',
      price: '1,850',
      period: '/ Full 12-Week Immersion',
      installment: 'Or 3 monthly installments of $650',
      featured: true,
      badge: 'Most Popular • Next Cohort Enrolling',
      ctaText: 'Book a Free Discovery Call',
      features: [
        '12x Weekly Live 90-Minute Mastermind & Hot-Seat Sessions',
        '2x Private 45-Minute 1:1 Strategic Milestone Calls with Priya',
        'Curated Peer Circle of 12 Senior Female Leaders',
        'Complete Executive Visibility Scripts, Frameworks & Decks',
        'Live Rehearsal Roleplays for Tough Executive Conversations',
        'Lifetime Access to Ascend Executive Alumni Network',
      ],
      note: 'Corporate L&D expense justification letter provided',
    },
    {
      name: 'Corporate Leadership Intensive',
      desc: 'Custom enterprise keynotes, offsites, and multi-session workshops for corporate Women’s ERGs and leadership teams.',
      price: '6,000',
      pricePrefix: 'From $',
      period: '/ Customized Enterprise Scope',
      installment: 'Virtual or On-Site Global Delivery',
      featured: false,
      badge: null,
      ctaText: 'Inquire for Corporate Rates',
      features: [
        'Half-Day or Full-Day Executive Workshop Delivery',
        'Keynote: "Commanding the Room Without Apology"',
        'Custom Needs Assessment with Executive Sponsors',
        'Interactive Breakout Guides & Action Playbooks',
        'Post-Event 30-Day Leadership Accountability Check-In',
        'HR Metrics Report on Participant Confidence & Skill Gains',
      ],
      note: 'Tailored for scale-ups and Fortune 500 enterprises',
    },
  ];

  return (
    <section className="py-20 bg-white" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700 mb-3">
            Investment &amp; Packages
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark-900 tracking-tight mb-4">
            Transparent Investment in Your Executive Trajectory
          </h2>
          <p className="text-base sm:text-lg text-dark-600">
            No hidden fees. 70%+ of clients expense their tuition through corporate Learning &amp; Development or Executive Coaching budgets.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.featured
                  ? 'bg-white border-2 border-brand-500 shadow-glow lg:-translate-y-2'
                  : 'bg-warm-bg border border-warm-border shadow-sm hover:shadow-executive hover:-translate-y-1'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[11px] font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div>
                <h3 className="font-heading font-extrabold text-2xl text-dark-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs sm:text-sm text-dark-600 leading-relaxed mb-6 min-h-[48px]">
                  {pkg.desc}
                </p>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-slate-200">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg sm:text-xl font-bold text-dark-800">
                      {pkg.pricePrefix || '$'}
                    </span>
                    <span className="font-heading font-extrabold text-4xl sm:text-5xl text-dark-900 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">
                      {pkg.period}
                    </span>
                  </div>
                  <span className="text-xs text-brand-700 font-semibold mt-1 block">
                    {pkg.installment}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-dark-800">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-4 px-6 rounded-full text-sm sm:text-base font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                    pkg.featured
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-glow hover:-translate-y-0.5'
                      : 'bg-white text-dark-900 border border-warm-border hover:bg-slate-50 hover:border-dark-400'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  {pkg.ctaText}
                </button>
                <span className="block text-[11px] text-center text-slate-400 mt-2.5">
                  {pkg.note}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

