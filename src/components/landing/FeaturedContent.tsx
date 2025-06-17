'use client';

import { motion } from 'framer-motion';

const featuredItems = [
  {
    id: 1,
    title: 'Luxury Wedding Planners',
    description:
      'Curated list of top-tier wedding planners for your dream day.',
    image: 'https://via.placeholder.com/300x200/6750A4/FFFFFF?text=Wedding',
  },
  {
    id: 2,
    title: 'Corporate Event Caterers',
    description:
      'Professional caterers specializing in large-scale corporate events.',
    image: 'https://via.placeholder.com/300x200/FFF3E0/1C1B1F?text=Catering',
  },
  {
    id: 3,
    title: 'Award-Winning Photographers',
    description:
      "Capture every moment with the city's most acclaimed photographers.",
    image: 'https://via.placeholder.com/300x200/EDE7F6/1C1B1F?text=Photography',
  },
  {
    id: 4,
    title: 'Live Music Bands',
    description:
      'From jazz to rock, find the perfect live band for any occasion.',
    image: 'https://via.placeholder.com/300x200/F1F8E9/1C1B1F?text=Music',
  },
];

export const FeaturedContent = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        className="font-title text-surface-on mb-12 text-center text-3xl font-semibold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Featured Vendors & Events
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featuredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-surface-container-low shadow-elevation-1 hover:shadow-elevation-3 overflow-hidden rounded-xl transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-surface-on mb-2 text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-surface-on-muted text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
