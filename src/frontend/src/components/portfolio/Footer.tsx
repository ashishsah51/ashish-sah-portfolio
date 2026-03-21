import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer
      id="footer"
      className="py-10 px-4 sm:px-6 border-t"
      style={{ borderColor: "oklch(0.24 0.038 250)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, #2F80FF, #1a5fd4)",
              }}
            >
              AS
            </div>
            <div>
              <div
                className="text-sm font-bold"
                style={{ color: "oklch(0.94 0.018 255)" }}
              >
                Ashish Sah
              </div>
              <div
                className="text-xs"
                style={{ color: "oklch(0.62 0.018 255)" }}
              >
                Senior Software Engineer
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 text-xs transition-colors hover:text-white"
              style={{ color: "oklch(0.62 0.018 255)" }}
              aria-label="Email"
              data-ocid="footer.email.link"
            >
              <Mail className="w-4 h-4" style={{ color: "#2F80FF" }} />
              <span className="hidden sm:inline">{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-1.5 text-xs transition-colors hover:text-white"
              style={{ color: "oklch(0.62 0.018 255)" }}
              aria-label="Phone"
              data-ocid="footer.phone.link"
            >
              <Phone className="w-4 h-4" style={{ color: "#2F80FF" }} />
              <span className="hidden sm:inline">{personalInfo.phone}</span>
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg transition-colors hover:bg-white/5"
              style={{ color: "oklch(0.70 0.022 255)" }}
              aria-label="GitHub"
              data-ocid="footer.github.link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg transition-colors hover:bg-white/5"
              style={{ color: "oklch(0.70 0.022 255)" }}
              aria-label="LinkedIn"
              data-ocid="footer.linkedin.link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div
          className="mt-6 pt-6 border-t text-center text-xs"
          style={{
            borderColor: "oklch(0.20 0.03 255)",
            color: "oklch(0.50 0.015 255)",
          }}
        >
          © {year}. Built with ❤️ using{" "}
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
