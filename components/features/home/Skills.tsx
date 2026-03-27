

import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Skills() {
    const skills = [
        { name: "", items: ["", "React ---------------------------->  40%", "Next.js ---------------------------> 45%", "Tailwind CSS ---------------------> 40%", "TypeScript -----------------------> 35%", "HTML ----------------------------> 65%",""] },
        { name: "", items: ["", "Node.js -------------------------->  40%", "Express --------------------------> 40%", "Laravel ---------------------------> 35%", "JavaScript ------------------------> 40%", "CSS -------------------------------> 70%", "",] },
        { name: "", items: ["", "Figma ---------------------------->  78%", "WordPress -----------------------> 80%",   "Query ----------------------------> 35%",   "PHP ------------------------------> 35%", "Vue.js ----------------------------> 35%", "",] },
    ];

    return (
        <div className="space-y-12">
        <SectionHeading title="Tech Skills" description="A list of the technologies I work with on a daily basis." />
        <Section id="skills" className="hover:shadow-lg hover:-translate-y-1 h-full group relative overflow-hidden rounded-lg border bg-background bg-muted rounded-lg bg-gray-100 mb-30 ">
            <section className=" text-center md:text-left lg:px-5 -mt-40 -mb-20">
                
          
                <div className="grid gap-8 grid-cols-2 lg:grid-cols-3 text-left">
                    {skills.map((skill) => (
                        <div key={skill.name} className="space-y-4 mr-10">
                            <h3 className="text-xl font-bold tracking-tight ml-20 mb-10 ">{skill.name}</h3>
                            <ul className="grid gap-2 border-r-1 border-primary mt-20">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <div className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </Section>
        </div>
    );
}