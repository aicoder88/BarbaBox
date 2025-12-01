"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
      cta: t('process.step1.cta'),
      image: '/images/process-booking.png',
    },
    {
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
      cta: t('process.step2.cta'),
      image: '/images/process-packing.png',
    },
    {
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
      cta: t('process.step3.cta'),
      image: '/images/process-moving.png',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('process.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white h-full">
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 z-20 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                  {index + 1}
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${step.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                  <p className="text-sm text-primary font-medium">{step.cta}</p>
                </div>
              </Card>

              {/* Connector Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 transform translate-x-full -translate-y-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
