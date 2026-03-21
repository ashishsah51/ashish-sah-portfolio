import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { personalInfo, profileSummary } from "../../data/portfolioData";

const contactItems = [
  {
    icon: Mail,
    text: "ashishsah51@gmail.com",
    href: `mailto:${"ashishsah51@gmail.com"}`,
    ocid: "hero.email.link",
  },
  {
    icon: Phone,
    text: "+91 8274849756",
    href: undefined,
    ocid: undefined,
  },
  {
    icon: MapPin,
    text: "Kolkata, India",
    href: undefined,
    ocid: undefined,
  },
  {
    icon: Linkedin,
    text: "LinkedIn Profile",
    href: `https://${personalInfo.linkedin}`,
    ocid: "hero.linkedin.link",
  },
  {
    icon: Github,
    text: "GitHub Profile",
    href: `https://${personalInfo.github}`,
    ocid: "hero.github.link",
  },
];

const stats = [
  { value: "~3 yrs", label: "Experience" },
  { value: "2000+", label: "Problems Solved" },
  { value: "$200M+", label: "Portfolio Managed" },
];

export function Hero() {
  const handleDownload = () => {
    window.print();
  };

  const handleConnect = () => {
    const footer = document.querySelector("#footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid-dots" />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr] gap-12 items-center">
          {/* ── LEFT COLUMN: Avatar + Contact ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start gap-6"
          >
            {/* Avatar with animated ring */}
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="avatar-ring-outer" />
              {/* Spinning gradient border */}
              <div className="avatar-ring-spin" />
              {/* Avatar frame */}
              <div
                className="relative w-44 h-44 rounded-full overflow-hidden z-10"
                style={{
                  boxShadow:
                    "0 0 40px oklch(0.55 0.18 255 / 0.45), 0 0 80px oklch(0.55 0.18 255 / 0.15)",
                }}
              >
                <img
                  src="/assets/generated/avatar-as-transparent.dim_200x200.png"
                  alt="Ashish Sah"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15,27,44,0.2) 0%, rgba(47,128,255,0.08) 100%)",
                  }}
                />
              </div>
              {/* Status badge on avatar */}
              <div
                className="absolute -bottom-1 -right-1 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold"
                style={{
                  background: "oklch(0.14 0.028 255)",
                  border: "1px solid oklch(0.48 0.17 145 / 0.5)",
                  color: "oklch(0.78 0.16 145)",
                  boxShadow: "0 0 12px oklch(0.48 0.17 145 / 0.3)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open
              </div>
            </div>

            {/* Name + Title (mobile only) */}
            <div className="md:hidden text-center">
              <h1 className="text-4xl font-extrabold hero-name-gradient mb-1">
                {personalInfo.name}
              </h1>
              <p className="text-base font-semibold gradient-text">
                {personalInfo.title}
              </p>
            </div>

            {/* Contact chips */}
            <div className="flex flex-col gap-2.5 w-full">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="contact-chip-icon">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="truncate text-xs">{item.text}</span>
                  </>
                );
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noreferrer"
                        className="contact-chip"
                        data-ocid={item.ocid}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="contact-chip cursor-default">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold w-fit"
              style={{
                background: "oklch(0.48 0.17 145 / 0.12)",
                border: "1px solid oklch(0.48 0.17 145 / 0.4)",
                color: "oklch(0.78 0.16 145)",
                boxShadow: "0 0 20px oklch(0.48 0.17 145 / 0.15)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Name – desktop */}
            <div className="hidden md:block">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-5xl lg:text-[64px] font-extrabold leading-[1.05] tracking-tight hero-name-gradient mb-2"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-xl sm:text-2xl font-semibold gradient-text"
              >
                {personalInfo.title}
              </motion.h2>
            </div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-sm sm:text-base leading-relaxed max-w-2xl"
              style={{ color: "oklch(0.72 0.022 255)" }}
            >
              {profileSummary}
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <button
                type="button"
                onClick={handleDownload}
                className="hero-btn-primary"
                data-ocid="hero.download_resume.button"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
              <button
                type="button"
                onClick={handleConnect}
                className="hero-btn-outline"
                data-ocid="hero.lets_connect.button"
              >
                <MessageCircle className="w-4 h-4" />
                Let's Connect
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-3 gap-3 pt-2 mt-1"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className="stat-card"
                >
                  <span className="text-xl font-extrabold hero-name-gradient">
                    {stat.value}
                  </span>
                  <span
                    className="text-[11px] font-medium mt-0.5"
                    style={{ color: "oklch(0.62 0.018 255)" }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
