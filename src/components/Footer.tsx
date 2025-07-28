import React from 'react';
import { Phone, Send, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-ai-gradient rounded-lg"></div>
              <span className="text-2xl font-bold">AI Sales Bot</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Индивидуальные AI-боты для продаж и поддержки. 
              Автоматизируем ваш бизнес с умными технологиями.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-ai-primary transition-colors">
                <span className="text-sm">TG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-ai-primary transition-colors">
                <span className="text-sm">WA</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Услуги</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="hover:text-ai-primary transition-colors"
                >
                  AI-боты для продаж
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('process')} 
                  className="hover:text-ai-primary transition-colors"
                >
                  Автоматизация процессов
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="hover:text-ai-primary transition-colors"
                >
                  Интеграции с CRM
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-ai-primary transition-colors">
                  Техническая поддержка
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Навигация</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="hover:text-ai-primary transition-colors"
                >
                  Возможности
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-us')} 
                  className="hover:text-ai-primary transition-colors"
                >
                  Почему мы
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="hover:text-ai-primary transition-colors"
                >
                  Кейсы
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-ai-primary transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Контакты</h3>
            <div className="space-y-3 text-slate-300">
              <a 
                href="tel:+79991234567" 
                className="flex items-center space-x-3 hover:text-ai-primary transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+7 (999) 123-45-67</span>
              </a>
              
              <a 
                href="https://t.me/aisalesbot" 
                className="flex items-center space-x-3 hover:text-ai-primary transition-colors group"
              >
                <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@aisalesbot</span>
              </a>
              
              <a 
                href="mailto:info@aisalesbot.ru" 
                className="flex items-center space-x-3 hover:text-ai-primary transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>info@aisalesbot.ru</span>
              </a>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>Москва, Россия<br />Удаленная работа по всей РФ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              <p>&copy; 2024 AI Sales Bot. Все права защищены.</p>
            </div>
            
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-ai-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-ai-primary transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500">
              ИП Иванов И.И. | ИНН: 123456789012 | ОГРНИП: 123456789012345
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;