import { motion } from "motion/react";
import { skillCategories } from "../../data/portfolioData";

export function Skills() {
  return (
    <section id="skills" className="py-14 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Technical <span>Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl p-5"
              style={{
                background: "oklch(0.15 0.028 255)",
                border: "1px solid oklch(0.24 0.038 250)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: "#2F80FF" }}
                />
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "oklch(0.94 0.018 255)" }}
                >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
