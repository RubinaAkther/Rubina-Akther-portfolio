import { FaArrowRight } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import { div } from "motion/react-client";

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <footer className="w-full pb-10 " id="contact">
      
      <div className="flex flex-col items-center">
        <h1 className=" lg:max-w-[45vw] heading text-4xl font-bold text-center pb-15">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 mb-13 md:mb-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:rubinaakther3454@gmail.com" target="_blank">
          <MagicButton title="Let's get in touch" icon= {<FaArrowRight/>} position="right"/>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light ">Copyright &copy; 2026 Rubina Akther </p>
        <div className="flex items-center md:gap-3 gap-6 mt-10">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img src={profile.img} alt={profile.img}  width={20} height={20}/>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
