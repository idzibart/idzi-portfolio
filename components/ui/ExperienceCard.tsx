import React from "react";
const ExperienceCard = ({
  title,
  description,
  years,
  img,
  spareImg,
}: {
  id?: number;
  title: string;
  description: string;
  years: string;
  img?: string;
  spareImg?: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/[0.1] bg-white transition duration-300 hover:scale-110 sm:p-1 dark:bg-[#010205]">
      {/* JOB TITLE */}
      <div className="rounded-b-lg rounded-s-lg  p-3 font-semibold">
        {title}
      </div>
      {/* JOB DESC */}
      <div className="p-3 text-sm italic">{description}</div>
      {/* JOB DATE */}
      <div className="p-3 text-sm font-semibold text-blue-300">{years}</div>
      {/* JOB COMPANY */}
      <div className="w-2/5 p-3 md:w-1/3">
        <img src={img} alt={img} className="cursor-pointer object-fill" />
      </div>
      <div>
        <img
          src={spareImg}
          alt={spareImg}
          className="absolute -right-20 bottom-0 w-full opacity-80 sm:-bottom-20 sm:-right-40"
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
