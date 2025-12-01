"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Thermometer, FileText, Users, Star } from 'lucide-react';

export default function TrustBar() {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, text: t('trust.surveillance') },
    { icon: Thermometer, text: t('trust.climate') },
    { icon: FileText, text: t('trust.flexible') },
    { icon: Users, text: t('trust.customers') },
    { icon: Star, text: t('trust.rating') },
  ];

  return (
    <section className="py-8 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left"
            >
              <feature.icon className="h-8 w-8 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
