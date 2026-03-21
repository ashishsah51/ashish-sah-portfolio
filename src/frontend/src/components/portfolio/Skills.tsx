import { skillCategories } from "../../data/portfolioData";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        title="Technical"
        highlight="Skills"
        subtitle="Technologies and tools I work with daily"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <Card key={cat.category} delay={i * 0.1} className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-7 rounded-full bg-blue-500" />
              <h3 className="text-sm font-semibold" style={{ color: "oklch(0.94 0.018 255)" }}>
                {cat.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
