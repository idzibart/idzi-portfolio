import React from "react";
import { Button } from "./MovingBorder";
import Link from "next/link";
const ExperienceCard = ({
  title,
  description,
  years,
  img,
  spareImg,
  link,
}: {
  title: string;
  description: string;
  years: string;
  img?: string;
  spareImg?: string;
  link: string;
}) => {
  return (
    <Button
      duration={Math.floor(Math.random() * 10000) + 20000}
      className="relative overflow-hidden rounded-3xl sm:p-1"
    >
      {/* JOB TITLE */}
      <h2 className="p-3 text-sm  font-semibold duration-200 hover:translate-x-2 md:text-lg">
        {title}
      </h2>
      {/* JOB DESC */}
      <p className="p-3 text-xs italic text-[#C1C2D3] duration-200 hover:translate-x-2 md:text-base">
        {description}
      </p>
      {/* JOB DATE */}
      <p className="p-3 text-[0.6rem] font-semibold text-blue-300 duration-200 hover:translate-x-2 md:text-sm">
        {years}
      </p>
      {/* JOB COMPANY */}
      <Link target="_blank" href={link}>
        <div className="w-1/2 p-3 duration-200 hover:translate-x-2 md:w-1/3">
          <img
            src={img}
            alt={img}
            className="cursor-pointer object-fill hover:fill-blue-700"
          />
        </div>
      </Link>
      <div>
        <img
          src={spareImg}
          alt={spareImg}
          className="absolute -right-20 bottom-0 w-full opacity-60 sm:-bottom-20 sm:-right-40"
        />
      </div>
    </Button>
  );
};

export default ExperienceCard;
