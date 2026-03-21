import { awards, codingAchievements } from "../../data/portfolioData";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader
        title="Coding"
        highlight="Achievements"
        subtitle="Competitive programming rankings and honors"
      />

      {/* Coding profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {codingAchievements.map((ach, i) => (
          <Card
            key={ach.platform}
            delay={i * 0.1}
            data-ocid={`achievements.item.${i + 1}`}
            className="p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{ach.icon}</span>
              <span className="text-2xl font-extrabold tabular-nums" style={{ color: "#2F80FF" }}>
                {ach.rating}
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold" style={{ color: "oklch(0.94 0.018 255)" }}>
                {ach.platform}
              </h3>
              <div className="mt-2">
                <Badge variant="blue">{ach.rank}</Badge>
              </div>
            </div>
            <p className="text-xs" style={{ color: "oklch(0.62 0.018 255)" }}>
              {ach.detail}
            </p>
          </Card>
        ))}
      </div>

      {/* Awards */}
      <div>
        <p className="sub-section-label mb-5">Awards & Honors</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {awards.map((award, i) => (
            <Card
              key={award.title}
              delay={i * 0.1}
              slideFrom="left"
              data-ocid={`awards.item.${i + 1}`}
              className="p-5 flex items-center gap-4"
            >
              <span className="text-2xl">{award.icon}</span>
              <div>
                <h4 className="text-sm font-bold" style={{ color: "oklch(0.94 0.018 255)" }}>
                  {award.title}
                </h4>
                <p className="text-xs mt-0.5" style={{ color: "oklch(0.62 0.018 255)" }}>
                  {award.detail}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
