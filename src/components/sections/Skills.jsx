import { RevealOnScroll } from "../RevealOnScroll";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 90, color: "from-cyan-400 to-blue-500", icon: "⚛️" },
  { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500", icon: "JS" },
  { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-cyan-500", icon: "🌊" },
  { name: "Tableau", level: 70, color: "from-purple-400 to-indigo-500", icon: "🧊" },
  { name: "Node.js", level: 80, color: "from-green-400 to-emerald-500", icon: "🟢" },
  { name: "Python", level: 85, color: "from-blue-500 to-yellow-400", icon: "🐍" },
  { name: "SQL", level: 85, color: "from-blue-500 to-yellow-400", icon: "🐍" },
  { name: "Excel", level: 85, color: "from-blue-500 to-yellow-400", icon: "🐍" }
];

const MagneticCard = ({ skill, index }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center (max 15px movement)
    const moveX = ((e.clientX - centerX) / width) * 30;
    const moveY = ((e.clientY - centerY) / height) * 30;
    
    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <RevealOnScroll delay={index * 0.1}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: mouseXSpring, y: mouseYSpring }}
        className="glass-card p-6 interactive group relative overflow-hidden transition-all hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)] border border-white/5 hover:border-white/20"
      >
        {/* Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-2xl`}></div>
        
        {/* Orbiting Element */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-10 w-32 h-32 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 flex items-start justify-center transition-opacity duration-500 pointer-events-none"
        >
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} blur-[1px] mt-[-1px]`}></div>
        </motion.div>

        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl border border-white/10 group-hover:scale-110 transition-transform shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
            {skill.icon}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-bold text-gray-200 tracking-wide">{skill.name}</h3>
              <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
            </div>
            {/* Progress Bar Container */}
            <div className="w-full h-1.5 bg-gray-800/80 rounded-full overflow-hidden border border-gray-700/50">
              {/* Animated Fill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 + 0.3 }}
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
              >
                {/* Inner glowing tip */}
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </RevealOnScroll>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-32 flex items-center justify-center relative z-10 px-6">
      <div className="max-w-7xl w-full mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent inline-block text-glow">
              Technical Arsenal
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <MagneticCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
