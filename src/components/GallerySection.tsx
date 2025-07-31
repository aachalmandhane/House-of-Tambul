import { useState } from "react";
import paanPreparation from "@/assets/paan-preparation.jpg";
import finishedPaan from "@/assets/finished-paan.jpg";
import ingredients from "@/assets/ingredients.jpg";
import freshLeaves from "@/assets/fresh-leaves.jpg";
import t1 from "@/assets/T1.jpg";
import t2 from "@/assets/T2.jpg";
import t3 from "@/assets/T3.jpg";
import t4 from "@/assets/T4 (1).jpg";


const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      image: paanPreparation,
      title: "Handcrafted with Care",
      description: "Each paan is carefully prepared by skilled hands"
    },
    {
      image: finishedPaan,
      title: "Premium Presentation",
      description: "Beautiful finishing with traditional garnish"
    },
    {
      image: ingredients,
      title: "Natural Ingredients",
      description: "Only the finest, freshest ingredients"
    },
    {
      image: freshLeaves,
      title: "Farm Fresh Leaves",
      description: "Sourced directly from organic farms"
    },

    {
  image: t1,
  title: "Aesthetic Display",
  description: "Our tambul served fresh with natural elegance"
},
{
  image: t2,
  title: "Floral Touch",
  description: "A vibrant setting to enhance every bite"
},
{
  image: t3,
  title: "Leaf Freshness",
  description: "Served on organic leaves for traditional purity"
},
{
  image: t4,
  title: "Festive Delight",
  description: "Perfect for gifting and festive moments"
}

  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-traditional-green mb-4">
            🍃 Our Tambul in Pictures
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            See the love and tradition that goes into every piece of our handmade tambul
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl premium-shadow hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-traditional-green/90 via-traditional-green/40 to-transparent transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* Content Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 ${
                hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-sm opacity-90">
                  {item.description}
                </p>
              </div>

              {/* Shimmer Effect */}
              <div className={`absolute inset-0 shimmer-effect transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-20' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="font-inter text-muted-foreground mb-4">
            Want to see more? Follow us for daily updates!
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-3 h-3 bg-fresh-green rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-gold-shimmer rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-3 h-3 bg-fresh-green rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;