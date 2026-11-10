import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';

export default function Faq({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What happens during the Free Discovery Call?',
      a: 'The 15-minute Discovery Call is a completely confidential 1:1 strategy session between you and Priya. We analyze your current title, your target executive role, and your #1 leadership roadblock (whether it’s promotion stagnation, boardroom visibility, or stakeholder friction). If we are a mutual fit, we’ll outline whether 1:1 coaching or the Ascend Accelerator is right for you. There is zero pressure and zero sales pitch.',
    },
    {
      q: 'Will my employer pay for executive coaching?',
      a: 'Yes! Over 70% of our clients have their coaching or cohort tuition fully or partially reimbursed through company Learning & Development (L&D), Executive Development, or departmental leadership budgets. We provide you with a pre-written, highly persuasive Corporate Sponsorship Justification Letter and business case outline to submit to your HR department or manager.',
    },
    {
      q: 'How much time commitment is required per week?',
      a: 'The program is engineered for busy senior leaders working 50+ hours a week. It requires approximately 2 hours per week: a 60-minute session (bi-weekly in 1:1, or 90 minutes weekly in the cohort) plus 30–45 minutes of direct application on real meetings you are already leading. You do not do theoretical homework; every exercise directly improves your live presentations, emails, and meetings.',
    },
    {
      q: 'Should I choose 1:1 Executive Advisory or The Ascend Accelerator?',
      a: 'Choose 1:1 Advisory if you are dealing with sensitive internal politics, an immediate promotion review within 60 days, or desire weekly private strategic counsel and on-demand voice access. Choose the Ascend Accelerator if you value community with other high-achieving women, live peer roleplaying, and structured 12-week framework learning at an accessible investment level.',
    },
    {
      q: 'How quickly can I expect to see tangible results?',
      a: 'Most clients experience immediate shifts in executive presence, meeting confidence, and energy within the first 2–3 weeks as we calibrate your communication scripts and delegation boundaries. Tangible milestones like committee appointments, title promotions, and salary raises typically occur between months 3 and 9 of the relationship.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700 mb-3">
            Got Questions?
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-dark-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-dark-600">
            Everything you need to know about working with Priya, corporate sponsorship, and the discovery process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-warm-bg border-brand-500/50 shadow-sm'
                    : 'bg-warm-subtle/40 border-warm-border hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-dark-900"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-brand-100 text-brand-600' : 'bg-white border border-warm-border text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-dark-600 leading-relaxed border-t border-warm-border/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Section Repeated CTA Banner */}
        <div className="bg-warm-bg rounded-3xl border border-warm-border p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-dark-900 mb-1">
              Have a question specific to your career?
            </h3>
            <p className="text-dark-600 text-sm sm:text-base">
              Bring it directly to Priya during your complimentary 1:1 strategy call.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-glow transition-all duration-200 whitespace-nowrap hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Book a Free Discovery Call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

