import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowRight, Calendar, Sparkles } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Priya' },
    { id: 'services', label: 'Services & Programs' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sleek Top Reading Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-600 via-amber-500 to-brand-400 origin-left z-50 pointer-events-none"
      />

      {/* Top Announcement Bar */}
      <div className="bg-dark-900 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-white/5 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
              <Sparkles className="w-3 h-3 mr-1 text-brand-400" /> Q2 Enrollment Open
            </span>
            <span className="hidden sm:inline">Now accepting applications for Q2 Executive Cohort &amp; 1:1 Advisory (3 spots remaining)</span>
          </div>
          <button 
            onClick={onOpenBooking}
            className="hidden sm:flex items-center gap-1 text-brand-300 hover:text-white font-medium transition-colors"
          >
            Claim Your Discovery Call <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-warm-bg/90 backdrop-blur-xl border-b border-warm-border/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex flex-col text-left group"
          >
            <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-dark-900 group-hover:text-brand-600 transition-colors">
              PRIYA SHARMA
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-brand-600 -mt-1">
              Women's Leadership Coach
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  activePage === link.id
                    ? 'text-brand-600'
                    : 'text-dark-700 hover:text-brand-600'
                }`}
              >
                {link.label}
                {activePage === link.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-glow transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Discovery Call
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-dark-800 hover:bg-warm-subtle border border-warm-border transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-dark-900/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex flex-col">
                    <span className="font-heading font-extrabold text-lg text-dark-900">PRIYA SHARMA</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-600">Leadership Coach</span>
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="p-1.5 rounded-lg text-slate-400 hover:text-dark-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  {navLinks.map((link, idx) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                      onClick={() => handleNavClick(link.id)}
                      className={`text-left text-lg font-semibold py-2.5 px-3 rounded-xl transition-colors ${
                        activePage === link.id
                          ? 'bg-brand-50 text-brand-600 font-bold'
                          : 'text-dark-800 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-glow transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Free Discovery Call
                </button>
                <p className="text-xs text-slate-500 text-center mt-3">
                  15-min 1:1 strategy session • 100% confidential
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
