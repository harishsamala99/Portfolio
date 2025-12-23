
export const Education = () => {
  return (
    <section id="education" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">MY ACADEMIC BACKGROUND</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Edu<span className="text-gradient">cation</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="gradient-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group">
              <h3 className="text-xl font-bold">NEW JERSEY INSTITUTE OF TECHNOLOGY</h3>
              <p className="text-muted-foreground">Master of Science in Computer Science</p>
              <p className="text-sm text-muted-foreground">2022 - 2024</p>
            </div>
            <div className="gradient-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group">
              <h3 className="text-xl font-bold">SIDDHARTHA INSTITUTE OF TECHNOLOGY and SCIENCE</h3>
              <p className="text-muted-foreground">Bachelor of Technology in Electrical and Electronics Engineering</p>
              <p className="text-sm text-muted-foreground">2017 - 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
