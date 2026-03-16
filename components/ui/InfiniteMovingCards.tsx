/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { blockquote } from "motion/react-client";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-87.5 md:w-112.5 max-w-full shrink-0 rounded-2xl border border-zinc-800 bg-[linear-gradient(180deg,rgba(4,7,29,1) 0%,rgba(12,14,35,1) 100%)] overflow-hidden shadow-xl"
            key={idx}
          >
            {/* 1. Image at the Top */}
            <div className="w-full h-48 md:h-60 overflow-hidden border-b border-zinc-800">
              <img
                src={item.img || "/profile.svg"}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* 2. Content below the image */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white tracking-wide">
                  {item.name}
                </span>
                <span className="text-sm font-medium text-purple-300">
                  {item.title}
                </span>
              </div>

              <blockquote className="text-sm leading-[1.6] font-normal text-neutral-300 italic">
                {item.quote}
              </blockquote>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};