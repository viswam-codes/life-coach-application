import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Challenges from '../components/Challenges';
import SignatureProgram from '../components/SignatureProgram';
import Testimonials from '../components/Testimonials';
import Packages from '../components/Packages';
import Speaking from '../components/Speaking';
import LeadMagnet from '../components/LeadMagnet';
import Faq from '../components/Faq';
import CalendlyBooking from '../components/CalendlyBooking';

export default function Home({ onOpenBooking, onNavigate, onShowToast }) {
  return (
    <main>
      <Hero 
        onOpenBooking={onOpenBooking} 
        onExplorePrograms={() => {
          const el = document.getElementById('signature-program');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} 
      />
      <TrustBar />
      <Challenges onOpenBooking={onOpenBooking} />
      <SignatureProgram onOpenBooking={onOpenBooking} />
      <Testimonials onOpenBooking={onOpenBooking} />
      <Packages onOpenBooking={onOpenBooking} />
      <Speaking onOpenBooking={onOpenBooking} onShowToast={onShowToast} />
      <LeadMagnet onShowToast={onShowToast} />
      <Faq onOpenBooking={onOpenBooking} />

      {/* Embedded Live Scheduling Section on Homepage */}
      <section className="py-20 bg-warm-bg" id="home-booking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700 mb-3">
              Direct Scheduling
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark-900 tracking-tight mb-4">
              Book Your Free Executive Discovery Call
            </h2>
            <p className="text-base sm:text-lg text-dark-600">
              Select an available slot below. In 15 minutes, we will identify your #1 bottleneck and map your path to the executive role you've earned.
            </p>
          </div>

          <CalendlyBooking
            onBookingComplete={() => {
              if (onShowToast) {
                onShowToast('Discovery call confirmed! Zoom details sent to your email.');
              }
            }}
          />
        </div>
      </section>
    </main>
  );
}

