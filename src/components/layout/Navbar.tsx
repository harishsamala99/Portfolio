import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ThemeSwitcher";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/harishsamala99", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/samala-harish-kumar/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=samalaharishkumar@gmail.com", label: "Gmail" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-lg border-b border-border`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-lg md:text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">&lt;</span>
            Harish Samala
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <ModeToggle />
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="glow-subtle">
                  <img src="/pdf-logo.svg" alt="PDF" className="w-4 h-4 mr-2 inline-block" />
                  Download CV
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-4xl w-[90%]">
                <DialogHeader>
                  <DialogTitle>Resume — Quick View</DialogTitle>
                  <DialogDescription>Preview the PDF below. You can download a copy if needed.</DialogDescription>
                </DialogHeader>

                <div className="w-full h-[70vh] mt-4">
                  <iframe src="/Harish Samala.pdf" className="w-full h-full" title="Resume preview" />
                </div>

                <DialogFooter>
                  <a href="/Harish Samala.pdf" download="Harish-Samala-Resume.pdf" rel="noopener noreferrer">
                    <Button size="sm" className="mt-2">
                      <img src="/pdf-logo.svg" alt="PDF" className="w-4 h-4 mr-2 inline-block" />
                      Download
                    </Button>
                  </a>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} profile`}
                  title={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <ModeToggle />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="mt-4 w-full">
                  <img src="/pdf-logo.svg" alt="PDF" className="w-4 h-4 mr-2 inline-block" />
                  Download CV
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[95%]">
                <DialogHeader>
                  <DialogTitle>Resume — Quick View</DialogTitle>
                  <DialogDescription>Preview the PDF below. You can download a copy if needed.</DialogDescription>
                </DialogHeader>

                <div className="w-full h-[70vh] mt-4">
                  <iframe src="/Harish Samala.pdf" className="w-full h-full" title="Resume preview" />
                </div>

                <DialogFooter>
                  <a href="/Harish Samala.pdf" download="Harish-Samala-Resume.pdf" rel="noopener noreferrer">
                    <Button size="sm" className="mt-2">
                      <img src="/pdf-logo.svg" alt="PDF" className="w-4 h-4 mr-2 inline-block" />
                      Download
                    </Button>
                  </a>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </nav>
    </header>
  );
};
