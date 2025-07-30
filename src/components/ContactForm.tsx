import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';
import { useToast } from './ui/use-toast';
import emailjs from '@emailjs/browser';
import happyOwnerImage from '../assets/happy-business-owner.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // EmailJS конфигурация - замените на ваши данные
  const SERVICE_ID = 'your_service_id';
  const TEMPLATE_ID = 'your_template_id'; 
  const PUBLIC_KEY = 'your_public_key';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        user_name: formData.name,
        user_phone: formData.phone,
        user_email: formData.email || 'Не указан',
        to_email: 'dimson1997@inbox.ru',
        message: `Новая заявка с сайта:
        
Имя: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email || 'Не указан'}

Дата: ${new Date().toLocaleString('ru-RU')}`
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      toast({
        title: "Спасибо!",
        description: "Мы получили вашу заявку и свяжемся с вами в течение часа.",
      });

      // Очищаем форму
      setFormData({ name: '', phone: '', email: '' });
      
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позвонить или написать напрямую.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-ai-primary/10 via-white to-ai-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Готовы запустить своего <span className="bg-ai-gradient bg-clip-text text-transparent">AI-продавца?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Обсудим вашу задачу и рассчитаем стоимость за 15 минут
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-ai-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-ai-primary/20 focus:border-ai-primary"
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-ai-primary/20 focus:border-ai-primary"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email (необязательно)
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-ai-primary/20 focus:border-ai-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  disabled={isLoading}
                  className="w-full h-14 text-lg rounded-xl group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  {isLoading ? 'Отправляем...' : 'Обсудить проект'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>

              {/* Alternative contacts */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Или свяжитесь с нами удобным способом:
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <a 
                    href="tel:+79991234567" 
                    className="flex flex-col items-center p-4 rounded-xl border border-ai-primary/20 hover:border-ai-primary/50 hover:bg-ai-primary/5 transition-colors group"
                  >
                    <Phone className="w-6 h-6 text-ai-primary mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-muted-foreground">Позвонить</span>
                  </a>
                  
                  <a 
                    href="https://t.me/aisalesbot" 
                    className="flex flex-col items-center p-4 rounded-xl border border-ai-primary/20 hover:border-ai-primary/50 hover:bg-ai-primary/5 transition-colors group"
                  >
                    <MessageCircle className="w-6 h-6 text-ai-primary mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-muted-foreground">Telegram</span>
                  </a>
                  
                  <a 
                    href="mailto:info@aisalesbot.ru" 
                    className="flex flex-col items-center p-4 rounded-xl border border-ai-primary/20 hover:border-ai-primary/50 hover:bg-ai-primary/5 transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-ai-primary mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-muted-foreground">Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Image and benefits */}
            <div className="space-y-8">
              <div className="relative">
                <img 
                  src={happyOwnerImage} 
                  alt="Happy business owner" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-ai-gradient/20 rounded-2xl"></div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Что получите после звонка:
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-ai-gradient rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">
                      Персональную консультацию по автоматизации вашего бизнеса
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-ai-gradient rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">
                      Точную стоимость и сроки разработки под ваши задачи
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-ai-gradient rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">
                      Демо-версию бота с примерами диалогов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;