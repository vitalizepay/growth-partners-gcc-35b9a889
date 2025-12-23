import { Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Praveen Kumar",
    role: "Co-Founder and Head of Strategy, Technology, and Business Consulting",
    initials: "PK",
  },
  {
    name: "Dinesh",
    role: "Co-Founder and Head of Financial Strategy and Advisory",
    initials: "D",
  },
];

const Leadership = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core leadership and strategic roles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full hero-gradient flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-2xl font-semibold text-primary-foreground">
                  {leader.initials}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {leader.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
