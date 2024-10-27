import React, { useState, useRef } from "react";
import CarouselItem from "./CarouselItem";

export interface CarouselProps {
  items: React.ReactNode[];
}

export default function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const startX = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  function handleNextItem() {
    setActiveIndex((prev) => (prev + 1 < items.length ? prev + 1 : 0));
  }

  function handlePrevItem() {
    setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : items.length - 1));
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    startX.current = event.clientX;
    setIsDragging(true);
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    if (!isDragging) return;

    const endX = event.clientX;
    if (startX.current !== null && Math.abs(startX.current - endX) > 50) {
      if (endX < startX.current) {
        handleNextItem();
      } else {
        handlePrevItem();
      }
    }
    setIsDragging(false);
    startX.current = null;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    startX.current = null;
  };

  const handleClick = (event: React.MouseEvent) => {
    if (isDragging) return;

    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect(); // Get bounding box of the div
      const clickX = event.clientX - rect.left; // Calculate click relative to div’s left edge
      const width = rect.width / 2;

      if (clickX < width) {
        handleNextItem();
      } else {
        handlePrevItem();
      }
    }
  };

  return (
    <div
      className="carousel-container relative h-32 w-auto sm:h-40 md:h-52"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={divRef}
    >
      {items.map((item, index) => (
        <CarouselItem key={index} index={index} activeIndex={activeIndex}>
          {item}
        </CarouselItem>
      ))}
    </div>
  );
}
