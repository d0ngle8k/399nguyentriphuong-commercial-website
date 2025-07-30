import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
            <Hero />
            <Services />
            <WhyChooseUs />
            <QuoteForm />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;