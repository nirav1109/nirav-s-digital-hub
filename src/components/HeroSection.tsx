import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const techStack = [
  "Angular",
  "React",
  "Next.js",
  ".NET Core",
  "Ionic",
  "SQL",
  "AWS",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float delay-300" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Senior Software Engineer
              </span>
            </div>

            <h1 className="opacity-0 animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Nirav Karathiya</span>
            </h1>

            <p className="opacity-0 animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground mb-4">
              Full-Stack Developer | .NET • Angular • React • Next.js
            </p>

            <p className="opacity-0 animate-fade-up delay-300 text-base text-muted-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Passionate about building scalable solutions and solving real-life
              problems using modern technologies and AI.
            </p>

            {/* Tech Stack Pills */}
            <div className="opacity-0 animate-fade-up delay-400 flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-up delay-500 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-up delay-600 flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/nirav-karathiya-43b29a1a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/nirav1109"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:karathiyanirav@gmail.com"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="opacity-0 animate-scale-in delay-300 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-110 animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                <img
                  src={profilePhoto}
                  alt="Nirav Karathiya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="opacity-0 animate-fade-up delay-700 absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
