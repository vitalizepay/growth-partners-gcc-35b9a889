import { MapPin, Mail, Globe, Phone, ArrowRight, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["Headquartered in UAE", "Active presence in Oman", "Serving across the GCC"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@dillonbird.com"],
    link: "mailto:info@dillonbird.com",
  },
  {
    icon: Globe,
    title: "Website",
    lines: ["dillonbird.com"],
    link: "https://dillonbird.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to accelerate your growth? Let's start a conversation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Contact info + Quote */}
            <div className="space-y-8">
              {/* Contact cards */}
              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={item.title}
                    className="p-5 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-on-scroll"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        {item.lines.map((line, i) => (
                          item.link ? (
                            <a 
                              key={i} 
                              href={item.link} 
                              className="block text-primary hover:underline"
                              target={item.link.startsWith("http") ? "_blank" : undefined}
                              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={i} className="text-muted-foreground text-sm">{line}</p>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground animate-on-scroll">
                <Clock className="w-4 h-4" />
                <span>Typical response time: within 24 hours</span>
              </div>
            </div>

            {/* Right side - Quote card */}
            <div className="animate-on-scroll">
              <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navy/95 to-primary relative overflow-hidden h-full flex flex-col justify-between">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl" />
                
                <div className="relative">
                  <MessageSquare className="w-10 h-10 text-primary-foreground/40 mb-6" />
                  <blockquote>
                    <p className="text-xl md:text-2xl text-primary-foreground leading-relaxed font-display">
                      "Growth today requires more than ambition. It demands clarity, discipline, 
                      and the ability to execute through uncertainty."
                    </p>
                  </blockquote>
                  <p className="mt-6 text-primary-foreground/70">
                    We partner with leaders ready to do the work.
                  </p>
                </div>
                
                <div className="mt-8 relative">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    asChild 
                    className="w-full sm:w-auto bg-primary-foreground text-brand-navy hover:bg-primary-foreground/90 group"
                  >
                    <a href="mailto:info@dillonbird.com">
                      Start a Conversation
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
