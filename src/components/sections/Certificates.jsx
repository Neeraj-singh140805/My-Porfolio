import { RevealOnScroll } from "../RevealOnScroll";

const certificates = [
  {
    title: "Appnova — Cognizance 2026, IIT Roorkee",
    issuer: "IIT Roorkee",
    date: "14 March 2026",
    link: "https://ibb.co/DgS2j1gN"
  },
  {
    title: "AI Hackathon",
    issuer: "Newton School of Technology, Rishihood University",
    date: "30 April 2026",
    link: "https://ibb.co/DH9VXbmy"
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation on Forage",
    issuer: "Deloitte Australia",
    date: "14 June 2026",
    link: "https://ibb.co/KpHnYKVK"
  },
  {
    title: "Web Development",
    issuer: "Internshala Trainings",
    date: "May 2025",
    link: "https://ibb.co/MyBp0Hpy"
  },
  {
    title: "Programming with Python",
    issuer: "Internshala Trainings",
    date: "November 2024",
    link: "https://ibb.co/QSg0Lw0"
  }
];

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center py-32 relative z-10 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent inline-block text-glow">
              Certificates
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((c, i) => (
            <div key={i} className="glass-card p-6 rounded-xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
              <p className="text-gray-300 mb-4">{c.issuer} • {c.date}</p>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 py-2 px-4 rounded-lg"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
