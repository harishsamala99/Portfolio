import { Code2, Coffee, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "5+", label: "Years Experience" },
  { icon: Rocket, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative border */}
                <div className="absolute inset-4 border-2 border-primary/30 rounded-2xl" />
                
                {/* Main image container */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <Code2 className="w-16 h-16 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm">Your photo here</p>
                    </div>
                  </div>
                </div>

                {/* Floating accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hello! I'm John, a passionate full-stack developer based in San Francisco. 
                I enjoy creating things that live on the internet, whether that be websites, 
                applications, or anything in between.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey in web development started back in 2018 when I decided to try 
                customizing a WordPress theme — turns out hacking together custom code taught 
                me a lot about HTML & CSS! Fast-forward to today, and I've had the privilege 
                of working at a startup, a huge corporation, and a student-led design studio.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                My main focus these days is building accessible, inclusive products and 
                digital experiences. I'm also currently learning about cloud architecture 
                and system design.
              </p>

              {/* Tech stack highlight */}
              <div className="pt-4">
                <p className="text-foreground font-medium mb-3">
                  Technologies I've been working with recently:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"].map(
                    (tech) => (
                      <div key={tech} className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-primary">▹</span>
                        <span className="font-mono text-sm">{tech}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="gradient-card rounded-xl p-6 text-center border border-border hover:border-primary/50 transition-colors group"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
