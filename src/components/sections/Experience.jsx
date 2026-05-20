import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024-2028 - Present",
    role: "B.Tech in Computer Science Engineering",
    company: "Newton School of Technology, Rishihood University",
    description: "Pursuing Bachelor of Technology in Computer Science with strong focus on Data Structures, Algorithms, Artificial Intelligence, Machine Learning, and Full Stack Web Development.",
  },
  {
    // year: "2022 - 2023",
    role: "Frontend & Full Stack Development Journey",
    company: "Self-Learning & Academic Projects",
    description: "Mastered React.js, Next.js, Tailwind CSS, Context API, Node.js, Express.js, MongoDB, and JWT Authentication by building real-world applications.",
  },
  {
    // year: "2021 - 2022",
    role: "AI, Data Analytics & Innovative Projects",
    company: "Machine Learning, Tableau & Real-World Applications",
    description: "Designing intelligent and data-driven solutions using Python, Machine Learning, Exploratory Data Analysis, and Tableau dashboards. Built impactful projects including AI applications, interactive visualizations, music players, task management systems, and full-stack web solutions.",
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 flex items-center justify-center relative z-10 px-6">
      <div className="max-w-4xl w-full mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-glow inline-block mb-4">
              Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
          </div>
        </RevealOnScroll>

        <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-10">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={index}>
              <div className="mb-12 ml-8 md:ml-12 relative group interactive">
                {/* Timeline Dot */}
                <span className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-indigo-900 border-4 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] group-hover:scale-125 group-hover:bg-cyan-400 group-hover:border-white transition-all duration-300"></span>
                
                {/* Content Card */}
                <div className="glass-card p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white tracking-wide">{exp.role}</h3>
                    <span className="text-cyan-400 font-mono text-sm md:text-base px-3 py-1 bg-cyan-900/30 rounded-full border border-cyan-500/30 mt-2 md:mt-0 inline-block w-fit">
                      {exp.year}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-indigo-300 mb-4 font-semibold">{exp.company}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
