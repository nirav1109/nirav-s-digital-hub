import { MapPin, Calendar, Users, Globe } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    label: "4+ Years",
    description: "Professional Experience",
  },
  {
    icon: Users,
    label: "Team Leader",
    description: "Project & Team Management",
  },
  {
    icon: Globe,
    label: "Global",
    description: "Multi-timezone Collaboration",
  },
  {
    icon: MapPin,
    label: "Ahmedabad",
    description: "Gujarat, India",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Passionate Developer & Problem Solver
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a{" "}
              <span className="text-primary font-semibold">
                Senior Software Engineer
              </span>{" "}
              with extensive experience in full-stack development. I specialize
              in building robust, scalable web applications using modern
              frameworks and best practices.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My journey in software development has been driven by a passion
              for solving real-world problems through technology. I've had the
              privilege of working on diverse projects across multiple domains,
              from healthcare systems to entertainment platforms.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I excel in team leadership, client communication,
              and project management. I thrive in collaborative environments and
              have successfully coordinated with teams across multiple time
              zones to deliver exceptional results.
            </p>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-3">Core Values</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Clean Code",
                  "Continuous Learning",
                  "User-Centric Design",
                  "Agile Methodology",
                ].map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium text-foreground border border-border"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl glass shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">
                  {item.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
