"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const ProjectDetails: React.FC<{
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  tags: { id: number; name: string; path: string }[];
  closeModal: () => void;
}> = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 z-50 rounded-md top-5 right-5 bg-midnight hover:bg-gray-500 transition-all cursor-pointer"
        >
          <Image src="assets/close.svg" alt="close" width={24} height={24} />
        </button>
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="w-full rounded-t-2xl"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <Image
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg hover-animation"
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <a
              href={href}
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
            >
              View Project
              <Image
                src="assets/arrow-up.svg"
                alt="arrow-up"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
