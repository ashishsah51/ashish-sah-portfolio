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
import { useEffect, useRef, useState } from "react";
import { heroRoles, personalInfo } from "../../data/portfolioData";

const STATS = [
  {
    value: "~3 yrs",
    label: "Experience",
    bg: "oklch(0.55 0.18 255 / 0.08)",
    border: "oklch(0.55 0.18 255 / 0.45)",
    color: "oklch(0.72 0.18 255)",
    glow: "oklch(0.55 0.18 255 / 0.35)",
  },
  {
    value: "1500+",
    label: "Problems Solved",
    bg: "oklch(0.55 0.17 145 / 0.08)",
    border: "oklch(0.55 0.17 145 / 0.45)",
    color: "oklch(0.72 0.17 145)",
    glow: "oklch(0.55 0.17 145 / 0.35)",
  },
  {
    value: "4",
    label: "Certifications",
    bg: "oklch(0.72 0.18 70 / 0.08)",
    border: "oklch(0.72 0.18 70 / 0.45)",
    color: "oklch(0.82 0.18 70)",
    glow: "oklch(0.72 0.18 70 / 0.35)",
  },
] as const;

const CONTACT_ITEMS = [
  { icon: Mail,     text: personalInfo.email,    href: `mailto:${personalInfo.email}`, external: false },
  { icon: Phone,    text: personalInfo.phone,    href: undefined, external: false },
  { icon: MapPin,   text: personalInfo.location, href: undefined, external: false },
  { icon: Linkedin, text: "LinkedIn",            href: `https://${personalInfo.linkedin}`, external: true },
  { icon: Github,   text: "GitHub",              href: `https://${personalInfo.github}`, external: true },
] as const;

const TYPE_SPEED = 60;
const DELETE_SPEED = 35;
const HOLD_DELAY = 1600;
const BETWEEN_DELAY = 320;

function TypewriterRole() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "between">("typing");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = heroRoles[roleIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("holding"), HOLD_DELAY);
      }
    } else if (phase === "holding") {
      timeoutRef.current = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed((d) => d.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("between"), BETWEEN_DELAY);
      }
    } else if (phase === "between") {
      setRoleIndex((i) => (i + 1) % heroRoles.length);
      setPhase("typing");
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, phase, roleIndex]);

  return (
    <div className="flex items-center h-9 sm:h-10">
      <span className="text-xl sm:text-2xl font-semibold gradient-text">
        {displayed}
      </span>
      <span
        className="ml-0.5 inline-block w-0.5 h-6 sm:h-7 rounded-full align-middle"
        style={{
          background: "oklch(0.65 0.18 255)",
          animation: "blink-cursor 0.9s step-end infinite",
        }}
      />
    </div>
  );
}

function scrollToFooter() {
  document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-10 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="hero-orb-1" />
          <div className="hero-orb-2" />
          <div className="hero-orb-3" />
          <div className="hero-grid-dots" />
          <div className="hero-scanlines" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Status badges */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10 sm:mb-14"
          >
            <span className="hero-badge-green">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Open to opportunities
            </span>
            <span className="hero-badge-blue">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.65 0.18 255)" }} />
              @ CloudKaptan
            </span>
          </motion.div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16">

            {/* LEFT — Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: -24 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative flex-shrink-0 flex items-center justify-center"
            >
              <div className="avatar-ring-outer-v2" />
              <div className="avatar-ring-spin-v2" />
              <div
                className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full z-10 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, oklch(0.18 0.04 255) 0%, oklch(0.14 0.03 255) 100%)",
                  boxShadow: "0 0 60px oklch(0.55 0.18 255 / 0.4), 0 0 120px oklch(0.55 0.18 255 / 0.15)",
                  border: "2px solid oklch(0.30 0.06 255 / 0.5)",
                }}
              >
                <span className="font-bricolage font-black text-5xl sm:text-6xl lg:text-7xl hero-name-gradient select-none">
                  AS
                </span>
              </div>
            </motion.div>

            {/* RIGHT — Content */}
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left flex-1 min-w-0">

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-col gap-2"
              >
                <h1 className="font-bricolage text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight hero-name-gradient">
                  {personalInfo.name}
                </h1>
                {/* Typewriter role */}
                <TypewriterRole />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
              >
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="hero-btn-primary"
                  data-ocid="hero.download_resume.button"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
                <button
                  type="button"
                  onClick={scrollToFooter}
                  className="hero-btn-outline"
                  data-ocid="hero.lets_connect.button"
                >
                  <MessageCircle className="w-4 h-4" />
                  Let's Connect
                </button>
              </motion.div>

              {/* Stats strip */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-sm lg:max-w-md"
              >
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.62 + i * 0.1 }}
                    className="stat-card-v2 flex flex-col items-center py-4 px-3 rounded-2xl"
                    style={{ background: stat.bg, border: `1px solid ${stat.border}` }}
                  >
                    <span
                      className="text-2xl sm:text-3xl font-extrabold leading-none"
                      style={{ color: stat.color, textShadow: `0 0 20px ${stat.glow}` }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-[10px] sm:text-[11px] font-medium mt-1.5 text-center leading-tight"
                      style={{ color: "oklch(0.58 0.018 255)" }}
                    >
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="contact-bar"
        data-ocid="contact_bar.panel"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 px-4">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;
            const inner = (
              <span className="contact-bar-item">
                <span className="contact-bar-icon-wrap">
                  <Icon className="w-3 h-3" />
                </span>
                <span>{item.text}</span>
              </span>
            );
            return item.href ? (
              <a
                key={item.text}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel="noreferrer"
              >
                {inner}
              </a>
            ) : (
              <span key={item.text}>{inner}</span>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
