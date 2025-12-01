import { Bath, Car, Home, Package, LucideIcon } from 'lucide-react';

export const siteConfig = {
    name: 'BarbaBox',
    description: 'Vaš prostor. Vaš mir. Vaša sloboda. Sigurno skladištenje u Zagrebu s pristupom 24/7.',
    url: 'https://barbabox.hr', // Placeholder, update if real URL is known
    ogImage: 'https://barbabox.hr/og.jpg', // Placeholder
    links: {
        twitter: 'https://twitter.com/barbabox', // Placeholder
        github: 'https://github.com/barbabox', // Placeholder
    },
};

export const contactConfig = {
    address: 'Ulica Skladišta 123, 10000 Zagreb',
    phone: '01 234 5678',
    email: 'info@barbabox.hr',
    socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
    },
};

export interface PricingTier {
    m2: number;
    name: { hr: string; en: string };
    price: number;
    comparison: { hr: string; en: string };
    icon: LucideIcon;
    items: { hr: string[]; en: string[] };
    color: string;
}

export const pricingConfig: PricingTier[] = [
    {
        m2: 2,
        name: { hr: 'Mala', en: 'Small' },
        price: 49,
        comparison: { hr: 'Veličina kupaonice', en: 'Bathroom size' },
        icon: Bath,
        items: {
            hr: ['10-15 kutija', 'Sezonska odjeća', 'Sportska oprema'],
            en: ['10-15 boxes', 'Seasonal clothes', 'Sports equipment'],
        },
        color: 'from-blue-400 to-blue-600',
    },
    {
        m2: 5,
        name: { hr: 'Srednja', en: 'Medium' },
        price: 89,
        comparison: { hr: 'Veličina garaže', en: 'Garage size' },
        icon: Car,
        items: {
            hr: ['Stan 1 soba', 'Namještaj', 'Kućanski aparati'],
            en: ['1-room apartment', 'Furniture', 'Appliances'],
        },
        color: 'from-purple-400 to-purple-600',
    },
    {
        m2: 10,
        name: { hr: 'Velika', en: 'Large' },
        price: 149,
        comparison: { hr: 'Veličina stana', en: 'Apartment size' },
        icon: Home,
        items: {
            hr: ['Stan 2-3 sobe', 'Cijeli namještaj', 'Arhiva'],
            en: ['2-3 room apartment', 'Full furniture', 'Archives'],
        },
        color: 'from-orange-400 to-orange-600',
    },
    {
        m2: 20,
        name: { hr: 'Extra Velika', en: 'Extra Large' },
        price: 249,
        comparison: { hr: 'Veličina kuće', en: 'House size' },
        icon: Package,
        items: {
            hr: ['Cijela kuća', 'Poslovni inventar', 'Vozila'],
            en: ['Entire house', 'Business inventory', 'Vehicles'],
        },
        color: 'from-red-400 to-red-600',
    },
];
