import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, Users, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

export default function Challenges({ onOpenBooking }) {
  const challenges = [
    {
      icon: TrendingUp,
      tag: 'The Promotion Paradox',
      title: 'Stuck at Senior Manager or Director',
      symptom: '“I deliver 120% of my targets, but louder peers keep getting the executive promotions.”',
      description: 'You are trusted to execute, but passed over for strategic roles. You are told you “need more gravitas” without actionable feedback. We shift you from high-performing implementer to the obvious strategic successor.',
      solutions: [
        'Build active executive sponsors who advocate in closed-door talent calibrations',
        'Audit and shed low-impact “office housework” to lead revenue-critical initiatives',
        'Master strategic promotion and compensation negotiation (average +32% raise)',
      ],
    },
    {
      icon: Eye,
      tag: 'Executive Visibility',
      title: 'Ignored or Talked Over in Meetings',
      symptom: '“My ideas are repeated by others 5 minutes later and praised by leadership.”',
      description: 'When you speak, you soften your authority with qualifiers. You hesitate before offering controversial perspectives in front of C-suite executives. We calibrate your verbal cadence, framing, and physical authority.',
      solutions: [
        'Master the “First 90 Seconds” boardroom communication framework',
        'Eliminate softening language (“just”, “does that make sense?”) effortlessly',
        'Command respect with non-verbal presence, pacing, and executive composure',
      ],
    },
    {
      icon: Users,
      tag: 'Team Scale & Politics',
      title: 'Managing Teams & Executive Politics',
      symptom: '“I am drowning in operational firefighting and managing difficult stakeholders.”',
      description: 'You are caught in the squeeze: protecting your team from toxic demands above, while working 65+ hour weeks to keep everything afloat. We transition you from micromanaging firefighter to visionary strategic leader.',
      solutions: [
        'Construct high-trust delegation frameworks that free up 15+ hours/week',
        'Navigate difficult senior stakeholders and corporate politics without compromising ethics',
        'Deliver critical feedback and manage underperformance with calm decisiveness',
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-20 bg-warm-bg relative overflow-hidden" id="challenges">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700 mb-3">
            Challenges I Solve
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark-900 tracking-tight mb-4">
            The 3 Invisible Hurdles Holding High-Achieving Women Back
          </h2>
          <p className="text-base sm:text-lg text-dark-600">
            Hard work and technical brilliance got you here. They won't get you to the executive table. Here is how we break through the bottlenecks keeping you stuck.
          </p>
        </motion.div>

        {/* 3 Challenge Cards with Staggered Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {challenges.map((c) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.tag}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-warm-border shadow-sm hover:shadow-executive transition-all duration-300 flex flex-col hover:border-brand-500/60 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1 block">
                  {c.tag}
                </span>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-dark-900 mb-3">
                  {c.title}
                </h3>

                <div className="p-3.5 rounded-xl bg-red-50/70 border border-red-100 text-xs sm:text-sm text-red-700 font-medium mb-4 italic">
                  {c.symptom}
                </div>

                <p className="text-sm text-dark-600 leading-relaxed mb-6 flex-grow">
                  {c.description}
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  {c.solutions.map((sol) => (
                    <div key={sol} className="flex items-start gap-2 text-xs sm:text-sm text-dark-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Section Repeated CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl border border-warm-border p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-dark-900 mb-1">
              Ready to solve your primary career bottleneck?
            </h3>
            <p className="text-dark-600 text-sm sm:text-base">
              Let's map out your exact 90-day trajectory on a confidential strategy call.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-glow transition-all duration-200 whitespace-nowrap"
          >
            <Calendar className="w-5 h-5" />
            Book a Free Discovery Call
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
