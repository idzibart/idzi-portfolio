'use client'
import { workExperience } from "@/data";
import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradient";

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20">
      <h1 className="heading">
        My <span className="text-yellow-200">work experience</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((card) => (
          <BackgroundGradient
            key={card.id}
            className="max-w-sm rounded-[22px] bg-white p-4 sm:p-10 dark:bg-zinc-900"
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {card.title}
                </h1>
                <p className="text-white-100 mt-3 text-start font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
};

export default Experience;
