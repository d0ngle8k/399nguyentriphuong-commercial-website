import React from 'react';
import { 
  Clock, 
  Shield, 
  Users, 
  Award,
  CheckCircle,
  Star
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('why.experience.title'),
      description: t('why.experience.desc'),
      color: 'blue',
      stat: '15+'
    },
    {
      icon: Users,
      title: t('why.languages.title'),
      description: t('why.languages.desc'),
      color: 'green',
      stat: '50+'
    },
    {
      icon: Shield,
      title: t('why.security.title'),
      description: t('why.security.desc'),
      color: 'purple',
      stat: '100%'
    },
    {
      icon: Clock,
      title: t('why.speed.title'),
      description: t('why.speed.desc'),
      color: 'orange',
      stat: '15min'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30',
      green: 'text-green-600 bg-green-100 dark:bg-green-900/30',
      purple: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30',
      orange: 'text-orange-600 bg-orange-100 dark:bg-orange-900/30'
    };
    return colors[color] || colors.blue;
  };

  const testimonials = [
    {
      name: 'Nguyễn Thị Mai',
      role: 'Individual Client',
      content: 'Dịch vụ tuyệt vời! Nhân viên chuyên nghiệp, giao dịch nhanh chóng và chính xác.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    },
    {
      name: 'John Smith',
      role: 'Business Manager',
      content: 'Excellent service for our international business documents. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    },
    {
      name: 'Lê Văn Tùng',
      role: 'Corporate Client',
      content: 'Đối tác đáng tin cậy cho các dự án dịch thuật lớn. Chất lượng luôn đảm bảo.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'International Student',
      content: 'Fast and accurate translation for my university documents. Good quality overall.',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.5
    },
    {
      name: 'Trần Minh Hoàng',
      role: 'CEO Tech Company',
      content: 'Phục vụ chuyên nghiệp, đúng hạn và giá cả hợp lý. Đã hợp tác nhiều năm.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.5
    },
    {
      name: 'Maria Garcia',
      role: 'Immigration Lawyer',
      content: 'Professional notarized translations for legal documents. Usually meets deadlines.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4
    },
    {
      name: 'Phạm Thị Lan',
      role: 'Medical Professional',
      content: 'Dịch thuật tài liệu y khoa khá chính xác. Đội ngũ có hiểu biết chuyên môn.',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4
    },
    {
      name: 'Zhang Wei',
      role: 'Business Owner',
      content: '翻译服务质量不错，交付及时。推荐给其他中国企业使用！',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.5
    },
    {
      name: 'Nguyễn Văn Đức',
      role: 'Export Manager',
      content: 'Hỗ trợ dịch thuật xuất khẩu tốt. Giúp công ty mở rộng thị trường.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4
    },
    {
      name: 'Sarah Johnson',
      role: 'Academic Researcher',
      content: 'Good technical translations for research papers. Professional service overall.',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.5
    },
    {
      name: 'Hoàng Minh Tuấn',
      role: 'Tour Guide',
      content: 'Phiên dịch du lịch khá tốt, giúp khách hàng có trải nghiệm dễ chịu.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4
    },
    {
      name: 'Lisa Thompson',
      role: 'HR Director',
      content: 'Decent support for employee document translations. Reasonable pricing.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4
    },
    {
      name: 'Cao Thị Hương',
      role: 'Student',
      content: 'Dịch thuật hồ sơ du học nhanh chóng. Giá cả phù hợp với sinh viên.',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.5
    },
    {
      name: 'Michael Brown',
      role: 'Engineer',
      content: 'Technical translation quality is good. Minor issues but overall satisfied.',
      avatar: 'https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4
    },
    {
      name: 'Vũ Thanh Bình',
      role: 'Marketing Manager',
      content: 'Dịch thuật tài liệu marketing sáng tạo. Đội ngũ hiểu được thông điệp.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    },
    {
      name: 'Anna Schmidt',
      role: 'Consultant',
      content: 'Reliable translation service for business documents. Good communication.',
      avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.5
    },
    {
      name: 'Đặng Văn Toàn',
      role: 'Legal Assistant',
      content: 'Dịch thuật pháp lý cẩn thận và chính xác. Hỗ trợ tốt cho công việc.',
      avatar: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.5
    },
    {
      name: 'Jennifer Lee',
      role: 'Project Manager',
      content: 'Consistent quality and timely delivery. Great for ongoing projects.',
      avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('why.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With over 15 years of experience, we have built a reputation for excellence in translation and interpretation services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.stat}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Simple Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit Document', desc: 'Send us your document via email or upload form' },
              { step: '02', title: 'Get Quote', desc: 'Receive detailed quote within 15 minutes' },
              { step: '03', title: 'Translation', desc: 'Professional translation and quality check' },
              { step: '04', title: 'Delivery', desc: 'Receive completed document and certification' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-800 -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Clients Say
          </h3>
          
          {/* Infinite Scrolling Container */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
            
            {/* Scrolling testimonials */}
            <div className="flex animate-scroll space-x-6">
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => {
                      const filled = i < Math.floor(testimonial.rating);
                      const halfFilled = i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0;
                      
                      return (
                        <div key={i} className="relative">
                          <Star 
                            className={`w-4 h-4 ${
                              filled || halfFilled ? 'text-yellow-400' : 'text-gray-300'
                            } fill-current`}
                          />
                          {halfFilled && (
                            <div className="absolute inset-0 overflow-hidden w-1/2">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                    <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                      ({testimonial.rating})
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => {
                      const filled = i < Math.floor(testimonial.rating);
                      const halfFilled = i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0;
                      
                      return (
                        <div key={i} className="relative">
                          <Star 
                            className={`w-4 h-4 ${
                              filled || halfFilled ? 'text-yellow-400' : 'text-gray-300'
                            } fill-current`}
                          />
                          {halfFilled && (
                            <div className="absolute inset-0 overflow-hidden w-1/2">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                    <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                      ({testimonial.rating})
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;