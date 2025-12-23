import { Code2, Coffee, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "2+", label: "Years Experience" },
  { icon: Rocket, value: "5+", label: "Projects Completed" },
  
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

          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I’m a Software Engineer specializing in building scalable web applications, RESTful APIs, and AI-driven solutions. I work primarily with Python and backend systems to automate data workflows, optimize database performance, and deliver high-performance, production-ready software.

              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
               I have hands-on experience with Generative AI, including OpenAI and Mistral LLMs, and have built intelligent chatbots, semantic search features, and optimized caching solutions. My background also includes data processing and analytics using tools like PySpark, Pandas, and NumPy, along with practical experience in machine learning and recommendation systems.

              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
               I’ve designed and deployed CI/CD pipelines, worked with cloud and DevOps tools, and focused on performance tuning, security, and scalability. Beyond backend systems, I enjoy building modern, responsive web interfaces with a strong emphasis on usability and performance. I’m a collaborative, detail-oriented developer who values clean code, documentation, and maintainable solutions.
              </p>

              {/* Tech stack highlight */}
              <div className="pt-4">
                <p className="text-foreground font-medium mb-3">
                  Technologies I've been working with recently:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "n8n","Python","OpenAI"].map(
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
