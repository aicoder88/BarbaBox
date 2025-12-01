"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';

export default function CustomerSegments() {
  const { t, language } = useLanguage();

  const segments = [
    {
      title: t('segments.families'),
      description: t('segments.families.desc'),
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80',
      testimonial: language === 'hr' 
        ? '"Konačno imamo mjesta u stanu! Sve sezonske stvari su sigurno pohranjene."'
        : '"Finally we have space at home! All seasonal items are safely stored."',
      author: 'Marija K.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: t('segments.students'),
      description: t('segments.students.desc'),
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
      testimonial: language === 'hr' 
        ? '"Savršeno za vrijeme ljetnih praznika. Pristupačno i sigurno!"'
        : '"Perfect during summer holidays. Affordable and secure!"',
      author: 'Luka M.',
      color: 'from-green-500 to-green-600',
    },
    {
      title: t('segments.business'),
      description: t('segments.business.desc'),
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
      testimonial: language === 'hr' 
        ? '"Idealno za arhivu i inventar. Pristup 24/7 je ključan za naš posao."'
        : '"Ideal for archives and inventory. 24/7 access is key for our business."',
      author: 'Ivan P.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: t('segments.renovators'),
      description: t('segments.renovators.desc'),
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
      testimonial: language === 'hr' 
        ? '"Spasili su nas tijekom renovacije! Namještaj je bio potpuno siguran."'
        : '"They saved us during renovation! Furniture was completely safe."',
      author: 'Ana S.',
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
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{segment.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{segment.description}</p>
                    
                    {/* Testimonial */}
                    <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                      <Quote className="h-5 w-5 text-primary mb-2" />
                      <p className="text-sm italic text-foreground/80 mb-2">{segment.testimonial}</p>
                      <p className="text-xs font-semibold text-primary">— {segment.author}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group/btn border-2 hover:bg-primary hover:text-white hover:border-primary">
                    {language === 'hr' ? 'Saznaj Više' : 'Learn More'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
