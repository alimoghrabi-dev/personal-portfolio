import React from "react";
import { mySocials } from "../constants";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-5 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <Image src={social.icon} alt={social.name} width={20} height={20} />
          </a>
        ))}
      </div>
      <p>© 2025 Ali. All rights reserved.</p>
    </section>
  );
};

export default Footer;
