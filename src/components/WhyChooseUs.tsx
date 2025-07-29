import { Card, CardContent } from "@/components/ui/card";
import { Leaf, ChefHat, Sparkles, Home } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Natural Ingredients",
      description: "Only the finest organic ingredients, no artificial additives or preservatives",
      emoji: "🌿"
    },
    {
      icon: ChefHat,
      title: "Handcrafted with Care",
      description: "Each tambul is lovingly prepared by experienced hands following traditional methods",
      emoji: "🧑‍🍳"
    },
    {
      icon: Sparkles,
      title: "Ancient Ayurvedic Benefits",
      description: "Time-tested recipe that promotes digestion and provides natural freshness",
      emoji: "✨"
    },
    {
      icon: Home,
      title: "Direct from Home Kitchen",
      description: "Made fresh in our home kitchen with the same care as we'd make for our family",
      emoji: "🏡"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-warm-cream to-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-traditional-green mb-4">
            Why Choose House of Tambul?
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of tradition, quality, and care in every bite
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden premium-shadow hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-fresh-green to-traditional-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {feature.emoji}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-semibold text-traditional-green mb-3 group-hover:text-fresh-green transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-fresh-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full gold-shadow">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-gold-shimmer">⭐</div>
              ))}
            </div>
            <span className="font-inter font-semibold text-traditional-green">
              Trusted by 500+ Happy Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;