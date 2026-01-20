import { cn } from '@/lib/utils';
import { FaArrowRight } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

export default function Hero() {
  return (
    <div>
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
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[#000319] ">
        <div
          className={cn(
            'absolute inset-0',
            'bg-size-[100px_100px]',
            'bg-[linear-gradient(to_right,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_1px,transparent_1px)]',
            'dark:bg-[linear-gradient(to_right,rgba(38,38,38,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.3)_1px,transparent_1px)]'
          )}
        />

        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Creating Modern Web Apps with MERN & DevOps
          </h1>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5pxl lg:text-6xl "
            words={'From Code to Cloud – I Make it Happen '}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Rubina, Your Next Full-Stack Engineer
          </p>
          <a href="#about">
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
