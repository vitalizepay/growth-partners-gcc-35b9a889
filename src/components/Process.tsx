const steps = [
  {
    number: "1",
    title: "Diagnose",
    description: "Rapid assessment of strategy, operations, financials, and compliance.",
  },
  {
    number: "2",
    title: "Design",
    description: "Clear, prioritized solutions aligned to business stage and constraints.",
  },
  {
    number: "3",
    title: "Execute",
    description: "Hands-on support to implement changes and unlock results.",
  },
  {
    number: "4",
    title: "Transfer",
    description: "Capability building to ensure sustainability beyond the engagement.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            How We Engage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear, hands-on process to drive lasting results
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full hero-gradient flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
