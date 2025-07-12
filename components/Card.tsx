"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Card: React.FC<{
  style: React.CSSProperties;
  image: string;
  containerRef: React.RefObject<null>;
}> = ({ style, image, containerRef }) => {
  return (
    <motion.div
      className="p-3 bg-white/10 backdrop-blur-lg border border-white/35 absolute cursor-grab shadow-md rounded-full"
      style={style}
      whileHover={{
        scale: 1.05,
      }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      <Image
        src={image}
        alt="card"
        className="object-cover pointer-events-none rounded-md p-0.5"
        width={38}
        height={38}
      />
    </motion.div>
  );
};

export default Card;
