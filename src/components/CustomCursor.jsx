import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update CSS variables for spotlight effect
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  if (typeof window === "undefined" || window.innerWidth < 768) return null; // Disable on mobile

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "rgba(59, 130, 246, 0.3)",
      mixBlendMode: "screen"
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      scale: 2.5,
      backgroundColor: "rgba(56, 189, 248, 0.1)",
      border: "1px solid rgba(56, 189, 248, 0.5)",
      mixBlendMode: "screen"
    }
  };

  return (
    <>
      {/* Outer Glow / Spotlight */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] backdrop-blur-[1px]"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md scale-150"></div>
      </motion.div>
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-300 pointer-events-none z-[10000] shadow-[0_0_10px_#67e8f9]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
};
