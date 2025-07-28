import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '../assets/ai-bot-hero.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-ai-primary/5 to-ai-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-ai-gradient bg-clip-text text-transparent">
                  Продающий AI-бот
                </span>{' '}
                для вашего бизнеса{' '}
                <span className="text-ai-secondary">за 1 день</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Автоматизируйте продажи 24/7 с умным ботом
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Индивидуальные боты для малого и среднего бизнеса. 
                Работают на сайте, в WhatsApp и Telegram.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-6 group"
              >
                Создать бота
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('testimonials')}
                className="text-lg px-8 py-6 group border-ai-primary text-ai-primary hover:bg-ai-primary hover:text-white"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Смотреть примеры
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-ai-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Работа без выходных</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ai-primary">80%</div>
                <div className="text-sm text-muted-foreground">Автоматизация запросов</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ai-primary">1 день</div>
                <div className="text-sm text-muted-foreground">До запуска</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="AI Bot Assistant" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-ai-gradient opacity-20 rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-ai-gradient rounded-full opacity-20 animate-pulse-soft"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-ai-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;