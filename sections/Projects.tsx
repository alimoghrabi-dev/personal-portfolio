"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import ProjectCard from "@/components/ProjectCard";
import { myProjects } from "@/constants";

const Projects: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
      {myProjects.map((project) => (
        <ProjectCard key={project.id} setPreview={setPreview} {...project} />
      ))}
      {preview && (
        <motion.img
          src={preview}
          alt="preview"
          className="fixed top-0 left-0 z-50 object-cover rounded-lg shadow-lg h-56 pointer-events-none w-80"
          style={{
            x: springX,
            y: springY,
          }}
        />
      )}
    </section>
  );
};

export default Projects;
