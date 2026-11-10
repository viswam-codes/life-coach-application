import React from 'react';
import { Calendar } from 'lucide-react';

export default function Footer({ onNavigate, onOpenBooking }) {
  return (
    <footer className="bg-dark-900 text-slate-300 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                PRIYA SHARMA
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
                Women's Leadership Coach
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Executive coaching and strategic career acceleration for ambitious women ready to break the director-to-VP ceiling and lead with unshakeable boardroom authority.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-glow transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Free Discovery Call
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-brand-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-brand-300 transition-colors">
                  About Priya
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-brand-300 transition-colors">
                  Services &amp; Programs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-brand-300 transition-colors">
                  Contact &amp; Discovery Call
                </button>
              </li>
            </ul>
          </div>

          {/* Programs Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Signature Offerings
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-brand-300 transition-colors">
                  1:1 Executive Advisory Partnership
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-brand-300 transition-colors">
                  The Ascend Accelerator&trade; (12-Week Cohort)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-brand-300 transition-colors">
                  Corporate ERG Workshops &amp; Keynotes
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-brand-300 transition-colors">
                  Schedule Free 15-Minute Strategy Session
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Priya Sharma Coaching LLC. All rights reserved.
          </div>
          <div>
            Designed for high-achieving women stepping into the leadership roles they have earned.
          </div>
        </div>

      </div>
    </footer>
  );
}

