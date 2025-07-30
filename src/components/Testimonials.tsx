import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Бот обрабатывает 90% запросов, продажи выросли на 25%.",
      company: "Интернет-магазин электроники",
      rating: 5
    },
    {
      text: "Клиенты довольны быстрыми ответами, экономим на операторах.",
      company: "Сеть ресторанов",
      rating: 5
    },
    {
      text: "Заказы принимаются даже ночью, конверсия увеличилась в 2 раза.",
      company: "Автосервис",
      rating: 5
    },
    {
      text: "Бот знает все наши услуги лучше некоторых менеджеров.",
      company: "Салон красоты",
      rating: 5
    }
  ];

  const clients = [
    "Интернет-магазины",
    "Сети ресторанов", 
    "Автосервисы",
    "Салоны красоты",
    "Медицинские центры",
    "Туристические агентства",
    "Образовательные центры"
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши боты <span className="bg-ai-gradient bg-clip-text text-transparent">работают здесь</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Результаты, которые говорят сами за себя
          </p>
        </div>

        {/* Client categories */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-ai-gradient/10 rounded-full border border-ai-primary/20 text-ai-primary font-medium hover:bg-ai-gradient/20 transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-ai-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative"
            >
              <Quote className="w-8 h-8 text-ai-primary/30 mb-4" />
              
              <div className="space-y-4">
                <p className="text-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-ai-primary font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main case study */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-ai-primary/10 via-ai-secondary/10 to-ai-primary/10 rounded-3xl p-8 md:p-12 border border-ai-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Главный кейс: Интернет-магазин "ТехноМир"
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-ai-primary">+150%</div>
                <div className="text-sm text-muted-foreground">Рост конверсии</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-ai-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Прием заказов</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-ai-primary">-60%</div>
                <div className="text-sm text-muted-foreground">Затраты на поддержку</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Бот принимает заказы, консультирует по характеристикам товаров, 
                обрабатывает возвраты и отвечает на 95% типовых вопросов без участия человека.
              </p>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 text-ai-primary hover:text-ai-secondary transition-colors font-medium"
              >
                <span>Узнать, как этого добиться</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;