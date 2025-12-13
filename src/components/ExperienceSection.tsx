import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Albiorix Technology Pvt Ltd",
    period: "January 2023 – Present",
    type: "Full-time",
    responsibilities: [
      "Leading and handling projects independently",
      "Technologies: Angular, React, Next.js, Ionic",
      "Team handling and task management",
      "Direct client communication and requirements gathering",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tatvasoft",
    period: "June 2021 – January 2023",
    type: "Full-time",
    responsibilities: [
      "Full-Stack Developer role",
      "Technologies: .NET Core, Angular, SQL",
      "Client interaction and cross-team collaboration",
      "Agile development practices",
    ],
  },
  {
    role: "Project Intern",
    company: "Tatvasoft",
    period: "October 2021 – June 2022",
    type: "Internship",
    responsibilities: [
      "Training on full software development lifecycle",
      "End-to-end website development",
      "Hands-on experience with .NET, Angular, SQL",
      "Mentorship and code reviews",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise through diverse projects and teams
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex gap-6 md:gap-8 items-start group"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 rounded-2xl glass shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-1">
                        {exp.type}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
