import {
  Film,
  HeartPulse,
  Briefcase,
  Globe,
  Truck,
  GraduationCap,
} from "lucide-react";

const domains = [
  {
    icon: Film,
    title: "Entertainment Platforms",
    description:
      "Streaming services, content management systems, and interactive media applications.",
    tech: ["React", "Next.js", ".NET Core"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare Systems",
    description:
      "Patient management, appointment scheduling, and medical records systems.",
    tech: ["Angular", ".NET", "SQL Server"],
  },
  {
    icon: Briefcase,
    title: "Service Consultancy",
    description:
      "Business consultation platforms, CRM systems, and client management tools.",
    tech: ["Angular", "React", "REST APIs"],
  },
  {
    icon: Globe,
    title: "Domain Monitoring",
    description:
      "Domain tracking, analytics dashboards, and monitoring solutions.",
    tech: ["Next.js", "AWS", "PostgreSQL"],
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description:
      "Vehicle tracking, route optimization, and logistics management systems.",
    tech: ["Ionic", ".NET Core", "MySQL"],
  },
  {
    icon: GraduationCap,
    title: "Educational Platforms",
    description:
      "Learning management systems, course platforms, and assessment tools.",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gradient-hero relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Domains I've Worked In
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diverse industry experience delivering impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {domains.map((domain, index) => (
            <div
              key={domain.title}
              className="group relative p-6 rounded-2xl glass shadow-card hover:shadow-elevated overflow-hidden transition-all duration-300"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <domain.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {domain.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {domain.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {domain.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-secondary/80 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
