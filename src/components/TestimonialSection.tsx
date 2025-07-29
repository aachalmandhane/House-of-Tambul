import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "The most authentic tambul I've had! Reminds me of my grandmother's recipe. Fresh ingredients and perfect balance of flavors.",
      avatar: "👩‍🦱"
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      text: "Ordered for a family gathering and everyone loved it! The quality is exceptional and delivery was prompt. Highly recommended!",
      avatar: "👨‍💼"
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Finally found a place that makes tambul like back home. The care and love in preparation is evident in every bite. Thank you!",
      avatar: "👵"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-traditional-green mb-4">
            What Our Customers Say
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative premium-shadow hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-gold-shimmer rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-traditional-green" />
                </div>
              </div>

              <CardContent className="p-8 pt-12">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-shimmer fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-inter text-muted-foreground text-center mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="text-center">
                  <div className="text-3xl mb-2">{testimonial.avatar}</div>
                  <h4 className="font-playfair font-semibold text-traditional-green">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-fresh-green rounded-full opacity-30" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gold-shimmer rounded-full opacity-50" />
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-fresh-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">4.9</span>
              </div>
              <span className="font-inter text-sm">Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold-shimmer rounded-full flex items-center justify-center">
                <span className="text-traditional-green text-sm font-bold">500+</span>
              </div>
              <span className="font-inter text-sm">Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">2k+</span>
              </div>
              <span className="font-inter text-sm">Orders Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;