import React from 'react';
import { Button } from './ui/button';
import { Phone, Send, Mail } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-ai-gradient rounded-lg"></div>
            <span className="text-xl font-bold text-foreground">AI Sales Bot</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ИИ-продажи
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Лёгкий старт
            </button>
            <button 
              onClick={() => scrollToSection('why-us')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Почему мы
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Contacts */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <a href="tel:+79991234567" className="flex items-center space-x-1 text-ai-primary hover:text-ai-secondary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+7 (999) 123-45-67</span>
              </a>
              <a href="https://t.me/aisalesbot" className="flex items-center space-x-1 text-ai-primary hover:text-ai-secondary transition-colors">
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>
              <a href="mailto:info@aisalesbot.ru" className="flex items-center space-x-1 text-ai-primary hover:text-ai-secondary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@aisalesbot.ru</span>
              </a>
            </div>
            <Button 
              variant="cta" 
              onClick={() => scrollToSection('contact')}
              className="animate-pulse-soft"
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;