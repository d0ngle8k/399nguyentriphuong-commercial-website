import React, { useEffect, Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero'));
const Services = React.lazy(() => import('./components/Services'));
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs'));
const QuoteForm = React.lazy(() => import('./components/QuoteForm'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Văn phòng dịch thuật 399 - Professional Translation Services | Dịch Thuật Chuyên Nghiệp';
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Professional translation and interpretation services in Ho Chi Minh City. Notarized translation, consular legalization, specialized translation for 50+ languages. Contact us for fast, accurate, and secure translation services.';
    document.head.appendChild(metaDescription);

    // Add keywords meta
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'translation services, dịch thuật, notarized translation, phiên dịch, consular legalization, Ho Chi Minh City, HCMC, professional translation, document translation, interpretation services';
    document.head.appendChild(metaKeywords);

    // Add viewport meta for mobile responsiveness
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
              <Hero />
            </Suspense>
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
              <Services />
            </Suspense>
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
              <WhyChooseUs />
            </Suspense>
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
              <QuoteForm />
            </Suspense>
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;