"use client";

import { Canvas } from "@react-three/fiber";

const Scene = () => {
  console.log("Global ThreeBackground Scene is rendering");

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[20, 20, 20]} intensity={0.3} color="#FFE241" />
      <pointLight position={[-20, -20, 15]} intensity={0.3} color="#FFE241" />
    </>
  );
};

export const ThreeBackground = () => {
  console.log("Global ThreeBackground component is mounting");

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
