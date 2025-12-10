import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutPreview } from "@/components/AboutPreview";
import { EventsPreview } from "@/components/EventsPreview";
import { GalleryPreview } from "@/components/GalleryPreview";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <EventsPreview />
        <GalleryPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
