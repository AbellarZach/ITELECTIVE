import { Forward } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Skills() {
    const skills = [
        {
            name: "Frontend",
            items: [
                "React ---------------------------->  40%",
                "Next.js ---------------------------> 45%",
                "Tailwind CSS ---------------------> 40%",
                "TypeScript -----------------------> 35%",
                "HTML ----------------------------> 65%",
            ],
        },
        {
            name: "Backend",
            items: [
                "Node.js -------------------------->  40%",
                "Express --------------------------> 40%",
                "Laravel ---------------------------> 35%",
                "JavaScript ------------------------> 40%",
                "CSS -------------------------------> 70%",
            ],
        },
        {
            name: "Tools",
            items: [
                "Figma ---------------------------->  78%",
                "WordPress -----------------------> 80%",
                "MySQL ----------------------------> 35%",
                "PHP ------------------------------> 35%",
                "Vue.js ----------------------------> 35%",
            ],
        },
    ];

    return (
    
        <Section
            id="skills"
            className="mt-30"
        >
            <div className="text-center md:text-left lg:px-5 -mt-70 -mb-20">
                
                <SectionHeading
                    title="Tech Skills"
                    description="A list of the technologies I work with on a daily basis."
                />

                <div className="mt-20 hover:shadow-lg hover:-translate-y-1 h-full group relative overflow-hidden rounded-lg border bg-muted bg-gray-100  grid gap-8 grid-cols-2 lg:grid-cols-3 text-left">
                    {skills.map((skill, index) => (
                        <div key={index} className="space-y-4 mr-10 -mt-20 mb-10 ml-5 ">
                            
                            <h3 className="text-xl font-bold tracking-tight ml-20 mb-10">
                                {skill.name}
                            </h3>

                            <ul className="grid gap-2 border-r border-primary mt-20">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Forward className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">
                                            {item}
                                        </span>
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