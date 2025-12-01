"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'hr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  hr: {
    // Header
    'nav.sizes': 'Veličine',
    'nav.pricing': 'Cijene',
    'nav.security': 'Sigurnost',
    'nav.about': 'O Nama',
    'nav.contact': 'Kontakt',
    'nav.blog': 'Blog',
    
    // Hero
    'hero.title': 'Vaš Prostor. Vaš Mir. Vaša Sloboda.',
    'hero.subtitle': 'Sigurno skladištenje u Zagrebu s pristupom 24/7',
    'hero.cta.units': 'Pronađi Jedinicu',
    'hero.cta.price': 'Izračunaj Cijenu',
    
    // Trust Bar
    'trust.surveillance': '24/7 Nadzor',
    'trust.climate': 'Klimatizirano',
    'trust.flexible': 'Fleksibilni Ugovori',
    'trust.customers': '500+ Zadovoljnih Korisnika',
    'trust.rating': '4.9★ Google Recenzije',
    
    // Process
    'process.title': 'Kako Funkcionira',
    'process.step1.title': 'Odaberi Veličinu',
    'process.step1.desc': 'Pronađi savršenu jedinicu za svoje potrebe',
    'process.step2.title': 'Rezerviraj Online',
    'process.step2.desc': 'Brza i jednostavna online rezervacija',
    'process.step3.title': 'Pristupi Bilo Kada',
    'process.step3.desc': 'Pristup 24/7 s osobnim kodom',
    
    // Pricing
    'pricing.title': 'Transparentne Cijene',
    'pricing.subtitle': 'Bez skrivenih troškova. Bez iznenađenja.',
    'pricing.from': 'već od',
    'pricing.month': '/mjesečno',
    'pricing.small': 'Mala',
    'pricing.medium': 'Srednja',
    'pricing.large': 'Velika',
    'pricing.xlarge': 'Extra Velika',
    'pricing.small.desc': 'Idealno za kutije i male predmete',
    'pricing.medium.desc': 'Savršeno za stan s 1 spavaćom sobom',
    'pricing.large.desc': 'Za stan s 2-3 spavaće sobe',
    'pricing.xlarge.desc': 'Za cijelu kuću ili poslovni inventar',
    
    // Customer Segments
    'segments.title': 'Tko Koristi Naše Usluge',
    'segments.families': 'Obitelji',
    'segments.families.desc': 'Sigurno čuvanje sezonskih stvari i uspomena',
    'segments.students': 'Studenti',
    'segments.students.desc': 'Fleksibilno skladištenje tijekom praznika',
    'segments.business': 'Poduzetnici',
    'segments.business.desc': 'Poslovni inventar i arhiva',
    'segments.renovators': 'Renovatori',
    'segments.renovators.desc': 'Privremeno skladištenje tijekom radova',
    
    // Security
    'security.title': 'Vaše Stvari Su Sigurnije Nego Kod Kuće',
    'security.subtitle': 'Višeslojna zaštita za potpuni mir',
    'security.cameras': 'HD Kamere',
    'security.alarms': 'Alarmi na Jedinicama',
    'security.access': 'Kontrola Pristupa',
    'security.lighting': 'LED Osvjetljenje',
    
    // FAQ
    'faq.title': 'Često Postavljana Pitanja',
    'faq.q1': 'Mogu li pristupiti vikendom?',
    'faq.a1': 'Da! Pristup je omogućen 24/7, uključujući vikende i praznike.',
    'faq.q2': 'Mogu li promijeniti veličinu jedinice?',
    'faq.a2': 'Naravno. Možete nadograditi ili smanjiti veličinu bilo kada.',
    'faq.q3': 'Je li osiguranje uključeno?',
    'faq.a3': 'Osnovno osiguranje je uključeno. Dodatno osiguranje je dostupno.',
    'faq.q4': 'Koje načine plaćanja prihvaćate?',
    'faq.a4': 'Prihvaćamo kartice, bankovni transfer i gotovinu.',
    
    // Location
    'location.title': 'Posjetite Nas',
    'location.address': 'Adresa',
    'location.parking': 'Besplatno Parkiranje',
    'location.transport': 'Javni Prijevoz',
    
    // Footer
    'footer.tagline': 'Dio Zagreb zajednice od 2020',
    'footer.rights': 'Sva prava pridržana',
  },
  en: {
    // Header
    'nav.sizes': 'Sizes',
    'nav.pricing': 'Pricing',
    'nav.security': 'Security',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    
    // Hero
    'hero.title': 'Your Space. Your Peace. Your Freedom.',
    'hero.subtitle': 'Secure storage in Zagreb with 24/7 access',
    'hero.cta.units': 'Find a Unit',
    'hero.cta.price': 'Calculate Price',
    
    // Trust Bar
    'trust.surveillance': '24/7 Surveillance',
    'trust.climate': 'Climate Controlled',
    'trust.flexible': 'Flexible Contracts',
    'trust.customers': '500+ Happy Customers',
    'trust.rating': '4.9★ Google Reviews',
    
    // Process
    'process.title': 'How It Works',
    'process.step1.title': 'Choose Size',
    'process.step1.desc': 'Find the perfect unit for your needs',
    'process.step2.title': 'Book Online',
    'process.step2.desc': 'Quick and easy online booking',
    'process.step3.title': 'Access Anytime',
    'process.step3.desc': '24/7 access with personal code',
    
    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'No hidden fees. No surprises.',
    'pricing.from': 'from',
    'pricing.month': '/month',
    'pricing.small': 'Small',
    'pricing.medium': 'Medium',
    'pricing.large': 'Large',
    'pricing.xlarge': 'Extra Large',
    'pricing.small.desc': 'Perfect for boxes and small items',
    'pricing.medium.desc': 'Great for 1-bedroom apartment',
    'pricing.large.desc': 'For 2-3 bedroom apartment',
    'pricing.xlarge.desc': 'For entire house or business inventory',
    
    // Customer Segments
    'segments.title': 'Who Uses Our Services',
    'segments.families': 'Families',
    'segments.families.desc': 'Safely store seasonal items and memories',
    'segments.students': 'Students',
    'segments.students.desc': 'Flexible storage during holidays',
    'segments.business': 'Entrepreneurs',
    'segments.business.desc': 'Business inventory and archives',
    'segments.renovators': 'Renovators',
    'segments.renovators.desc': 'Temporary storage during works',
    
    // Security
    'security.title': 'Your Items Are Safer Than At Home',
    'security.subtitle': 'Multi-layer protection for complete peace of mind',
    'security.cameras': 'HD Cameras',
    'security.alarms': 'Unit Alarms',
    'security.access': 'Access Control',
    'security.lighting': 'LED Lighting',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Can I access on weekends?',
    'faq.a1': 'Yes! Access is available 24/7, including weekends and holidays.',
    'faq.q2': 'Can I change unit size?',
    'faq.a2': 'Of course. You can upgrade or downsize anytime.',
    'faq.q3': 'Is insurance included?',
    'faq.a3': 'Basic insurance is included. Additional coverage is available.',
    'faq.q4': 'What payment methods do you accept?',
    'faq.a4': 'We accept cards, bank transfer, and cash.',
    
    // Location
    'location.title': 'Visit Us',
    'location.address': 'Address',
    'location.parking': 'Free Parking',
    'location.transport': 'Public Transport',
    
    // Footer
    'footer.tagline': 'Part of Zagreb community since 2020',
    'footer.rights': 'All rights reserved',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('hr');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'hr' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.hr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
