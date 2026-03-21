import { ExternalLink } from "lucide-react";
import { projects } from "../../data/portfolioData";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        title="Featured"
        highlight="Projects"
        subtitle="Things I have built and shipped"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Card
            key={project.name}
            delay={i * 0.1}
            data-ocid={`projects.item.${i + 1}`}
            className="p-6 flex flex-col gap-4 group"
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{
                  background: "oklch(0.55 0.18 255 / 0.15)",
                  color: "#2F80FF",
                }}
              >
                {project.name.charAt(0)}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg"
                  style={{ color: "#2F80FF", background: "oklch(0.55 0.18 255 / 0.1)" }}
                  data-ocid={`projects.item.${i + 1}.link`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-base font-bold mb-2" style={{ color: "oklch(0.94 0.018 255)" }}>
                {project.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.70 0.022 255)" }}>
                {project.description}
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="blue">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
