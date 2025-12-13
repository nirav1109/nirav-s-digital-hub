import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    institution: "Gujarat Technological University",
    period: "2018 – 2021",
    cgpi: "9.13",
  },
  {
    degree: "Diploma",
    field: "Computer Engineering",
    institution: "Gujarat Technological University",
    period: "2015 – 2018",
    cgpi: "9.13",
  },
];

export function EducationSection() {
  return (
    <section className="py-24 bg-gradient-hero relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Academic Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong foundation in computer engineering and software development
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative flex gap-6 md:gap-8 items-start group"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 rounded-2xl glass shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-lg text-foreground/90 mb-2">{edu.field}</p>
                  <p className="text-muted-foreground mb-4">{edu.institution}</p>

                  <div className="flex items-center gap-2 text-primary">
                    <Award className="w-4 h-4" />
                    <span className="font-semibold">CGPI: {edu.cgpi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
