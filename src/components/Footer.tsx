import tambulLogo from "@/assets/tambul-logo.png";

const Footer = () => {
  return (
    <footer className="bg-traditional-green text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={tambulLogo} 
              alt="House of Tambul Logo" 
              className="w-16 h-16 mx-auto rounded-full"
            />
          </div>
          
          {/* Brand Name */}
          <h3 className="font-playfair text-2xl font-bold mb-2">
            House of Tambul
          </h3>
          
          {/* Tagline */}
          <p className="font-inter text-warm-cream mb-6 text-lg">
            Handmade with ❤️ in India
          </p>
          
          {/* Contact Info */}
          <div className="mb-6 space-y-2">
            <p className="font-inter text-sm opacity-80">
              📞 +91 99235 73675 | 📧 Houseoftambul@gmail.com
            </p>
            <p className="font-inter text-sm opacity-80">
              🍃 Fresh • Natural • Traditional
            </p>
          </div>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gold-shimmer mx-auto mb-6 rounded-full" />
          
          {/* Copyright */}
          <div className="border-t border-white/20 pt-6">
            <p className="font-inter text-sm opacity-60">
              © {new Date().getFullYear()} House of Tambul. All rights reserved.
            </p>
            <p className="font-inter text-xs opacity-40 mt-2">
              Made with tradition, served with love
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;