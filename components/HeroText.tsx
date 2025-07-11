"use client";

import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText: React.FC = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >{`Hi I'm Ali`}</motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-medium text-neutral-300"
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-300"
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >{`Hi I'm Ali`}</motion.p>
        <div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-black text-neutral-300"
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-black text-neutral-300"
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
