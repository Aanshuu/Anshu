"use client";

import React, { useState, useEffect } from "react";

export interface CarouselItemProps {
  index: number;
  activeIndex: number;
  children?: React.ReactNode;
}

export default function CarouselItem({
  index,
  activeIndex,
  children,
}: CarouselItemProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProperties = isMobile
    ? `
    rotateY(calc(${offset} * 30deg))
      scaleY(calc(1 + ${absOffset} * -0.3))
      translateX(calc(${direction} * -1.5rem))
      translateZ(calc(${absOffset} * -10rem))
  `
    : `
  rotateY(calc(${offset} * 55deg))
      scaleY(calc(1 + ${absOffset} * -0.5))
      translateX(calc(${direction} * -3.5rem))
      translateZ(calc(${absOffset} * -35rem))
  `;

  const cssOpacity = `${Math.abs(index - activeIndex) >= 2 ? "0" : "1"}`;
  const cssDisplay = `${Math.abs(index - activeIndex) >= 3 ? "none" : "block"}`;

  // const cssDisplay = 'block'; // Temporary for debugging purposes

  return (
    <div
      className="absolute h-full w-full cursor-pointer overflow-hidden rounded-3xl drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-700 ease-in-out dark:shadow-dark-lg"
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
        display: cssDisplay,
        zIndex: `${activeIndex === index ? 100 : 1}`,
      }}
    >
      {children}
    </div>
  );
}
