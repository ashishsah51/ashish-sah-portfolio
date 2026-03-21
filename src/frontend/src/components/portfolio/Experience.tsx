import { experiences } from "../../data/portfolioData";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";

export function Experience() {
  return (
    <Section id="experience" className="section-alt">
      <SectionHeader
        title="Work"
        highlight="Experience"
        subtitle="My professional journey and key contributions"
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-0.5 hidden sm:block"
          style={{
            background: "linear-gradient(to bottom, #2F80FF 0%, oklch(0.24 0.038 250) 100%)",
          }}
        />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <Card
              key={`${exp.role}-${exp.company}`}
              delay={i * 0.1}
              slideFrom="left"
              data-ocid={`experience.item.${i + 1}`}
              className="sm:ml-10 p-6"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-6 w-3.5 h-3.5 rounded-full timeline-dot hidden sm:block" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-lg font-bold" style={{ color: "oklch(0.94 0.018 255)" }}>
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: "#2F80FF" }}>
                    {exp.company}
                  </p>
                </div>
                <Badge variant="blue" className="flex-shrink-0 self-start">
                  {exp.startDate} — {exp.endDate ?? "Present"}
                </Badge>
              </div>

              <ul className="flex flex-col gap-2.5">
                {exp.description.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed"
                    style={{ color: "oklch(0.72 0.022 255)" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#2F80FF" }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
