import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              NK<span className="text-primary">.</span>
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Nirav Karathiya. Built with{" "}
            <Heart className="w-4 h-4 text-primary inline" fill="currentColor" />{" "}
            and code.
          </p>

          <div className="flex gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
