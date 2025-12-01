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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('location.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <Card className="overflow-hidden border-2 hover:border-primary/30 transition-colors">
            <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10">
              {/* Placeholder for Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-muted-foreground">
                    Ulica Skladišta 123<br />
                    10000 Zagreb, Hrvatska
                  </p>
                </div>
              </div>
              {/* In production, replace with actual Google Maps embed */}
            </div>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-2 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t('location.address')}</h3>
                  <p className="text-muted-foreground">
                    Ulica Skladišta 123<br />
                    10000 Zagreb, Hrvatska
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
                  <h3 className="font-semibold mb-2">Telefon</h3>
                  <p className="text-muted-foreground">+385 1 234 5678</p>
                  <p className="text-sm text-muted-foreground mt-1">Pon-Pet: 8:00-20:00</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@zagrebstorage.hr</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-2 text-center">
                <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">{t('location.parking')}</h4>
                <p className="text-xs text-muted-foreground">50+ mjesta</p>
              </Card>
              <Card className="p-4 border-2 text-center">
                <Bus className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">{t('location.transport')}</h4>
                <p className="text-xs text-muted-foreground">Tramvaj 5, 7</p>
              </Card>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
              Zakaži Posjet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
