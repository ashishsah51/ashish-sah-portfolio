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
import { personalInfo } from "../../data/portfolioData";

const ROLES = [
  "a Software Engineer",
  "a Coder",
  "an Architect",
  "a Cloud Developer",
  "an AI Enthusiast",
  "a Problem Solver",
];

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

type Phase = "typing" | "waiting" | "deleting" | "next";

function TypewriterRole() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 65);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("waiting"), 1600);
      }
    } else if (phase === "waiting") {
      timeoutRef.current = setTimeout(() => setPhase("deleting"), 400);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 38);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("next"), 200);
      }
    } else if (phase === "next") {
      setRoleIndex((i) => (i + 1) % ROLES.length);
      setPhase("typing");
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, phase, roleIndex]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.35rem",
        fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        minHeight: "2rem",
      }}
    >
      <span style={{ color: "oklch(0.65 0.015 255)" }}>I'm</span>
      <span style={{ color: "#60a5fa" }}>
        {displayed}
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1.1em",
            background: "#60a5fa",
            marginLeft: "2px",
            verticalAlign: "middle",
            borderRadius: "1px",
            animation: "blink-cursor 0.75s step-end infinite",
          }}
        />
      </span>
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
        className="relative pt-24 pb-10 sm:pt-28 sm:pb-16 px-4 sm:px-6 lg:px-10 overflow-hidden"
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
          {/* ── Two-column layout on desktop ── */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── LEFT: text content ── */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

              {/* Status badges */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
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

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-col items-center lg:items-start gap-3"
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
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
              >
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="hero-btn-primary"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
                <button
                  type="button"
                  onClick={scrollToFooter}
                  className="hero-btn-outline"
                >
                  <MessageCircle className="w-4 h-4" />
                  Let's Connect
                </button>
              </motion.div>

              {/* Stats strip */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-sm"
              >
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.56 + i * 0.08 }}
                    className="stat-card-v2 flex flex-col items-center py-4 px-2 rounded-2xl"
                    style={{ background: stat.bg, border: `1px solid ${stat.border}` }}
                  >
                    <span
                      className="text-xl sm:text-2xl font-extrabold leading-none"
                      style={{ color: stat.color, textShadow: `0 0 20px ${stat.glow}` }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-[10px] font-medium mt-1.5 text-center leading-tight"
                      style={{ color: "oklch(0.58 0.018 255)" }}
                    >
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: Avatar ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative flex items-center justify-center flex-shrink-0"
            >
              <div className="avatar-ring-outer-v2" />
              <div className="avatar-ring-spin-v2" />
              <div
                className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full z-10 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, oklch(0.18 0.04 255) 0%, oklch(0.14 0.03 255) 100%)",
                  boxShadow: "0 0 60px oklch(0.55 0.18 255 / 0.4), 0 0 120px oklch(0.55 0.18 255 / 0.15)",
                  border: "2px solid oklch(0.30 0.06 255 / 0.5)",
                }}
              >
                <span className="font-bricolage font-black text-6xl sm:text-7xl lg:text-8xl hero-name-gradient select-none">
                  AS
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="contact-bar"
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
