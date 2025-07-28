import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Сколько стоит разработка бота?",
      answer: "Стоимость зависит от сложности задач и количества интеграций. Базовый бот для сайта — от 50 000 рублей. Расширенный с интеграциями в WhatsApp, Telegram и CRM — от 120 000 рублей. Точную стоимость рассчитаем после обсуждения ваших задач."
    },
    {
      question: "Как быстро его можно создать?",
      answer: "Простой бот-консультант создается за 3-5 дней. Сложные боты с множественными интеграциями и обучением на больших данных — до 2 недель. После запуска возможны доработки и оптимизация."
    },
    {
      question: "Какие данные нужны для обучения?",
      answer: "Нам потребуются: FAQ по вашим услугам, прайс-листы, типовые диалоги с клиентами, описание бизнес-процессов. Если данных мало — поможем составить базу знаний на основе интервью с вашими специалистами."
    },
    {
      question: "Как происходит интеграция?",
      answer: "Для сайта — добавляем виджет чата одной строкой кода. Для мессенджеров — подключаем через API. С CRM-системами интегрируемся через webhooks или API. Все настройки делаем сами, от вас нужен только доступ."
    },
    {
      question: "Как вы обеспечиваете точность ответов бота?",
      answer: "Используем строгое обучение только на ваших данных без общих интернет-источников, что исключает 'галлюцинации'. Бот отвечает только в рамках заданных сценариев. Сложные вопросы передает живому оператору. Постоянно анализируем диалоги и дообучаем систему."
    },
    {
      question: "Какая поддержка после запуска?",
      answer: "Первый месяц — бесплатная техподдержка и доработки. Далее — договор на сопровождение от 15 000 рублей в месяц, включающий мониторинг работы, обновление базы знаний и развитие функций."
    },
    {
      question: "Можно ли протестировать бота перед покупкой?",
      answer: "Да! Создаем демо-версию с базовым функционалом для тестирования. Также предоставляем доступ к готовым кейсам клиентов в похожих сферах, чтобы вы могли оценить качество работы."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="bg-ai-gradient bg-clip-text text-transparent">Частые вопросы</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Отвечаем на самые важные вопросы о наших AI-ботах
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-ai-primary/10 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-ai-primary/10 last:border-b-0">
                  <AccordionTrigger className="px-8 py-6 text-left hover:bg-ai-primary/5 transition-colors">
                    <span className="text-lg font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Не нашли ответ на ваш вопрос?
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 text-ai-primary hover:text-ai-secondary transition-colors font-medium text-lg"
            >
              <span>Задайте его нашим специалистам</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;