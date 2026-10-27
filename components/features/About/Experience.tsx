import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

const skillGroups = [
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { name: "Backend", items: ["Node.js", "Express", "Laravel"] },
  { name: "Tools", items: ["Git", "VS Code", "Figma", "WordPress"] },
];

export function Experience() {
  return (
    <Section>
      <div className="space-y-12">
        <SectionHeading
          title="Tech Stack"
          description="A list of the technologies I work with on a daily basis."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">{group.name}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {item}
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
