import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const StickyWhatsApp = () => {
  const handleWhatsAppOrder = () => {
    window.open("https://wa.me/919923573675?text=Hi! I'd like to order fresh Tambul from House of Tambul 🍃", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="lg"
        onClick={handleWhatsAppOrder}
        className="rounded-full w-16 h-16 p-0 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8" />
       
      </Button>
      
      {/* Order Now Text */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="bg-traditional-green text-white px-3 py-1 rounded-full text-sm font-inter whitespace-nowrap">
          Order Now!
        </div>
      </div>
    </div>
  );
};

export default StickyWhatsApp;