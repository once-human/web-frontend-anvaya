'use client';

import { motion } from 'framer-motion';

export const VendorCTA = () => {
  return (
    <section className="bg-primary text-primary-on flex flex-col items-center justify-center px-6 py-20 text-center">
      <motion.h2
        className="font-display mb-6 max-w-2xl text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Are You a Top-Tier Vendor?
      </motion.h2>
      <motion.p
        className="mb-8 max-w-xl text-lg opacity-90 md:text-xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Join our exclusive network of verified professionals and connect with
        event planners seeking your expertise.
      </motion.p>
      <motion.button
        className="bg-primary-on text-primary rounded-full px-8 py-4 text-lg font-semibold transition hover:bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        List Your Services
      </motion.button>
    </section>
  );
};
