'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    icon: '🔍',
    title: 'Discover Vendors',
    description:
      'Browse our curated list of verified vendors by category, city, or event type.',
  },
  {
    icon: '✅',
    title: 'Verify Quality',
    description:
      'Each vendor undergoes a thorough verification process, ensuring top-notch service.',
  },
  {
    icon: '🤝',
    title: 'Connect & Plan',
    description:
      'Reach out directly to vendors to discuss details and plan your memorable event.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-surface dark:bg-dark-surface mx-auto max-w-6xl px-6 py-20 text-center">
      <motion.h2
        className="font-title text-surface-on dark:text-dark-surface-on mb-12 text-3xl font-semibold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        How EM Platform Works
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="bg-surface-container-low dark:bg-dark-surface-container-low elevation-1 flex flex-col items-center rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <span className="mb-4 text-5xl">{step.icon}</span>
            <h3 className="font-title text-surface-on dark:text-dark-surface-on mb-3 text-xl font-semibold">
              {step.title}
            </h3>
            <p className="text-surface-on-muted dark:text-dark-surface-on-muted text-base">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
