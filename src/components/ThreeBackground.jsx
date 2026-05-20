import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

/**
 * Professional 3D Portfolio Background
 * - Animated wireframe grid
 * - Floating glowing particles
 * - Minimal rotating geometric shapes
 * - Smooth mouse-follow camera
 * - Premium blue/purple color palette
 */

const AnimatedGrid = () => {
  const meshRef = useRef();
  const originalPositions = useRef();

  useEffect(() => {
    if (!meshRef.current) return;

    const geometry = meshRef.current.geometry;
    const positions = geometry.attributes.position.array;

    // Save original positions
    originalPositions.current = new Float32Array(positions);
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current || !originalPositions.current) return;

    const t = clock.getElapsedTime() * 0.6;

    const geometry = meshRef.current.geometry;
    const positionAttribute = geometry.attributes.position;
    const positions = positionAttribute.array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions.current[i];
      const y = originalPositions.current[i + 1];

      // Gentle wave motion
      positions[i + 2] =
        Math.sin(x * 0.12 + t) * 0.4 +
        Math.cos(y * 0.12 + t * 0.8) * 0.4;
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2.2, 0, 0]}
      position={[0, -6, -10]}
    >
      <planeGeometry args={[120, 120, 120, 120]} />

      <meshBasicMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
};

const FloatingParticles = () => {
  const pointsRef = useRef();
  const count = 1800;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 100;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 50;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    const t = clock.getElapsedTime();

    pointsRef.current.rotation.y = t * 0.015;
    pointsRef.current.rotation.x = Math.sin(t * 0.1) * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.09}
        color="#60a5fa"
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const FloatingShapes = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.getElapsedTime();

    groupRef.current.rotation.y = t * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Left Ring */}
      <mesh position={[-12, 6, -18]}>
        <torusGeometry args={[2.5, 0.08, 16, 100]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Right Ring */}
      <mesh position={[12, -2, -20]}>
        <torusGeometry args={[3, 0.08, 16, 100]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Top Sphere */}
      <mesh position={[0, 10, -25]}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
};

const MouseCamera = () => {
  const { camera } = useThree();

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    const targetX = mouse.current.x * 1.2;
    const targetY = mouse.current.y * 0.6;

    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (2 + targetY - camera.position.y) * 0.02;
    camera.position.z += (18 - camera.position.z) * 0.02;

    camera.lookAt(0, 0, -8);
  });

  return null;
};

export const ThreeBackground = () => {
  return (
    <>
      {/* Optional background and fog */}
      {/* <color attach="background" args={["#020617"]} /> */}
      {/* <fog attach="fog" args={["#020617", 20, 100]} /> */}

      {/* Camera */}
      <MouseCamera />

      {/* Lighting */}
      <ambientLight intensity={0.7} />

      <directionalLight
        position={[10, 10, 10]}
        intensity={1.5}
        color="#60a5fa"
      />

      <directionalLight
        position={[-10, 5, -10]}
        intensity={1.0}
        color="#8b5cf6"
      />

      {/* 3D Elements */}
      <AnimatedGrid />
      <FloatingParticles />
      <FloatingShapes />

      {/* HDR Environment */}
      <Environment preset="night" background={false} />
    </>
  );
};




