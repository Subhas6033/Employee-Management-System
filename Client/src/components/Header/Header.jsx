import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Bell,
  Settings,
  Sun,
  Moon,
  Home,
  Users,
  ListTodo,
  User,
} from "lucide-react";
import { useDispatch } from "react-redux";
import useDarkMode from "../../Hook/useDarkMode";
import "../../index.css";
import { toggleTheme } from "../../Features/ThemeSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = useDarkMode();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", slug: "/", icon: Home },
    { name: "Admin", slug: "/admin-dashboard", icon: ListTodo },
    { name: "Employee", slug: "/employee-dashboard", icon: Users },
    { name: "Tasks", slug: "/tasklist", icon: ListTodo },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-sm)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] flex items-center justify-center shadow-[var(--shadow-accent)] transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              <Users className="text-white text-lg" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-[#1e293b] tracking-tight">
                Track<span className="text-[#0ea5e9]">Flow (Beta Version)</span>
              </h1>
              <p className="text-xs text-[#94a3b8] -mt-0.5">
                Employee Management
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.slug)}
                className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-[var(--radius-md)] hover:-translate-y-0.5 ${
                  isActive(item.slug)
                    ? "text-[#0ea5e9] bg-[#e0f2fe]"
                    : "text-[#475569] hover:text-[#1e293b] hover:bg-[#f1f5f9]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="text-sm" />
                  {item.name}
                </span>
                {isActive(item.slug) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0ea5e9] rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2.5 rounded-[var(--radius-md)] text-[#475569] hover:text-[#0ea5e9] hover:bg-[#e0f2fe] transition-all duration-300 hover:scale-105">
              <Bell size={18} />
            </button>

            <button className="p-2.5 rounded-[var(--radius-md)] text-[#475569] hover:text-[#0ea5e9] hover:bg-[#e0f2fe] transition-all duration-300 hover:scale-105">
              <Settings size={18} />
            </button>

            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2.5 rounded-[var(--radius-md)] text-[#475569] hover:text-[#0ea5e9] hover:bg-[#e0f2fe] transition-all duration-300 hover:scale-105"
            >
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <div className="w-px h-6 bg-[#e2e8f0] mx-1"></div>

            <button className="flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white text-sm font-medium hover:shadow-[var(--shadow-accent)] hover:-translate-y-0.5 transition-all duration-300">
              <User size={14} />
              <span>Sign In</span>
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-[var(--radius-md)] text-[#1e293b] hover:bg-[#f1f5f9] transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-[var(--shadow-lg)] border-t border-[#e2e8f0] transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => navigate(item.slug)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] text-sm font-medium transition-all duration-300 hover:-translate-x-1 ${
                isActive(item.slug)
                  ? "text-[#0ea5e9] bg-[#e0f2fe]"
                  : "text-[#475569] hover:bg-[#f1f5f9]"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <item.icon size={18} />
              {item.name}
            </button>
          ))}

          <div className="h-px bg-[#e2e8f0] my-3"></div>

          <button
            onClick={() => dispatch(toggleTheme())}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] text-sm font-medium text-[#475569] hover:bg-[#f1f5f9] transition-all duration-300"
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
            {isDark ? "Dark Mode" : "Light Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
