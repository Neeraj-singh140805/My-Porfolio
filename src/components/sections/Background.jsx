// src/components/sections/Background.jsx

import { Canvas } from "@react-three/fiber";
import { ThreeBackground } from "../ThreeBackground";

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 4, 16], fov: 60 }}
        gl={{
          alpha: true,
          antialias: true,
        }}
        dpr={[1, 2]}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <ThreeBackground />
      </Canvas>
    </div>
  );
};
