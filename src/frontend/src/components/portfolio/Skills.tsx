import { motion } from "motion/react";
import { skillCategories } from "../../data/portfolioData";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";

export function Skills() {
  return (
    <Section id="skills" alt>
      <SectionHeader
        title="Technical"
        highlight="Skills"
        subtitle="Technologies and tools I work with — from Salesforce to AI to core engineering"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillCategories.map((cat, i) => (
          <Card key={cat.category} delay={i * 0.08} className="p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xl" role="img" aria-label={cat.category}>
                {cat.icon}
              </span>
              <div className="w-px h-5 rounded-full bg-blue-500/40" />
              <h3 className="text-[13px] font-semibold leading-tight" style={{ color: "oklch(0.92 0.018 255)" }}>
                {cat.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: i * 0.08 + si * 0.03 }}
                  className="skill-pill"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
