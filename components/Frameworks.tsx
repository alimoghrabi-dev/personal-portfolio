import React from "react";
import { OrbitingCircles } from "./OrbetCircles";
import Image from "next/image";

export const Frameworks: React.FC = () => {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill: string, index: number) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill: string, index: number) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
};

const Icon = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="icon"
      className="duration-200 rounded-sm hover:scale-110"
      width={40}
      height={40}
    />
  );
};
