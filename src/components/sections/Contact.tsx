import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Contact = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    // Dynamically set the name when the component mounts
    setName("Harish");
  }, []);

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-mono text-sm mb-2">What's next?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          {name && (
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              - {name}
            </h3>
          )}

          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            I'm currently open to new opportunities and my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>samalaharishkumar@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Norwalk, CT</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button size="lg" className="glow-primary group">
            <Mail className="mr-2 w-5 h-5" />
            Say Hello
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>

          {/* Decorative elements */}
          <div className="relative mt-16">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
