import { Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-x-hidden gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] hero-grid-overlay" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up">
            Hi, my name is
          </p>

          {/* Name (fluid, desktop preserved) */}
          <h1 className="font-bold text-foreground mb-4 break-words animate-fade-up-delay-1 text-[clamp(1.8rem,5vw,3rem)] leading-[1.15]">
            Harish Kumar Samala
          </h1>

          {/* Headline */}
          <div className="flex justify-center mb-6 px-2 animate-fade-up-delay-2">
            <h2 className="font-bold text-muted-foreground text-center text-[clamp(1.15rem,4.2vw,2.25rem)] leading-[1.3]">
              I design and develop{" "}
              <span className="text-gradient typewriter inline md:inline-block">
                immersive web experiences that feel intuitive, modern, and impactful.
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 px-2 animate-fade-up-delay-3 text-[clamp(1rem,3.2vw,1.25rem)] leading-[1.6]">
            I’m a Software Engineer specializing in building exceptional digital experiences.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/harishsamala99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/samala-harish-kumar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};
