'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="bg-surface-container dark:bg-dark-surface-container flex flex-col items-center justify-center px-6 py-24 text-center">
      <motion.h1
        className="font-display text-primary mb-6 text-4xl font-bold md:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Plan Memorable Events
        <br />
        with Verified Vendors
      </motion.h1>

      <motion.p
        className="text-surface-on-muted dark:text-dark-surface-on-muted mb-8 max-w-xl text-lg md:text-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Discover top-rated decorators, caterers, photographers, and more — all
        verified by our team, trusted by your city.
      </motion.p>

      <motion.div
        className="flex flex-col gap-4 md:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button className="bg-primary text-primary-on rounded-full px-6 py-3 font-medium transition hover:opacity-90">
          Find Vendors
        </button>
        <button className="border-outline dark:border-dark-outline text-surface-on dark:text-dark-surface-on hover:bg-surface-variant dark:hover:bg-dark-surface-variant rounded-full border px-6 py-3 transition">
          Explore Services
        </button>
      </motion.div>
    </section>
  );
};
