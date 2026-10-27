import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

type Skill = { name: string; level: number };

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 65 },
      { name: "React", level: 40 },
      { name: "Next.js", level: 45 },
      { name: "Tailwind CSS", level: 40 },
      { name: "TypeScript", level: 35 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "CSS", level: 70 },
      { name: "Node.js", level: 40 },
      { name: "Express", level: 40 },
      { name: "Laravel", level: 35 },
      { name: "JavaScript", level: 40 },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "WordPress", level: 80 },
      { name: "Figma", level: 78 },
      { name: "MySQL", level: 35 },
      { name: "PHP", level: 35 },
      { name: "Vue.js", level: 35 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/30">
      <div className="space-y-12">
        <SectionHeading
          title="Tech Skills"
          description="A list of the technologies I work with on a daily basis."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold mb-5">{group.title}</h3>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent-foreground transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
