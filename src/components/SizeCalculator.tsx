"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { ArrowRight, Check, Sparkles, Maximize2, Package, Shield, Clock } from 'lucide-react';
import { pricingConfig } from '@/lib/config';
import Image from 'next/image';

export default function SizeCalculator() {
  const { language } = useLanguage();
  const [selectedSize, setSelectedSize] = useState(2);

  const sizes = pricingConfig;

  const currentSize = sizes.find(s => s.m2 === selectedSize) || sizes[0];
  const sizeIndex = sizes.findIndex(s => s.m2 === selectedSize);

  // Image URLs for each size
  const sizeImages = {
    2: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=85',
    5: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
    10: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85',
    20: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=85',
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 mb-6">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-bold text-blue-900">
              {language === 'hr' ? 'Interaktivni Kalkulator Veličine' : 'Interactive Size Calculator'}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
            {language === 'hr' ? 'Pronađite Savršenu Veličinu' : 'Find Your Perfect Size'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'hr'
              ? 'Usporedite veličine s poznatim prostorima i pronađite idealnu jedinicu za vaše potrebe'
              : 'Compare sizes with familiar spaces and find the ideal unit for your needs'}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Calculator Card */}
          <Card className="overflow-hidden shadow-2xl border-0 bg-white">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left: Image & Visual */}
              <div className="lg:col-span-3 relative bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden">
                {/* Storage Unit Image */}
                <div className="relative h-full min-h-[500px]">
                  <Image
                    src={sizeImages[currentSize.m2 as keyof typeof sizeImages]}
                    alt={language === 'hr' ? currentSize.name.hr : currentSize.name.en}
                    fill
                    className="object-cover transition-all duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Size Badge */}
                    <div className="flex justify-between items-start">
                      <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r ${currentSize.color} shadow-2xl backdrop-blur-sm`}>
                        <currentSize.icon className="h-8 w-8 text-white" />
                        <div className="text-left">
                          <div className="text-4xl font-black text-white">{currentSize.m2}m²</div>
                          <div className="text-sm text-white/90 font-medium">
                            {language === 'hr' ? currentSize.name.hr : currentSize.name.en}
                          </div>
                        </div>
                      </div>
                      
                      {/* Price Badge */}
                      <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl">
                        <div className="text-sm text-gray-600 font-semibold">
                          {language === 'hr' ? 'već od' : 'from'}
                        </div>
                        <div className="text-3xl font-black text-gray-900">€{currentSize.price}</div>
                        <div className="text-xs text-gray-500 font-medium">
                          {language === 'hr' ? '/mjesečno' : '/month'}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-3">
                          <Maximize2 className="h-6 w-6 text-white" />
                          <h3 className="text-2xl font-bold text-white">
                            {language === 'hr' ? currentSize.comparison.hr : currentSize.comparison.en}
                          </h3>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {language === 'hr' 
                            ? 'Savršeno za vaše potrebe skladištenja s fleksibilnim ugovorima i pristupom 24/7'
                            : 'Perfect for your storage needs with flexible contracts and 24/7 access'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Details & Controls */}
              <div className="lg:col-span-2 p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="h-full flex flex-col">
                  {/* Size Selector */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      {language === 'hr' ? 'Odaberite Veličinu' : 'Select Size'}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {sizes.map((size) => (
                        <button
                          key={size.m2}
                          onClick={() => setSelectedSize(size.m2)}
                          className={`p-4 rounded-xl transition-all duration-300 border-2 ${
                            selectedSize === size.m2
                              ? `bg-gradient-to-br ${size.color} border-transparent text-white shadow-lg scale-105`
                              : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                          }`}
                        >
                          <size.icon className={`h-6 w-6 mx-auto mb-2 ${selectedSize === size.m2 ? 'text-white' : 'text-gray-400'}`} />
                          <div className={`text-2xl font-bold ${selectedSize === size.m2 ? 'text-white' : 'text-gray-900'}`}>
                            {size.m2}m²
                          </div>
                          <div className={`text-xs font-medium ${selectedSize === size.m2 ? 'text-white/90' : 'text-gray-500'}`}>
                            €{size.price}/mj
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* What Fits */}
                  <div className="mb-8 flex-grow">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      {language === 'hr' ? 'Što Stane' : 'What Fits'}
                    </h4>
                    <div className="space-y-3">
                      {(language === 'hr' ? currentSize.items.hr : currentSize.items.en).map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${currentSize.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-3 rounded-lg bg-blue-50 border border-blue-100">
                      <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                      <div className="text-xs font-bold text-blue-900">24/7</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-purple-50 border border-purple-100">
                      <Shield className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                      <div className="text-xs font-bold text-purple-900">
                        {language === 'hr' ? 'Sigurno' : 'Secure'}
                      </div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-orange-50 border border-orange-100">
                      <Package className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                      <div className="text-xs font-bold text-orange-900">
                        {language === 'hr' ? 'Čisto' : 'Clean'}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r ${currentSize.color} hover:scale-105 group`}
                  >
                    {language === 'hr' ? 'Rezerviraj Odmah' : 'Book Now'}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Bottom Comparison Cards */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {sizes.map((size, idx) => (
              <Card
                key={size.m2}
                onClick={() => setSelectedSize(size.m2)}
                className={`p-5 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedSize === size.m2
                    ? `bg-gradient-to-br ${size.color} text-white shadow-xl border-0`
                    : 'bg-white hover:shadow-lg border border-gray-200'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <size.icon className={`h-8 w-8 mb-3 ${selectedSize === size.m2 ? 'text-white' : 'text-gray-400'}`} />
                <div className={`text-3xl font-black mb-1 ${selectedSize === size.m2 ? 'text-white' : 'text-gray-900'}`}>
                  {size.m2}m²
                </div>
                <div className={`text-sm font-medium mb-2 ${selectedSize === size.m2 ? 'text-white/90' : 'text-gray-600'}`}>
                  {language === 'hr' ? size.comparison.hr : size.comparison.en}
                </div>
                <div className={`text-lg font-bold ${selectedSize === size.m2 ? 'text-white' : 'text-gray-900'}`}>
                  €{size.price}
                  <span className={`text-xs font-normal ${selectedSize === size.m2 ? 'text-white/80' : 'text-gray-500'}`}>
                    {language === 'hr' ? '/mj' : '/mo'}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
