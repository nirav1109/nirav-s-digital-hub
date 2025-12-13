import {
  Code2,
  Server,
  Database,
  Wrench,
  Users,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["Angular", "React", "Next.js", "Ionic", "TypeScript", "Tailwind CSS"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: [".NET", ".NET Core", "REST APIs", "C#"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL Server", "MySQL", "PostgreSQL", "Entity Framework"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["GitHub", "JIRA", "Asana", "Sourcetree", "AWS Amplify", "Azure DevOps"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Team Management",
      "Project Planning",
      "Client Communication",
      "Cross-timezone Collaboration",
    ],
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Methodologies",
    icon: Sparkles,
    skills: ["Agile/Scrum", "CI/CD", "Code Review", "Technical Documentation"],
    color: "from-indigo-500 to-violet-500",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-hero relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl glass shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
