import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/harishsamala99", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/samala-harish-kumar", label: "LinkedIn" },
  { icon: Mail, href: "mailto:samalaharishkumar@gmail.com", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">&lt;</span>
            Harish Samala
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> by Harish Samala
          </p>
        </div>
      </div>
    </footer>
  );
};
