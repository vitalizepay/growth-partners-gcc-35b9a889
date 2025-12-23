import { Target, Briefcase, Globe, Award, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Strategic Partners for Growth",
    description: "We work as a long-term strategic partner to leadership teams, combining advisory rigor with hands-on execution. Committed to both strategy and practical implementation.",
    color: "from-primary to-primary/70",
  },
  {
    icon: Briefcase,
    title: "End-to-End Support",
    description: "We support businesses navigating growth, complexity, restructuring, and transition—across their entire corporate lifecycle. Complete support through every stage.",
    color: "from-brand-gold to-brand-gold/70",
  },
  {
    icon: Globe,
    title: "Regional Presence",
    description: "Headquartered in the UAE with an active presence in Oman. We serve clients across the GCC with deep regional understanding and a global perspective.",
    color: "from-brand-navy to-brand-navy/70",
  },
];

const highlights = [
  { icon: Award, label: "Excellence in Advisory" },
  { icon: Users, label: "Client-Centric Approach" },
  { icon: TrendingUp, label: "Results-Driven" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Long-term advisory and hands-on execution across the GCC
          </p>
        </div>

        {/* Highlights bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 animate-on-scroll">
          {highlights.map((item) => (
            <div key={item.label} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 h-full">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional content */}
        <div className="mt-20 max-w-4xl mx-auto text-center animate-on-scroll">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-brand-gold/5 border border-border">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Our Commitment
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Dillon & Bird Partners, we believe that sustainable growth comes from combining 
              <span className="text-primary font-medium"> strategic clarity</span> with 
              <span className="text-primary font-medium"> operational discipline</span>. 
              We're not just advisors—we're partners invested in your success, working alongside 
              you to navigate complexity and capture opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
