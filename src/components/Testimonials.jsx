import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

export default function Testimonials({ onOpenBooking }) {
  const testimonials = [
    {
      metric: 'Promoted to VP + $75K Compensation Raise',
      quote: 'I had been stuck at Director level for nearly three years, constantly feeling like I had to prove my technical worth. Priya completely shifted my mindset. She coached me on how to stop speaking like a project manager and start speaking like an executive peer. Four months into working with Priya, I was promoted to VP of Engineering with a $75,000 compensation increase.',
      author: 'Anita Patel',
      title: 'VP of Engineering, Cloud SaaS',
      image: '/assets/images/anita-patel.png',
    },
    {
      metric: 'Executive Committee Seat & C-Suite Influence',
      quote: 'My biggest challenge was boardroom visibility. In senior leadership meetings, I hesitated to disagree or assert controversial stances. The "Boardroom Presence Framework" Priya gave me was transformative. Within 6 weeks, our CEO pulled me aside to commend my presence and appointed me to the company’s Executive Strategy Council.',
      author: 'Claire Moreau',
      title: 'Head of Global Operations, FinTech',
      image: '/assets/images/claire-moreau.jpg',
    },
    {
      metric: 'Reclaimed 16 hrs/week & Scaled 40-Person Team',
      quote: 'I was working 65 hours a week and on the verge of clinical burnout. I felt entirely responsible for every deliverable my 40-person division produced. Priya helped me build high-leverage delegation architectures and set assertive executive boundaries. I reclaimed 16 hours a week, and my team was rated the top-performing unit in the firm.',
      author: 'Maya Jenkins',
      title: 'Managing Director, Financial Advisory',
      image: '/assets/images/maya-jenkins.png',
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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 bg-warm-bg relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700 mb-3">
            Proven Results
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark-900 tracking-tight mb-4">
            Real Transformations from Real Executive Women
          </h2>
          <p className="text-base sm:text-lg text-dark-600">
            Read how women leaders across tech, fintech, and global professional services claimed their seat at the executive table.
          </p>
        </motion.div>

        {/* 3 Testimonials Grid with Staggered Scroll Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="bg-white rounded-3xl p-8 border border-warm-border shadow-sm hover:shadow-executive transition-all duration-300 flex flex-col justify-between hover:border-brand-500/50 group"
            >
              <div>
                {/* Metric Badge */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60 mb-5 group-hover:bg-emerald-100 transition-colors">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  {t.metric}
                </div>

                {/* Stars */}
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-dark-700 leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100 group-hover:ring-brand-400 transition-all"
                />
                <div>
                  <h4 className="font-heading font-bold text-dark-900 text-base">{t.author}</h4>
                  <span className="text-xs text-slate-500">{t.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
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
              Your executive breakthrough is waiting.
            </h3>
            <p className="text-dark-600 text-sm sm:text-base">
              Book a confidential conversation to explore what is possible for your career.
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
