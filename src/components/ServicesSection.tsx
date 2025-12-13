import { Layers, Layout, Smartphone, Cloud, GitBranch, Zap } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Web Development",
    description:
      "End-to-end application development using .NET Core backend with modern frontend frameworks. Scalable and maintainable architecture built for growth.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "High-performance, user-focused UI development with Angular, React, and Next.js. Pixel-perfect implementations with smooth animations.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Apps",
    description:
      "Mobile and progressive web applications using Ionic framework. One codebase, multiple platforms with native-like experience.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "AWS Amplify deployment and cloud architecture. Scalable infrastructure setup with modern DevOps practices.",
  },
  {
    icon: GitBranch,
    title: "Code Review & Consulting",
    description:
      "Architecture review, code audits, and technical consulting. Best practices implementation and team mentorship.",
  },
  {
    icon: Zap,
    title: "API Development",
    description:
      "RESTful API design and implementation. Secure, documented, and performant backend services.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            What I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl glass shadow-card hover:shadow-elevated border border-transparent hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
