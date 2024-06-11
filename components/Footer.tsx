import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20 overflow-hidden" id="contact">
      {/* background grid */}
      <div className="absolute bottom-0 left-0 w-screen h-full overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="absolute -bottom-72 left-0 w-full h-auto opacity-50"
        />
      </div>

      <div className="relative flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-yellow-200">your</span> digital
          presence to the <span className="text-yellow-200">next level?</span>
        </h1>
        <p className="text-white-200 my-5 text-center md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:idzi.bart@gmail.com" target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="relative mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Bartłomiej Idzi
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="saturate-180 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg backdrop-filter"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
