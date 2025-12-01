"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { contactConfig } from '@/lib/config';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Founder Quote Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 pb-12 border-b border-white/20">
          <div className="text-3xl font-bold mb-4">{t('footer.brand')}</div>
          <p className="text-lg text-white/90 mb-2">{t('footer.tagline')}</p>
          <p className="text-white/70 italic mb-2">{t('footer.quote')}</p>
          <p className="text-white/60 text-sm">{t('footer.founder')}</p>
          <p className="text-white/60 text-sm mt-4">{t('footer.established')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Barba<span className="text-accent">Box</span>
            </div>
            <div className="flex gap-3">
              <a href={contactConfig.socials.facebook} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={contactConfig.socials.instagram} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={contactConfig.socials.linkedin} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Brzi Linkovi</h3>
            <ul className="space-y-2">
              <li><a href="#sizes" className="text-white/80 hover:text-white transition-colors">{t('nav.sizes')}</a></li>
              <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">{t('nav.pricing')}</a></li>
              <li><a href="#security" className="text-white/80 hover:text-white transition-colors">{t('nav.security')}</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Usluge</h3>
            <ul className="space-y-2 text-white/80">
              <li>Osobno Skladištenje</li>
              <li>Poslovno Skladištenje</li>
              <li>Arhiviranje Dokumenata</li>
              <li>Klimatizirane Jedinice</li>
              <li>Pakiranje i Selidbe</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{contactConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-white/80 text-sm">{contactConfig.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-white/80 text-sm">{contactConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 BarbaBox. {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privatnost</a>
              <a href="#" className="hover:text-white transition-colors">Uvjeti Korištenja</a>
              <a href="#" className="hover:text-white transition-colors">Kolačići</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
