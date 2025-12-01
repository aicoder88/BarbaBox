"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Bath, Car, Home, Package, ArrowRight, Check } from 'lucide-react';

export default function SizeCalculator() {
  const { language } = useLanguage();
  const [selectedSize, setSelectedSize] = useState(2);
  
  const sizes = [
    { 
      m2: 2, 
      name: language === 'hr' ? 'Mala' : 'Small',
      price: 49,
      comparison: language === 'hr' ? 'Veličina kupaonice' : 'Bathroom size',
      icon: Bath,
      items: language === 'hr' 
        ? ['10-15 kutija', 'Sezonska odjeća', 'Sportska oprema']
        : ['10-15 boxes', 'Seasonal clothes', 'Sports equipment'],
      color: 'from-blue-400 to-blue-600',
    },
    { 
      m2: 5, 
      name: language === 'hr' ? 'Srednja' : 'Medium',
      price: 89,
      comparison: language === 'hr' ? 'Veličina garaže' : 'Garage size',
      icon: Car,
      items: language === 'hr' 
        ? ['Stan 1 soba', 'Namještaj', 'Kućanski aparati']
        : ['1-room apartment', 'Furniture', 'Appliances'],
      color: 'from-purple-400 to-purple-600',
    },
    { 
      m2: 10, 
      name: language === 'hr' ? 'Velika' : 'Large',
      price: 149,
      comparison: language === 'hr' ? 'Veličina stana' : 'Apartment size',
      icon: Home,
      items: language === 'hr' 
        ? ['Stan 2-3 sobe', 'Cijeli namještaj', 'Arhiva']
        : ['2-3 room apartment', 'Full furniture', 'Archives'],
      color: 'from-orange-400 to-orange-600',
    },
    { 
      m2: 20, 
      name: language === 'hr' ? 'Extra Velika' : 'Extra Large',
      price: 249,
      comparison: language === 'hr' ? 'Veličina kuće' : 'House size',
      icon: Package,
      items: language === 'hr' 
        ? ['Cijela kuća', 'Poslovni inventar', 'Vozila']
        : ['Entire house', 'Business inventory', 'Vehicles'],
      color: 'from-red-400 to-red-600',
    },
  ];

  const currentSize = sizes.find(s => s.m2 === selectedSize) || sizes[0];
  const sizeIndex = sizes.findIndex(s => s.m2 === selectedSize);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
            <div className="relative">
              <Card className="p-8 bg-white border-2 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentSize.color} transition-all duration-500`} />
                </div>
                
                {/* Size Visualization */}
                <div className="relative h-80 flex items-center justify-center">
                  {/* Animated Grid */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4 opacity-20">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div 
                        key={i}
                        className={`rounded-lg transition-all duration-500 ${
                          i < (sizeIndex + 1) * 4 
                            ? `bg-gradient-to-br ${currentSize.color}` 
                            : 'bg-gray-200'
                        }`}
                        style={{ 
                          transitionDelay: `${i * 30}ms`,
                          opacity: i < (sizeIndex + 1) * 4 ? 1 : 0.3
                        }}
                      />
                    ))}
                  </div>

                  {/* Central Icon */}
                  <div className="relative z-10 text-center">
                    <div 
                      className={`w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${currentSize.color} flex items-center justify-center shadow-2xl transition-all duration-500 transform hover:scale-110`}
                    >
                      <currentSize.icon className="h-16 w-16 text-white" />
                    </div>
                    <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {currentSize.m2}m²
                    </div>
                    <div className="text-lg text-muted-foreground mt-2">
                      {currentSize.comparison}
                    </div>
                  </div>
                </div>

                {/* Size Slider */}
                <div className="mt-8 px-4">
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    {sizes.map((size) => (
                      <button
                        key={size.m2}
                        onClick={() => setSelectedSize(size.m2)}
                        className={`px-3 py-1 rounded-full transition-all ${
                          selectedSize === size.m2 
                            ? 'bg-primary text-white font-semibold' 
                            : 'hover:bg-secondary'
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
              <Card className={`p-8 bg-gradient-to-br ${currentSize.color} text-white border-0 shadow-2xl transition-all duration-500`}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold">{currentSize.name}</h3>
                    <p className="text-white/80">{currentSize.m2}m² • {currentSize.comparison}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/80">
                      {language === 'hr' ? 'već od' : 'from'}
                    </div>
                    <div className="text-4xl font-bold">€{currentSize.price}</div>
                    <div className="text-sm text-white/80">
                      {language === 'hr' ? '/mjesečno' : '/month'}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {currentSize.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full mt-8 bg-white text-primary hover:bg-white/90 font-semibold py-6 text-lg group"
                >
                  {language === 'hr' ? 'Rezerviraj Sada' : 'Book Now'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 text-center bg-white border-2 hover:border-primary/30 transition-colors">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">
                    {language === 'hr' ? 'Pristup' : 'Access'}
                  </div>
                </Card>
                <Card className="p-4 text-center bg-white border-2 hover:border-primary/30 transition-colors">
                  <div className="text-2xl font-bold text-primary">HD</div>
                  <div className="text-xs text-muted-foreground">
                    {language === 'hr' ? 'Nadzor' : 'Security'}
                  </div>
                </Card>
                <Card className="p-4 text-center bg-white border-2 hover:border-primary/30 transition-colors">
                  <div className="text-2xl font-bold text-primary">0€</div>
                  <div className="text-xs text-muted-foreground">
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
