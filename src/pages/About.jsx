import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Award, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenBooking, onNavigate }) {
  const pillars = [
    {
      number: '01',
      title: 'Radical Authenticity',
      desc: 'You do not need to adopt aggressive, loud, or hyper-masculine stereotypes to be taken seriously. True executive presence stems from calm conviction, intentional stillness, and grounded self-possession.',
    },
    {
      number: '02',
      title: 'Strategic Visibility',
      desc: 'It is not bragging if you are reporting business facts. We teach you how to translate your team’s execution wins into strategic narratives that C-suite stakeholders understand, respect, and reward.',
    },
    {
      number: '03',
      title: 'Fierce Boundary Design',
      desc: 'Saying yes to every low-impact committee or administrative task is career suicide. We build the exact scripts you need to gracefully decline non-promotable work and protect your strategic thinking time.',
    },
    {
      number: '04',
      title: 'Sustainable Ambition',
      desc: 'Climbing to the executive suite should not require clinical burnout. We construct high-trust team architectures that allow you to lead with vision while reclaiming 15+ hours each week for your life.',
    },
  ];

  return (
    <main className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700">
              <Sparkles className="w-3.5 h-3.5" /> The Story Behind The Coaching
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-dark-900 tracking-tight leading-[1.12]">
              From Fortune 100 Vice President to <span className="text-gradient">empowering 240+ women leaders.</span>
            </h1>

            <p className="text-base sm:text-lg text-dark-600 leading-relaxed">
              I spent 14 years climbing the corporate hierarchy—first as a software engineer, then as an engineering director, and ultimately as Vice President of Technology. I learned firsthand that the technical competence that gets you into management is fundamentally different from the unwritten political rules that get you into the C-suite.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-glow transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white aspect-[4/5] bg-dark-900 relative">
              <img
                src="/assets/images/coach-priya.jpg"
                alt="Priya Sharma"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80">
                <strong className="block font-heading font-extrabold text-dark-900 text-lg">Priya Sharma, PCC</strong>
                <span className="text-xs text-slate-500">ICF Professional Certified Coach • Ex-Fortune 100 VP</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Deep Narrative Section */}
        <section className="bg-white rounded-3xl border border-warm-border p-8 sm:p-14 shadow-sm mb-24 max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 block mb-2">My Journey &amp; Mission</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark-900 mb-6">
            The &ldquo;Good Girl&rdquo; Trap and the Myth of Pure Meritocracy
          </h2>

          <div className="space-y-5 text-base text-dark-600 leading-relaxed">
            <p>
              For the first decade of my corporate career, I operated under a comforting illusion: <em>if I just do extraordinary work, never complain, and exceed all performance metrics, the promotion will take care of itself.</em>
            </p>
            <p>
              I took on the messy projects nobody else wanted. I mentored junior employees, organized team offsites, and routinely stayed logged on past 9 PM. But year after year, during executive talent calibrations, I saw louder male colleagues—who delivered half the tangible output—get tapped for senior director and VP appointments.
            </p>

            <div className="p-6 rounded-2xl bg-warm-subtle border-l-4 border-l-brand-600 font-medium text-dark-800 italic">
              &ldquo;When I finally asked my executive mentor why I was passed over, he told me: 'Priya, you're our most reliable executor. If we promote you into strategic leadership, who's going to run the machine?' That sentence changed my entire life.&rdquo;
            </div>

            <p>
              I realized that high performance is table stakes. Senior leadership selection isn’t based on your past execution checklist; it’s based on <strong>strategic visibility, executive presence, and senior sponsorship</strong>.
            </p>
            <p>
              I completely revamped my playbook. I stopped volunteering for invisible &ldquo;office housework&rdquo;. I re-engineered how I presented to the executive committee—focusing on revenue levers rather than tactical details. Within 18 months, I was appointed Vice President of Technology, leading a 140-person global division.
            </p>
            <p>
              In 2020, after years of informally mentoring rising women leaders, I founded my private coaching practice. My mission is simple: to ensure ambitious, brilliant women never have their brilliance silenced by the invisible corporate playbook.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-glow transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Discovery Call with Priya
            </button>
          </div>
        </section>

        {/* 4 Pillars Section */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700 mb-3">
              Coaching Philosophy
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-dark-900 tracking-tight mb-4">
              The 4 Pillars of Unapologetic Leadership
            </h2>
            <p className="text-base text-dark-600">
              You don’t have to become someone you’re not to command the boardroom. Here are the core convictions that anchor our work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pil) => (
              <div
                key={pil.number}
                className="bg-white rounded-3xl p-8 border border-warm-border shadow-sm hover:shadow-executive transition-all duration-300"
              >
                <span className="font-heading font-extrabold text-3xl text-brand-300 block mb-3">
                  {pil.number}
                </span>
                <h3 className="font-heading font-bold text-xl text-dark-900 mb-2">
                  {pil.title}
                </h3>
                <p className="text-sm text-dark-600 leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Repeated CTA Banner */}
        <div className="bg-white rounded-3xl border border-warm-border p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-dark-900 mb-1">
              Ready to claim your seat at the table?
            </h3>
            <p className="text-dark-600 text-sm sm:text-base">
              Book a free 15-minute 1:1 strategy discovery call to evaluate your goals.
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
    </main>
  );
}

