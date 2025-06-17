'use client';

import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header
      className="bg-surface elevation-1 sticky top-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Placeholder */}
      <div className="flex items-center space-x-2">
        {/* Replace with actual logo SVG/Image later */}
        <div className="bg-primary text-primary-on flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold">
          EM
        </div>
        <span className="font-display text-surface-on text-xl font-semibold">
          EM Platform
        </span>
      </div>

      {/* Navigation / Auth Buttons */}
      <nav className="flex items-center space-x-4">
        <button className="text-surface-on hover:bg-surface-variant rounded-full px-4 py-2 transition">
          Log In
        </button>
        <button className="bg-primary text-primary-on rounded-full px-4 py-2 font-medium transition hover:opacity-90">
          Sign Up
        </button>
      </nav>
    </motion.header>
  );
};
