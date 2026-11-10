import React from 'react';
import Packages from '../components/Packages';
import Speaking from '../components/Speaking';
import { Calendar, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function Services({ onOpenBooking, onShowToast }) {
  const curriculum = [
    { weeks: 'Weeks 01–02', title: 'Executive Identity & Perception Audit', desc: 'Decode how key stakeholders currently perceive your leadership capabilities; shed low-value execution habits.' },
    { weeks: 'Weeks 03–04', title: 'Boardroom Presence & Framing', desc: 'Vocal resonance, pacing, and eliminating qualifiers to deliver executive-level strategic summaries.' },
    { weeks: 'Weeks 05–06', title: 'Meeting Real Estate & Interruption Mastery', desc: 'Techniques to redirect interruptions, hold conversational space, and assert controversial ideas with composure.' },
    { weeks: 'Weeks 07–08', title: 'Corporate Politics & Sponsorship', desc: 'Identify who holds real influence in succession decisions; build internal coalitions without playing sleazy games.' },
    { weeks: 'Weeks 09–10', title: 'High-Trust Delegation & Scale', desc: 'Reclaim 15 hours per week through autonomous team delegation frameworks and managing difficult direct reports.' },
    { weeks: 'Weeks 11–12', title: 'Promotion Case & Negotiation', desc: 'Draft your formal executive business case, navigate compensation reviews, and secure your long-term VP seat.' },
  ];

  return (
    <main className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Programs &amp; Engagements
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-dark-900 tracking-tight mb-4">
            Targeted coaching architectures engineered for <span className="text-gradient">senior leadership scale.</span>
          </h1>
          <p className="text-base sm:text-lg text-dark-600">
            Whether you require confidential 1:1 strategic counsel, a transformative 12-week cohort mastermind, or corporate training for your enterprise, our programs are grounded in executive realities.
          </p>
        </div>

        {/* 1:1 Executive Advisory Detailed Box */}
        <section className="bg-white rounded-3xl border border-warm-border p-8 sm:p-12 shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Private Advisory</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark-900">
                1:1 Executive Advisory Partnership
              </h2>
              <p className="text-dark-600 leading-relaxed text-sm sm:text-base">
                A confidential, high-touch strategic partnership for Directors and Vice Presidents navigating critical career inflection points: an upcoming executive promotion review, high-stakes stakeholder negotiations, or managing toxic boardroom dynamics.
              </p>

              <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200/60 flex items-center justify-between flex-wrap gap-2">
                <span className="font-heading font-bold text-dark-900 text-base sm:text-lg">
                  $3,500 / 3-Month Engagement
                </span>
                <span className="text-xs font-semibold text-brand-700">
                  Or 3 monthly payments of $1,250
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-dark-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>6x 60-min Bi-Weekly Video Deep Dives</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-dark-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>Confidential WhatsApp/Voice Hotline</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-dark-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>360-Degree Stakeholder Perception Audit</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-dark-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>Live Rehearsals for C-Suite Presentations</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-glow transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Free Discovery Call
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-warm-subtle p-6 sm:p-8 rounded-2xl border border-warm-border">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Ideal Candidates</span>
              <ul className="space-y-3 text-xs sm:text-sm text-dark-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold">•</span>
                  <span>Senior Directors facing a critical promotion review within 6 months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold">•</span>
                  <span>New Vice Presidents needing to establish authority with senior male peers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold">•</span>
                  <span>Leaders navigating complex lateral rivalries or stakeholder friction.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 12-Week Ascend Curriculum */}
        <section className="bg-dark-900 text-white rounded-3xl p-8 sm:p-14 mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-300 block mb-2">Signature Mastermind</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
              The Ascend Accelerator&trade; 12-Week Curriculum
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              A structured, high-intensity curriculum designed for high-potential female leaders ready to build sustainable executive gravitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {curriculum.map((c) => (
              <div key={c.weeks} className="bg-dark-800 p-6 rounded-2xl border border-white/10">
                <span className="text-xs font-bold text-brand-300 uppercase tracking-wider block mb-2">
                  {c.weeks}
                </span>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  {c.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-dark-800/80 border border-white/10">
            <div>
              <strong className="block text-lg font-heading text-white">Investment: $1,850 or 3 x $650</strong>
              <span className="text-xs text-slate-400">Includes 12 live mastermind calls, 2 private 1:1 milestone sessions &amp; lifetime network access.</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-glow transition-all whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Discovery Call
            </button>
          </div>
        </section>

        {/* 3 Packages with Prices */}
        <Packages onOpenBooking={onOpenBooking} />

        {/* Corporate Speaking & Inquiries */}
        <Speaking onOpenBooking={onOpenBooking} onShowToast={onShowToast} />

      </div>
    </main>
  );
}

