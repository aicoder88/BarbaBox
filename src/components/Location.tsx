"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Car, Bus, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('location.title')}</h2>
          <p className="text-xl text-muted-foreground mb-2">{t('location.subtitle')}</p>
          <p className="text-sm text-primary font-semibold">{t('location.availability')}</p>
          <p className="text-sm text-muted-foreground">{t('location.stock')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <a
            href="https://maps.app.goo.gl/D9EMZqgADsTRfRFe8"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="overflow-hidden border-2 hover:border-primary/30 transition-colors h-full">
              <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 group">
                <img
                  src="/images/map-avenue-mall.png"
                  alt="Map Location - Avenue Mall Zagreb"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Card>
          </a>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-2 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t('location.address.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('location.address.street')} {t('location.address.note')}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t('location.phone')}</h3>
                  <p className="text-sm text-muted-foreground">{t('location.phone.note')}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t('location.email')}</h3>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{t('location.hours.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('location.hours.weekday')}</p>
                  <p className="text-sm text-muted-foreground">{t('location.hours.saturday')}</p>
                  <p className="text-sm text-primary font-semibold mt-2">{t('location.access')}</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-2 text-center">
                <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">{t('location.parking')}</p>
              </Card>
              <Card className="p-4 border-2 text-center">
                <Bus className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">{t('location.transport')}</p>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6">
                {t('location.cta.call')}
              </Button>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white py-6">
                {t('location.cta.visit')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
