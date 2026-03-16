import { cn } from '@/lib/utils';
import { FaArrowRight } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

export default function Hero() {
  return (
    <div className="">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-[#000319]">
        {/* Grid Layer */}
        <div
          className={cn(
            'absolute inset-0',
            'bg-[linear-gradient(to_right,rgba(228,228,231,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.1)_1px,transparent_1px)]',
            'bg-size-[80px_80px]', // Adjusted for a cleaner grid look
          )}
        />

        {/* Radial Mask Layer - Changed bg-white to bg-[#000319] to keep it dark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#000319] mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Building Scalable & Modern Web Applications with the MERN Stack
          </h1>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5pxl lg:text-[50px] my-5 "
            words={'Turning Ideas into Powerful MERN Applications'}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Rubina, Your Next MERN Stack Developer.
          </p>
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaArrowRight />}
              position={'right'}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
