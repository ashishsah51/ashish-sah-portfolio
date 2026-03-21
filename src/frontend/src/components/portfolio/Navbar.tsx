import { Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetInTouch = () => {
    window.location.href = "mailto:ashishsah51@gmail.com";
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "oklch(0.11 0.025 255 / 0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid oklch(0.22 0.038 250 / 0.6)",
        boxShadow:
          "0 1px 0 oklch(0.22 0.038 250 / 0.4), 0 4px 24px oklch(0.07 0.02 255 / 0.5)",
      }}
    >
      {/* Gradient accent line */}
      <div className="navbar-accent-line" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="navbar-logo-box">
              <span className="text-xs font-black tracking-widest text-white">
                AS
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className="text-sm font-bold leading-none tracking-tight"
                style={{ color: "oklch(0.96 0.018 255)" }}
              >
                Ashish Sah
              </span>
              <span
                className="text-[10px] font-medium"
                style={{ color: "oklch(0.55 0.18 255)" }}
              >
                Senior Software Engineer
              </span>
            </div>
          </motion.div>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link, i) => (
              <motion.button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                className="nav-link px-3 py-2 rounded-lg cursor-pointer"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center"
          >
            <button
              type="button"
              onClick={handleGetInTouch}
              className="navbar-cta-btn"
              data-ocid="nav.get_in_touch.button"
            >
              <Mail className="w-3.5 h-3.5" />
              GET IN TOUCH
            </button>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "oklch(0.70 0.022 255)" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="nav.mobile_menu.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              background: "oklch(0.11 0.025 255 / 0.97)",
              borderColor: "oklch(0.22 0.038 250 / 0.6)",
            }}
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                  style={{ color: "oklch(0.70 0.022 255)" }}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={handleGetInTouch}
                className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white w-fit navbar-cta-btn"
              >
                <Mail className="w-3.5 h-3.5" />
                GET IN TOUCH
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
