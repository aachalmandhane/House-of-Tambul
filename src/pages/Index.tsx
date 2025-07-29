import HeroSection from "@/components/HeroSection";
import RateCard from "@/components/RateCard";
import GallerySection from "@/components/GallerySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialSection";
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
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Testimonials Section */}
      <TestimonialSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Sticky WhatsApp Button */}
      <StickyWhatsApp />
    </div>
  );
};

export default Index;
