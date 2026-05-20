import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Button, Input } from "../index";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/subhas.mondal.110244",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/goalkeepersubhas",
      label: "Instagram",
    },
    { icon: FaGithub, href: "https://github.com/Subhas6033", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/subhas-mondal-bubai6033/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[var(--color-primary)] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--color-accent)] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[var(--color-accent)] opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-12 -mt-24">
          <div className="bg-[var(--color-bg-primary)] rounded-[var(--radius-xl)] p-6 sm:p-8 shadow-[var(--shadow-xl)]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-text-primary)]">
                  Stay Connected
                </h3>
                <p className="text-[var(--color-text-secondary)] mt-1 text-sm sm:text-base">
                  Get the latest updates on employee management and more.
                </p>
              </div>

              <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full lg:w-72 px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-light)] transition-all duration-200"
                />
                <Button
                  children={
                    <span className="flex items-center gap-2">
                      Subscribe
                      <ArrowRight className="text-xs" />
                    </span>
                  }
                  bgColor="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-[var(--radius-md)] transition-all duration-200 shadow-[var(--shadow-accent)] hover:shadow-lg"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-accent)] flex items-center justify-center">
                <FaLinkedin className="text-white text-lg" />
              </div>
              <div>
                <h4 className="text-lg font-semibold  text-[var(--color-text-primary)]">
                  TrackFlow
                </h4>
                <p className="text-xs text-white/60">Employee Management</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Streamline your workforce management with our comprehensive
              employee tracking and task management solution.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-[var(--radius-md)] bg-white/10 flex items-center justify-center text-white/80 hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© {currentYear} TrackFlow. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Designed with passion by
              <a
                href="https://www.linkedin.com/in/subhas-mondal-bubai6033/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-white transition-colors duration-200"
              >
                Subhas
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
