import { Section } from "@/components/common/Section";
import { cn } from "@/lib/utils";

type TechSkill = {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  proficiency: number;
  proficiencyLabel: string;
  color: {
    accent: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    glow: string;
    barGradient: string;
  };
  icon: React.ReactNode;
};

const TECH_SKILLS: TechSkill[] = [
  {
    id: "wordpress",
    name: "WordPress",
    category: "CMS & Architecture",
    badge: "Primary Focus",
    description:
      "Developing high-performance, custom WordPress websites from scratch. Proficient with Elementor Pro, theme customization, WooCommerce, and responsive layouts.",
    proficiency: 80,
    proficiencyLabel: "Advanced",
    color: {
      accent: "#00e575",
      border: "hover:border-emerald-500/60",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-500 dark:text-emerald-400 border-emerald-500/30",
      iconBg: "bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-[#00e575]",
      glow: "from-emerald-500/20 via-[#00e575]/10 to-transparent",
      barGradient: "from-emerald-500 to-[#00e575]",
    },
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.051-.181 2.986-.51-.024-.038-.046-.079-.065-.123l-2.763-7.572zm-5.83-1.077c0 1.25.437 2.4 1.17 3.307L4.767 7.234a9.92 9.92 0 0 0-.439 2.762c0 .59.057 1.168.164 1.727l.036-.014zm11.66-3.882c.045.31.07.63.07.96 0 1.05-.386 2.008-.949 2.752l2.71 7.425a9.96 9.96 0 0 0 1.205-4.733c0-3.33-1.636-6.275-4.14-8.083.567.558.98 1.11.98 1.679h.124zm-4.762-5.748C6.91 2.079 2.079 6.91 2.079 13.226c0 2.457.777 4.735 2.099 6.602l5.426-15.75c-.718.034-1.373.107-1.373.107-.404.048-.363.642.04.642 0 0 1.218-.096 2.399-.096 1.22 0 2.399.096 2.399.096.403 0 .444-.594.04-.642 0 0-.655-.073-1.372-.107l4.086 12.197 1.507-4.432c.57-1.579.809-2.736.809-3.716 0-1.36-.487-2.312-1.372-2.312-.644 0-1.223.515-1.223 1.16 0 .546.363.968.363 1.54 0 .61-.605 1.19-1.45 1.19-.927 0-1.614-.775-1.614-1.855 0-1.45 1.088-2.82 2.701-2.82.282 0 .564.047.806.118A11.127 11.127 0 0 0 13.226 2.08z" />
      </svg>
    ),
  },
  {
    id: "html",
    name: "HTML5",
    category: "Markup & Structure",
    badge: "Core Standard",
    description:
      "Structuring clean, valid, and SEO-friendly semantic markup. Ensuring high accessibility standards, robust document architecture, and cross-browser consistency.",
    proficiency: 70,
    proficiencyLabel: "Proficient",
    color: {
      accent: "#f97316",
      border: "hover:border-orange-500/60",
      badgeBg: "bg-orange-500/10",
      badgeText: "text-orange-500 dark:text-orange-400 border-orange-500/30",
      iconBg: "bg-gradient-to-br from-orange-500/20 to-amber-500/10 border-orange-500/30 text-orange-500",
      glow: "from-orange-500/20 via-amber-500/10 to-transparent",
      barGradient: "from-orange-500 to-amber-400",
    },
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.24-2.722H5.433l.71 8.155h8.989l-.324 3.655-2.831.764-2.832-.767-.182-2.04H6.236l.354 4.382 5.387 1.496 5.393-1.496.732-8.472H8.531z" />
      </svg>
    ),
  },
  {
    id: "css",
    name: "CSS3",
    category: "Styling & Responsive UI",
    badge: "Pixel-Perfect",
    description:
      "Crafting responsive layouts, bespoke typography, smooth CSS transitions, modern Flexbox & Grid systems, and clean styling across mobile, tablet, and desktop.",
    proficiency: 70,
    proficiencyLabel: "Proficient",
    color: {
      accent: "#38bdf8",
      border: "hover:border-sky-500/60",
      badgeBg: "bg-sky-500/10",
      badgeText: "text-sky-500 dark:text-sky-400 border-sky-500/30",
      iconBg: "bg-gradient-to-br from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-400",
      glow: "from-sky-500/20 via-blue-500/10 to-transparent",
      barGradient: "from-sky-500 to-blue-400",
    },
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413H5.41l.24 2.722h10.059l-.232 2.718H8.531l.24 2.722h6.425l-.324 3.655-2.831.764-2.832-.767-.182-2.04H6.236l.354 4.382 5.387 1.496 5.393-1.496.732-8.472z" />
      </svg>
    ),
  },
  {
    id: "figma",
    name: "Figma",
    category: "UI/UX & Prototyping",
    badge: "Design Systems",
    description:
      "Designing intuitive user interfaces, high-fidelity wireframes, interactive prototypes, and scalable component systems before turning them into live websites.",
    proficiency: 50,
    proficiencyLabel: "Intermediate",
    color: {
      accent: "#a855f7",
      border: "hover:border-purple-500/60",
      badgeBg: "bg-purple-500/10",
      badgeText: "text-purple-500 dark:text-purple-400 border-purple-500/30",
      iconBg: "bg-gradient-to-br from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400",
      glow: "from-purple-500/20 via-pink-500/10 to-transparent",
      barGradient: "from-purple-500 to-pink-400",
    },
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" fill="#1ABCFE" />
        <path d="M4 16a4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4z" fill="#0ACF83" />
        <path d="M12 4h4a4 4 0 1 1-4 4V4z" fill="#FF7262" />
        <path d="M4 8a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#F24E1E" />
        <path d="M4 16a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4H8a4 4 0 0 0-4 4z" fill="#A259FF" />
      </svg>
    ),
  },
];

export function Skills() {
  return (
    <Section id="skills" className="relative w-full bg-background/50">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-500 dark:text-emerald-400 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#00e575] animate-pulse" />
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Tech <span className="text-[#00e575] drop-shadow-[0_0_30px_rgba(0,229,117,0.35)]">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            The core tools and technologies I specialize in to design, build, and deliver modern, responsive, and user-friendly websites.
          </p>
        </div>

        {/* 4 Tech Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TECH_SKILLS.map((skill) => (
            <div
              key={skill.id}
              className={cn(
                "group relative flex flex-col justify-between rounded-3xl border border-border/70 bg-card/70 backdrop-blur-xl p-7 lg:p-8 transition-all duration-500 hover:-translate-y-2.5 hover:shadow-2xl overflow-hidden",
                skill.color.border
              )}
            >
              {/* Top expanding accent line on hover */}
              <div
                className={cn(
                  "absolute top-0 left-0 h-1 w-16 transition-all duration-500 group-hover:w-full bg-gradient-to-r",
                  skill.color.barGradient
                )}
              />

              {/* Ambient radial glow bloom */}
              <div
                className={cn(
                  "absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10",
                  skill.color.glow
                )}
                aria-hidden="true"
              />

              {/* Card Content Top: Icon & Badge, Title, Description */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border p-3 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3",
                      skill.color.iconBg
                    )}
                  >
                    {skill.icon}
                  </div>

                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold border tracking-wide",
                      skill.color.badgeBg,
                      skill.color.badgeText
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                    {skill.badge}
                  </span>
                </div>

                {/* Title & Category */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {skill.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                    {skill.category}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Proficiency Level Bar */}
              <div className="pt-6 border-t border-border/50 space-y-2 mt-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">Mastery</span>
                  <span className="font-semibold text-foreground flex items-center gap-1.5">
                    <span>{skill.proficiencyLabel}</span>
                    <span className="text-muted-foreground tabular-nums">({skill.proficiency}%)</span>
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/80">
                  <div
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r transition-all duration-1000",
                      skill.color.barGradient
                    )}
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
