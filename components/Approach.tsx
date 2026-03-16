/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CanvasRevealEffect } from './ui/CanvasRevealEffect';
import { cn } from "@/lib/utils"; // ঠিকভাবে ইম্পোর্ট করুন

const Approach = () => {
  return (
    <section className="w-full pt-20">
      <div className="heading text-4xl font-bold text-center ">
        My <span className="text-purple-300"> Approach</span>
      </div>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          description="We'll collaborate to map out your website's goals, target audience, and key functionalities."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          description="Once we agree on the plan, I cue my lofi playlist and dive into coding."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          description="This is where the magic happens! I'll translate everything into functional code."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
      className="border border-black/20 group/canvas-card flex items-center justify-center dark:border-white/20 max-w-sm w-full mx-auto p-4 relative h-70 lg:h-140 overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className={cn(
            'text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-200 w-full mx-auto flex items-center justify-center',
            hovered ? 'opacity-0 -translate-y-4' : 'opacity-100',
          )}
        >
          {icon}
        </div>

        <h2
          className={cn(
            'dark:text-white text-2xl relative z-10 text-black mt-4 font-bold transition duration-200 text-center',
            hovered ? 'opacity-100 -translate-y-2 text-white' : 'opacity-0',
          )}
        >
          {title}
        </h2>

        <h2
          className={cn(
            'text-sm dark:text-white relative z-10 text-black mt-4 transition duration-200 font-medium text-center',
            hovered ? 'opacity-100 -translate-y-2 text-white' : 'opacity-0',
          )}
          style={{ color: '#e4ecff' }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

// AceternityIcon এবং Icon কোড আগের মতোই থাকবে...

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-px  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-xl font-medium text-white backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
