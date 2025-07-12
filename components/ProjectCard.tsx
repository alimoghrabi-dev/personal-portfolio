"use client";

import React, { Fragment, useState } from "react";
import ProjectDetails from "./ProjectDetails";
import Image from "next/image";

const ProjectCard: React.FC<{
  setPreview: React.Dispatch<React.SetStateAction<string | null>>;
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  tags: { id: number; name: string; path: string }[];
}> = ({
  setPreview,
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <div
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <Image
            src="/assets/arrow-right.svg"
            alt="arrow right"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      {open && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          image={image}
          tags={tags}
          closeModal={() => setOpen(false)}
        />
      )}
    </Fragment>
  );
};

export default ProjectCard;
