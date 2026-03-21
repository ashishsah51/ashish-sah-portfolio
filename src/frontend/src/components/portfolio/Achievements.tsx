import { motion } from "motion/react";
import { awards, codingAchievements } from "../../data/portfolioData";

export function Achievements() {
  return (
    <section id="achievements" className="py-14 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Coding <span>Achievements</span>
          </h2>
        </motion.div>

        {/* Coding profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {codingAchievements.map((ach, i) => (
            <motion.div
              key={ach.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: "oklch(0.15 0.028 255)",
                border: "1px solid oklch(0.24 0.038 250)",
              }}
              data-ocid={`achievements.item.${i + 1}`}
            >
              <div className="flex items-center justify-between">
                <div className="text-2xl">{ach.icon}</div>
                <div
                  className="text-2xl font-extrabold tabular-nums"
                  style={{ color: "#2F80FF" }}
                >
                  {ach.rating}
                </div>
              </div>
              <div>
                <h3
                  className="text-base font-bold"
                  style={{ color: "oklch(0.94 0.018 255)" }}
                >
                  {ach.platform}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      background: "oklch(0.55 0.18 255 / 0.15)",
                      color: "#2F80FF",
                      border: "1px solid oklch(0.55 0.18 255 / 0.3)",
                    }}
                  >
                    {ach.rank}
                  </span>
                </div>
              </div>
              <p className="text-xs" style={{ color: "oklch(0.62 0.018 255)" }}>
                {ach.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <div>
          <h3
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: "oklch(0.55 0.18 255)" }}
          >
            Awards & Honors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-xl p-4"
                style={{
                  background: "oklch(0.15 0.028 255)",
                  border: "1px solid oklch(0.24 0.038 250)",
                }}
                data-ocid={`awards.item.${i + 1}`}
              >
                <div className="text-2xl">{award.icon}</div>
                <div>
                  <h4
                    className="text-sm font-bold"
                    style={{ color: "oklch(0.94 0.018 255)" }}
                  >
                    {award.title}
                  </h4>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(0.62 0.018 255)" }}
                  >
                    {award.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
