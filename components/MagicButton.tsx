import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    // Button code
    <button
      className="duration-400 inline-flex transform items-center justify-center gap-2 rounded-lg border border-white bg-transparent px-6 py-2 font-bold text-white shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1"
      onClick={handleClick}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
