import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-betel-leaves.jpg";
import tambulLogo from "@/assets/tambul-logo.png";

const HeroSection = () => {
  const handleWhatsAppOrder = () => {
    window.open("https://wa.me/919876543210?text=Hi! I'd like to order fresh Tambul from House of Tambul 🍃", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gold-shimmer rounded-full float-animation opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full float-animation opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-fresh-green rounded-full float-animation opacity-50" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 fade-in-up">
          <img 
            src={tambulLogo} 
            alt="House of Tambul Logo" 
            className="w-24 h-24 mx-auto mb-4 rounded-full premium-shadow"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 fade-in-up leading-tight">
          House of
          <span className="block text-gold-shimmer">Tambul</span>
        </h1>
        
        {/* Subheading */}
        <p className="font-inter text-xl md:text-2xl text-warm-cream mb-8 fade-in-up max-w-2xl mx-auto leading-relaxed">
          Fresh, homemade Masala Paan Tambul made with love & tradition 🍃
        </p>
        
        {/* CTA Button */}
        <div className="fade-in-up">
          <Button 
            variant="whatsapp" 
            size="lg"
            onClick={handleWhatsAppOrder}
            className="text-lg px-8 py-4 font-inter font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            Order Now 📲
            <div className="absolute inset-0 shimmer-effect rounded-full" />
          </Button>
        </div>
        
        {/* Trust Indicator */}
        <div className="mt-8 fade-in-up">
          <p className="text-warm-cream text-sm font-inter opacity-80">
            ✨ 100% Natural • Home Kitchen • Same Day Delivery
          </p>
        </div>
      </div>
      
      
    </section>
  );
};

export default HeroSection;