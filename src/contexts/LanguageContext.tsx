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
    // Header & Branding
    'brand.name': 'BarbaBox',
    'nav.sizes': 'Veličine',
    'nav.pricing': 'Cijene',
    'nav.security': 'Sigurnost',
    'nav.about': 'O Nama',
    'nav.contact': 'Kontakt',
    'nav.blog': 'Blog',

    // Hero - New Emotional Copy
    'hero.badge': '24/7 Nadzor Aktivan',
    'hero.title': 'Nema Više Nereda. Nema Više Stresa.',
    'hero.subtitle': 'Vaše stvari čuvamo kao da su naše.',
    'hero.features': '24/7 pristup • Video nadzor • Klimatizirano • U srcu Zagreba',
    'hero.cta.primary': 'Pronađi Svoju Jedinicu',
    'hero.cta.secondary': 'Nazovi Odmah',
    'hero.phone': '01 234 5678',
    'hero.promo': 'PRVI MJESEC -20%',

    // Trust Bar - Specific Numbers
    'trust.families': '547 obitelji nam vjeruje',
    'trust.access': 'Pristup u 2 minute, dan i noć',
    'trust.rating': '4.9★ na Googleu (128 recenzija)',
    'trust.security': '0 provala od 2020.',

    // Process - Emotional & Helpful
    'process.title': 'Kako do Vašeg Prostora?',
    'process.step1.title': 'Recite nam koliko imate stvari',
    'process.step1.desc': 'Ne znate koliko vam treba? Bez brige — pomažemo svaki dan.',
    'process.step1.cta': 'Nazovite ili kliknite za besplatnu procjenu',
    'process.step2.title': 'Rezervirajte u 3 minute',
    'process.step2.desc': 'Online. Bez papira. Bez čekanja.',
    'process.step2.cta': 'Potvrda stiže odmah na email',
    'process.step3.title': 'Dođite kad vam paše',
    'process.step3.desc': 'Vaš osobni kod otvara vrata 0-24.',
    'process.step3.cta': 'Vikend? Ponoć? Nije bitno — vaše stvari vas čekaju',

    // Pricing - Detailed with Context
    'pricing.title': 'Transparentne Cijene',
    'pricing.subtitle': 'Bez skrivenih troškova. Bez ugovora na godinu dana.',
    'pricing.promo': '🎁 PRVI MJESEC -20% | Otkazivo bilo kada',
    'pricing.from': 'već od',
    'pricing.month': '/mj',
    'pricing.popular': 'NAJTRAŽENIJE',

    // Small Unit
    'pricing.small.name': 'Mala Jedinica',
    'pricing.small.size': '2m² — kao tuš kabina',
    'pricing.small.price': '49',
    'pricing.small.perfect': 'Savršeno za:',
    'pricing.small.item1': '10-15 selidabenih kutija',
    'pricing.small.item2': 'Zimske gume + skijaška oprema',
    'pricing.small.item3': 'Sezonsku odjeću cijele obitelji',

    // Medium Unit
    'pricing.medium.name': 'Srednja Jedinica',
    'pricing.medium.size': '5m² — kao manja garaža',
    'pricing.medium.price': '89',
    'pricing.medium.perfect': 'Savršeno za:',
    'pricing.medium.item1': 'Namještaj garsonjere',
    'pricing.medium.item2': 'Inventar malog websopa',
    'pricing.medium.item3': 'Sve iz dječje sobe + podruma',

    // Large Unit
    'pricing.large.name': 'Velika Jedinica',
    'pricing.large.size': '10m² — kao dnevni boravak',
    'pricing.large.price': '149',
    'pricing.large.perfect': 'Savršeno za:',
    'pricing.large.item1': 'Kompletni stan (2-3 sobe)',
    'pricing.large.item2': 'Poslovnu arhivu + opremu',
    'pricing.large.item3': 'Selidbu u fazama',

    // XL Unit
    'pricing.xlarge.name': 'XL Jedinica',
    'pricing.xlarge.size': '20m² — kao dvostruka garaža',
    'pricing.xlarge.price': '249',
    'pricing.xlarge.perfect': 'Savršeno za:',
    'pricing.xlarge.item1': 'Cijelu kuću ili vikendicu',
    'pricing.xlarge.item2': 'Skladište za e-commerce',
    'pricing.xlarge.item3': 'Renovaciju bez stresa',

    'pricing.cta': 'Rezerviraj',

    // Customer Segments - Real Stories
    'segments.title': 'Tko nam već vjeruje?',
    'segments.families.icon': '🏠',
    'segments.families.title': 'Obitelji koje se sele',
    'segments.families.quote': 'Imali smo 3 tjedna između stanova. Sve je bilo sigurno kod vas dok nismo našli novi dom.',
    'segments.families.author': 'Marija i Tomislav, Trešnjevka',

    'segments.students.icon': '🎓',
    'segments.students.title': 'Studenti',
    'segments.students.quote': 'Svako ljeto spremim namještaj iz stana umjesto da plaćam praznu sobu. Uštedim 400€.',
    'segments.students.author': 'Luka, PMF',

    'segments.business.icon': '📦',
    'segments.business.title': 'Online poduzetnici',
    'segments.business.quote': 'Moj dnevni boravak više ne izgleda kao skladište. A pristup imam kad god treba poslati pakete.',
    'segments.business.author': 'Ana, vlasnica Instagram shopa',

    'segments.renovators.icon': '🔨',
    'segments.renovators.title': 'Renovatori',
    'segments.renovators.quote': '6 mjeseci obnove kuće. Sve je preživjelo bez ogrebotine.',
    'segments.renovators.author': 'Obitelj Horvat, Sesvete',

    // Security - Visceral Copy
    'security.title': 'Spavajte Mirno. Mi Budimo.',
    'security.subtitle': 'Dok vi spavate, 47 HD kamera gleda. Senzori osluškuju. Alarmi čekaju.',
    'security.record': 'Od 2020. godine: 0 provala. 0 oštećenja. 0 izgubljenih stvari.',
    'security.feature1.title': 'HD video nadzor 24/7',
    'security.feature1.desc': 'Snimke čuvamo 30 dana',
    'security.feature2.title': 'Individualni alarm',
    'security.feature2.desc': 'Na SVAKOJ jedinici',
    'security.feature3.title': 'Osobni pristupni kod',
    'security.feature3.desc': 'Samo vi imate pristup',
    'security.feature4.title': 'LED osvjetljenje',
    'security.feature4.desc': 'Bez mrtvog kuta',
    'security.feature5.title': 'Klimatizacija',
    'security.feature5.desc': 'Bez vlage, plijesni i mirisa',
    'security.feature6.title': 'Osiguranje uključeno',
    'security.feature6.desc': 'U cijenu',
    'security.cta': 'Dođite. Uvjerite se vlastitim očima.',

    // FAQ - Conversational
    'faq.title': 'Često Postavljana Pitanja',
    'faq.q1': 'Mogu li doći subotom u 23h po zimske gume?',
    'faq.a1': 'Da. Vaš kod radi 24 sata dnevno, 365 dana godišnje. Uskrs, Nova Godina, 3 ujutro — nije bitno. Vaše stvari, vaš raspored.',
    'faq.q2': 'Što ako shvatim da mi treba veća/manja jedinica?',
    'faq.a2': 'Javite nam se. Prebacujemo vas na drugu veličinu bez penala, čim se oslobodi. Većina klijenata dobije novu jedinicu unutar tjedna.',
    'faq.q3': 'Je li osiguranje uključeno?',
    'faq.a3': 'Da, osnovno osiguranje je uključeno u cijenu. Pokriva požar, poplavu i provalu do 5.000€. Trebate više? Nudimo prošireno osiguranje za vrednije stvari.',
    'faq.q4': 'Moram li potpisati ugovor na godinu dana?',
    'faq.a4': 'Ne. Minimalno razdoblje je 1 mjesec. Možete otkazati bilo kada s 7 dana najave. Bez penala. Bez objašnjenja.',
    'faq.q5': 'Kako plaćam?',
    'faq.a5': 'Kako vam paše. Kartica, PayPal, internet bankarstvo, ili gotovina u uredu. Račun šaljemo mailom svakog mjeseca.',

    // Location - With Urgency
    'location.title': 'Dođite na Kavu i Razgledajte',
    'location.subtitle': 'Bez obveze. Bez pritiska. Samo dođite vidjeti svojima očima.',
    'location.address.title': 'Adresa',
    'location.address.street': 'Ulica Skladišta 123, Zagreb',
    'location.address.note': '(5 min od Avenije)',
    'location.phone': '01 234 5678',
    'location.phone.note': 'javljamo se odmah',
    'location.email': 'info@barbabox.hr',
    'location.hours.title': 'Radno Vrijeme Ureda',
    'location.hours.weekday': 'Pon-Pet: 8-20h',
    'location.hours.saturday': 'Sub: 9-14h',
    'location.access': 'Pristup jedinicama: 0-24, svaki dan',
    'location.parking': '50+ besplatnih parkirnih mjesta',
    'location.transport': 'Tramvaj 5, 7 — stanica "Skladišna"',
    'location.cta.call': 'Nazovi Odmah',
    'location.cta.visit': 'Zakaži Besplatni Obilazak',
    'location.availability': '⚡ Jedinice se brzo pune',
    'location.stock': 'Trenutno slobodno: 12 malih, 7 srednjih, 3 velike',

    // Footer - Personal Touch
    'footer.brand': 'BarbaBox',
    'footer.tagline': 'Obiteljski posao. Zagrebački do srži.',
    'footer.quote': '"Ovo nije samo posao — ovo je obećanje da ćemo se brinuti o vašim stvarima kao da su naše."',
    'footer.founder': '— Barbara Krečak, osnivačica',
    'footer.established': 'Dio Zagreb zajednice od 2020',
    'footer.rights': 'Sva prava pridržana',

    // WhatsApp
    'whatsapp.cta': 'Pišite nam na WhatsApp',
    'whatsapp.message': 'Pozdrav! Zanima me skladištenje u BarbaBox...',
  },
  en: {
    // Header & Branding
    'brand.name': 'BarbaBox',
    'nav.sizes': 'Sizes',
    'nav.pricing': 'Pricing',
    'nav.security': 'Security',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',

    // Hero - New Emotional Copy
    'hero.badge': '24/7 Surveillance Active',
    'hero.title': 'No More Mess. No More Stress.',
    'hero.subtitle': 'We guard your belongings like they\'re our own.',
    'hero.features': '24/7 access • Video surveillance • Climate controlled • In the heart of Zagreb',
    'hero.cta.primary': 'Find Your Unit',
    'hero.cta.secondary': 'Call Now',
    'hero.phone': '01 234 5678',
    'hero.promo': 'FIRST MONTH -20%',

    // Trust Bar - Specific Numbers
    'trust.families': '547 families trust us',
    'trust.access': 'Access in 2 minutes, day and night',
    'trust.rating': '4.9★ on Google (128 reviews)',
    'trust.security': '0 break-ins since 2020',

    // Process - Emotional & Helpful
    'process.title': 'How to Get Your Space?',
    'process.step1.title': 'Tell us how much stuff you have',
    'process.step1.desc': 'Don\'t know how much you need? No worries — we help every day.',
    'process.step1.cta': 'Call or click for a free estimate',
    'process.step2.title': 'Book in 3 minutes',
    'process.step2.desc': 'Online. No paperwork. No waiting.',
    'process.step2.cta': 'Confirmation arrives immediately via email',
    'process.step3.title': 'Come whenever suits you',
    'process.step3.desc': 'Your personal code opens the door 24/7.',
    'process.step3.cta': 'Weekend? Midnight? Doesn\'t matter — your belongings are waiting',

    // Pricing - Detailed with Context
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'No hidden fees. No yearly contract required.',
    'pricing.promo': '🎁 FIRST MONTH -20% | Cancel anytime',
    'pricing.from': 'from',
    'pricing.month': '/mo',
    'pricing.popular': 'MOST POPULAR',

    // Small Unit
    'pricing.small.name': 'Small Unit',
    'pricing.small.size': '2m² — like a shower cabin',
    'pricing.small.price': '49',
    'pricing.small.perfect': 'Perfect for:',
    'pricing.small.item1': '10-15 moving boxes',
    'pricing.small.item2': 'Winter tires + ski equipment',
    'pricing.small.item3': 'Seasonal clothing for the whole family',

    // Medium Unit
    'pricing.medium.name': 'Medium Unit',
    'pricing.medium.size': '5m² — like a small garage',
    'pricing.medium.price': '89',
    'pricing.medium.perfect': 'Perfect for:',
    'pricing.medium.item1': 'Studio apartment furniture',
    'pricing.medium.item2': 'Small webshop inventory',
    'pricing.medium.item3': 'Everything from kids room + basement',

    // Large Unit
    'pricing.large.name': 'Large Unit',
    'pricing.large.size': '10m² — like a living room',
    'pricing.large.price': '149',
    'pricing.large.perfect': 'Perfect for:',
    'pricing.large.item1': 'Complete apartment (2-3 rooms)',
    'pricing.large.item2': 'Business archive + equipment',
    'pricing.large.item3': 'Phased moving',

    // XL Unit
    'pricing.xlarge.name': 'XL Unit',
    'pricing.xlarge.size': '20m² — like a double garage',
    'pricing.xlarge.price': '249',
    'pricing.xlarge.perfect': 'Perfect for:',
    'pricing.xlarge.item1': 'Entire house or cottage',
    'pricing.xlarge.item2': 'E-commerce warehouse',
    'pricing.xlarge.item3': 'Stress-free renovation',

    'pricing.cta': 'Reserve',

    // Customer Segments - Real Stories
    'segments.title': 'Who already trusts us?',
    'segments.families.icon': '🏠',
    'segments.families.title': 'Moving families',
    'segments.families.quote': 'We had 3 weeks between apartments. Everything was safe with you until we found our new home.',
    'segments.families.author': 'Marija and Tomislav, Trešnjevka',

    'segments.students.icon': '🎓',
    'segments.students.title': 'Students',
    'segments.students.quote': 'Every summer I store furniture from my apartment instead of paying for an empty room. I save 400€.',
    'segments.students.author': 'Luka, PMF',

    'segments.business.icon': '📦',
    'segments.business.title': 'Online entrepreneurs',
    'segments.business.quote': 'My living room no longer looks like a warehouse. And I have access whenever I need to send packages.',
    'segments.business.author': 'Ana, Instagram shop owner',

    'segments.renovators.icon': '🔨',
    'segments.renovators.title': 'Renovators',
    'segments.renovators.quote': '6 months of house renovation. Everything survived without a scratch.',
    'segments.renovators.author': 'Horvat Family, Sesvete',

    // Security - Visceral Copy
    'security.title': 'Sleep Peacefully. We Stay Awake.',
    'security.subtitle': 'While you sleep, 47 HD cameras watch. Sensors listen. Alarms wait.',
    'security.record': 'Since 2020: 0 break-ins. 0 damages. 0 lost items.',
    'security.feature1.title': 'HD video surveillance 24/7',
    'security.feature1.desc': 'We keep footage for 30 days',
    'security.feature2.title': 'Individual alarm',
    'security.feature2.desc': 'On EVERY unit',
    'security.feature3.title': 'Personal access code',
    'security.feature3.desc': 'Only you have access',
    'security.feature4.title': 'LED lighting',
    'security.feature4.desc': 'No blind spots',
    'security.feature5.title': 'Climate control',
    'security.feature5.desc': 'No moisture, mold, or odors',
    'security.feature6.title': 'Insurance included',
    'security.feature6.desc': 'In the price',
    'security.cta': 'Come. See for yourself.',

    // FAQ - Conversational
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Can I come Saturday at 11 PM for winter tires?',
    'faq.a1': 'Yes. Your code works 24 hours a day, 365 days a year. Easter, New Year, 3 AM — doesn\'t matter. Your belongings, your schedule.',
    'faq.q2': 'What if I realize I need a bigger/smaller unit?',
    'faq.a2': 'Let us know. We\'ll move you to another size without penalty, as soon as one becomes available. Most clients get a new unit within a week.',
    'faq.q3': 'Is insurance included?',
    'faq.a3': 'Yes, basic insurance is included in the price. Covers fire, flood, and break-ins up to €5,000. Need more? We offer extended insurance for more valuable items.',
    'faq.q4': 'Do I have to sign a year-long contract?',
    'faq.a4': 'No. Minimum period is 1 month. You can cancel anytime with 7 days notice. No penalties. No explanations needed.',
    'faq.q5': 'How do I pay?',
    'faq.a5': 'However you prefer. Card, PayPal, internet banking, or cash at the office. We send invoices via email each month.',

    // Location - With Urgency
    'location.title': 'Come for Coffee and a Tour',
    'location.subtitle': 'No obligation. No pressure. Just come see with your own eyes.',
    'location.address.title': 'Address',
    'location.address.street': 'Warehouse Street 123, Zagreb',
    'location.address.note': '(5 min from Avenue)',
    'location.phone': '01 234 5678',
    'location.phone.note': 'we answer immediately',
    'location.email': 'info@barbabox.hr',
    'location.hours.title': 'Office Hours',
    'location.hours.weekday': 'Mon-Fri: 8am-8pm',
    'location.hours.saturday': 'Sat: 9am-2pm',
    'location.access': 'Unit access: 24/7, every day',
    'location.parking': '50+ free parking spaces',
    'location.transport': 'Tram 5, 7 — "Skladišna" stop',
    'location.cta.call': 'Call Now',
    'location.cta.visit': 'Schedule Free Tour',
    'location.availability': '⚡ Units filling up fast',
    'location.stock': 'Currently available: 12 small, 7 medium, 3 large',

    // Footer - Personal Touch
    'footer.brand': 'BarbaBox',
    'footer.tagline': 'Family business. Zagreb through and through.',
    'footer.quote': '"This isn\'t just a business — it\'s a promise that we\'ll care for your belongings as if they were our own."',
    'footer.founder': '— Barbara Krečak, founder',
    'footer.established': 'Part of Zagreb community since 2020',
    'footer.rights': 'All rights reserved',

    // WhatsApp
    'whatsapp.cta': 'Message us on WhatsApp',
    'whatsapp.message': 'Hello! I\'m interested in storage at BarbaBox...',
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
