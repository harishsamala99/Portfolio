import { Code2, Coffee, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "3+", label: "Years Experience" },
  { icon: Rocket, value: "5+", label: "Projects Completed" },
  { icon: Users, value: "3+", label: "Happy Clients" },
  
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
                As a Software Engineer, I specialize in creating scalable web applications, RESTful APIs, and AI-driven solutions. My expertise in Python, SQL, and backend development allows me to automate data workflows, optimize database performance, and build high-performance systems. I have hands-on experience with Generative AI, including OpenAI and Mistral LLMs, which I use to develop intelligent chatbots, semantic search features, and caching solutions.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                My technical background includes advanced data processing and analytics using PySpark, Pandas, and NumPy, along with a solid foundation in machine learning techniques such as supervised and unsupervised learning, deep learning, and recommendation systems. I have designed and deployed CI/CD pipelines using Azure Pipelines and Jenkins, and I am experienced in performance tuning, load testing with JMeter, and securing applications using Nginx as a reverse proxy.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
               In addition, I have experience with web scraping and automation, cloud and DevOps tools, and data visualization. I have hands-on experience building realistic, production-ready websites with a strong focus on usability, performance, and responsive design. I am a collaborative and detail-oriented team player who actively contributes to code reviews, technical documentation, and cross-functional project initiatives, with a strong focus on delivering scalable, secure, and maintainable software solutions.
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
