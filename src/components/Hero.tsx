import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-up">
            <span className="gradient-text">Do More</span> — Strategic Growth<br className="hidden md:block" /> Across the GCC
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up stagger-1">
            We partner with founders, family enterprises, and growth-stage companies to build resilient businesses, unlock sustainable growth, and execute with discipline across the GCC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-2">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Partner With Us
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button variant="outline-primary" size="xl" asChild>
              <a href="#about">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in stagger-4">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
