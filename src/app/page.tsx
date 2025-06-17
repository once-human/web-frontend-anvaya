import { Hero } from '@/components/landing/Hero';
import { CategoriesSection } from '@/components/landing/CategoriesSection';
import { Header } from '@/components/Header';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { FeaturedContent } from '@/components/landing/FeaturedContent';
import { VendorCTA } from '@/components/landing/VendorCTA';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function HomePage() {
  return (
    <ThemeProvider>
      <main className="bg-surface text-surface-on min-h-screen">
        <Header />
        <Hero />
        <HowItWorks />
        <CategoriesSection />
        <FeaturedContent />
        <VendorCTA />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
