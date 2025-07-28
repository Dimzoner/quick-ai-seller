import React from 'react';
import { UserCheck, Shield, Zap, Globe } from 'lucide-react';

const WhyUs = () => {
  const advantages = [
    {
      icon: UserCheck,
      title: 'Индивидуальный подход',
      description: 'Бот создается под ваши процессы и задачи, а не шаблон.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Гарантированно точные ответы по вашему сценарию без галлюцинаций.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Быстрый запуск',
      description: 'Рабочий бот уже через несколько дней.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Там, где ваш клиент',
      description: 'Работает там, где ваши клиенты: сайт, WhatsApp, Telegram.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-ai-secondary/5 to-ai-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему выбирают <span className="bg-ai-gradient bg-clip-text text-transparent">наших ботов?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы делаем не просто ботов — мы создаем цифровых сотрудников
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-ai-primary transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional trust section */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-ai-primary/10">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Гарантия качества
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-ai-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Точность ответов</div>
                  <p className="text-xs text-muted-foreground">
                    Строгое обучение на ваших данных
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-ai-secondary">30 дней</div>
                  <div className="text-sm text-muted-foreground">Гарантия возврата</div>
                  <p className="text-xs text-muted-foreground">
                    Если не подойдет — вернем деньги
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-ai-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Техподдержка</div>
                  <p className="text-xs text-muted-foreground">
                    Всегда готовы помочь и доработать
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;