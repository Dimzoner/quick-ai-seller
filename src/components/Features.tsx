import React from 'react';
import { TrendingUp, Clock, Smile, DollarSign } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Увеличит продажи',
      description: 'Обрабатывает заказы 24/7, не упуская клиентов',
      color: 'text-green-500'
    },
    {
      icon: Clock,
      title: 'Сэкономит время',
      description: 'Автоматизирует 80% рутинных вопросов и запросов',
      color: 'text-blue-500'
    },
    {
      icon: Smile,
      title: 'Улучшит сервис',
      description: 'Мгновенно отвечает клиентам в любое время',
      color: 'text-purple-500'
    },
    {
      icon: DollarSign,
      title: 'Снизит затраты',
      description: 'Эффективнее штатных менеджеров на входящих запросах',
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Возможности <span className="bg-ai-gradient bg-clip-text text-transparent">AI-агентов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Умные боты, которые работают лучше человека
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-card rounded-2xl border border-border hover:border-ai-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-ai-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info block */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-6 bg-ai-gradient/10 rounded-2xl border border-ai-primary/20">
            <p className="text-lg text-foreground">
              <strong className="text-ai-primary">Результат:</strong> Ваши клиенты получают ответы мгновенно, 
              а вы — больше времени на развитие бизнеса
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;