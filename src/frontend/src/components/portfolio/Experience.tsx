import { motion } from "motion/react";
import { experiences } from "../../data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="py-14 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Work <span>Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-0.5 hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, #2F80FF, oklch(0.24 0.038 250))",
            }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${exp.company}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="sm:pl-10 relative"
                data-ocid={`experience.item.${i + 1}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-5 w-3.5 h-3.5 rounded-full timeline-dot hidden sm:block"
                  style={{ transform: "translateY(-50%)" }}
                />

                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "oklch(0.15 0.028 255)",
                    border: "1px solid oklch(0.24 0.038 250)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "oklch(0.94 0.018 255)" }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "#2F80FF" }}
                        >
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0"
                      style={{
                        background: "oklch(0.55 0.18 255 / 0.1)",
                        border: "1px solid oklch(0.55 0.18 255 / 0.3)",
                        color: "#2F80FF",
                      }}
                    >
                      {exp.startDate} — {exp.endDate ?? "Present"}
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {exp.description.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: "oklch(0.72 0.022 255)" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#2F80FF" }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
