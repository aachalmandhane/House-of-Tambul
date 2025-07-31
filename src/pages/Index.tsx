import HeroSection from "@/components/HeroSection";
import RateCard from "@/components/RateCard";
import GallerySection from "@/components/GallerySection";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Rate Card Section */}
      <RateCard />
      
      {/* Gallery Section */}
      <GallerySection />
      
   
      {/* Footer */}
      <Footer />
      
      {/* Sticky WhatsApp Button */}
      <StickyWhatsApp />
    </div>
  );
};

export default Index;
