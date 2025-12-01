"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Zagreb<span className="text-accent">Storage</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sizes" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.sizes')}
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#security" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.security')}
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
              <button
                onClick={() => setLanguage('hr')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  language === 'hr' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                HR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  language === 'en' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
            
            <Button className="hidden md:inline-flex bg-accent hover:bg-accent/90">
              {t('nav.contact')}
            </Button>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#sizes" className="text-sm font-medium hover:text-primary transition-colors">
                {t('nav.sizes')}
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                {t('nav.pricing')}
              </a>
              <a href="#security" className="text-sm font-medium hover:text-primary transition-colors">
                {t('nav.security')}
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                {t('nav.about')}
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                {t('nav.contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
