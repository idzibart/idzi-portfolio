"use client";
import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradient";

const ExperiencePath = () => {
  return (
    <div className="flex flex-col justify-center gap-12 pb-48">
      {/* EXPERIENCE TITLE */}
      <h1 className="heading">
        My <span className="text-yellow-200">work experience</span>
      </h1>
      {/* EXPERIENCE LIST */}
      <div>
        {/* EXPERIENCE LIST ITEM */}

        <div className="flex h-48 justify-between">
          <div className="w-2/5">
            {/* LEFT */}
            <BackgroundGradient className="rounded-[22px] bg-white p-4 sm:p-1 dark:bg-zinc-900">
              {/* JOB TITLE */}
              <div className="rounded-b-lg rounded-s-lg p-3 font-semibold">
                Senior JavaScript Engineer
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">
                I led web development, offering expertise in JavaScript
                frameworks.{" "}
              </div>
              {/* JOB DATE */}
              <div className="p-3 text-sm font-semibold text-yellow-400">
                2024 - Present
              </div>
              {/* JOB COMPANY */}
              <div className="w-fit rounded  p-1 text-sm font-semibold">
                Apple
              </div>
            </BackgroundGradient>
          </div>
          {/* CENTER */}
          <div className="flex w-1/6 justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-gray-600">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-gray-600 ring-4 ring-yellow-400"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-2/5 "></div>
        </div>

        {/* EXPERIENCE LIST ITEM */}
        <div className="flex h-48 justify-between">
          {/* LEFT */}
          <div className="w-2/5 "></div>
          {/* CENTER */}
          <div className="flex w-1/6 justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-gray-600">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-gray-600 ring-4 ring-yellow-400"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-2/5 ">
            <BackgroundGradient className="rounded-[22px] bg-white p-4 sm:p-1 dark:bg-zinc-900">
              {/* JOB TITLE */}
              <div className="rounded-b-lg rounded-s-lg  p-3 font-semibold">
                Senior React Developer
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">
                I spearheaded React-based application development, leveraging
                advanced skills.{" "}
              </div>
              {/* JOB DATE */}
              <div className="p-3 text-sm font-semibold text-yellow-400">
                2019 - 2024{" "}
              </div>
              {/* JOB COMPANY */}
              <div className="w-fit rounded  p-1 text-sm font-semibold">
                Microsoft
              </div>
            </BackgroundGradient>
          </div>
        </div>
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex h-48 justify-between">
          {/* LEFT */}
          <div className="w-2/5 ">
            <BackgroundGradient className="rounded-[22px] bg-white p-4 sm:p-1 dark:bg-zinc-900">
              {/* JOB TITLE */}
              <div className="rounded-b-lg rounded-s-lg p-3 font-semibold">
                Freelancer{" "}
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">
                I provided web solutions, applying a range of technologies to
                address client requirements.{" "}
              </div>
              {/* JOB DATE */}
              <div className="p-3 text-sm font-semibold text-yellow-400">
                2010 - 2019{" "}
              </div>
            </BackgroundGradient>
          </div>
          {/* CENTER */}
          <div className="flex w-1/6 justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-gray-600">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-gray-600 ring-4 ring-yellow-400"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-2/5 "></div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePath;
