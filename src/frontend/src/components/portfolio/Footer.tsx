import { Code2, Github, Heart, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../../data/portfolioData";

const NAV_SECTIONS = [
  {
    label: "Portfolio",
    links: [
      { text: "Home",           href: "#hero" },
      { text: "Skills",         href: "#skills" },
      { text: "Experience",     href: "#experience" },
      { text: "Projects",       href: "#projects" },
      { text: "Certifications", href: "#certifications" },
      { text: "Achievements",   href: "#achievements" },
    ],
  },
  {
    label: "Connect",
    links: [
      { text: "Email Me",       href: `mailto:${personalInfo.email}` },
      { text: "LinkedIn",       href: `https://${personalInfo.linkedin}` },
      { text: "GitHub",         href: `https://${personalInfo.github}` },
      { text: "Notes",          href: "#notes" },
      { text: "Summary",        href: "#summary" },
    ],
  },
];

const CONTACT_DETAILS = [
  { icon: Mail,   text: personalInfo.email,    href: `mailto:${personalInfo.email}` },
  { icon: Phone,  text: personalInfo.phone,    href: undefined },
  { icon: MapPin, text: personalInfo.location, href: undefined },
];

const SOCIAL = [
  { icon: Linkedin, href: `https://${personalInfo.linkedin}`, label: "LinkedIn" },
  { icon: Github,   href: `https://${personalInfo.github}`,   label: "GitHub" },
  { icon: Mail,     href: `mailto:${personalInfo.email}`,     label: "Email" },
];

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* top glow bar */}
      <div className="footer-top-glow" />

      {/* main body */}
      <div className="footer-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* ── upper grid ── */}
          <div className="footer-grid">
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="footer-brand-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="footer-avatar">
                  <span>AS</span>
                </div>
                <div>
                  <p className="text-lg font-bold leading-tight" style={{ color: "oklch(0.96 0.012 255)" }}>
                    {personalInfo.name}
                  </p>
                  <p className="text-xs" style={{ color: "oklch(0.55 0.015 255)" }}>
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: "oklch(0.58 0.018 255)" }}>
                Senior Software Engineer specializing in Salesforce Ecosystem, AI integrations, and cloud automation. Building scalable, revenue-impacting solutions.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {SOCIAL.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="footer-social-icon"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Nav columns */}
            {NAV_SECTIONS.map((section, si) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + si * 0.1 }}
              >
                <p className="footer-nav-heading">{section.label}</p>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <a href={link.href} className="footer-nav-link">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="footer-nav-heading">Get in Touch</p>
              <ul className="space-y-4">
                {CONTACT_DETAILS.map((c) => {
                  const Icon = c.icon;
                  const inner = (
                    <div className="flex items-start gap-3">
                      <span className="footer-contact-icon-wrap">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm break-all" style={{ color: "oklch(0.68 0.018 255)" }}>
                        {c.text}
                      </span>
                    </div>
                  );
                  return (
                    <li key={c.text}>
                      {c.href ? (
                        <a href={c.href} className="hover:opacity-80 transition-opacity">
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Availability badge */}
              <div className="footer-availability mt-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs font-medium" style={{ color: "oklch(0.72 0.14 145)" }}>
                  Open to new opportunities
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── divider ── */}
          <div className="footer-divider" />

          {/* ── bottom bar ── */}
          <div className="footer-bottom">
            <p className="text-xs" style={{ color: "oklch(0.45 0.012 255)" }}>
              © {new Date().getFullYear()} {personalInfo.name} — All rights reserved
            </p>
            <p className="text-xs flex items-center gap-1" style={{ color: "oklch(0.45 0.012 255)" }}>
              Built with <Heart className="w-3 h-3 text-red-400" /> and
              <Code2 className="w-3 h-3" style={{ color: "#2F80FF" }} />
              React + Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
