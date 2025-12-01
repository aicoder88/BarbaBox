"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Users, GraduationCap, Briefcase, Hammer } from 'lucide-react';

export default function CustomerSegments() {
  const { t } = useLanguage();

  const segments = [
    {
      icon: Users,
      title: t('segments.families'),
      description: t('segments.families.desc'),
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      title: t('segments.students'),
      description: t('segments.students.desc'),
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Briefcase,
      title: t('segments.business'),
      description: t('segments.business.desc'),
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Hammer,
      title: t('segments.renovators'),
      description: t('segments.renovators.desc'),
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {segments.map((segment, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${segment.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${segment.color} flex items-center justify-center shadow-lg`}>
                  <segment.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{segment.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{segment.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
