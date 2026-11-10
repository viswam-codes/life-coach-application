import React from 'react';
import { motion } from 'framer-motion';

export default function TrustBar() {
  const logos = [
    'Google',
    'McKinsey & Company',
    'Stripe',
    'Salesforce',
    'Goldman Sachs',
    'Microsoft',
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-10 bg-white border-y border-warm-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6"
        >
          Trusted by female executives &amp; leaders driving impact at
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-16 opacity-80"
        >
          {logos.map((logo) => (
            <motion.span
              key={logo}
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: '#0f172a' }}
              className="font-heading font-extrabold text-lg sm:text-xl text-slate-500 transition-colors select-none cursor-default"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
