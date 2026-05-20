import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, clipPath: "circle(0% at 100% 0%)" },
    visible: { 
      opacity: 1, 
      clipPath: "circle(150% at 100% 0%)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    exit: { 
      opacity: 0, 
      clipPath: "circle(0% at 100% 0%)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: (i) => ({
      y: 20,
      opacity: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-[#030014]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle glowing orb in background */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col items-center gap-8 z-10 relative">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-bold text-gray-300 hover:text-white transition-colors relative group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              </motion.a>
            ))}
          </div>

          {/* Additional info or social links could go here */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
            exit={{ opacity: 0 }}
            className="absolute bottom-10 text-sm text-gray-500 font-mono"
          >
            SYS.STATUS // ONLINE
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};