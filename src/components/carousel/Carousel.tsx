import React, { useState, useRef } from 'react';
import CarouselItem from './CarouselItem';

export interface CarouselProps {
  items: React.ReactNode[];
}

export default function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const startX = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleNextItem() {
    setActiveIndex((prev) => (prev + 1 < items.length ? prev + 1 : 0)); // Reset to 0 when reaching the last slide
  }

  function handlePrevItem() {
    setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : items.length - 1)); // Go to last slide when clicking previous on the first slide
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

  const handleClick = (event: React.MouseEvent) => {
    const clickX = event.clientX;
    const width = window.innerWidth / 2;

    if (clickX > width) {
      handleNextItem(); // Click on the right
    } else {
      handlePrevItem(); // Click on the left
    }
  };

  return (
    <div
      className="carousel-container relative h-20 w-auto sm:h-40 md:h-52"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      {items.map((item, index) => (
        <CarouselItem key={index} index={index} activeIndex={activeIndex}>
          {item}
        </CarouselItem>
      ))}
    </div>
  );
}