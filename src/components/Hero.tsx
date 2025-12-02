"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { contactConfig } from '@/lib/config';

export default function Hero() {
  const { t } = useLanguage();
  const [currentTime, setCurrentTime] = useState('--:--:--');

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString('hr-HR'));
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('hr-HR'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="BarbaBox Storage Facility"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Promo Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent to-accent/80 text-white text-sm font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-lg">
              {t('hero.promo')}
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              {t('hero.badge')}
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-xl font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              {t('hero.subtitle')}
            </p>

            {/* Features */}
            <p className="text-lg text-white/70 mb-10 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              {t('hero.features')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 h-auto text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto whitespace-normal text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  {t('hero.cta.primary')}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/50 bg-black/20 text-white hover:bg-white hover:text-black px-8 py-6 h-auto text-lg rounded-xl transition-all backdrop-blur-sm group w-full sm:w-auto whitespace-normal text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform shrink-0" />
                  <span>{t('hero.cta.secondary')}: <span className="font-bold">{contactConfig.phone}</span></span>
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">547</div>
                <div className="text-sm text-white/60">{t('language') === 'hr' ? 'Obitelji' : 'Families'}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-white/60">{t('language') === 'hr' ? 'Pristup' : 'Access'}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">4.9★</div>
                <div className="text-sm text-white/60">{t('language') === 'hr' ? '128 recenzija' : '128 reviews'}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">0</div>
                <div className="text-sm text-white/60">{t('language') === 'hr' ? 'Provala od 2020' : 'Break-ins since 2020'}</div>
              </div>
            </div>
          </div>

          {/* Right - Feature Images */}
          <div className="hidden lg:block relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 h-80">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Storage Unit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Klimatizirano</div>
                    <div className="text-sm text-gray-500">18-22°C</div>
                  </div>
                </div>
              </div>

              {/* Live Camera Feed Card */}
              <div className="absolute -top-4 -right-4 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-4 duration-700 delay-700 w-48">
                {/* Camera Feed Header */}
                <div className="bg-gray-800 px-3 py-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Live</span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">CAM-01</span>
                </div>
                {/* Camera Feed Image */}
                <div className="relative h-24 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" 
                    alt="Live camera feed"
                    className="w-full h-full object-cover"
                  />
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse opacity-30" />
                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-400/70" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-400/70" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-400/70" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-400/70" />
                  {/* Timestamp */}
                  <div className="absolute bottom-1 left-2 text-[9px] font-mono text-green-400/90 bg-black/50 px-1 rounded">
                    {currentTime}
                  </div>
                </div>
                {/* Camera Feed Footer */}
                <div className="bg-gray-800 px-3 py-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-[10px] text-gray-300 font-semibold">HD Nadzor</span>
                  </div>
                  <span className="text-[10px] text-green-400 font-bold">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
