import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-[#030014]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="font-mono text-2xl font-bold text-white tracking-tighter interactive">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">N</span>eeraj<span className="text-blue-500">.</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="w-10 h-10 relative flex flex-col justify-center items-center group z-50 md:hidden interactive"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <span className={`h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : "-translate-y-1"}`}></span>
            <span className={`h-[2px] bg-white transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-6"}`}></span>
            <span className={`h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : "translate-y-1"}`}></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors interactive text-gray-300 hover:text-white"
              >
                {activeSection === link.name.toLowerCase() && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};