import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Video, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

export default function CalendlyBooking({ onBookingComplete }) {
  const [selectedDay, setSelectedDay] = useState(12);
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [timezone, setTimezone] = useState('Eastern Time (US & Canada)');
  const [step, setStep] = useState(1); // 1 = calendar, 2 = intake form, 3 = confirmation
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    roleCompany: '',
    linkedin: '',
    challenge: 'promotion',
    goal: '',
  });

  const availableDays = [11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30];
  const timeSlots = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleSelectSlot = (time) => {
    setSelectedTime(time);
    setStep(2);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      if (onBookingComplete) {
        onBookingComplete(formData);
      }
    }, 700);
  };

  return (
    <div className="bg-white rounded-3xl border border-warm-border shadow-executive overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
        
        {/* Left Column: Host & Meeting Details */}
        <div className="lg:col-span-4 bg-warm-subtle/80 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-warm-border flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/assets/images/coach-priya.jpg"
                alt="Priya Sharma"
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-brand-500/20 shadow-md"
              />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Executive Coach</span>
                <h4 className="font-heading font-extrabold text-lg text-dark-900 leading-tight">Priya Sharma, PCC</h4>
              </div>
            </div>

            <h3 className="font-heading font-bold text-xl sm:text-2xl text-dark-900 mb-3">
              15-Min Executive Strategy Discovery Call
            </h3>

            <div className="space-y-3 mb-6 text-sm text-dark-600">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>15 Minutes Duration</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Video className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Private Zoom Video Conference</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-emerald-700 font-medium">100% Confidential Career Advisory</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-warm-border/80 pt-4">
              We'll pinpoint where you currently stand in your corporate hierarchy, uncover your #1 bottleneck, and determine whether 1:1 Executive Advisory or the Ascend Accelerator will bridge your gap to the C-suite.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-warm-border/60">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Confidentiality Guarantee</span>
            <p className="text-xs text-slate-500">Your current employer and details are never disclosed under any circumstances.</p>
          </div>
        </div>

        {/* Right Column: Dynamic Steps */}
        <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Date & Time Picker */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-3 border-b border-warm-border">
                  <h4 className="font-heading font-bold text-lg text-dark-900">
                    Select a Date &amp; Time
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-semibold text-sm text-dark-700">November 2026</span>
                    <div className="flex gap-1">
                      <button className="p-1 rounded-full border border-warm-border hover:bg-slate-50 text-slate-600" aria-label="Previous month">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button className="p-1 rounded-full border border-warm-border hover:bg-slate-50 text-slate-600" aria-label="Next month">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Calendar Matrix */}
                  <div className="md:col-span-7">
                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                        <span key={d} className="text-xs font-bold text-slate-400 py-1">{d}</span>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center">
                      {daysInMonth.map((day) => {
                        const isAvailable = availableDays.includes(day);
                        const isSelected = selectedDay === day;

                        return (
                          <button
                            key={day}
                            type="button"
                            disabled={!isAvailable}
                            onClick={() => setSelectedDay(day)}
                            className={`aspect-square flex items-center justify-center text-sm font-semibold rounded-full transition-all ${
                              isSelected
                                ? 'bg-brand-600 text-white shadow-glow scale-105'
                                : isAvailable
                                ? 'bg-brand-50 text-brand-900 hover:bg-brand-100 font-bold'
                                : 'text-slate-300 cursor-not-allowed'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Your Timezone
                      </label>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-warm-subtle border border-warm-border rounded-xl px-3 py-2 text-dark-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      >
                        <option value="Eastern Time (US & Canada)">Eastern Time (US &amp; Canada)</option>
                        <option value="Central Time (US & Canada)">Central Time (US &amp; Canada)</option>
                        <option value="Pacific Time (US & Canada)">Pacific Time (US &amp; Canada)</option>
                        <option value="Greenwich Mean Time (GMT)">Greenwich Mean Time (GMT / UK)</option>
                        <option value="Central European Time (CET)">Central European Time (CET)</option>
                        <option value="India Standard Time (IST)">India Standard Time (IST)</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeslots List */}
                  <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-warm-border pt-4 md:pt-0 md:pl-6">
                    <span className="block text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">
                      Available on Nov {selectedDay}, 2026
                    </span>

                    <div className="space-y-2.5 max-h-[290px] overflow-y-auto pr-1">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleSelectSlot(time)}
                          className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold border border-brand-500/40 text-brand-700 bg-white hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-150 flex items-center justify-between group shadow-sm"
                        >
                          <span>{time}</span>
                          <span className="text-xs text-brand-400 group-hover:text-white transition-colors">Select &rarr;</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Intake Form */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-brand-600 mb-4 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Change Selected Date/Time
                </button>

                <div className="p-3.5 rounded-2xl bg-brand-50 border border-brand-200/60 mb-6 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-brand-900">
                    Nov {selectedDay}, 2026 at {selectedTime} ({timezone})
                  </span>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-dark-800 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-dark-800 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-dark-800 mb-1">Current Title &amp; Organization *</label>
                      <input
                        type="text"
                        required
                        value={formData.roleCompany}
                        onChange={(e) => setFormData({ ...formData, roleCompany: e.target.value })}
                        placeholder="Director of Product at Stripe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-dark-800 mb-1">LinkedIn Profile (Optional)</label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark-800 mb-1">
                      Primary Leadership Roadblock *
                    </label>
                    <select
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50 text-dark-900"
                    >
                      <option value="promotion">The Promotion Paradox: Passed over for VP/Executive despite high results</option>
                      <option value="visibility">Executive Visibility: Being talked over, softened language, lack of C-suite presence</option>
                      <option value="teams">Managing High-Stakes Teams: Burnout from execution, delegation roadblocks, politics</option>
                      <option value="sponsorship">Sponsorship: Need influential champions advocate behind closed doors</option>
                      <option value="negotiation">Strategic Salary &amp; Equity Negotiation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark-800 mb-1">
                      What does career success look like 6 months from now?
                    </label>
                    <textarea
                      rows={2}
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      placeholder="e.g. Appointed VP of Engineering, commanding executive committee meetings, 15 hours saved per week..."
                      className="w-full px-3.5 py-2 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-warm-subtle/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full text-base font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-glow transition-all duration-200"
                  >
                    {isSubmitting ? 'Confirming Your Slot...' : 'Schedule Free Discovery Call'}
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 3: Booking Confirmation */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark-900 mb-2">
                  Discovery Call Confirmed!
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                  A private calendar invitation with Zoom details has been dispatched to <strong className="text-dark-800">{formData.email || 'your email'}</strong>.
                </p>

                <div className="max-w-md mx-auto bg-warm-subtle rounded-2xl p-5 text-left text-sm space-y-2 border border-warm-border mb-6">
                  <div><strong className="text-dark-800">Date &amp; Time:</strong> Nov {selectedDay}, 2026 at {selectedTime} ({timezone})</div>
                  <div><strong className="text-dark-800">Host:</strong> Priya Sharma (Executive Leadership Coach)</div>
                  <div><strong className="text-dark-800">Format:</strong> 1:1 Video via Zoom (link inside invite)</div>
                </div>

                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-2.5 rounded-full border border-warm-border text-sm font-semibold text-dark-700 hover:bg-slate-50 transition-colors"
                >
                  Schedule Another Appointment
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

