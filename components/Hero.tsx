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
          fill="#5067FF"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#4124FF"
        />
      </div>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-black bg-grid-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-200">
            Hello!
          </p>
          <TextGenerateEffect
            words="This is my simple modern portfolio website"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="mb-8 text-center text-sm text-blue-200 md:text-lg md:tracking-wider lg:text-2xl">
            Hi! I&apos;m Bartłomiej, a Technical Support Engineer based in
            Poland.
          </p>
          <a href="#about">
            <MagicButton
              title="Check"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
