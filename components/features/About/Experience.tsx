
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";


export function Experience() {
    const skills = [
        { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
        { name: "Backend", items: ["Node.js", "Express", "Laravel"] },
        { name: "Tools", items: ["Git","VS Code",] },
    ];

    return (
        <Section id="skills" className="hover:shadow-lg hover:-translate-y-1 h-full group relative overflow-hidden rounded-lg border bg-background bg-muted rounded-lg bg-gray-100 mb-30 pl-18">
            <div className="space-y-12 text-center md:text-left lg:px-10 pb-10">
              <SectionHeading title="Tech Stacks" description="A list of the technologies I work with on a daily basis." />

                <div className="grid gap-8 grid-cols-2 lg:grid-cols-3 text-left">
                    {skills.map((skill) => (
                        <div key={skill.name} className="space-y-4 mr-10">
                            <h3 className="text-xl font-bold tracking-tight ml-20 mb-6">{skill.name}</h3>
                            <ul className="grid gap-2 border-r-1 border-primary pl-6">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">{item}</span>
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