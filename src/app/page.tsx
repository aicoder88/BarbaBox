import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Process from '@/components/Process';
import SizeCalculator from '@/components/SizeCalculator';
import Pricing from '@/components/Pricing';
import CustomerSegments from '@/components/CustomerSegments';
import Security from '@/components/Security';
import FAQ from '@/components/FAQ';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import MobileCallButton from '@/components/MobileCallButton';

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Process />
        <SizeCalculator />
        <Pricing />
        <CustomerSegments />
        <Security />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
}
