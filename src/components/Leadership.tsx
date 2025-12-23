import praveenImage from "@/assets/praveen-kumar.png";
import dineshImage from "@/assets/dinesh.png";
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Praveen Kumar",
    role: "Co-Founder and Head of Strategy, Technology, and Business Consulting",
    image: praveenImage,
    bio: "Praveen brings over 15 years of experience in strategic consulting, technology transformation, and business growth across the GCC region. His expertise spans operational excellence and digital enablement.",
    number: "01",
  },
  {
    name: "Dinesh",
    role: "Co-Founder and Head of Financial Strategy and Advisory",
    image: dineshImage,
    bio: "Dinesh is a seasoned financial strategist with deep expertise in corporate finance, investor relations, and M&A advisory. He has guided numerous enterprises through complex financial transitions.",
    number: "02",
  },
];

const Leadership = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals driving strategic growth and operational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
                  
                  {/* Number badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card/95 backdrop-blur-sm flex items-center justify-center shadow-lg border border-border">
                    <span className="text-sm font-bold text-primary">{leader.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {leader.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                  
                  {/* Social links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="mailto:info@dillonbird.com"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
