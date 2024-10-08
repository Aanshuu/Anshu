import React from 'react';

export interface CarouselItemProps {
  index: number;
  activeIndex: number;
  children?: React.ReactNode;
}

export default function CarouselItem({ index, activeIndex, children }: CarouselItemProps) {
  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProperties = `
    rotateY(calc(${offset} * 55deg))
    scaleY(calc(1 + ${absOffset} * -0.5))
    translateX(calc(${direction} * -3.5rem))
    translateZ(calc(${absOffset} * -35rem))
  `;

  const cssOpacity = `${Math.abs(index - activeIndex) >= 2 ? '0' : '1'}`;
  const cssDisplay = `${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'}`;


  // const cssDisplay = 'block'; // Temporary for debugging purposes


  return (
    <div
      className="absolute h-full w-full cursor-pointer overflow-hidden rounded-3xl drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-700 ease-in-out"
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

// import React from 'react';

// export interface CarouselItemProps {
//   index: number;
//   activeIndex: number;
//   itemsLength: number; // Add total number of items
//   children?: React.ReactNode;
// }

// export default function CarouselItem({
//   index,
//   activeIndex,
//   itemsLength,
//   children,
// }: CarouselItemProps) {
//   // Calculate the previous and next indices for looping
//   const prevIndex = (activeIndex - 1 + itemsLength) % itemsLength;
//   const nextIndex = (activeIndex + 1) % itemsLength;

//   let offset = 0;
//   let opacity = 0;
//   let zIndex = 1;
//   let scale = 0.8;

//   // Determine the position of the slide relative to the activeIndex
//   if (index === activeIndex) {
//     // Main slide
//     offset = 0;
//     opacity = 1;
//     zIndex = 100;
//     scale = 1;
//   } else if (index === prevIndex) {
//     // Slide to the left
//     offset = -30; // adjust this value for how far left it should go
//     opacity = 1;
//     zIndex = 50;
//     scale = 0.9; // slightly smaller than the active slide
//   } else if (index === nextIndex) {
//     // Slide to the right
//     offset = 30; // adjust this value for how far right it should go
//     opacity = 1;
//     zIndex = 50;
//     scale = 0.9; // slightly smaller than the active slide
//   } else {
//     // Hidden slides
//     offset = 0;
//     opacity = 0;
//     zIndex = 1;
//     scale = 0.8; // hidden and smaller
//   }

//   return (
//     <div
//       className="absolute h-full w-full cursor-pointer transition-all duration-500 ease-in-out"
//       style={{
//         transform: `translateX(${offset}%) scale(${scale})`, // move left/right and scale
//         opacity: opacity,
//         zIndex: zIndex,
//       }}
//     >
//       {children}
//     </div>
//   );
// }
