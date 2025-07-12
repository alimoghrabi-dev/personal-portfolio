"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#home" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="#projects" className="nav-link">
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-1.5">
          <Link
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Ali
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <Image
              src={open ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              width={24}
              height={24}
              priority
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {open && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          style={{
            maxHeight: "100vh",
          }}
          transition={{
            duration: 1,
          }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
