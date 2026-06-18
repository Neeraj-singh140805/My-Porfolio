import { RevealOnScroll } from "../RevealOnScroll";
import { TiltCard } from "../TiltCard";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import futureWorkImg from "/Users/neerajsingh/Desktop/all folder/portfolio/my-portfolio/src/assets/future_work.png";
import netflixImg from "/Users/neerajsingh/Desktop/all folder/portfolio/my-portfolio/src/assets/netflix.png";
import zomatoImg from "/Users/neerajsingh/Desktop/all folder/portfolio/my-portfolio/src/assets/zomato.png";
import musicPlayerImg from "/Users/neerajsingh/Desktop/all folder/portfolio/my-portfolio/src/assets/harmonix.png";
import fitnessAppImg from "/Users/neerajsingh/Desktop/all folder/portfolio/my-portfolio/src/assets/wellora.png";
import exoplanetImg from "/Users/neerajsingh/Desktop/all folder/portfolio/my-portfolio/src/assets/exoplanet.png";

const projects = [
  {
    title: "Harmonix - Music Player",
    description: "A dynamic music player application with features like play/pause, next/previous track, progress bar, playlist management, and favourites/liked songs. Integrated Firebase for user authentication and secure data handling.",
    tech: ["React", "Context API", "Tailwind CSS", "Firebase"],
    link: "https://harmonix-psi.vercel.app/",
    image: musicPlayerImg,
    color: "blue"
  },
  {
    title: "Wellora - Fitness App",
    description: "Engineered a full-stack fitness application to help users track workouts, build healthy habits, and maintain consistency. Developed a responsive, intuitive UI using React and implemented robust backend services.",
    tech: ["React", "Tailwind", "Express", "MongoDB", "Node.js"],
    link: "https://wellora-pi.vercel.app/",
    image: fitnessAppImg,
    color: "cyan"
  },
  // {
  //   title: "Calculator App",
  //   description: "Developed a calculator application supporting basic arithmetic operations (addition, subtraction, multiplication, division). Implemented features like clear, backspace, decimal input, and keyboard support for better usability.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   link: "https://calculator-tawny-alpha-20.vercel.app/",
  //   color: "indigo"
  // },
  // {
  //   title: "Crafting Timeless Designs",
  //   description: "Built and deployed a responsive portfolio website to showcase diverse creative projects. Designed a clean and minimal user interface with smooth navigation to enhance user experience. Optimized performance.",
  //   tech: ["HTML", "CSS", "React"],
  //   link: "https://craftless-time-designs.vercel.app/",
  //   color: "purple"
  // },
  {
    title:"Future of Work 2030: AI, Jobs, Salaries & Skills Analytics Dashboard",
    description:"Designed a multi-dashboard Tableau project analyzing the impact of AI adoption on industries, job growth, automation risk, salary trends, and future workforce skills. Conducted data-driven research to identify high-growth sectors, automation-vulnerable industries, highest-paying skills, and workforce recommendations through interactive visualizations and KPI-driven insights.",
    tech: ["Tableau", "Excel", "Data Analysis", "Data Visualization", "Dashboard Design", "Calculated Fields", "KPI Analytics"],
    link: "https://public.tableau.com/app/profile/neeraj.singh1868/viz/TheFutureofWork2030AIJobsSalariesSkills/Dashboard?publish=yes",
    image: futureWorkImg,
    color: "blue"

  },
  {
    title: "Netflix Content Distribution Analytics",
    description: "Analyzed 8,778 titles to identify content distribution patterns (69.6% movies, 30.4% TV shows) across genre,rating, and temporal dimensions. Conducted temporal trend analysis revealing rapid content growth post-2015, with 2018 as the peak release year — informing content strategy insights",
    tech: ["Tableau", "Excel"],
    link: "https://public.tableau.com/app/profile/neeraj.singh1868/viz/Netflix_17779544198340/Dashboard?publish=yes",
    image: netflixImg,
    color: "green"
  },
  {
    title: "Zomato Delivery & Business Analytics Dashboard",
    description: "Analyzed 45K+ delivery records to uncover operational and business trends, built interactive Tableau dashboards with dynamic filters (city, weather, traffic, order type), tracked key KPIs including total orders, average delivery time (~26 minutes), and customer rating (4.63), identified that over 77% of demand comes from metro cities with clear peak ordering patterns, examined the impact of traffic and weather on delays (rising to ~31 minutes in high congestion), highlighted inefficiencies such as multi-order deliveries increasing time (~47 minutes), and designed a clean, navigable UI covering business, delivery, and partner insights.",
    tech: ["Tableau", "Excel"],
    link: "https://public.tableau.com/app/profile/neeraj.singh1868/viz/Capstone2Dashboard_17769517459070/Dashboard4?publish=yes",
    image: zomatoImg,
    color: "blue"
  },
    {
    title: "Exoplanet Discovery Analysis & Observational Bias Study",
    description: "Analyzed 5,000+ NASA Exoplanet Archive records across seven detection methods, identifying observational bias (including hot-Jupiter overrepresentation in radial velocity data) and confirming that the Transit method has driven 70%+ of discoveries since 2009, consistent with Kepler Mission benchmarks. Cleaned and standardized large-scale astronomical data by handling missing values and unit inconsistencies, and built an interactive Looker Studio dashboard to visualize discovery trends, mission timelines, and planetary characteristics.",
    tech: ["Tableau", "Excel"],
    link: "https://github.com/Neeraj-singh140805/SectionC_Group09_ExoPlanets",
    image: exoplanetImg,
    color: "green"
  }
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-32 relative z-10 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent inline-block text-glow">
              Featured Works
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const colorMap = {
              blue: "from-blue-500 to-blue-600 shadow-blue-500/20 hover:shadow-blue-500/40 border-blue-500/30",
              cyan: "from-cyan-500 to-cyan-600 shadow-cyan-500/20 hover:shadow-cyan-500/40 border-cyan-500/30",
              indigo: "from-indigo-500 to-indigo-600 shadow-indigo-500/20 hover:shadow-indigo-500/40 border-indigo-500/30",
              purple: "from-purple-500 to-purple-600 shadow-purple-500/20 hover:shadow-purple-500/40 border-purple-500/30",
              green: "from-emerald-500 to-emerald-600 shadow-emerald-500/20 hover:shadow-emerald-500/40 border-emerald-500/30",
            };

            const textMap = {
              blue: "text-blue-300",
              cyan: "text-cyan-300",
              indigo: "text-indigo-300",
              purple: "text-purple-300",
              green: "text-emerald-300",
            };

            const glowMap = {
              blue: "bg-blue-500/20",
              cyan: "bg-cyan-500/20",
              indigo: "bg-indigo-500/20",
              purple: "bg-purple-500/20",
              green: "bg-emerald-500/20",
            };

            return (
              <RevealOnScroll key={index}>
                <TiltCard className="h-full interactive">
                  <div className={`glass-card h-full p-8 relative overflow-hidden group transition-all duration-500 border ${colorMap[project.color].split(' ')[2]} hover:border-white/20 hover:-translate-y-2`}>
                    {/* Glowing Backdrop */}
                    <div className={`absolute -top-24 -right-24 w-64 h-64 ${glowMap[project.color]} rounded-full blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-700`}></div>
                    <div className={`absolute -bottom-24 -left-24 w-64 h-64 ${glowMap[project.color]} rounded-full blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-700`}></div>
                    
                    <div className="flex justify-between items-start mb-6">
                      {/* <h3 className={`text-3xl font-bold text-white group-hover:${textMap[project.color]} transition-colors duration-300`}>
                        {project.title}
                      </h3> */}
                      <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>
                    
                    <p className="text-gray-300 mb-8 font-light leading-relaxed text-lg flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`bg-white/5 border border-white/10 ${textMap[project.color]} py-1.5 px-4 rounded-full text-sm font-medium backdrop-blur-sm group-hover:border-white/20 transition-colors`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center w-full gap-2 text-white bg-gradient-to-r ${colorMap[project.color].split(' ').slice(0, 2).join(' ')} py-3 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                        Launch Project
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};