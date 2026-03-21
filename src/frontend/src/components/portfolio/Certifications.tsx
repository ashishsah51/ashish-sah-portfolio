import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "../../data/portfolioData";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";

export function Certifications() {
  return (
    <Section id="certifications" className="section-alt">
      <SectionHeader
        title="Certifications &"
        highlight="Education"
        subtitle="Credentials and academic background"
      />

      {/* Certifications */}
      <div className="mb-12">
        <p className="sub-section-label mb-5">Certifications</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <Card
              key={cert.name}
              delay={i * 0.08}
              data-ocid={`certifications.item.${i + 1}`}
              className="p-5 flex flex-col gap-3"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.55 0.18 255 / 0.15)" }}
              >
                <Award className="w-4 h-4" style={{ color: "#2F80FF" }} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold leading-snug mb-1" style={{ color: "oklch(0.94 0.018 255)" }}>
                  {cert.name}
                </h4>
                <p className="text-xs font-semibold mb-1.5" style={{ color: "#2F80FF" }}>
                  {cert.issuer}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "oklch(0.62 0.018 255)" }}>
                  {cert.description}
                </p>
              </div>
              <Badge variant="muted" className="self-start">
                {cert.date}
              </Badge>
            </Card>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <p className="sub-section-label mb-5">Education</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <Card
              key={edu.degree}
              delay={i * 0.1}
              data-ocid={`education.item.${i + 1}`}
              className="p-5 flex gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "oklch(0.55 0.18 255 / 0.12)" }}
              >
                <GraduationCap className="w-5 h-5" style={{ color: "#2F80FF" }} />
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1" style={{ color: "oklch(0.94 0.018 255)" }}>
                  {edu.degree}
                </h4>
                <p className="text-xs font-medium mb-1.5" style={{ color: "#2F80FF" }}>
                  {edu.institution}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="muted">
                    {edu.startYear} — {edu.endYear}
                  </Badge>
                  {edu.cgpa && (
                    <Badge variant="ghost">GPA: {edu.cgpa}</Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
