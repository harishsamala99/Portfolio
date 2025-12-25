import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "SUPERIOR LIMOUSINE LLC CT",
    description:
      "A sleek, modern website for a limousine service, featuring service details, fleet information.",
    image: "https://res.cloudinary.com/disrdtslz/image/upload/v1766513660/Screenshot_14_z0ldcv.png",
    tags: ["React", "Node.js",],
    category: "Frontend",
    github: "https://github.com/moghalakrambaig/superiorlimousinellc.git",
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
    title: "SPARKLE CLEANING SERVICES",
    description:
      "A sleek, modern website for a cleaning service, featuring service details, pricing information. and booking functionality.",
    image: "https://res.cloudinary.com/disrdtslz/image/upload/v1766513659/Screenshot_17_mlcakl.png",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    category: "Full Stack",
    github: "https://github.com/harishsamala99/Sparkle-Clean.git",
    live: "https://sparklecleaning.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Template",
    description:
      "A modern, responsive portfolio template with light and dark mode with smooth animations.",
    image: "https://res.cloudinary.com/disrdtslz/image/upload/v1766530904/Screenshot_19_moiwld.png",
    tags: ["React", "Tailwind", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/harishsamala99/Portfolio_template.git",
    live: "https://portfolio-template-one-bay.vercel.app/",
    featured: true,
  },
  {
    id: 5,
    title: "MOBIL Gas Station",
    description:
      "A gas station website with fuel prices, services offered, and location details.",
    image: "https://res.cloudinary.com/disrdtslz/image/upload/v1766513660/Screenshot_16_e3pzvm.png",
    tags: ["React", "Node.js"],
    category: "Frontend",
    github: "https://github.com/harishsamala99/Mobil.git",
    live: "https://gas-station-nu.vercel.app/",
    featured: false,
  },

  {
    id: 6,
    title: "Beverage King Customer Rewards",
    description:
      "A full-stack web application for managing customer rewards at a beverage store.",
    image: "https://res.cloudinary.com/disrdtslz/image/upload/v1766530493/Screenshot_18_ccd9dk.png",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/moghalakrambaig/beverage_king_frontend.git",
    live: "https://beverageking.vercel.app/",
    featured: true,
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML"];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
                {/* Project Image - 16:9 frame with gentle hover zoom */}
                <div className="aspect-video bg-secondary relative overflow-hidden flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-lg ring-1 ring-border transition-transform duration-500 bg-black/5 transform will-change-transform group-hover:scale-105 group-hover:shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 will-change-transform"
                    />
                  </div>

                  {/* subtle gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent pointer-events-none" />

                  {/* Overlay icons (moved slightly inwards) */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
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

                  {/* Image click: go to live site if available, otherwise open lightbox */}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-0"
                      aria-label={`Open ${project.title} live site`}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setLightboxImage(project.image)}
                      className="absolute inset-0 bg-transparent cursor-pointer z-0"
                      aria-label={`Open ${project.title} screenshot`}
                    />
                  )}
                </div>

                {/* Project Content */}
                <div className="p-5">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    </a>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    </>
                  )}

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
              href="https://github.com/harishsamala99?tab=repositories"
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

      {/* Lightbox modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
        >
          <div className="max-w-[90vw] max-h-[90vh]">
            <img
              src={lightboxImage}
              alt="Project screenshot"
              className="w-full h-full object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white bg-black/40 rounded-full p-2"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};
