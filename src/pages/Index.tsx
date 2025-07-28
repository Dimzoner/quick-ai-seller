import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Process />
        <WhyUs />
        <Testimonials />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;