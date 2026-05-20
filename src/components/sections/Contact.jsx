// import { useState } from "react";
// import { RevealOnScroll } from "../RevealOnScroll";
// import { TiltCard } from "../TiltCard";
// import emailjs from "@emailjs/browser";
// import { Send, Sparkles } from "lucide-react";

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const SERVICE_ID = "service_74u249c";
//     const TEMPLATE_ID = "template_p7vl72q";
//     const PUBLIC_KEY = "b8LTazb5I0EmkKdrG";

//     emailjs
//       .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
//       .then(() => {
//         alert("Message Sent!");
//         setFormData({ name: "", email: "", message: "" });
//         setIsSubmitting(false);
//       })
//       .catch((error) => {
//         console.error("EmailJS Error:", error);
//         alert("Oops! Something went wrong. Check console for details.");
//         setIsSubmitting(false);
//       });
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen flex items-center justify-center py-32 relative z-10 px-6"
//     >
//       <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
//         <RevealOnScroll>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent inline-block text-glow flex items-center justify-center gap-4">
//               Let's Connect <Sparkles className="text-cyan-400" size={36} />
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
//           </div>
//         </RevealOnScroll>

//         <RevealOnScroll>
//           <TiltCard className="w-full max-w-2xl mx-auto">
//             <div className="glass-card rounded-[2rem] p-8 md:p-14 relative overflow-hidden group border-blue-500/30">
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"></div>
              
//               {/* Animated Background Glows */}
//               <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
//               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
              
//               <p className="text-gray-300 text-center mb-10 font-light text-base md:text-lg">
//                 Have a project in mind, a question, or just want to say hi? I'd love to hear from you. Drop a message below!
//               </p>

//               <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
//                 <div className="relative group/input">
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     placeholder="Your Name"
//                     className="interactive w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] placeholder-gray-500 backdrop-blur-md"
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="relative group/input">
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     placeholder="Your Email Address"
//                     className="interactive w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] placeholder-gray-500 backdrop-blur-md"
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="relative group/input">
//                   <textarea
//                     name="message"
//                     required
//                     rows={5}
//                     value={formData.message}
//                     placeholder="Your Message..."
//                     className="interactive w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] placeholder-gray-500 resize-none backdrop-blur-md"
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="interactive w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                   {!isSubmitting && <Send size={20} />}
//                 </button>
//               </form>
//             </div>
//           </TiltCard>
//         </RevealOnScroll>
//       </div>
//     </section>
//   );
// };


import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { TiltCard } from "../TiltCard";
import emailjs from "@emailjs/browser";
import { Send, Sparkles } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Browser validation
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    setIsSubmitting(true);

    const SERVICE_ID = "service_74u249c";
    const TEMPLATE_ID = "template_p7vl72q";
    const PUBLIC_KEY = "b8LTazb5I0EmkKdrG";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-32 relative z-10 px-6"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent inline-flex items-center justify-center gap-4">
              Let's Connect
              <Sparkles className="text-cyan-400" size={36} />
            </h2>

            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
          </div>
        </RevealOnScroll>

        {/* Contact Card */}
        <RevealOnScroll>
          <TiltCard className="w-full max-w-2xl mx-auto">
            <div className="glass-card rounded-[2rem] p-8 md:p-14 relative overflow-hidden group border border-blue-500/30">
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 pointer-events-none"></div>

              {/* Decorative Glows */}
              <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -z-10 group-hover:scale-125 transition-transform duration-700"></div>

              <div className="pointer-events-none absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] -z-10 group-hover:scale-125 transition-transform duration-700"></div>

              {/* Description */}
              <p className="text-gray-300 text-center mb-10 font-light text-base md:text-lg relative z-50">
                Have a project in mind, a question, or just want to say hi?
                I'd love to hear from you. Drop a message below!
              </p>

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 relative z-50 pointer-events-auto"
                noValidate={false}
              >
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    value={formData.name}
                    placeholder="Your Name"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="interactive w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] placeholder-gray-500 backdrop-blur-md"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    placeholder="Your Email Address"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="interactive w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] placeholder-gray-500 backdrop-blur-md"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    placeholder="Your Message..."
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="interactive w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] placeholder-gray-500 resize-none backdrop-blur-md"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive relative z-50 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={20} />}
                </button>
              </form>
            </div>
          </TiltCard>
        </RevealOnScroll>
      </div>
    </section>
  );
};