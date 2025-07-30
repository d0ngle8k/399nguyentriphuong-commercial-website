import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('contact.title')}
          </h2>
    
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('contact.address')}
                </p>
                <a 
                  href="https://www.google.com/maps/place/399+Nguy%E1%BB%85n+Tri+Ph%C6%B0%C6%A1ng,+Ph%C6%B0%E1%BB%9Dng+8,+Qu%E1%BA%ADn+10,+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.763412,106.667875,16z/data=!4m6!3m5!1s0x31752ee429450c95:0x4166b63ccf996a0c!8m2!3d10.7634115!4d106.6678745!16s%2Fg%2F11j0srvjrf?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1 cursor-pointer"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {t('contact.phone')}
                </h4>
                <div className="space-y-1">
                  <a href="tel:0968977345" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    0968 977 345
                  </a>
                  <a href="tel:0906725999" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    0906 725 999
                  </a>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  (Zalo available)
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {t('contact.email')}
                </h4>
                <a 
                  href="mailto:tovannhan.vn@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  tovannhan@gmail.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {t('contact.hours')}
                </h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-300">
                  <p>{t('contact.hours.weekday')}</p>
                  <p>{t('contact.hours.saturday')}</p>
                  <p>{t('contact.hours.sunday')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="+84 123 456 789"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="interpretation">Interpretation Services</option>
                  <option value="legalization">Consular Legalization</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell us about your translation needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.474356693199!2d106.66527419999999!3d10.763412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16!3m3!1m2!1s0x31752ee429450c95%3A0x4166b63ccf996a0c!2s399%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Ph%C6%B0%E1%BB%9Dng%208%2C%20Qu%E1%BA%ADn%2010%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1690684439133!5m2!1sen!2s"
              width="100%"
              height="450"
              className="w-full h-96 border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - 399 Nguyen Tri Phuong"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;