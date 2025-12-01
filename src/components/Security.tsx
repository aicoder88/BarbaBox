"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Camera, Bell, Lock, Lightbulb } from 'lucide-react';

export default function Security() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Camera,
      title: t('security.cameras'),
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
    },
    {
      icon: Bell,
      title: t('security.alarms'),
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    },
    {
      icon: Lock,
      title: t('security.access'),
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80',
    },
    {
      icon: Lightbulb,
      title: t('security.lighting'),
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    },
  ];

  return (
    <section id="security" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('security.title')}</h2>
          <p className="text-xl text-muted-foreground mb-4">{t('security.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Main Security Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <div 
            className="h-96 bg-cover bg-center relative"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">SUSTAV AKTIVAN 24/7</span>
              </div>
              <h3 className="text-3xl font-bold">Višeslojna Zaštita</h3>
            </div>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/30"
            >
              <div className="relative h-40 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Lock className="h-5 w-5 text-green-600" />
            </div>
            <span className="text-sm font-medium">SSL Šifriranje</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Camera className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium">HD Nadzor</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Bell className="h-5 w-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium">Instant Alarmi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
