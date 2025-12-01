"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.small'),
      price: '49',
      size: '2m²',
      description: t('pricing.small.desc'),
      features: ['24/7 Pristup', 'Klimatizirano', 'Osnovno Osiguranje'],
    },
    {
      name: t('pricing.medium'),
      price: '89',
      size: '5m²',
      description: t('pricing.medium.desc'),
      features: ['24/7 Pristup', 'Klimatizirano', 'Osnovno Osiguranje', 'Besplatno Parkiranje'],
      popular: true,
    },
    {
      name: t('pricing.large'),
      price: '149',
      size: '10m²',
      description: t('pricing.large.desc'),
      features: ['24/7 Pristup', 'Klimatizirano', 'Osnovno Osiguranje', 'Besplatno Parkiranje', 'Prioritetna Podrška'],
    },
    {
      name: t('pricing.xlarge'),
      price: '249',
      size: '20m²',
      description: t('pricing.xlarge.desc'),
      features: ['24/7 Pristup', 'Klimatizirano', 'Osnovno Osiguranje', 'Besplatno Parkiranje', 'Prioritetna Podrška', 'Fleksibilni Ugovor'],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-xl text-muted-foreground mb-2">{t('pricing.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-6 hover:shadow-2xl transition-all duration-300 relative ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl scale-105' 
                  : 'border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Najpopularnije
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-sm text-muted-foreground mb-4">{plan.size}</div>
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
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'bg-secondary text-foreground hover:bg-primary hover:text-white'
                }`}
              >
                Rezerviraj
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            ✓ Bez skrivenih troškova • ✓ Fleksibilno otkazivanje • ✓ Prvi mjesec -20%
          </p>
        </div>
      </div>
    </section>
  );
}
