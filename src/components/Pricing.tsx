"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.small'),
      price: '49',
      size: '2m²',
      description: t('pricing.small.desc'),
      features: ['24/7 Pristup', 'Klimatizirano', 'Osnovno Osiguranje'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: t('pricing.medium'),
      price: '89',
      size: '5m²',
      description: t('pricing.medium.desc'),
      features: ['24/7 Pristup', 'Klimatizirano', 'Osnovno Osiguranje', 'Besplatno Parkiranje'],
      popular: true,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
      color: 'from-primary to-accent',
    },
    {
      name: t('pricing.large'),
      price: '149',
      size: '10m²',
      description: t('pricing.large.desc'),
      features: ['24/7 Pristup', 'Klimatizirano', 'Osnovno Osiguranje', 'Besplatno Parkiranje', 'Prioritetna Podrška'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: t('pricing.xlarge'),
      price: '249',
      size: '20m²',
      description: t('pricing.xlarge.desc'),
      features: ['24/7 Pristup', 'Klimatizirano', 'Osnovno Osiguranje', 'Besplatno Parkiranje', 'Prioritetna Podrška', 'Fleksibilni Ugovor'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Prvi mjesec -20%
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-xl text-muted-foreground mb-2">{t('pricing.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 relative group ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl lg:scale-105 z-10' 
                  : 'border-2 hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-white py-2 text-center text-sm font-semibold z-10">
                  ⭐ Najpopularnije
                </div>
              )}

              {/* Image Header */}
              <div className="relative h-32 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${plan.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${plan.color} opacity-80`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold">{plan.size}</div>
                  </div>
                </div>
              </div>

              <div className={`p-6 ${plan.popular ? 'pt-4' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">{t('pricing.from')}</span>
                    <span className="text-4xl font-bold text-primary">€{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{t('pricing.month')}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-6 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                      : 'bg-secondary text-foreground hover:bg-primary hover:text-white'
                  }`}
                >
                  Rezerviraj
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Bez skrivenih troškova
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Fleksibilno otkazivanje
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Osiguranje uključeno
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
