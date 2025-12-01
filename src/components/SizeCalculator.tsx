"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { pricingConfig } from '@/lib/config';

export default function SizeCalculator() {
  const { language } = useLanguage();
  const [selectedSize, setSelectedSize] = useState(2);

  const sizes = pricingConfig;

  const currentSize = sizes.find(s => s.m2 === selectedSize) || sizes[0];
  const sizeIndex = sizes.findIndex(s => s.m2 === selectedSize);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">
              {language === 'hr' ? 'Interaktivni Kalkulator' : 'Interactive Calculator'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            {language === 'hr' ? 'Kalkulator Veličine' : 'Size Calculator'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'hr'
              ? 'Pronađite savršenu veličinu za vaše potrebe'
              : 'Find the perfect size for your needs'}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Comparison */}
            <div className="relative group">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentSize.color} transition-all duration-700`} />
                </div>

                {/* Size Visualization */}
                <div className="relative h-80 flex items-center justify-center">
                  {/* Animated Grid */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-3 p-6 opacity-20">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-xl transition-all duration-700 ${i < (sizeIndex + 1) * 4
                          ? `bg-gradient-to-br ${currentSize.color} shadow-lg`
                          : 'bg-gray-200'
                          }`}
                        style={{
                          transitionDelay: `${i * 40}ms`,
                          opacity: i < (sizeIndex + 1) * 4 ? 1 : 0.3,
                          transform: i < (sizeIndex + 1) * 4 ? 'scale(1)' : 'scale(0.9)'
                        }}
                      />
                    ))}
                  </div>

                  {/* Central Icon */}
                  <div className="relative z-10 text-center">
                    <div
                      className={`w-36 h-36 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${currentSize.color} flex items-center justify-center shadow-2xl transition-all duration-700 transform hover:scale-110 hover:rotate-3`}
                    >
                      <currentSize.icon className="h-20 w-20 text-white drop-shadow-lg" />
                    </div>
                    <div className="text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-500">
                      {currentSize.m2}m²
                    </div>
                    <div className="text-lg text-muted-foreground mt-3 font-medium">
                      {language === 'hr' ? currentSize.comparison.hr : currentSize.comparison.en}
                    </div>
                  </div>
                </div>

                {/* Size Slider */}
                <div className="mt-10 px-4">
                  <div className="flex justify-between text-sm text-muted-foreground mb-6 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size.m2}
                        onClick={() => setSelectedSize(size.m2)}
                        className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${selectedSize === size.m2
                          ? 'bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg scale-110'
                          : 'hover:bg-secondary hover:scale-105'
                          }`}
                      >
                        {size.m2}m²
                      </button>
                    ))}
                  </div>
                  <Slider
                    value={[sizeIndex]}
                    onValueChange={(value) => setSelectedSize(sizes[value[0]].m2)}
                    max={sizes.length - 1}
                    step={1}
                    className="w-full"
                  />
                </div>
              </Card>
            </div>

            {/* Details Panel */}
            <div className="space-y-6">
              <Card className={`p-8 bg-gradient-to-br ${currentSize.color} text-white border-0 shadow-2xl transition-all duration-700 hover:shadow-3xl hover:scale-[1.02]`}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-1">{language === 'hr' ? currentSize.name.hr : currentSize.name.en}</h3>
                    <p className="text-white/90 font-medium">{currentSize.m2}m² • {language === 'hr' ? currentSize.comparison.hr : currentSize.comparison.en}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/80 font-medium">
                      {language === 'hr' ? 'već od' : 'from'}
                    </div>
                    <div className="text-5xl font-bold drop-shadow-lg">€{currentSize.price}</div>
                    <div className="text-sm text-white/80 font-medium">
                      {language === 'hr' ? '/mjesečno' : '/month'}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {(language === 'hr' ? currentSize.items.hr : currentSize.items.en).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                      <div className="w-7 h-7 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-white/95 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full mt-8 bg-white text-primary hover:bg-white/95 font-semibold py-6 text-lg group shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {language === 'hr' ? 'Rezerviraj Sada' : 'Book Now'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-5 text-center bg-white/80 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {language === 'hr' ? 'Pristup' : 'Access'}
                  </div>
                </Card>
                <Card className="p-5 text-center bg-white/80 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-1">HD</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {language === 'hr' ? 'Nadzor' : 'Security'}
                  </div>
                </Card>
                <Card className="p-5 text-center bg-white/80 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-1">0€</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {language === 'hr' ? 'Skriveni troškovi' : 'Hidden fees'}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
