import { MapPin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with leaders ready to do the work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Our Location</h3>
                <p className="text-muted-foreground">Headquartered in UAE with active presence in Oman</p>
                <p className="text-muted-foreground">Serving clients across the GCC</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:info@dillonbird.com" className="text-primary hover:underline">
                  info@dillonbird.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Website</h3>
                <a href="https://dillonbird.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  dillonbird.com
                </a>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-navy/5 to-primary/5 border border-border">
            <blockquote className="relative">
              <div className="text-6xl text-primary/20 font-serif absolute -top-4 -left-2">"</div>
              <p className="text-lg text-foreground leading-relaxed italic pl-6">
                Growth today requires more than ambition. It demands clarity, discipline, and the ability to execute through uncertainty. We partner with leaders ready to do the work.
              </p>
            </blockquote>
            <div className="mt-6 pl-6">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:info@dillonbird.com">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
