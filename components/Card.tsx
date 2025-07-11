"use client";

import React from "react";
import { motion } from "motion/react";

const Card: React.FC<{
  style: React.CSSProperties;
  image: string;
  containerRef: React.RefObject<null>;
}> = ({ style, image, containerRef }) => {
  return (
    <motion.img
      src={image}
      alt="card"
      className="absolute cursor-grab w-15"
      style={style}
      whileHover={{
        scale: 1.05,
      }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  );
};

export default Card;
