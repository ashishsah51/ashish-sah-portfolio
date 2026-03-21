import { Award, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { certifications, education } from "../../data/portfolioData";

export function Certifications() {
  return (
    <section id="certifications" className="py-14 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Certifications & <span>Education</span>
          </h2>
        </motion.div>

        {/* Certifications */}
        <div className="mb-10">
          <h3
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: "oklch(0.55 0.18 255)" }}
          >
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl p-4 flex flex-col gap-3"
                style={{
                  background: "oklch(0.15 0.028 255)",
                  border: "1px solid oklch(0.24 0.038 250)",
                }}
                data-ocid={`certifications.item.${i + 1}`}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "oklch(0.55 0.18 255 / 0.15)" }}
                >
                  <Award className="w-4 h-4" style={{ color: "#2F80FF" }} />
                </div>
                <div>
                  <h4
                    className="text-sm font-bold leading-snug mb-1"
                    style={{ color: "oklch(0.94 0.018 255)" }}
                  >
                    {cert.name}
                  </h4>
                  <p
                    className="text-xs font-medium mb-1"
                    style={{ color: "#2F80FF" }}
                  >
                    {cert.issuer}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.62 0.018 255)" }}
                  >
                    {cert.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "oklch(0.18 0.03 255)",
                      color: "oklch(0.70 0.022 255)",
                    }}
                  >
                    {cert.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: "oklch(0.55 0.18 255)" }}
          >
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl p-5 flex gap-4"
                style={{
                  background: "oklch(0.15 0.028 255)",
                  border: "1px solid oklch(0.24 0.038 250)",
                }}
                data-ocid={`education.item.${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.55 0.18 255 / 0.15)" }}
                >
                  <GraduationCap
                    className="w-5 h-5"
                    style={{ color: "#2F80FF" }}
                  />
                </div>
                <div>
                  <h4
                    className="text-sm font-bold mb-1"
                    style={{ color: "oklch(0.94 0.018 255)" }}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    className="text-xs font-medium mb-2"
                    style={{ color: "#2F80FF" }}
                  >
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "oklch(0.18 0.03 255)",
                        color: "oklch(0.70 0.022 255)",
                      }}
                    >
                      {edu.startYear} – {edu.endYear}
                    </span>
                    {edu.cgpa && (
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "oklch(0.75 0.15 140)" }}
                      >
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                    <span
                      className="text-xs"
                      style={{ color: "oklch(0.60 0.018 255)" }}
                    >
                      {edu.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
