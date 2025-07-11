"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const CopyEmailButton: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const email = "amoghrabi168@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3500);
  };

  return (
    <motion.button
      type="button"
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <Image
              src="/assets/copy-done.svg"
              alt="copy done"
              width={20}
              height={20}
            />
            Email Copied!
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration: 0.1 }}
          >
            <Image src="/assets/copy.svg" alt="copy" width={20} height={20} />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
