"use client";

import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl font-normal text-center">
      {progress}% Loaded
    </Html>
  );
};

export default Loader;
