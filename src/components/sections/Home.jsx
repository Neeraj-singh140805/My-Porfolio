import { RevealOnScroll } from "../RevealOnScroll";
import { Github, Linkedin, Code } from "lucide-react";
import { TiltCard } from "../TiltCard";
import { motion } from "framer-motion";

export const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 md:px-12 pt-20 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Text Section (Left) */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.div custom={1} variants={textVariants} className="mb-6 inline-flex">
              <span 
                className="text-cyan-400 font-mono tracking-[0.2em] text-sm md:text-base uppercase px-4 py-1.5 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm glitch-text"
                data-text="SYS.INIT // WELCOME"
              >
                SYS.INIT // WELCOME
              </span>
            </motion.div>
            
            <motion.h1 custom={2} variants={textVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.05] tracking-tighter">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 text-glow">
                Digital
              </span> <br />
              <span className="text-white">Realities</span>
            </motion.h1>

            <motion.p custom={3} variants={textVariants} className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-xl">
              I'm <span className="text-white font-large font-bold text-3xl">Neeraj Singh</span>,<br></br> <span className="text-cyan-400 font-medium">Full Stack Developer | AI Enthusiast | Data Analytics Explorer</span><br></br>Building scalable applications, intelligent systems, and premium digital experiences with React, Next.js, Python, Machine Learning, and Tableau.
            </motion.p>

            {/* Buttons */}
            <motion.div custom={4} variants={textVariants} className="flex flex-wrap gap-6 mb-12">
              <a
                href="#projects"
                className="interactive group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">Explore Work <Code size={20} /></span>
              </a>
              <a
                href="#contact"
                className="interactive px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40 backdrop-blur-md"
              >
                Initiate Contact
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div custom={5} variants={textVariants} className="flex space-x-6 items-center">
              <span className="text-gray-500 font-mono text-sm uppercase tracking-widest mr-2">Connect:</span>
              <a
                href="https://github.com/Neeraj-singh140805"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive text-gray-400 hover:text-white transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/neeraj-singh-496205315/"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive text-gray-400 hover:text-blue-400 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/NeerajSingh1/"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive text-gray-400 hover:text-orange-400 transition-all duration-300 font-mono text-sm tracking-wide"
              >
                [ LEETCODE ]
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Section (Right) - 3D Floating Concept */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-16 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="relative"
          >
            {/* Glowing Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-[80px] rounded-full z-0 pointer-events-none animate-pulse"></div>
            
            <TiltCard className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full floating-element shrink-0 relative z-10 interactive">
              <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.3)] border border-white/10 relative group bg-black/40 backdrop-blur-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 mix-blend-overlay z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Fallback image if user photo isn't available, but using the provided one */}
                <img
                  src="WhatsApp Image 2025-12-26 at 12.20.24 copy.jpeg"
                  alt="Neeraj Singh"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out filter saturate-0 contrast-125 group-hover:saturate-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop"; // Futuristic fallback
                  }}
                />
                
                {/* Tech overlays */}
                <div className="absolute top-8 right-8 bg-black/60 px-4 py-2 rounded-full text-xs font-mono text-cyan-300 z-20 border border-cyan-500/30 backdrop-blur-md">
                  FULLSTACK_DEV
                </div>
                <div className="absolute bottom-12 left-8 bg-black/60 px-4 py-2 rounded-full text-xs font-mono text-purple-300 z-20 border border-purple-500/30 backdrop-blur-md">
                  AI_ENTHUSIAST
                </div>
                
                {/* Scanner line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-1 w-full translate-y-[-100%] group-hover:translate-y-[450px] transition-transform duration-[2s] ease-in-out z-30"></div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
