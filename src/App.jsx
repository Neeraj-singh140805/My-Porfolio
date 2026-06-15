// import { useState } from "react";
// import "./App.css";
// import "./index.css";

// import { LoadingScreen } from "./components/LoadingScreen";
// import { Navbar } from "./components/Navbar";
// import { MobileMenu } from "./components/MobileMenu";

// import { Home } from "./components/sections/Home";
// import { About } from "./components/sections/About";
// import { Projects } from "./components/sections/Projects";
// import { Skills } from "./components/sections/Skills";
// import { Experience } from "./components/sections/Experience";
// import { Contact } from "./components/sections/Contact";

// import { Canvas } from "@react-three/fiber";
// import { ThreeBackground } from "./components/ThreeBackground";

// import { CustomCursor } from "./components/CustomCursor";

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       {/* Custom Cursor */}
//       <CustomCursor />

//       {/* Loading Screen */}
//       {!isLoaded && (
//         <LoadingScreen onComplete={() => setIsLoaded(true)} />
//       )}

//       {/* FIXED GLOBAL 3D BACKGROUND */}
//       <div className="fixed inset-0 -z-10 pointer-events-none">
//         <Canvas
//           dpr={[1, 1.5]}
//           camera={{ position: [0, 5, 15], fov: 60 }}
//           gl={{
//             antialias: true,
//             alpha: true,
//             powerPreference: "high-performance",
//           }}
//           onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
//         >
//           <ThreeBackground />
//         </Canvas>
//       </div>

//       {/* Main Content */}
//       <div
//         className={`min-h-screen transition-opacity duration-1000 ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         } text-gray-100`}
//       >
//         {/* Navbar */}
//         <Navbar
//           menuOpen={menuOpen}
//           setMenuOpen={setMenuOpen}
//         />

//         {/* Mobile Menu */}
//         <MobileMenu
//           menuOpen={menuOpen}
//           setMenuOpen={setMenuOpen}
//         />

//         {/* Sections */}
//         <main className="relative z-10 w-full">
//           <Home />
//           <About />
//           <Skills />
//           <Experience />
//           <Projects />
//           <Contact />
//         </main>
//       </div>
//     </>
//   );
// }

// export default App;



import { useState } from "react";
import "./App.css";
import "./index.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";

import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { Certificates } from "./components/sections/Certificates";

import { Canvas } from "@react-three/fiber";
import { ThreeBackground } from "./components/ThreeBackground";

import { CustomCursor } from "./components/CustomCursor";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      {!isLoaded && (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      )}

      {/* FIXED GLOBAL 3D BACKGROUND */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 5, 15], fov: 60 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        >
          <ThreeBackground />
        </Canvas>
      </div>

      {/* Main Content */}
      <div
        style={{ position: "relative", zIndex: 1 }}
        className={`min-h-screen transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } text-gray-100`}
      >
        {/* Navbar */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Mobile Menu */}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Sections */}
        <main className="relative z-10 w-full">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;