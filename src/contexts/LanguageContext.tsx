import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'vi' | 'en' | 'zh' | 'ja' | 'th' | 'ko' | 'lo' | 'km';

interface Translation {
  [key: string]: string | string[];
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translation> = {
  vi: {
    // Navigation
    'nav.home': 'Trang Chủ',
    'nav.services': 'Dịch Vụ',
    'nav.about': 'Giới Thiệu',
    'nav.blog': 'Tin Tức',
    'nav.contact': 'Liên Hệ',
    'nav.quote': 'Báo Giá',

    // Hero Section
    'hero.title': 'Văn Phòng Dịch Thuật   ',
    'hero.subtitle': 'Chính xác • Nhanh chóng • Bảo mật • Uy tín hơn 15+ năm kinh nghiệm',
    'hero.cta': 'Yêu Cầu Báo Giá Ngay',
    'hero.contact': 'Liên Hệ Tư Vấn',

    // Services
    'services.title': 'Dịch Vụ Chuyên Nghiệp',
    'services.notarized.title': 'Dịch Thuật Công Chứng',
    'services.notarized.desc': 'Dịch thuật và công chứng các loại giấy tờ từ nhiều ngôn ngữ khác nhau',
    'services.notarized.items': [
      'Giấy Khai Sinh',
      'Giấy Kết Hôn',
      'Bằng Cấp',
      'Hộ Chiếu',
      'Giấy Phép Kinh Doanh'
    ],
    'services.interpretation.title': 'Phiên Dịch Chuyên Nghiệp',
    'services.interpretation.desc': 'Phiên dịch cabin, đuổi, tháp tùng cho hội nghị và sự kiện',
    'services.interpretation.items': [
      'Phiên Dịch Hội Nghị',
      'Phiên Dịch Kinh Doanh',
      'Phiên Dịch Tòa Án',
      'Phiên Dịch Y Tế',
      'Phiên Dịch Tháp Tùng'
    ],
    'services.legalization.title': 'Hợp Pháp Hóa Lãnh Sự',
    'services.legalization.desc': 'Hỗ trợ thủ tục hợp pháp hóa giấy tờ để sử dụng ở nước ngoài',
    'services.legalization.items': [
      'Hợp Pháp Hóa Lãnh Sự',
      'Dịch Vụ Apostille',
      'Xác Minh Đại Sứ Quán',
      'Chứng Nhận Tài Liệu',
      'Hỗ Trợ Visa'
    ],
    'services.specialized.title': 'Dịch Thuật Chuyên Ngành',
    'services.specialized.desc': 'Dịch thuật kỹ thuật, y tế, tài chính, pháp luật và marketing',
    'services.specialized.items': [
      'Dịch Thuật Kỹ Thuật',
      'Dịch Thuật Y Khoa',
      'Dịch Thuật Pháp Lý',
      'Dịch Thuật Tài Chính',
      'Dịch Thuật Marketing'
    ],

    // Why Choose Us
    'why.title': 'Tại Sao Chọn Chúng Tôi?',
    'why.experience.title': 'Kinh Nghiệm 15+ Năm',
    'why.experience.desc': 'Phục vụ hàng nghìn khách hàng cá nhân và doanh nghiệp',
    'why.languages.title': 'Hỗ Trợ 50+ Ngôn Ngữ',
    'why.languages.desc': 'Đội ngũ biên phiên dịch viên chuyên nghiệp',
    'why.security.title': 'Bảo Mật 100%',
    'why.security.desc': 'Cam kết bảo mật tuyệt đối thông tin khách hàng',
    'why.speed.title': 'Báo Giá 15 Phút',
    'why.speed.desc': 'Phản hồi nhanh chóng, chính xác mọi yêu cầu',

    // Contact Info
    'contact.title': 'Thông Tin Liên Hệ',
    'contact.address': '399 Nguyễn Tri Phương, P.5, Q.10, TP.HCM',
    'contact.phone': 'Điện thoại',
    'contact.email': 'Email',
    'contact.hours': 'Giờ Làm Việc',
    'contact.hours.weekday': 'Thứ 2 - Thứ 6: 8:00 - 17:30',
    'contact.hours.saturday': 'Thứ 7: 8:00 - 12:00',
    'contact.hours.sunday': 'Chủ nhật: Nghỉ',

    // Quote Form
    'quote.title': 'Yêu Cầu Báo Giá',
    'quote.name': 'Họ và Tên',
    'quote.email': 'Email',
    'quote.phone': 'Số Điện Thoại',
    'quote.from': 'Dịch từ ngôn ngữ',
    'quote.to': 'Dịch sang ngôn ngữ',
    'quote.file': 'Tài liệu đính kèm',
    'quote.deadline': 'Thời gian mong muốn',
    'quote.notes': 'Ghi chú',
    'quote.submit': 'Gửi Yêu Cầu',

    // Footer
    // Hero Section Extra
    'hero.trusted': 'Được tin tưởng bởi hơn 5000+ khách hàng',
    'hero.stats.experience': 'Năm Kinh Nghiệm',
    'hero.stats.languages': 'Ngôn Ngữ',
    'hero.stats.clients': 'Khách Hàng',
    'hero.support': 'Hỗ trợ',
    'hero.accuracy': 'Độ chính xác',
    
    'footer.company': 'Văn phòng Dịch thuật 399',
    'footer.description': 'Đối tác tin cậy cho mọi nhu cầu dịch thuật và phiên dịch của bạn.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.blog': 'News',
    'nav.contact': 'Contact',
    'nav.quote': 'Quote',

    // Hero Section
    'hero.title': 'Professional International Translation',
    'hero.subtitle': 'Accurate • Fast • Secure • Trusted with 15+ years of experience',
    'hero.cta': 'Get Quote Now',
    'hero.contact': 'Contact for Consultation',

    // Services
    'services.title': 'Professional Services',
    'services.notarized.title': 'Notarized Translation',
    'services.notarized.desc': 'Translation and notarization of documents in multiple languages',
    'services.interpretation.title': 'Professional Interpretation',
    'services.interpretation.desc': 'Cabin, consecutive, escort interpretation for conferences and events',
    'services.legalization.title': 'Consular Legalization',
    'services.legalization.desc': 'Support for document legalization procedures for international use',
    'services.specialized.title': 'Specialized Translation',
    'services.specialized.desc': 'Technical, medical, financial, legal and marketing translation',

    // Why Choose Us
    'why.title': 'Why Choose Us?',
    'why.experience.title': '15+ Years Experience',
    'why.experience.desc': 'Serving thousands of individual and corporate clients',
    'why.languages.title': '50+ Languages Support',
    'why.languages.desc': 'Professional team of translators and interpreters',
    'why.security.title': '100% Security',
    'why.security.desc': 'Absolute commitment to client information security',
    'why.speed.title': '15-Minute Quote',
    'why.speed.desc': 'Quick and accurate response to all requests',

    // Contact Info
    'contact.title': 'Contact Information',
    'contact.address': '399 Nguyen Tri Phuong, Ward 5, District 10, HCMC',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.hours.weekday': 'Mon - Fri: 8:00 - 17:30',
    'contact.hours.saturday': 'Saturday: 8:00 - 12:00',
    'contact.hours.sunday': 'Sunday: Closed',

    // Quote Form
    'quote.title': 'Request Quote',
    'quote.name': 'Full Name',
    'quote.email': 'Email',
    'quote.phone': 'Phone Number',
    'quote.from': 'Translate from',
    'quote.to': 'Translate to',
    'quote.file': 'Document attachment',
    'quote.deadline': 'Desired deadline',
    'quote.notes': 'Notes',
    'quote.submit': 'Submit Request',

    // Footer
    // Hero Section Extra
    'hero.trusted': 'Trusted by over 5000+ clients',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.languages': 'Languages',
    'hero.stats.clients': 'Happy Clients',
    'hero.support': 'Support',
    'hero.accuracy': 'Accuracy',
    
    'footer.company': '399 Professional Translation Office',
    'footer.description': 'Your trusted partner for all translation and interpretation needs.',
  },
  zh: {
    'nav.home': '首页',
    'nav.services': '服务',
    'nav.about': '关于我们',
    'nav.blog': '新闻',
    'nav.contact': '联系我们',
    'nav.quote': '报价',
    'hero.title': '专业翻译服务处',
    'hero.subtitle': '准确 • 快速 • 安全 • 15年以上经验值得信赖',
    'hero.cta': '立即获取报价',
    'hero.contact': '咨询联系',
    'services.title': '专业服务',
    'services.notarized.title': '公证翻译',
    'services.notarized.desc': '多语种文件翻译和公证服务',
    'services.notarized.items': [
      '出生证明',
      '结婚证',
      '文凭',
      '护照',
      '营业执照'
    ],
    'services.interpretation.title': '口译服务',
    'services.interpretation.desc': '会议、商务、陪同口译服务',
    'services.interpretation.items': [
      '会议口译',
      '商务口译',
      '法庭口译',
      '医疗口译',
      '陪同口译'
    ],
    'services.legalization.title': '领事认证',
    'services.legalization.desc': '文件海外使用领事认证服务',
    'services.legalization.items': [
      '领事认证',
      '海牙认证',
      '大使馆认证',
      '文件认证',
      '签证支持'
    ],
    'services.specialized.title': '专业翻译',
    'services.specialized.desc': '技术、医疗、金融、法律和营销翻译',
    'services.specialized.items': [
      '技术翻译',
      '医疗翻译',
      '法律翻译',
      '金融翻译',
      '营销翻译'
    ],
    'contact.title': '联系信息',
    'footer.company': '399专业翻译服务公司',
    'footer.description': '您值得信赖的翻译和口译服务合作伙伴。',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.services': 'サービス',
    'nav.about': '会社概要',
    'nav.blog': 'ニュース',
    'nav.contact': 'お問い合わせ',
    'nav.quote': '見積もり',
    'hero.title': 'プロフェッショナル翻訳事務所',
    'hero.subtitle': '正確 • 迅速 • 安全 • 15年以上の信頼できる経験',
    'hero.cta': '今すぐ見積もりを取得',
    'hero.contact': 'お問い合わせ相談',
    'services.title': 'プロフェッショナルサービス',
    'services.notarized.title': '公証翻訳',
    'services.notarized.desc': '多言語文書の翻訳と公証サービス',
    'services.notarized.items': [
      '出生証明書',
      '婚姻証明書',
      '卒業証書',
      'パスポート',
      '営業許可証'
    ],
    'services.interpretation.title': '通訳サービス',
    'services.interpretation.desc': '会議、ビジネス、随行通訳サービス',
    'services.interpretation.items': [
      '会議通訳',
      'ビジネス通訳',
      '法廷通訳',
      '医療通訳',
      '随行通訳'
    ],
    'services.legalization.title': '領事認証',
    'services.legalization.desc': '海外使用のための文書認証サービス',
    'services.legalization.items': [
      '領事認証',
      'アポスティーユ認証',
      '大使館認証',
      '文書認証',
      'ビザサポート'
    ],
    'services.specialized.title': '専門翻訳',
    'services.specialized.desc': '技術、医療、金融、法律、マーケティング翻訳',
    'services.specialized.items': [
      '技術翻訳',
      '医療翻訳',
      '法務翻訳',
      '金融翻訳',
      'マーケティング翻訳'
    ],
    'contact.title': '連絡先情報',
    'footer.company': '399プロフェッショナル翻訳事務所',
    'footer.description': '翻訳・通訳のあらゆるニーズにお応えする信頼できるパートナーです。',
  },
  th: {
    'nav.home': 'หน้าแรก',
    'nav.services': 'บริการ',
    'nav.about': 'เกี่ยวกับเรา',
    'nav.blog': 'ข่าวสาร',
    'nav.contact': 'ติดต่อ',
    'nav.quote': 'ใบเสนอราคา',
    'hero.title': 'สำนักงานแปลภาษามืออาชีพ',
    'hero.subtitle': 'แม่นยำ • รวดเร็ว • ปลอดภัย • ไว้วางใจได้ด้วยประสบการณ์ 15+ ปี',
    'hero.cta': 'ขอใบเสนอราคาทันที',
    'hero.contact': 'ติดต่อปรึกษา',
    'services.title': 'บริการมืออาชีพ',
    'services.notarized.title': 'แปลเอกสารรับรอง',
    'services.notarized.desc': 'บริการแปลและรับรองเอกสารหลายภาษา',
    'services.notarized.items': [
      'สูติบัตร',
      'ทะเบียนสมรส',
      'วุฒิการศึกษา',
      'หนังสือเดินทาง',
      'ใบอนุญาตประกอบธุรกิจ'
    ],
    'services.interpretation.title': 'บริการล่าม',
    'services.interpretation.desc': 'บริการล่ามในการประชุม ธุรกิจ และติดตาม',
    'services.interpretation.items': [
      'ล่ามการประชุม',
      'ล่ามธุรกิจ',
      'ล่ามศาล',
      'ล่ามการแพทย์',
      'ล่ามติดตาม'
    ],
    'services.legalization.title': 'รับรองเอกสารกงสุล',
    'services.legalization.desc': 'บริการรับรองเอกสารสำหรับใช้ในต่างประเทศ',
    'services.legalization.items': [
      'รับรองกงสุล',
      'รับรองอัปโปสติล',
      'รับรองสถานทูต',
      'รับรองเอกสาร',
      'บริการวีซ่า'
    ],
    'services.specialized.title': 'แปลเฉพาะทาง',
    'services.specialized.desc': 'แปลด้านเทคนิค การแพทย์ การเงิน กฎหมาย และการตลาด',
    'services.specialized.items': [
      'แปลด้านเทคนิค',
      'แปลด้านการแพทย์',
      'แปลด้านกฎหมาย',
      'แปลด้านการเงิน',
      'แปลด้านการตลาด'
    ],
    'contact.title': 'ข้อมูลการติดต่อ',
    'footer.company': 'สำนักงานแปลภาษามืออาชีพ 399',
    'footer.description': 'พันธมิตรที่เชื่อถือได้สำหรับความต้องการด้านการแปลและการล่ามของคุณ',
  },
  ko: {
    'nav.home': '홈',
    'nav.services': '서비스',
    'nav.about': '회사소개',
    'nav.blog': '뉴스',
    'nav.contact': '연락처',
    'nav.quote': '견적',
    'hero.title': '전문 번역 사무소',
    'hero.subtitle': '정확 • 신속 • 안전 • 15년+ 경험의 신뢰',
    'hero.cta': '지금 견적 받기',
    'hero.contact': '상담 문의',
    'services.title': '전문 서비스',
    'services.notarized.title': '공증 번역',
    'services.notarized.desc': '다국어 문서 번역 및 공증 서비스',
    'services.notarized.items': [
      '출생 증명서',
      '혼인 증명서',
      '졸업 증명서',
      '여권',
      '사업자 등록증'
    ],
    'services.interpretation.title': '통역 서비스',
    'services.interpretation.desc': '회의, 비즈니스, 수행 통역 서비스',
    'services.interpretation.items': [
      '회의 통역',
      '비즈니스 통역',
      '법정 통역',
      '의료 통역',
      '수행 통역'
    ],
    'services.legalization.title': '영사 인증',
    'services.legalization.desc': '해외 사용을 위한 문서 인증 서비스',
    'services.legalization.items': [
      '영사 인증',
      '아포스티유 인증',
      '대사관 인증',
      '문서 인증',
      '비자 지원'
    ],
    'services.specialized.title': '전문 번역',
    'services.specialized.desc': '기술, 의료, 금융, 법률, 마케팅 번역',
    'services.specialized.items': [
      '기술 번역',
      '의료 번역',
      '법률 번역',
      '금융 번역',
      '마케팅 번역'
    ],
    'contact.title': '연락처 정보',
    'footer.company': '399 전문 번역 사무소',
    'footer.description': '모든 번역 및 통역 요구사항을 위한 신뢰할 수 있는 파트너입니다.',
  },
  lo: {
    'nav.home': 'ໜ້າຫຼັກ',
    'nav.services': 'ບໍລິການ',
    'nav.about': 'ກ່ຽວກັບພວກເຮົາ',
    'nav.blog': 'ຂ່າວ',
    'nav.contact': 'ຕິດຕໍ່',
    'nav.quote': 'ລາຄາ',
    'hero.title': 'ການແປພາສາມືອາຊີບສາກົນ',
    'hero.subtitle': 'ຖືກຕ້ອງ • ໄວ • ປອດໄພ • ເຊື່ອຖືໄດ້ດ້ວຍປະສົບການ 15+ ປີ',
    'hero.cta': 'ຂໍລາຄາຕອນນີ້',
    'hero.contact': 'ຕິດຕໍ່ເພື່ອປຶກສາ',
    'services.title': 'ບໍລິການມືອາຊີບ',
    'contact.title': 'ຂໍ້ມູນການຕິດຕໍ່',
    'footer.company': 'ຫ້ອງການແປພາສາ 399',
    'footer.description': 'ຄູ່ຮ່ວມງານທີ່ເຊື່ອຖືໄດ້ສຳລັບທຸກຄວາມຕ້ອງການດ້ານການແປແລະການແປເປັນປາກເວົ້າ.',
  },
  km: {
    'nav.home': 'ទំព័រដើម',
    'nav.services': 'សេវាកម្ម',
    'nav.about': 'អំពីយើង',
    'nav.blog': 'ព័ត៌មាន',
    'nav.contact': 'ទាក់ទង',
    'nav.quote': 'សេណារី',
    'hero.title': 'សេវាកម្មបកប្រែអន្តរជាតិប្រកបដោយវិជ្ជាជីវៈ',
    'hero.subtitle': 'ត្រឹមត្រូវ • លឿន • សុវត្ថិភាព • ជឿជាក់បានជាមួយបទពិសោធន៍ 15+ ឆ្នាំ',
    'hero.cta': 'ស្នើសុំសេណារីឥឡូវនេះ',
    'hero.contact': 'ទាក់ទងសម្រាប់ការពិគ្រោះយោបល់',
    'services.title': 'សេវាកម្មប្រកបដោយវិជ្ជាជីវៈ',
    'contact.title': 'ព័ត៌មានទំនាក់ទំនង',
    'footer.company': 'ការិយាល័យបកប្រែ 399',
    'footer.description': 'ដៃគូដែលអាចទុកចិត្តបានសម្រាប់គ្រប់តម្រូវការបកប្រែនិងបកស្រាយរបស់អ្នក។',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[language]?.[key] || translations.vi[key];
    if (Array.isArray(translation)) {
      return translation.join(', ');
    }
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};