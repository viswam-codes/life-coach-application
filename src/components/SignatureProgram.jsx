import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function SignatureProgram({ onOpenBooking }) {
  const phases = [
    {
      badge: 'Phase 01 • Weeks 1–3',
      title: 'Executive Positioning & 360 Audit',
      description: 'Uncover the hidden gap between how you perceive yourself and how executive stakeholders evaluate your promotability.',
      deliverables: [
        'Stakeholder Perception Matrix',
        'Energy & Task Elimination Audit',
        'Executive Value Proposition Architecture',
        'Shedding the "Good Girl" Checklist Trap',
      ],
    },
    {
      badge: 'Phase 02 • Weeks 4–6',
      title: 'Boardroom Authority & Presence',
      description: 'Transform how you communicate in high-stakes environments: board meetings, client pitches, and C-suite strategy updates.',
      deliverables: [
        'Vocal Cadence & Decisive Framing',
        'Executive Summary Narrative Architecture',
        'Holding Ground During Hostile Q&A',
        'Eliminating Softening Speech Patterns',
      ],
    },
    {
      badge: 'Phase 03 • Weeks 7–9',
      title: 'Strategic Sponsorship & Politics',
      description: 'Shift from mentors who give advice to influential executive sponsors who advocate when you are not in the room.',
      deliverables: [
        'Corporate Alliances Power Map',
        'Cultivating C-Suite Sponsors',
        'Navigating Lateral Rivalries Gracefully',
        'Executive Committee Visibility Strategy',
      ],
    },
    {
      badge: 'Phase 04 • Weeks 10–12',
      title: 'Promotion & Team Leverage',
      description: 'Secure the title, compensation package, and autonomous team architecture that sets you up for long-term executive reign.',
      deliverables: [
        'Strategic Promotion Business Case',
        'Executive Compensation & Equity Negotiation',
        'High-Trust Autonomous Team Delegation System',
        'Sustainable Ambition & Energy Architecture',
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 bg-dark-900 text-white relative overflow-hidden" id="signature-program">
      {/* Background Glow Orbs */}
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 15, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-brand-300 border border-white/15 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Signature Program
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-white">
            The Ascend Executive Accelerator&trade;
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A proven 12-week proprietary immersion engineered specifically for female Senior Managers, Directors, and High-Potential Leaders ready to command the executive tier.
          </p>
        </motion.div>

        {/* 4 Phases Grid with Staggered Scroll Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {phases.map((p) => (
            <motion.div
              key={p.badge}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-dark-800/80 rounded-3xl p-6 border border-white/10 hover:border-brand-500/60 transition-all duration-300 flex flex-col group backdrop-blur-sm shadow-lg hover:shadow-glow"
            >
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-300 bg-brand-500/20 px-3 py-1 rounded-full mb-4 w-fit border border-brand-500/30 group-hover:bg-brand-500/30 transition-colors">
                {p.badge}
              </span>

              <h3 className="font-heading font-bold text-xl text-white mb-2">
                {p.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 flex-grow">
                {p.description}
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2">
                {p.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Program Highlights Banner with Entrance Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-3xl border border-white/15 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="space-y-4 max-w-2xl">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Measurable Executive Career Velocity
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We evaluate success through tangible milestones: promotions secured, compensation increased, and hours reclaimed from operational firefights.
            </p>

            <div className="flex flex-wrap gap-8 pt-2">
              <motion.div whileHover={{ scale: 1.05 }}>
                <strong className="block font-heading font-extrabold text-3xl sm:text-4xl text-brand-300">89%</strong>
                <span className="text-xs sm:text-sm text-slate-400">Promoted within 9 Months</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <strong className="block font-heading font-extrabold text-3xl sm:text-4xl text-brand-300">+$34K</strong>
                <span className="text-xs sm:text-sm text-slate-400">Average Compensation Raise</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <strong className="block font-heading font-extrabold text-3xl sm:text-4xl text-brand-300">15+ hrs</strong>
                <span className="text-xs sm:text-sm text-slate-400">Reclaimed / Week via Delegation</span>
              </motion.div>
            </div>
          </div>

          <div className="text-center w-full lg:w-auto flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-glow transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Discovery Call
            </motion.button>
            <span className="block text-xs text-slate-400 mt-2">
              Next cohort strictly capped at 12 leaders
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
