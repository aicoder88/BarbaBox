"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Clock, Star, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const { t } = useLanguage();

  const features = [
    { icon: Users, text: t('trust.families') },
    { icon: Clock, text: t('trust.access') },
    { icon: Star, text: t('trust.rating') },
    { icon: ShieldCheck, text: t('trust.security') },
  ];

  return (
    <section className="py-8 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
