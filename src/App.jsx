import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage('');
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleOpenBooking = () => {
    if (activePage === 'contact') {
      const el = document.getElementById('discovery-booking');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-warm-bg text-dark-900 selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Dynamic Page Views */}
      <div className="flex-grow">
        {activePage === 'home' && (
          <Home
            onOpenBooking={handleOpenBooking}
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onShowToast={showToast}
          />
        )}
        {activePage === 'about' && (
          <About
            onOpenBooking={handleOpenBooking}
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
        {activePage === 'services' && (
          <Services
            onOpenBooking={handleOpenBooking}
            onShowToast={showToast}
          />
        )}
        {activePage === 'contact' && (
          <Contact
            onShowToast={showToast}
          />
        )}
      </div>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        onBookingComplete={() => {
          showToast('Discovery call confirmed! Zoom invite sent to your inbox.');
        }}
      />

      {/* Footer */}
      <Footer
        onNavigate={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={handleOpenBooking}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-dark-900 text-white shadow-2xl border-l-4 border-l-emerald-500 max-w-md text-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

