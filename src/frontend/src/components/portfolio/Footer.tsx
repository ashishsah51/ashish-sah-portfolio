import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

const SOCIAL_LINKS = [
  {
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    label: personalInfo.email,
    ariaLabel: "Email",
    ocid: "footer.email.link",
    external: false,
  },
  {
    icon: Phone,
    href: `tel:${personalInfo.phone}`,
    label: personalInfo.phone,
    ariaLabel: "Phone",
    ocid: "footer.phone.link",
    external: false,
  },
  {
    icon: Github,
    href: `https://${personalInfo.github}`,
    label: "",
    ariaLabel: "GitHub",
    ocid: "footer.github.link",
    external: true,
  },
  {
    icon: Linkedin,
    href: `https://${personalInfo.linkedin}`,
    label: "",
    ariaLabel: "LinkedIn",
    ocid: "footer.linkedin.link",
    external: true,
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer
      id="footer"
      className="border-t"
      style={{ borderColor: "oklch(0.20 0.03 255)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #2F80FF, #1a5fd4)" }}
            >
              AS
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "oklch(0.94 0.018 255)" }}>
                {personalInfo.name}
              </p>
              <p className="text-xs" style={{ color: "oklch(0.55 0.018 255)" }}>
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Social / contact links */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label, ariaLabel, ocid, external }) => (
              <a
                key={ariaLabel}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={ariaLabel}
                data-ocid={ocid}
                className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg transition-colors hover:bg-white/5"
                style={{ color: "oklch(0.62 0.018 255)" }}
              >
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "#2F80FF" }} />
                {label && <span className="hidden sm:inline">{label}</span>}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t text-center text-xs"
          style={{ borderColor: "oklch(0.18 0.025 255)", color: "oklch(0.45 0.015 255)" }}
        >
          © {year} {personalInfo.name}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
            style={{ color: "#2F80FF" }}
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
