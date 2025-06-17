'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
  return (
    <motion.footer
      className="bg-surface-container-low dark:bg-dark-surface-container-low text-surface-on dark:text-dark-surface-on mt-20 w-full px-6 py-12 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {/* Column 1: Logo & Tagline */}
        <div className="flex flex-col items-start">
          <div className="mb-4 flex items-center space-x-2">
            <div className="bg-primary text-primary-on flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold">
              EM
            </div>
            <span className="font-display text-xl font-semibold">
              EM Platform
            </span>
          </div>
          <p className="text-surface-on-muted dark:text-dark-surface-on-muted text-sm">
            Your trusted partner for memorable event planning.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-title mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Explore Vendors
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                List Your Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Support */}
        <div>
          <h3 className="font-title mb-4 text-lg font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media (Placeholder) */}
        <div>
          <h3 className="font-title mb-4 text-lg font-semibold">Connect</h3>
          <div className="flex space-x-4">
            {/* Replace with actual social media icons/links */}
            <a
              href="#"
              className="text-surface-on dark:text-dark-surface-on hover:text-primary transition"
            >
              FB
            </a>
            <a
              href="#"
              className="text-surface-on dark:text-dark-surface-on hover:text-primary transition"
            >
              IG
            </a>
            <a
              href="#"
              className="text-surface-on dark:text-dark-surface-on hover:text-primary transition"
            >
              TW
            </a>
          </div>
        </div>
      </div>

      <div className="border-outline/20 dark:border-dark-outline/20 text-surface-on-muted dark:text-dark-surface-on-muted mt-12 border-t pt-8 text-center text-sm">
        © {new Date().getFullYear()} EM Platform. All rights reserved.
      </div>
    </motion.footer>
  );
};
