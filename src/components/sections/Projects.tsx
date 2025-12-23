import { useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "SUPERIOR LIMOUSINE LLC CT",
    description:
      "A full-stack e-commerce solution with payment processing, inventory management, and real-time order tracking.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    category: "Full Stack",
    github: "https://github.com/harishsamala99/Superior_Limousine_LLC.git",
    live: "https://superiorlimousinellcct.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot powered by GPT-4 with context awareness and multi-language support.",
    image: "/placeholder.svg",
    tags: ["Python", "OpenAI", "FastAPI", "Redis"],
    category: "AI/ML",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, team workspaces, and analytics dashboard.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    category: "Full Stack",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Template",
    description:
      "A modern, responsive portfolio template with dark mode and smooth animations.",
    image: "/placeholder.svg",
    tags: ["React", "Tailwind", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Real-time weather tracking with location-based forecasts and interactive maps.",
    image: "/placeholder.svg",
    tags: ["Vue.js", "D3.js", "OpenWeather API"],
    category: "Frontend",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "API Gateway",
    description:
      "A microservices API gateway with rate limiting, authentication, and request logging.",
    image: "/placeholder.svg",
    tags: ["Go", "Docker", "Kubernetes", "gRPC"],
    category: "Backend",
    github: "https://github.com",
    featured: false,
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML"];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-5 py-2 rounded-full font-medium text-sm transition-all",
                  activeFilter === category
                    ? "bg-primary text-primary-foreground glow-subtle"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group gradient-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  {/* Overlay icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Folder icon */}
                  <div className="absolute bottom-4 left-4">
                    <Folder className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-secondary rounded-md text-xs font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View more on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
