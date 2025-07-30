import React from 'react';
import { 
  FileText, 
  Headphones, 
  Globe2, 
  BookOpen, 
  ArrowRight,
  Check
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t('services.notarized.title'),
      description: t('services.notarized.desc'),
      features: ['Birth Certificate', 'Marriage Certificate', 'Diploma', 'Passport', 'Business License'],
      color: 'blue',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Headphones,
      title: t('services.interpretation.title'),
      description: t('services.interpretation.desc'),
      features: ['Conference Interpretation', 'Business Meetings', 'Court Interpretation', 'Medical Interpretation', 'Escort Interpretation'],
      color: 'green',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Globe2,
      title: t('services.legalization.title'),
      description: t('services.legalization.desc'),
      features: ['Consular Legalization', 'Apostille Services', 'Embassy Authentication', 'Document Certification', 'Visa Support'],
      color: 'purple',
      image: 'https://images.pexels.com/photos/7688214/pexels-photo-7688214.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: BookOpen,
      title: t('services.specialized.title'),
      description: t('services.specialized.desc'),
      features: ['Technical Translation', 'Medical Translation', 'Legal Translation', 'Financial Translation', 'Marketing Translation'],
      color: 'orange',
      image: 'https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; bgLight: string; border: string }> = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        bgLight: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-600',
        bgLight: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        bgLight: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-600',
        bgLight: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-200 dark:border-orange-800'
      }
    };
    return colors[color] || colors.blue;
  };

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We provide comprehensive translation and interpretation services to meet all your business and personal needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className={`absolute top-4 left-4 p-3 ${colorClasses.bg} rounded-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className={`text-2xl font-bold ${colorClasses.text} dark:text-white mb-4`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className={`w-5 h-5 ${colorClasses.text} flex-shrink-0`} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={scrollToQuote}
                    className={`group w-full ${colorClasses.bgLight} ${colorClasses.border} border-2 ${colorClasses.text} hover:${colorClasses.bg} hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center`}
                  >
                    Get Quote
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages We Support */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Languages We Support
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { lang: 'English', flag: '🇺🇸' },
              { lang: 'Chinese', flag: '🇨🇳' },
              { lang: 'Japanese', flag: '🇯🇵' },
              { lang: 'Korean', flag: '🇰🇷' },
              { lang: 'Thai', flag: '🇹🇭' },
              { lang: 'French', flag: '🇫🇷' },
              { lang: 'German', flag: '🇩🇪' },
              { lang: 'Russian', flag: '🇷🇺' },
              { lang: 'Spanish', flag: '🇪🇸' },
              { lang: 'Italian', flag: '🇮🇹' },
              { lang: 'Portuguese', flag: '🇵🇹' },
              { lang: 'Arabic', flag: '🇸🇦' }
            ].map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={index}
                className="flex items-center space-x-2 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl">{item.flag}</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">{item.lang}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </AnimatePresence>
  );
};

export default Services;