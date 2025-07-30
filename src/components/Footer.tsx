import React from 'react';
import { 
  Languages, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Youtube,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Languages className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Văn phòng dịch thuật 399</h3>
                
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>{t('contact.address')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <div>0968 977 345 - 0906 725 999</div>
                  <div className="text-sm text-gray-400">(Zalo available)</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:tovannhan@gmail.com" className="hover:text-blue-400 transition-colors">
                  tovannhan@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: t('nav.home'), id: 'hero' },
                { label: t('nav.services'), id: 'services' },
                { label: t('nav.about'), id: 'about' },
                { label: t('nav.contact'), id: 'contact' },
                { label: t('nav.quote'), id: 'quote' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Notarized Translation
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Professional Interpretation
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Consular Legalization
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Specialized Translation
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Document Certification
              </li>
            </ul>
          </div>
        </div>

        {/* Working Hours */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('contact.hours')}</h4>
              <div className="space-y-2 text-gray-300">
                <p>{t('contact.hours.weekday')}</p>
                <p>{t('contact.hours.saturday')}</p>
                <p className="text-red-400">{t('contact.hours.sunday')}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-700 p-3 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              <p>&copy; 2025 {t('footer.company')}. All rights reserved. Built by d0ngle8k</p>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="https://d0ngle8k.github.io/" className="hover:text-blue-400 transition-colors text-sm flex items-center space-x-1">
                <span>Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;