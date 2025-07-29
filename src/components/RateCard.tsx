import { Card, CardContent } from "@/components/ui/card";
import { Package, Star, Truck } from "lucide-react";

const RateCard = () => {
  const packages = [
    {
      weight: "100g",
      price: "₹150",
      description: "Perfect for trying",
      popular: false,
      icon: Package,
    },
    {
      weight: "200g",
      price: "₹280",
      description: "Family sharing",
      popular: true,
      icon: Package,
    },
    {
      weight: "500g",
      price: "₹650",
      description: "Party special",
      popular: false,
      icon: Package,
    },
    {
      weight: "1000g",
      price: "₹1200",
      description: "Bulk order",
      popular: false,
      icon: Package,
    },
  ];

  return (
    <section className="py-20 px-4 bg-warm-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-traditional-green mb-4">
            Choose Your Pack
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh tambul delivered to your doorstep. Choose the perfect size for your needs.
          </p>
        </div>

        {/* Rate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.weight}
              className={`relative premium-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                pkg.popular ? 'border-2 border-gold-shimmer' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold-shimmer text-traditional-green px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <pkg.icon className="w-12 h-12 mx-auto text-fresh-green" />
                </div>
                
                <h3 className="font-playfair text-2xl font-bold text-traditional-green mb-2">
                  {pkg.weight}
                </h3>
                
                <div className="mb-3">
                  <span className="font-inter text-3xl font-bold text-primary">
                    {pkg.price}
                  </span>
                </div>
                
                <p className="font-inter text-muted-foreground text-sm mb-4">
                  {pkg.description}
                </p>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-fresh-green rounded-full" />
                    <span>Premium quality</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-fresh-green rounded-full" />
                    <span>Fresh ingredients</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full soft-shadow">
            <Truck className="w-5 h-5 text-fresh-green" />
            <span className="font-inter text-sm text-muted-foreground">
              *Delivery charges may vary based on location
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateCard;