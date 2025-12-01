"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Bell, Lock, Lightbulb, Wind, Shield } from 'lucide-react';

export default function Security() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Camera,
      title: t('security.feature1.title'),
      description: t('security.feature1.desc'),
    },
    {
      icon: Bell,
      title: t('security.feature2.title'),
      description: t('security.feature2.desc'),
    },
    {
      icon: Lock,
      title: t('security.feature3.title'),
      description: t('security.feature3.desc'),
    },
    {
      icon: Lightbulb,
      title: t('security.feature4.title'),
      description: t('security.feature4.desc'),
    },
    {
      icon: Wind,
      title: t('security.feature5.title'),
      description: t('security.feature5.desc'),
    },
    {
      icon: Shield,
      title: t('security.feature6.title'),
      description: t('security.feature6.desc'),
    },
  ];

  return (
    <section id="security" className="py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('security.title')}</h2>
          <p className="text-xl text-muted-foreground mb-2">{t('security.subtitle')}</p>
          <p className="text-lg font-semibold text-primary">{t('security.record')}</p>
        </div>

        {/* Main Security Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <div
            className="h-96 bg-cover bg-center relative"
            style={{ backgroundImage: 'url(/images/security.png)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
              <div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">47 HD KAMERA AKTIVAN 24/7</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">Dok vi spavate, mi budimo</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-lg">
            {t('security.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
