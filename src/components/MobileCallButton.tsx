"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MobileCallButton() {
  const { t } = useLanguage();

  const whatsappMessage = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/38512345678?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl animate-bounce hover:animate-none md:w-auto md:h-auto md:px-6 md:py-3 md:rounded-xl"
        asChild
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6" />
          <span className="hidden md:inline font-semibold">{t('whatsapp.cta')}</span>
        </a>
      </Button>
    </div>
  );
}
