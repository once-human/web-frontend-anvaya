import { Hero } from '@/components/landing/Hero';
import { CategoriesSection } from '@/components/landing/CategoriesSection';
import { Header } from '@/components/Header';
import { HowItWorks } from '@/components/landing/HowItWorks';

export default function HomePage() {
  return (
    <main className="bg-surface text-surface-on min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <CategoriesSection />
    </main>
  );
}
