import { Target, Briefcase, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Strategic Partners for Growth",
    description: "We work as a long-term strategic partner to leadership teams, combining advisory rigor with hands-on execution. Committed to both strategy and practical implementation for leaders.",
  },
  {
    icon: Briefcase,
    title: "End-to-End Support",
    description: "We support businesses navigating growth, complexity, restructuring, and transition—across their entire corporate lifecycle. End-to-end support through every stage of corporate change.",
  },
  {
    icon: Globe,
    title: "Regional Presence",
    description: "Headquartered in the UAE with an active presence in Oman. We serve clients across the GCC with deep regional understanding and a global perspective.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Long-term advisory and hands-on execution across the GCC
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
