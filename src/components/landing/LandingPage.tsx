import React, { Suspense, lazy } from 'react';
import { SeoHead } from '../seo/SeoHead';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Main, Section, SkipLink } from '../layout/SemanticLayout';
import { HeroSection } from './sections/HeroSection';
import { PromotionsSection } from './sections/PromotionsSection';
import { SitePreloader } from '../loading/SitePreloader';

// Lazy load heavy sections for Performance
const ProductShowcase = lazy(() => import('./sections/ProductShowcase').then(m => ({ default: m.ProductShowcase })));
const NovaSection = lazy(() => import('./sections/NovaSection').then(m => ({ default: m.NovaSection })));
const EcosystemSection = lazy(() => import('./sections/EcosystemSection').then(m => ({ default: m.EcosystemSection })));
const ServicesSection = lazy(() => import('./sections/ServicesSection').then(m => ({ default: m.ServicesSection })));
const AboutSection = lazy(() => import('./sections/AboutSection').then(m => ({ default: m.AboutSection })));
const ContactSection = lazy(() => import('./sections/ContactSection').then(m => ({ default: m.ContactSection })));

// Re-export Navbar/Footer for backward compatibility with other pages
export { Navbar, Footer };

export const LandingPage = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  return (
    <div className="min-h-screen bg-st-bonewhite font-ui selection:bg-st-orange selection:text-white">
      <SkipLink />
      <Navbar onNavigate={onNavigate} />
      
      <Main className="bg-st-bonewhite">
        {/* Hero is loaded eagerly for LCP */}
        <HeroSection onNavigate={onNavigate} />
        
        <Suspense fallback={<SitePreloader />}>
          <Section>
            <NovaSection />
          </Section>
        </Suspense>
        
        <Suspense fallback={<SitePreloader />}>
          <Section>
            <EcosystemSection />
          </Section>
        </Suspense>

        <Suspense fallback={<SitePreloader />}>
          <Section>
            <ProductShowcase />
          </Section>
        </Suspense>
        
        <Suspense fallback={<SitePreloader />}>
          <Section>
            <ServicesSection />
          </Section>
        </Suspense>
        
        <Suspense fallback={<SitePreloader />}>
          <Section>
            <AboutSection />
          </Section>
        </Suspense>

        <Section className="py-0">
          <PromotionsSection onNavigate={onNavigate} />
        </Section>
        
        <Suspense fallback={<SitePreloader />}>
          <Section>
            <ContactSection />
          </Section>
        </Suspense>
      </Main>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
