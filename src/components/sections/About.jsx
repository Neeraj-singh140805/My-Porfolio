import { RevealOnScroll } from "../RevealOnScroll";
import { motion, useInView, animate } from "framer-motion";
import { User, Code2, Rocket, Terminal, Coffee, Layers } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Counter = ({ from, to, duration = 2, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Math.round(value));
        },
      });
      return controls.stop;
    }
  }, [from, to, duration, delay, inView]);

  return <span ref={ref}>{count}</span>;
};

export const About = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-32 relative z-10 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-left mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent inline-block text-glow">
              Origin Story
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Bio & Stats */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <RevealOnScroll>
              <h3 className="text-3xl font-bold text-white mb-4">
                Architecting the Future of Web
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-6">
                I am a passionate developer bridging the gap between elegant design and robust engineering. Currently pursuing my B.Tech in CS & AI at Newton School of Technology, I specialize in crafting cinematic, high-performance web applications that leave a lasting impression.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                My journey is fueled by a relentless curiosity for cutting-edge technologies. From mastering competitive programming to building immersive 3D experiences, I thrive on solving complex problems and turning visionary ideas into digital realities.
              </p>
            </RevealOnScroll>

            {/* Animated Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
              <RevealOnScroll delay={0.2}>
                <div className="glass-card p-6 flex flex-col items-center justify-center text-center interactive hover:border-cyan-500/50 transition-colors">
                  <Terminal className="text-cyan-400 mb-3" size={28} />
                  <div className="text-4xl font-bold text-white mb-1 tracking-tighter">
                    <Counter from={0} to={200} duration={2} />+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-mono">DSA Problems</div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.4}>
                <div className="glass-card p-6 flex flex-col items-center justify-center text-center interactive hover:border-blue-500/50 transition-colors">
                  <Layers className="text-blue-400 mb-3" size={28} />
                  <div className="text-4xl font-bold text-white mb-1 tracking-tighter">
                    <Counter from={0} to={25} duration={2} delay={0.2} />+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-mono">Projects</div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.6}>
                <div className="glass-card p-6 flex flex-col items-center justify-center text-center interactive hover:border-purple-500/50 transition-colors sm:col-span-1 col-span-2">
                  <Coffee className="text-purple-400 mb-3" size={28} />
                  <div className="text-4xl font-bold text-white mb-1 tracking-tighter">
                    <Counter from={0} to={1000} duration={2.5} delay={0.4} />+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-mono">Hours Coding</div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Right Side: Identity Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="interactive group h-full sm:col-span-2 md:col-span-1">
              <div className="glass-card h-full p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] flex flex-col items-start border-blue-500/20 hover:border-blue-500/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-500 pointer-events-none"></div>
                
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <User size={28} className="text-blue-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white tracking-wide">The Student</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  Relentless curiosity drives my academic journey, diving deep into the fundamentals of Computer Science and Artificial Intelligence.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="interactive group h-full sm:mt-12">
              <div className="glass-card h-full p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.2)] flex flex-col items-start border-cyan-500/20 hover:border-cyan-500/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[40px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-500 pointer-events-none"></div>
                
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Code2 size={28} className="text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white tracking-wide">The Developer</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  Writing clean, scalable code to build performant applications. I love architecting systems that solve real-world problems elegantly.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="interactive group h-full sm:col-span-2">
              <div className="glass-card h-full p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 border-purple-500/20 hover:border-purple-500/50">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-500 pointer-events-none"></div>
                
                <div className="w-16 h-16 shrink-0 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <Rocket size={32} className="text-purple-400" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white tracking-wide">The Visionary</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-sm">
                    Exploring the bleeding edge of web tech (WebGL, Three.js) to craft immersive, Awwwards-level cinematic digital experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};