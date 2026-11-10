import React from 'react';
import CalendlyBooking from '../components/CalendlyBooking';
import { Mail, Clock, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact({ onShowToast }) {
  return (
    <main className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Direct Scheduling &amp; Inquiry
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-dark-900 tracking-tight mb-4">
            Let's talk about your next <span className="text-gradient">executive milestone.</span>
          </h1>
          <p className="text-base sm:text-lg text-dark-600">
            Select an available date below to book your complimentary 15-minute 1:1 strategy discovery call with Priya.
          </p>
        </div>

        {/* Embedded Calendly Component */}
        <div className="mb-20">
          <CalendlyBooking
            onBookingComplete={() => {
              if (onShowToast) {
                onShowToast('Discovery call confirmed! Check your email for Zoom calendar invite.');
              }
            }}
          />
        </div>

        {/* Support Grid: Office Channels & Pre-Call Preparation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Office Channels */}
          <div className="bg-white rounded-3xl p-8 border border-warm-border shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 block mb-2">Direct Channels</span>
            <h3 className="font-heading font-bold text-2xl text-dark-900 mb-4">Executive Office Inquiries</h3>
            <p className="text-sm text-dark-600 leading-relaxed mb-6">
              For keynote speaking, corporate Women's ERG inquiries, press interviews, or corporate invoicing:
            </p>

            <div className="space-y-4 text-sm text-dark-800">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block">Direct Executive Email:</strong>
                  <a href="mailto:priya@priyasharma.co" className="text-brand-600 font-semibold hover:underline">
                    priya@priyasharma.co
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block">Response Time Commitment:</strong>
                  <span className="text-slate-500">All inquiries are reviewed and answered within 24 business hours.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block">Advisory Locations:</strong>
                  <span className="text-slate-500">Offices in San Francisco, CA &amp; New York, NY. Client sessions delivered globally via private Zoom.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pre-Call Checklist */}
          <div className="bg-white rounded-3xl p-8 border border-warm-border shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 block mb-2">Preparation</span>
            <h3 className="font-heading font-bold text-2xl text-dark-900 mb-4">How to Prepare for Your Discovery Call</h3>
            <p className="text-sm text-dark-600 leading-relaxed mb-6">
              To maximize the value of our 15 minutes together, we recommend having clarity around these 3 points:
            </p>

            <div className="space-y-4 text-sm text-dark-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block">1. Identify your #1 current bottleneck:</strong>
                  <span className="text-slate-500">Is it promotion stagnation, meeting visibility, or managing difficult stakeholders?</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block">2. Define your 6–12 month target role:</strong>
                  <span className="text-slate-500">What specific title (VP, SVP, Head of Division) and compensation tier are you pursuing?</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block">3. Check your corporate L&amp;D sponsorship:</strong>
                  <span className="text-slate-500">Determine whether your company offers executive coaching or leadership development reimbursement.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

