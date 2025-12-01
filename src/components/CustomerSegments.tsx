"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';

export default function CustomerSegments() {
  const { t, language } = useLanguage();

  const segments = [
    {
      icon: t('segments.families.icon'),
      title: t('segments.families.title'),
      quote: t('segments.families.quote'),
      author: t('segments.families.author'),
      image: '/images/segment-families.png',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: t('segments.students.icon'),
      title: t('segments.students.title'),
      quote: t('segments.students.quote'),
      author: t('segments.students.author'),
      image: '/images/segment-students.png',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: t('segments.business.icon'),
      title: t('segments.business.title'),
      quote: t('segments.business.quote'),
      author: t('segments.business.author'),
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: t('segments.renovators.icon'),
      title: t('segments.renovators.title'),
      quote: t('segments.renovators.quote'),
      author: t('segments.renovators.author'),
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="sizes" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('segments.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {segments.map((segment, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-white"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${segment.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-40`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-5xl mb-2">{segment.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{segment.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    {/* Testimonial Quote */}
                    <div className="mb-6">
                      <Quote className="h-6 w-6 text-primary/30 mb-3" />
                      <p className="text-base italic text-foreground leading-relaxed mb-4">{segment.quote}</p>
                      <p className="text-sm font-semibold text-primary">— {segment.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
