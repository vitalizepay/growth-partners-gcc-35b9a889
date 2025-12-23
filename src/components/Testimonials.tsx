import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Dillon & Bird Partners helped us navigate a complex restructuring with professionalism and deep expertise. Their hands-on approach made all the difference.",
    author: "CEO",
    company: "Manufacturing Company, UAE",
    rating: 5,
  },
  {
    quote: "Their strategic advisory transformed our market entry approach. We're now successfully operating across three GCC countries.",
    author: "Founder",
    company: "Tech Startup, Oman",
    rating: 5,
  },
  {
    quote: "The fractional CFO service gave us institutional-grade financial leadership without the overhead. Highly recommended for growth-stage companies.",
    author: "Managing Director",
    company: "Family Enterprise, UAE",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Client Success
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leaders across the GCC
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-foreground leading-relaxed flex-1 mb-6">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
