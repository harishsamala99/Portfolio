import { useState } from "react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 85 },
      { name: "C/C++", level: 70 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 70 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
     
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Languages");

  const currentCategory = skillCategories.find(
    (cat) => cat.name === activeCategory
  );

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">What I work with</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "px-6 py-2.5 rounded-full font-medium text-sm transition-all",
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground glow-subtle"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid gap-4">
            {currentCategory?.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="gradient-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-orange-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Also familiar with:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "REST APIs",
                "WebSockets",
                "Redis",
                "Kubernetes",
                "Terraform",
                "Jest",
                "Cypress",
                "Storybook",
                "Linux",
                "Nginx",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
