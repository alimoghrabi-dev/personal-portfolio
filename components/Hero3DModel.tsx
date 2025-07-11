"use client";

import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "./Astronaut";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import Loader from "./Loader";

const Hero3DModel: React.FC = () => {
  const isMobile = useMediaQuery({
    maxWidth: 853,
  });

  return (
    <figure
      className="absolute inset-0"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas
        camera={{
          position: [0, 1, 3],
        }}
      >
        <Suspense fallback={<Loader />}>
          <Float>
            <Astronaut
              scale={isMobile ? 0.2 : 0.265}
              position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
            />
          </Float>
          <Rig />
        </Suspense>
      </Canvas>
    </figure>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.pointer.x / 10, 1 + state.pointer.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero3DModel;
