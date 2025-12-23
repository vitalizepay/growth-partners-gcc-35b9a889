import { Search, Lightbulb, Rocket, GraduationCap, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnose",
    description: "Rapid assessment of strategy, operations, financials, and compliance to identify key opportunities and challenges.",
    details: ["Stakeholder interviews", "Data analysis", "Gap identification"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design",
    description: "Clear, prioritized solutions aligned to your business stage, constraints, and strategic objectives.",
    details: ["Strategic roadmap", "Action planning", "Resource allocation"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execute",
    description: "Hands-on support to implement changes, manage transitions, and unlock measurable results.",
    details: ["Implementation support", "Change management", "Progress tracking"],
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Transfer",
    description: "Capability building and knowledge transfer to ensure sustainability beyond the engagement.",
    details: ["Team training", "Documentation", "Ongoing support"],
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Our Approach
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            How We Engage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology to drive lasting results
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline for larger screens */}
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={step.number} 
                  className="relative animate-on-scroll"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="text-center">
                    {/* Circle with icon */}
                    <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full hero-gradient flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <step.icon className="w-9 h-9 text-primary-foreground" />
                    </div>
                    
                    {/* Step number */}
                    <span className="text-xs font-bold text-primary tracking-widest">{step.number}</span>
                    
                    <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Details list */}
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards for mobile */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative animate-on-scroll"
              >
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-primary tracking-widest">{step.number}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <ul className="space-y-1">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-full w-0.5 h-6 bg-gradient-to-b from-primary/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
