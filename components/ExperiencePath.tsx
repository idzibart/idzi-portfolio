"use client";
import React from "react";
import ExperienceCard from "./ui/ExperienceCard";
import { workExp } from "@/data";

const ExperiencePath = () => {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center gap-16 py-32"
    >
      {/* EXPERIENCE TITLE */}
      <h1 className="heading">
        My <span className="text-blue-500">work experience</span>
      </h1>
      {/* EXPERIENCE LIST */}
      <div>
        {/* EXPERIENCE LIST ITEM */}

        <div className="flex h-48 justify-between">
          <div className="w-5/12 md:w-2/5">
            {/* LEFT */}
            <ExperienceCard
              title={workExp[0].role}
              description={workExp[0].description}
              years={workExp[0].years}
              img={workExp[0].img}
              spareImg={workExp[0].spareImg}
              link={workExp[0].link}
            />
          </div>
          {/* CENTER */}
          <div className="flex justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-blue-50">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-blue-500 ring-4 ring-blue-500"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-5/12 md:w-2/5 "></div>
        </div>

        {/* EXPERIENCE LIST ITEM */}
        <div className="flex h-48 justify-between">
          {/* LEFT */}
          <div className="w-5/12 md:w-2/5"></div>
          {/* CENTER */}
          <div className="flex justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-blue-50">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-blue-500 ring-4 ring-blue-500"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-5/12 md:w-2/5">
            <ExperienceCard
              title={workExp[1].role}
              description={workExp[1].description}
              years={workExp[1].years}
              img={workExp[1].img}
              spareImg={workExp[1].spareImg}
              link={workExp[1].link}
            />
          </div>
        </div>
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex h-48 justify-between">
          {/* LEFT */}
          <div className="w-5/12 md:w-2/5">
            <ExperienceCard
              title={workExp[2].role}
              description={workExp[2].description}
              years={workExp[2].years}
              img={workExp[2].img}
              spareImg={workExp[2].spareImg}
              link={workExp[2].link}
            />
          </div>
          {/* CENTER */}
          <div className="flex justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-blue-50">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-blue-500 ring-4 ring-blue-500"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-5/12 md:w-2/5"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePath;
