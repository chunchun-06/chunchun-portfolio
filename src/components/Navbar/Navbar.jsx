import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle active section detection via IntersectionObserver
  useEffect(() => {
    // Create thresholds [0, 0.05, 0.10, ... 1.0] for fine-grained intersection tracking
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -10% 0px", // Slight top/bottom margin to avoid triggering headers too early
      threshold: thresholds,
    };

    // Keep track of how much of each section is currently visible
    const visibleRatios = new Map();

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        visibleRatios.set(entry.target.id, entry.intersectionRatio);
      });

      let maxRatio = 0;
      let mostVisibleSection = "";

      // Determine which section currently occupies the most space in the viewport
      visibleRatios.forEach((ratio, id) => {
        // If it crosses the 50-60% threshold logically, or is just the most visible
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });

      if (mostVisibleSection && maxRatio > 0.1) {
        setActiveSection(mostVisibleSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Handle scroll state for background styling (transparent at top, blurred after 80px)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with offset to prevent navbar covering headings
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for the fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={`fixed top-[28px] right-[48px] z-50 hidden md:flex items-center px-2 py-1.5 rounded-full border transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a1628]/60 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(59,130,246,0.1)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`relative px-5 py-2 text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 rounded-full z-10 ${
                  isActive ? "text-warm" : "text-white hover:text-warm"
                }`}
              >
                {/* Glowing Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/5 rounded-full shadow-[0_0_15px_rgba(243,228,201,0.15)] border border-warm/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{link.label}</span>
              </button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Hamburger Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`fixed top-6 right-6 z-[60] md:hidden p-3 rounded-full transition-all duration-500 text-white border ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#0a1628]/80 backdrop-blur-md border-white/10 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      {/* Mobile Navigation Popup */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-50 md:hidden p-6 rounded-3xl bg-[#0a1628]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative px-6 py-4 text-left text-lg font-medium rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-warm bg-white/5 border border-warm/20 shadow-[0_0_15px_rgba(243,228,201,0.1)]"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
