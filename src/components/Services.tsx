import { 
  Building2, 
  FileCheck, 
  RefreshCcw, 
  Scale,
  TrendingUp,
  Calculator,
  Cpu,
  Users,
  ArrowRight
} from "lucide-react";

const lifecycleServices = [
  { icon: Building2, text: "Company formation and market entry across the UAE and GCC", highlight: "Formation & Entry" },
  { icon: FileCheck, text: "Ongoing compliance, governance, and regulatory support", highlight: "Compliance" },
  { icon: RefreshCcw, text: "Business restructuring and turnaround advisory", highlight: "Restructuring" },
  { icon: Scale, text: "Insolvency, bankruptcy coordination, and liquidation support", highlight: "Insolvency" },
];

const integratedServices = [
  {
    icon: TrendingUp,
    title: "Management Consulting",
    description: "Growth strategy, operating model design, performance improvement, and execution roadmaps tailored to your business stage.",
    features: ["Strategic Planning", "Performance Optimization", "Market Analysis"],
  },
  {
    icon: Calculator,
    title: "Accounting & Financial Advisory",
    description: "Investor-ready reporting, audit preparation, financial controls, and compliance to institutional standards.",
    features: ["Financial Reporting", "Audit Support", "Due Diligence"],
  },
  {
    icon: Cpu,
    title: "Technology Advisory",
    description: "Workflow automation, scalable systems, and business-aligned digital enablement for modern enterprises.",
    features: ["Digital Transformation", "System Integration", "Process Automation"],
  },
  {
    icon: Users,
    title: "Fractional CXO Services",
    description: "Senior CFO, CTO, and CMO leadership without full-time overhead. Strategic expertise when you need it.",
    features: ["Interim Leadership", "Strategic Guidance", "Flexible Engagement"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-0 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for businesses across the GCC, from formation to transformation
          </p>
        </div>

        {/* Corporate Lifecycle Advisory */}
        <div className="max-w-6xl mx-auto mb-20 animate-on-scroll">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand-navy/10 via-primary/5 to-brand-gold/10 border border-primary/10 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3 text-center">
                Corporate Lifecycle Advisory
              </h3>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                End-to-end support for every stage of your business journey
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {lifecycleServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start gap-4 p-5 rounded-xl bg-background/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">{service.highlight}</span>
                      <p className="text-foreground mt-1">{service.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Services */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3 text-center animate-on-scroll">
            Integrated Services
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto animate-on-scroll">
            Specialized expertise to accelerate your growth
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {integratedServices.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            Discuss your requirements
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
