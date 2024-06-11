import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="yellow"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#ffff99"
        />
      </div>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.03] dark:bg-black dark:bg-grid-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-xs uppercase tracking-widest text-yellow-200">
            Elo kurwa
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="mb-8 text-center text-sm text-yellow-100 md:text-lg md:tracking-wider lg:text-2xl">
            Hi! I&apos;m Bartłomiej, a Next.js Developer based in Poland.
          </p>
          <MagicButton
            title="Przycisk"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
