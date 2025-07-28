import React from 'react';
import { MessageSquare, Settings, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Обсуждаем',
      description: 'Расскажите нам о ваших задачах и бизнесе.',
      details: 'Проводим интервью, изучаем ваши процессы продаж и определяем оптимальные сценарии для бота.'
    },
    {
      icon: Settings,
      title: 'Создаем',
      description: 'Разрабатываем и обучаем бота под ваш уникальный сценарий.',
      details: 'Настраиваем алгоритмы, загружаем базу знаний и тестируем все возможные диалоги.'
    },
    {
      icon: Rocket,
      title: 'Запускаем',
      description: 'Интегрируем бота на ваш сайт и в мессенджеры. Готово!',
      details: 'Подключаем к вашим системам, обучаем команду и запускаем в работу с полной поддержкой.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-ai-primary/5 to-ai-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Процесс <span className="bg-ai-gradient bg-clip-text text-transparent">внедрения</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всего 3 простых шага до вашего персонального AI-продавца
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group text-center">
                {/* Step number and icon */}
                <div className="relative mx-auto mb-6">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-ai-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-10 h-10 text-ai-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ai-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-ai-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {step.description}
                  </p>
                  
                  {/* Expandable details */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-ai-primary">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg">
            <p className="text-lg text-foreground mr-4">
              <strong className="text-ai-primary">Сроки:</strong> От идеи до запуска — всего 3-5 дней
            </p>
            <div className="w-4 h-4 bg-ai-gradient rounded-full animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;