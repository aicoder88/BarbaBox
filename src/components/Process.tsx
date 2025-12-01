"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Search, Calendar, Key } from 'lucide-react';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Calendar,
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Key,
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
      color: 'from-orange-500 to-orange-600',
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
            <div key={index} className="relative">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-white h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>

              {/* Connector Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
