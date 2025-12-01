"use client";

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MobileCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button 
        size="lg"
        className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 shadow-2xl animate-pulse hover:animate-none"
        asChild
      >
        <a href="tel:+38512345678">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
}
