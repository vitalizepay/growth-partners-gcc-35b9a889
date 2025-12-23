import { 
  Building2, 
  FileCheck, 
  RefreshCcw, 
  Scale,
  TrendingUp,
  Calculator,
  Cpu,
  Users
} from "lucide-react";

const lifecycleServices = [
  { icon: Building2, text: "Company formation and market entry across the UAE and GCC" },
  { icon: FileCheck, text: "Ongoing compliance, governance, and regulatory support" },
  { icon: RefreshCcw, text: "Business restructuring and turnaround advisory" },
  { icon: Scale, text: "Insolvency, bankruptcy coordination, and liquidation support" },
];

const integratedServices = [
  {
    icon: TrendingUp,
    title: "Management Consulting",
    description: "Growth strategy, operating model design, performance improvement, and execution roadmaps.",
  },
  {
    icon: Calculator,
    title: "Accounting and Financial Advisory",
    description: "Investor-ready reporting, audit preparation, financial controls, and compliance.",
  },
  {
    icon: Cpu,
    title: "Technology Advisory",
    description: "Workflow automation, scalable systems, and business-aligned digital enablement.",
  },
  {
    icon: Users,
    title: "Fractional CXO Services",
    description: "Senior CFO, CTO, and CMO leadership without full-time overhead.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for businesses across the GCC
          </p>
        </div>

        {/* Corporate Lifecycle Advisory */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-brand-navy/5 to-primary/5 border border-border">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              Corporate Lifecycle Advisory
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {lifecycleServices.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integrated Services */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            Integrated Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {integratedServices.map((service) => (
              <div
                key={service.title}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
