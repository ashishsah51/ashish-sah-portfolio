import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../../data/portfolioData";

export function Projects() {
  return (
    <section id="projects" className="py-14 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Key <span>Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col gap-4 group"
              style={{
                background: "oklch(0.15 0.028 255)",
                border: "1px solid oklch(0.24 0.038 250)",
                transition: "border-color 0.2s",
              }}
              data-ocid={`projects.item.${i + 1}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: "oklch(0.55 0.18 255 / 0.15)" }}
                >
                  {i === 0 ? "🤖" : "💬"}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg"
                    style={{
                      color: "#2F80FF",
                      background: "oklch(0.55 0.18 255 / 0.1)",
                    }}
                    data-ocid={`projects.item.${i + 1}.link`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "oklch(0.94 0.018 255)" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.70 0.022 255)" }}
                >
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: "oklch(0.55 0.18 255 / 0.12)",
                      border: "1px solid oklch(0.55 0.18 255 / 0.3)",
                      color: "#2F80FF",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
